import { biasedSelection } from "../../../util/common";
import climates from "../data/climatesByTerrain";
import seasonsAndPrecipByClimate from "../data/seasonsAndPrecipByClimate";
import skyTable from "../data/skyTable";
import windTypes from "../data/windTypes";

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

function getSeasonsAndPrecipByClimate(climate) {
	const { seasons, precipPeriods } = seasonsAndPrecipByClimate.filter(
		({ climateName }) => climateName === climate
	)[0];
	return JSON.parse(JSON.stringify({ seasons, precipPeriods }));
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

function getWind(diceResult) {
	return windTypes.filter(
		({ diceMinResult, diceMaxResult }) =>
			diceMinResult === diceResult || diceMaxResult === diceResult
	)[0];
}

export {
	getClimate,
	getCurrentPrecipChance,
	getCurrentSeason,
	getCurrentSky,
	getSeasonsAndPrecipByClimate,
	getWind
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
	if (rangeStart > rangeEnd) {
		return (
			(n <= rangeEnd && n >= 1) ||
			(n >= rangeStart && n <= getDaysPerYear())
		);
	} else {
		return n >= rangeStart && n <= rangeEnd;
	}
}
