import { biasedSelection, rollOnTable } from "../../../util/common";
import roll from "../../../util/roll";
import climates from "../data/climates";
import seasonsAndPrecipByClimate from "../data/seasonsAndPrecipByClimate";
import skyTable from "../data/skyTable";
import windTypes from "../data/windTypes";

/**
 * getSeasonAndPrecipitationPeriod() uses the other utility functions here to generate the parameters
 * for what kind of weather you should generate on a given day.
 *
 * It takes a dayOfYear, a terrainType (from /data/terrainTypes.js), a lattitude, isCoastal boolean flag,
 * and an optional climate (if no climate is provided, it will choose randomly
 * in those rare cases where two options are returned).
 *
 * This final parameters object will be returned so that some other part of the program can
 * generate the actual weather.
 */

function getSeasonsAndPrecipByClimate(climate) {
	const { seasons, precipPeriods } = seasonsAndPrecipByClimate.filter(
		({ climateName }) => climateName === climate
	)[0];
	return JSON.parse(JSON.stringify({ seasons, precipPeriods }));
}

function getClimate(terrainType, lattitude, isCoastal) {
	return climates.filter((c) => {
		return (
			c.terrainType === terrainType &&
			c.lattitudeMin <= lattitude &&
			c.lattitudeMax >= lattitude &&
			(c.isCoastal === isCoastal || c.isCoastal === "all")
		);
	})[0].climate;
}

function getCurrentSeason(dayOfYear, seasons) {
	return seasons.filter(({ firstDay, lastDay }) =>
		isWithinRange(dayOfYear, firstDay, lastDay)
	)[0];
}

function getCurrentPrecipChance(dayOfYear, precipPeriods) {
	const period = precipPeriods.filter(({ firstDay, lastDay }) =>
		isWithinRange(dayOfYear, firstDay, lastDay)
	)[0];
	return period.percentChance;
}

function getCurrentSky(precipChance, currentSky) {
	if (currentSky) {
		if (Math.random() <= 0.4) return currentSky;
	}

	const sky = Object.assign({}, biasedSelection(skyTable, 0, 0.1));

	if (Math.random() > precipChance / 100) {
		sky.rain = "none";
		sky.snow = "none";
	}

	return sky;
}

function getDaysPerYear() {
	// return config.monthsOfTheYear.reduce(
	// 	(accumulator, month) => (accumulator += month.numOfDays),
	// 	0
	// );
	return 365; // hardcoded because custom calendars are not yet supported
}

/**
 * getSkyAndWind() returns wind and sky (rain, snow, cloud) conditions for the current day.
 */

function getSkyAndWind() {
	const skyAndWind = {};
	skyAndWind.sky = rollOnTable(skyTable);

	const windTypeIndex = roll(skyAndWind.sky.windTypeFactor).value;
	const windType = rollOnTable(
		windTypes.filter(
			({ diceMinResult, diceMaxResult }) =>
				diceMinResult === windTypeIndex ||
				diceMaxResult === windTypeIndex
		)
	);
	skyAndWind.wind = windType;
	return skyAndWind;
}

export {
	getClimate,
	getCurrentPrecipChance,
	getCurrentSeason,
	getCurrentSky,
	getSkyAndWind,
	getDaysPerYear,
	getSeasonsAndPrecipByClimate
};

/**
 * Generic helper functions
 */

// takes a number n, and returns whether it is within the rangeStart and rangeEnd values inclusive.
// if rangeStart is greater than rangeEnd, returns whether it is outside the range
// if no rangeEnd is given, infinite range is assumed and the function returns true
// (it is assumed that there is a maximum value, after which the range wraps back around to 1)
function isWithinRange(n, rangeStart, rangeEnd) {
	if (rangeStart > rangeEnd) {
		return (
			(n <= rangeEnd && n >= 1) ||
			(n >= rangeStart && n <= getDaysPerYear())
		);
	} else {
		return n >= rangeStart && n <= rangeEnd;
	}
}
