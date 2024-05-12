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

	const season = getSeason(climateCategory, dayOfYear);

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

function getSeason(climateCategory, dayOfYear) {
	// check dayOfYear is valid
	if (dayOfYear > getDaysPerYear() || dayOfYear < 1) {
		throw new Error("Invalid day of year");
	}
	// console.log(climateCategory);
	// console.log(dayOfYear);
	const climateObj = seasonsByClimateCategory.filter(
		({ climateCategoryName }) => {
			return climateCategoryName === climateCategory;
		}
	)[0];
	const season = climateObj.seasons.filter((climate) => {
		const { firstDay, lastDay } = climate;
		if (!lastDay) return true;
		if (firstDay > lastDay) {
			// console.log(climate);
			// console.log(
			// 	(dayOfYear <= lastDay && dayOfYear > 1) ||
			// 		(dayOfYear >= firstDay && dayOfYear < getDaysPerYear())
			// );
			return (
				(dayOfYear <= lastDay && dayOfYear >= 1) ||
				(dayOfYear >= firstDay && dayOfYear <= getDaysPerYear())
			);
		} else {
			// console.log(climate);
			// console.log(dayOfYear >= firstDay && dayOfYear < lastDay);
			return dayOfYear >= firstDay && dayOfYear < lastDay;
		}
	})[0];

	return season;
}

function getDaysPerYear() {
	return config.monthsOfTheYear.reduce(
		(accumulator, month) => (accumulator += month.numOfDays),
		0
	);
}

export { getClimate, getClimateCategory, getDaysPerYear, getSeason };
