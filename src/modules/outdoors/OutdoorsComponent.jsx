import { getConditions, getWeatherParametersOfCurrentDay } from "./util";

const OutdoorsComponent = () => {
	/* Where the party happens to be */
	// set these variables to describe the time of year
	const dayOfYear = 91; // 1st April
	// set these variables to describe the party's location
	const terrainType = "Desert";
	const isCoastal = false;
	const lattitude = 60;
	// calculate climate category
	const getClimateCategory = "Desert"; // having called a function to look this up from the data tables
	// calculate temperature
	const isNight = false; // this comes from the clock
	const isStrongWind = false; // not sure how this is determined
	const temperature = 25; // having called a function to calculate

	return (
		<>
			<button
				onClick={() => {
					console.log(getConditions());
				}}>
				get conditions
			</button>
			<button
				onClick={() =>
					console.log(
						getWeatherParametersOfCurrentDay(
							300,
							"grassland",
							30,
							false
						)
					)
				}>
				get climate
			</button>
		</>
	);
};

export default OutdoorsComponent;
