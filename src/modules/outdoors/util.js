import { rollOnTable } from "../../util/common";
import config from "./config";
import climateCategories from "./data/climateCategories";
import seasonsByClimateCategory from "./data/seasonsByClimateCategory";

/**
 * getWeatherParametersOfCurrentDay() uses the other utility functions here to generate the parameters
 * for what kind of weather you should generate on a given day.
 *
 * It takes a dayOfYear, a terrainType (from /data/terrainTypes.js), a lattitude, isCoastal boolean flag,
 * and an optional climateCategory (if no climateCategory is provided, it will choose randomly
 * in those rare cases where two options are returned).
 *
 * This final parameters object will be returned so that some other part of the program can
 * generate the actual weather.
 */

function getWeatherParametersOfCurrentDay(
	dayOfYear,
	terrainType,
	lattitude,
	isCoastal,
	climateCategory // optional
) {
	// get climate category, if not given one
	if (!climateCategory) {
		climateCategory = rollOnTable(
			getClimateCategory(terrainType, lattitude, isCoastal)
		);
	}

	// get precipitation chance
	const season = getSeasonAndPrecipitationWindow(climateCategory, dayOfYear);

	return season;
}

function getClimateCategory(terrainType, lattitude, isCoastal) {
	return climateCategories.filter((c) => {
		return (
			c.terrainType === terrainType &&
			c.lattitudeMin <= lattitude &&
			c.lattitudeMax >= lattitude &&
			(c.isCoastal === isCoastal || c.isCoastal === "all")
		);
	})[0].climateCategory;
}

function getSeasonAndPrecipitationWindow(climateCategory, dayOfYear) {
	// check dayOfYear is valid
	if (dayOfYear > getDaysPerYear() || dayOfYear < 1) {
		throw new Error("Invalid day of year");
	}

	// get the climate object which contains all season and precipitation windows
	const climateObj = seasonsByClimateCategory.filter(
		({ climateCategoryName }) => {
			return climateCategoryName === climateCategory;
		}
	)[0];

	// filter the correct season
	const season = climateObj.seasons.filter((season) => {
		const { firstDay, lastDay } = season;
		if (!lastDay) return true;
		if (firstDay > lastDay) {
			return (
				(dayOfYear <= lastDay && dayOfYear >= 1) ||
				(dayOfYear >= firstDay && dayOfYear <= getDaysPerYear())
			);
		} else {
			return dayOfYear >= firstDay && dayOfYear < lastDay;
		}
	})[0];

	// filter the correct precipitation window
	const precipitationWindow = climateObj.precipitationWindows.filter(
		(window) => {
			const { firstDay, lastDay } = window;
			if (!lastDay) return true;
			if (firstDay > lastDay) {
				return (
					(dayOfYear <= lastDay && dayOfYear >= 1) ||
					(dayOfYear >= firstDay && dayOfYear <= getDaysPerYear())
				);
			} else {
				return dayOfYear >= firstDay && dayOfYear < lastDay;
			}
		}
	)[0];

	return { season, precipitationWindow };
}

function getDaysPerYear() {
	return config.monthsOfTheYear.reduce(
		(accumulator, month) => (accumulator += month.numOfDays),
		0
	);
}

export {
	getWeatherParametersOfCurrentDay,
	getClimateCategory,
	getDaysPerYear,
	getSeasonAndPrecipitationWindow
};
