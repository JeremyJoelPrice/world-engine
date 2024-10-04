import { biasedSelection, rollOnTable } from "../../util/common";
import roll from "../../util/roll";
import climates from "./data/climateLookup";
import skyTable from "./data/skyTable";
import windTypes from "./data/windTypes";

/* API */

export const generateWeather = (
	terrainType,
	latitude,
	isCoastal,
	dayOfYear,
	previousWeather
) => {
	const weather = {};
	// get climate
	const climate = getClimate(terrainType, latitude, isCoastal);
	// generate temperature
	weather.temperature = getTemperature(climate, dayOfYear);
	// 40% chance to repeat previous weather, if provided
	if (previousWeather && Math.random() <= 0.4) {
		weather.cloud = previousWeather.cloud;
		weather.wind = previousWeather.wind;
		weather.precipitation = previousWeather.precipitation;
		return weather;
	}

	// determine if it will precipitate
	const willPrecipitate =
		Math.random() <=
		getPrecipitationChance(dayOfYear, climate.precipPeriods) / 100;

	// generate cloud, precipitation & wind
	const { cloud, precipitation, windFactor } = getSky(
		willPrecipitate,
		weather.temperature
	);
	weather.cloud = cloud;
	weather.precipitation = precipitation;
};

/* utility functions */

export function getClimate(terrainType, latitude, isCoastal) {
	try {
		const { climate } = climates.filter((c) => {
			return (
				c.terrainType === terrainType &&
				c.latitudeMin <= latitude &&
				c.latitudeMax >= latitude &&
				(c.isCoastal === isCoastal || c.isCoastal === "all")
			);
		})[0];
		return climate;
	} catch (TypeError) {
		throw new Error("no valid climate");
	}
}

export function getTemperature(climate, dayOfYear) {
	let { high, low } = getAverageTemperatureOfGivenDay(climate, dayOfYear);
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

export function getAverageTemperatureOfGivenDay(climate, dayOfYear) {
	// If climate has only one season, return that season's temperature
	if (Object.keys(climate.seasons).length === 1) {
		return climate.seasons.summer;
	}

	// Define season durations with their first days
	const seasonDurations = [
		{ name: "spring", firstDay: 60 },
		{ name: "summer", firstDay: 152 },
		{ name: "autumn", firstDay: 244 },
		{ name: "winter", firstDay: 335 }
	];

	// Determine current season based on day of the year
	const currentSeason = seasonDurations.reduce(
		(season, { name, firstDay }) => {
			return dayOfYear >= firstDay ? name : season;
		},
		"winter"
	);

	// Return temperatures if current season exists in climate
	if (climate.seasons[currentSeason]) {
		return climate.seasons[currentSeason];
	}

	// Identify neighboring seasons for interpolation
	const neighbors = {
		spring: ["winter", "summer"],
		summer: ["spring", "autumn"],
		autumn: ["summer", "winter"],
		winter: ["autumn", "spring"]
	}[currentSeason];

	// Get previous and next season's high/low temperatures
	const [prevSeason, nextSeason] = neighbors;
	const { high: prevHigh, low: prevLow } = climate.seasons[prevSeason];
	const { high: nextHigh, low: nextLow } = climate.seasons[nextSeason];

	// Calculate the days between seasons for interpolation
	const lastDayOfPrevTemp =
		seasonDurations.find(({ name }) => name === currentSeason).firstDay - 1;
	const firstDayOfNextTemp = seasonDurations.find(
		({ name }) => name === nextSeason
	).firstDay;

	// Calculate step sizes for high and low temperatures
	const daysInTransition = firstDayOfNextTemp - lastDayOfPrevTemp;
	const highStepSize = (nextHigh - prevHigh) / daysInTransition;
	const lowStepSize = (nextLow - prevLow) / daysInTransition;

	// Calculate high and low temperatures for the current day
	const daysSincePreviousSeason = dayOfYear - lastDayOfPrevTemp;
	const high = Math.round(prevHigh + daysSincePreviousSeason * highStepSize);
	const low = Math.round(prevLow + daysSincePreviousSeason * lowStepSize);

	// Return temperatures, ensuring they default to 0 if rounded to 0
	return { high: high || 0, low: low || 0 };
}

export function getPrecipitationChance(dayOfYear, precipPeriods) {
	const period = precipPeriods.filter(({ firstDay, lastDay }) =>
		isWithinRange(dayOfYear, firstDay, lastDay)
	)[0];
	return period.percentChance;
}

function isWithinRange(n, rangeStart, rangeEnd) {
	if (!rangeEnd) return true;
	if (rangeStart > rangeEnd) {
		return (
			// 365 as in days per year
			(n <= rangeEnd && n >= 1) || (n >= rangeStart && n <= 365)
		);
	} else {
		return n >= rangeStart && n <= rangeEnd;
	}
}

export function getSky(willPrecipitate, currentTemp) {
	let sky;
	// if no precipitation, bias toward clearer skies
	if (!willPrecipitate) {
		sky = Object.assign({}, biasedSelection(skyTable, 0, 0.2));
		sky.rain = "none";
		sky.snow = "none";
		return sky;
	}

	sky = rollOnTable(skyTable);

	// chance of fog
	if (
		sky.rain === "light mist" &&
		currentTemp?.high > 0 &&
		Math.random() < 0.4
	) {
		sky.rain = "fog";
	}

	// chance of thunderstorm or hail
	if (sky.cloud === "dark rainclouds" && Math.random() < 0.4) {
		sky.cloud = "thunderstorm";
	} else if (sky.cloud === "dark stormclouds" && Math.random() < 0.4) {
		sky.snow = "hail mixed with snow";
	}

	return sky;
}

export function getWind(diceResult) {
	// get wind obj
	const { description, mphMin, mphMax, wind } = windTypes.find(
		({ diceMinResult, diceMaxResult }) =>
			diceMinResult === diceResult || diceMaxResult === diceResult
	);

	return {
		wind,
		description,
		speed: Math.round(Math.random() * (mphMax - mphMin) + mphMin),
		direction: biasedSelection(
			["SW", "W", "NW", "N", "NE", "E", "SE", "S"],
			0,
			0.4
		)
	};
}
