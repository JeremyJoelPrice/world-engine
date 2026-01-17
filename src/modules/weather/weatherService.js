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
		weather.daylight = previousWeather.daylight;
		console.log("repeat previous weather");
	} else {
		// generate cloud, precipitation & wind
		const { cloud, precipitation, windFactor } = getSky(
			Math.random() <=
				getPrecipitationChance(dayOfYear, climate.precipPeriods),
			weather.temperature
		);

		weather.cloud = cloud;
		weather.precipitation = precipitation;
		weather.wind = getWind(roll(windFactor).value);
	}

	weather.daylight = getSunriseSunset(latitude, dayOfYear);

	return weather;
};

export const isValidClimate = (terrainType, latitude, isCoastal) => {
	try {
		getClimate(terrainType, latitude, isCoastal);
		return true;
	} catch (e) {
		return false;
	}
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
		console.log("Climate", climate);
		return climate;
	} catch (TypeError) {
		throw new Error("no valid climate");
	}
}

export function getTemperature(climate, dayOfYear) {
	let { high, low } = getAverageTemperatureOfGivenDay(climate, dayOfYear);
	const diurnal = high - low;

	high = high + roll("2d12-13").value;
	low = Math.min(low + roll("2d8-9").value, high - diurnal);

	return {
		high,
		low
	};
}

export function getAverageTemperatureOfGivenDay(climate, dayOfYear) {
	// If climate has only one season, return that season's temperature
	if (Object.keys(climate.seasons).length === 1) {
		return Object.values(climate.seasons)[0];
	}

	// Define season durations with their first days
	const seasonDurations = [
		{ name: "spring", firstDay: 60 },
		{ name: "summer", firstDay: 152 },
		{ name: "autumn", firstDay: 244 },
		{ name: "winter", firstDay: 335 }
	];

	// Determine current season based on day of the year
	const currentSeason =
		[...seasonDurations].reverse().find((s) => dayOfYear >= s.firstDay)
			?.name || "winter";

	// Return early if current season explicitely exists in climate object
	if (climate.seasons[currentSeason]) {
		return climate.seasons[currentSeason];
	} else {
		// Get neighbouring seasons
		const currentIndex = seasonDurations.findIndex(
			(s) => s.name === currentSeason
		);
		const prevSeason =
			seasonDurations[
				(currentIndex - 1 + seasonDurations.length) %
					seasonDurations.length
			].name;
		const nextSeason =
			seasonDurations[(currentIndex + 1) % seasonDurations.length].name;

		// Helper: linear interpolation between two values
		const lerp = (start, end, t) => start + (end - start) * t;

		const prevSeasonObj =
			climate.seasons[prevSeason] || climate.seasons[nextSeason];
		const nextSeasonObj =
			climate.seasons[nextSeason] || climate.seasons[prevSeason];

		// Determine transition boundaries
		const lastDayOfPrevTemp = seasonDurations[currentIndex].firstDay - 1;
		const firstDayOfNextTemp =
			seasonDurations[(currentIndex + 1) % seasonDurations.length]
				.firstDay;

		// Handle wrap-around at year-end
		const daysInTransition =
			firstDayOfNextTemp > lastDayOfPrevTemp
				? firstDayOfNextTemp - lastDayOfPrevTemp
				: firstDayOfNextTemp + 365 - lastDayOfPrevTemp;

		// Progress through the transition [0..1]
		const dayOfTransition =
			(dayOfYear -
				lastDayOfPrevTemp +
				(dayOfYear < lastDayOfPrevTemp ? 365 : 0)) /
			daysInTransition;

		// Interpolate temperatures
		const high = Math.round(
			lerp(prevSeasonObj.high, nextSeasonObj.high, dayOfTransition)
		);
		const low = Math.round(
			lerp(prevSeasonObj.low, nextSeasonObj.low, dayOfTransition)
		);

		return { high: high || 0, low: low || 0 };
	}
}

export function getPrecipitationChance(dayOfYear, precipPeriods) {
	const period =
		[...precipPeriods].reverse().find((p) => dayOfYear >= p.firstDay) ||
		precipPeriods[precipPeriods.length - 1];

	return period.percentChance;
}

export function getSky(willItPrecipitate, currentTemp) {
	let sky;
	// if no precipitation, bias toward clearer skies
	if (!willItPrecipitate) {
		sky = Object.assign({}, biasedSelection(skyTable, 0, 0.2));
		sky.precipitation = "none";
		return sky;
	}

	sky = rollOnTable(skyTable);
	sky.precipitation =
		Math.trunc((currentTemp.high + currentTemp.low) / 2) <= 0
			? sky.snow
			: sky.rain;

	// chance of fog
	if (
		sky.precipitation === "light mist" &&
		currentTemp?.high > 0 &&
		Math.random() < 0.4
	) {
		sky.precipitation = "fog";
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
			diceResult >= diceMinResult && diceResult <= diceMaxResult
	);

	return {
		type: wind,
		description,
		speed: Math.round(Math.random() * (mphMax - mphMin) + mphMin),
		direction: biasedSelection(
			["SW", "W", "NW", "N", "NE", "E", "SE", "S"],
			0,
			0.4
		)
	};
}

function getSunriseSunset(latitude, dayOfYear) {
	// this function returns sunrise/sunset to the nearest hour,
	// assuming solar noon is 12pm
	const degreesPerRadian = 180 / Math.PI;
	const radiansPerDegree = Math.PI / 180;
	const springEquinoxDayOfYear = 80;
	const daysSinceSpringEquinox =
		(dayOfYear - springEquinoxDayOfYear + 365) % 365;
	const solarDeclination =
		23.45 *
		Math.sin(((360 * daysSinceSpringEquinox) / 365) * radiansPerDegree);
	const solarHourAngle =
		Math.acos(
			Math.max(
				Math.min(
					-Math.tan(solarDeclination * radiansPerDegree) *
						Math.tan(latitude * radiansPerDegree),
					1.0
				),
				-1.0
			)
		) * degreesPerRadian;

	/**
	 * earth rotates at 15º/h
	 * solarHourAngle / 15º = hours from sunrise to noon,
	 * and therefore hours from noon to sunset
	 */
	const sunrise = Math.round(12 - solarHourAngle / 15);
	const sunset = Math.round(12 + solarHourAngle / 15);

	return { sunrise, sunset };
}
