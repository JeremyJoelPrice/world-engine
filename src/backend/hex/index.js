const { recursivelyGetRandomElement } = require("../table roller/tableUtils");
const { customTables } = require("../table roller/tables");

export const rollForPointOfInterest = (numOfRolls) => {
	const results = [];

	for (let i = 0; i < numOfRolls; i++) {
		const roll = Math.floor(Math.random() * 4 + 1);

		results.push(roll === 1 ? getPointOfInterest() : "empty hex");
	}
	return results;
};

function getPointOfInterest() {
	return recursivelyGetRandomElement(customTables.hexPointsOfInterest);
}
