const { recursivelyGetRandomElement } = require("../table roller/tableUtils");
const { customTables } = require("../table roller/tables");

exports.rollForPointsOfInterest = (numOfRolls) => {
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

const NUMBER_OF_HEXES_TO_ROLL_FOR = 9;

console.log(this.rollForPointsOfInterest(NUMBER_OF_HEXES_TO_ROLL_FOR));
