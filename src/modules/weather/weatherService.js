import { biasedSelection, rollOnTable } from "../../util/common";
import roll from "../../util/roll";
import climateLookup from "./data/climateLookup";
import latitudeBands from "./data/latitudeBands";
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
		// console.log("repeat previous weather");
	} else {
		weather.precipitation = getPrecipitation(
			climate,
			dayOfYear,
			weather.temperature.high
		);
		weather.cloud = getCloud(weather.precipitation);
		weather.wind = getWind(weather.cloud);
	}

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

export const getLatitudeBand = (latitude) => {
	let latitudeBand;

	for (const { name, latitudeMax } of [...latitudeBands].reverse()) {
		if (latitude <= latitudeMax) latitudeBand = name;
	}

	return latitudeBand;
};

/* utility functions */

export function getClimate(terrainType, latitude, isCoastal) {
	const latitudeBand = getLatitudeBand(latitude);
	console.log(terrainType, isCoastal, `${latitudeBand} (${latitude})`);
	const climate = climateLookup?.[terrainType]?.[isCoastal]?.[latitudeBand];
	if (!climate) throw new Error("no valid climate");
	console.log("Climate", climate);
	return climate;
}

export function getTemperature(climate, dayOfYear) {
	let { high, low } = getAverageTemperatureOfGivenDay(climate, dayOfYear);
	const diurnal = high - low;

	high = high + roll("2d6-7").value;
	low = Math.min(low + roll("2d4-5").value, high - diurnal);

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
		let low = Math.round(
			lerp(prevSeasonObj.low, nextSeasonObj.low, dayOfTransition)
		);

		low = low === -0 ? 0 : low;

		return { high: high, low: low };
	}
}

function lerp(start, end, t) {
	return start + (end - start) * t;
}

export function getPrecipitationChance(dayOfYear, precipPeriods) {
	const period =
		[...precipPeriods].reverse().find((p) => dayOfYear >= p.firstDay) ||
		precipPeriods[precipPeriods.length - 1];

	return period.percentChance;
}

export function getPrecipitation(climate, dayOfYear, currentTemp) {
	const { precipPeriods } = climate;

	const { percentChance } =
		[...precipPeriods].reverse().find((p) => dayOfYear >= p.firstDay) ||
		precipPeriods[precipPeriods.length - 1];

	if (Math.random() > percentChance) return "none";

	const { rain, snow } = rollOnTable(skyTable);

	return currentTemp <= 0 ? snow : rain;
}

export function getCloud(precipitation) {
	if (precipitation === "none")
		return biasedSelection(skyTable, 0, 0.2).cloud;

	for (const sky of skyTable) {
		if (sky.rain === precipitation || sky.snow === precipitation) {
			return sky.cloud;
		}
	}
	return skyTable.find(
		(s) => s.rain === precipitation || s.snow === precipitation
	).cloud;
}

export function getWind(cloud) {
	console.log("cloud", cloud);
	console.log(skyTable.find((s) => s.cloud === cloud));
	const { windTypeFactor } = skyTable.find((s) => s.cloud === cloud);

	const diceResult = roll(windTypeFactor).value;

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

export function getSunriseSunset(latitude, dayOfYear) {
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
