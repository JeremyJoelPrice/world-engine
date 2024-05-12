import { useEffect, useState } from "react";
import OutdoorsInterface from "./OutdoorsInterface";
import config from "./config";
import { rollOnTable } from "../../util/common";
import roll from "../../util/roll";
import windTypes from "./data/windTypes";
import skyTable from "./data/skyTable";

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
		<button
			onClick={() => {
				getConditions();
			}}>
			get conditions
		</button>
	);
};

export default OutdoorsComponent;

/* Utility Funcitons */
function getConditions() {
	const conditions = {};
	conditions.sky = rollOnTable(skyTable);

	const windTypeIndex = roll(conditions.sky.windTypeFactor).value;
	const windType = rollOnTable(
		windTypes.filter(
			({ diceMinResult, diceMaxResult }) =>
				diceMinResult === windTypeIndex ||
				diceMaxResult === windTypeIndex
		)
	);
	conditions.wind = windType;

	// optionally prune unneeded data
	delete conditions.sky.windTypeFactor;
	delete conditions.wind.diceMaxResult;
	delete conditions.wind.diceMinResult;

	console.log(conditions);
	return conditions;
}
