import { biasedSelection } from "../../util/common";
import climates from "./data/climateLookup";
import windTypes from "./data/windTypes";

/* API */

export const generateWeather = (
	terrainType,
	latitude,
	isCoastal,
	dayOfYear,
	previousWeather
) => {
	console.log(terrainType, latitude, isCoastal, dayOfYear, previousWeather);
	// get climate
	// generate temperature
	// 40% chance to repeat previous weather, if provided
	// if not:
	// 		roll precipitation chance
	// 		generate precipitation, cloud, and wind factor
	// 		generate actual wind, if you haven't already repeated yesterday's
};

// module.exports = { generateWeather };

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
