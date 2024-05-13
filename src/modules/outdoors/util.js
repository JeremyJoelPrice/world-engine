import config from "./config";
import climateCategories from "./data/climateCategories";
import seasonsByClimateCategory from "./data/seasonsByClimateCategory";

function getClimate(dayOfYear, terrainType, lattitude, isCoastal) {
	// get climate category
	const climateCategory = getClimateCategory(
		terrainType,
		lattitude,
		isCoastal
	);

	const season = getSeasonAndPrecipitationWindow(climateCategory, dayOfYear);

	// get precipitation chance
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

	const climateObj = seasonsByClimateCategory.filter(
		({ climateCategoryName }) => {
			return climateCategoryName === climateCategory;
		}
	)[0];

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
	getClimate,
	getClimateCategory,
	getDaysPerYear,
	getSeasonAndPrecipitationWindow
};
