import { biasedSelection, rollOnTable } from "../../../util/common";
import climateNamesByTerrain from "../data/climateNamesByTerrain";
import climates from "../data/climates";
import skyTable from "../data/skyTable";
import windTypes from "../data/windTypes";
import roll from "../../../util/roll";
import config from "../config";

function getClimateName(terrainType, latitude, isCoastal) {
	const climateObj = climateNamesByTerrain.filter((c) => {
		return (
			c.terrainType === terrainType &&
			c.latitudeMin <= latitude &&
			c.latitudeMax >= latitude &&
			(c.isCoastal === isCoastal || c.isCoastal === "all")
		);
	})[0];

	if (!climateObj) {
		throw new Error("no valid climate");
	} else {
		return climateObj.climate;
	}
}

function getClimateByName(climateName) {
	const climate = climates.filter(({ name }) => name === climateName)[0];
	return JSON.parse(JSON.stringify(climate));
}

function getCurrentPrecipChance(dayOfYear, precipPeriods) {
	const period = precipPeriods.filter(({ firstDay, lastDay }) =>
		isWithinRange(dayOfYear, firstDay, lastDay)
	)[0];
	return period.percentChance;
}

function getCurrentSky(precipChance, currentSky, currentTemp) {
	// 40% chance to repeat the previous sky
	if (currentSky) {
		if (Math.random() <= 0.4) {
			return currentSky;
		}
	}

	let sky;
	// if no precipitation, bias toward clearer skies
	if (Math.random() > precipChance / 100) {
		sky = Object.assign({}, biasedSelection(skyTable, 0, 0.2));
		sky.rain = "none";
		sky.snow = "none";
		return sky;
	} else {
		// if there is precipitation, choose randomly
		sky = rollOnTable(skyTable);
	}

	// chance of fog
	if (
		sky.rain === "light mist" &&
		currentTemp &&
		currentTemp.high > 0 &&
		Math.random() < 0.4
	) {
		sky.rain = "fog";
	}

	// chance of thunderstorm
	if (sky.cloud === "dark rainclouds" && Math.random() < 0.4) {
		sky.cloud = "thunderstorm";
	}

	// chance of hail
	if (sky.cloud === "dark stormclouds" && Math.random() < 0.4) {
		sky.snow = "hail mixed with snow";
	}

	return sky;
}

function getWind(diceResult) {
	// get wind obj
	const { description, mphMin, mphMax, wind } = windTypes.filter(
		({ diceMinResult, diceMaxResult }) =>
			diceMinResult === diceResult || diceMaxResult === diceResult
	)[0];

	// determind speed
	const speed = Math.round(Math.random() * (mphMax - mphMin) + mphMin);

	// determine direction
	// this assumes northern hemisphere
	const direction = biasedSelection(
		["SW", "W", "NW", "N", "NE", "E", "SE", "S"],
		0,
		0.4
	);

	return JSON.parse(JSON.stringify({ wind, description, speed, direction }));
}

function getAverageDailyTemperature(climate, dayOfYear) {
	// if climate has only 1 season, return that season
	if (Object.keys(climate.seasons).length === 1) {
		return climate.seasons.summer;
	}

	// find which season today is in
	const seasonDurations = [
		{ name: "spring", firstDay: 60 },
		{ name: "summer", firstDay: 152 },
		{ name: "autumn", firstDay: 244 },
		{ name: "winter", firstDay: 335 }
	];
	let currentSeason = "winter";
	for (let i = 0; i < seasonDurations.length; i++) {
		if (dayOfYear >= seasonDurations[i].firstDay) {
			currentSeason = seasonDurations[i].name;
		}
	}

	// calculate temp if it's not specified
	if (!climate.seasons[currentSeason]) {
		// get neighbouring seasons
		let neighbours;

		switch (currentSeason) {
			case "spring":
				neighbours = ["winter", "summer"];
				break;
			case "summer":
				neighbours = ["spring", "autumn"];
				break;
			case "autumn":
				neighbours = ["summer", "winter"];
				break;
			case "winter":
			default:
				neighbours = ["autumn", "spring"];
				break;
		}

		// get starting temp
		const prevHigh = climate.seasons[neighbours[0]].high;
		const prevLow = climate.seasons[neighbours[0]].low;
		// get ending temp
		const nextHigh = climate.seasons[neighbours[1]].high;
		const nextLow = climate.seasons[neighbours[1]].low;
		// calulate step size
		const lastDayOfPrevTemp =
			seasonDurations.filter(({ name }) => name === currentSeason)[0]
				.firstDay - 1;
		const firstDayOfNextTemp = seasonDurations.filter(
			({ name }) => name === neighbours[1]
		)[0].firstDay;

		const highStepSize =
			(nextHigh - prevHigh) / (firstDayOfNextTemp - lastDayOfPrevTemp);
		const lowStepSize =
			(nextLow - prevLow) / (firstDayOfNextTemp - lastDayOfPrevTemp);

		// apply step size * days since start temp
		const daysSincePreviousSeason = dayOfYear - lastDayOfPrevTemp;
		const high = Math.round(
			prevHigh + daysSincePreviousSeason * highStepSize
		);
		const low = Math.round(prevLow + daysSincePreviousSeason * lowStepSize);

		return {
			high: high === 0 ? 0 : high,
			low: low === 0 ? 0 : low
		};
	}

	return climate.seasons[currentSeason];
}

function getCurrentTemperature(dailyAverageTemp) {
	let { high, low } = dailyAverageTemp;
	const diurnal = high - low;
	high = high + roll("2d12-13").value;
	low = diurnal + roll("2d8-9").value;

	if (low >= high) {
		low = high - diurnal;
	}

	return {
		high,
		low
	};
}

function getDayOfYearFromMonthDay(month, day) {
	// for each month
	// check if it's the current
	// if so, add day to dayOfYear and return
	// if not, add month.numOfDays to dayOfYear, and continue
	let dayOfYear = 0;
	for (let i = 0; i < config.monthsOfTheYear.length; i++) {
		const cursorMonth = config.monthsOfTheYear[i];
		if (cursorMonth.name === month) {
			dayOfYear += day;
			return dayOfYear;
		} else {
			dayOfYear += cursorMonth.numOfDays;
			continue;
		}
	}
}

function getMonthAndDayFromDayOfYear(dayOfYear) {
	const result = {};
	for (let i = 0; i < config.monthsOfTheYear.length; i++) {
		const currentMonth = config.monthsOfTheYear[i];
		if (currentMonth.numOfDays >= dayOfYear) {
			result.monthName = currentMonth.name;
			result.dayNum = dayOfYear;
			break;
		} else {
			dayOfYear -= currentMonth.numOfDays;
		}
	}
	return result;
}

export {
	getClimateName,
	getClimateByName,
	getCurrentPrecipChance,
	getCurrentSky,
	getWind,
	getAverageDailyTemperature,
	getCurrentTemperature,
	getDayOfYearFromMonthDay,
	getMonthAndDayFromDayOfYear
};

/**
 * Generic helper functions
 */

function getDaysPerYear() {
	return 365; // hardcoded because custom calendars are not yet supported
}

// takes a number n, and returns whether it is within the rangeStart and rangeEnd values inclusive.
// if rangeStart is greater than rangeEnd, returns whether it is outside the range
// if no rangeEnd is given, infinite range is assumed and the function returns true
// (it is assumed that there is a maximum value, after which the range wraps back around to 1)
function isWithinRange(n, rangeStart, rangeEnd) {
	if (!rangeEnd) return true;
	if (rangeStart > rangeEnd) {
		return (
			(n <= rangeEnd && n >= 1) ||
			(n >= rangeStart && n <= getDaysPerYear())
		);
	} else {
		return n >= rangeStart && n <= rangeEnd;
	}
}
