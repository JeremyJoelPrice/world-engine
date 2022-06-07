const npcTables = require("../table roller/tables/NPCs");
const { getRandomElement } = require("../table roller");
const getStats = require("./stats");

exports.getNumOfCharacterisations = (num) => {
	return getNumOfElements(npcTables.appearance, num);
};
exports.getNumOfRelationships = (num) => {
	// get num of dispositions
	const dispositions = getNumOfElements(
		npcTables.customTables.disposition,
		num
	);

	// get num - 1 relators, because the PCs are always the first relators
	const relators = getNumOfElements(npcTables.customTables.relator, num - 1);

	// in a results object, pair each disposition to a relator
	const results = [];

	for (let i = 0; i < dispositions.length; i++) {
		results[i] = !i
			? `${dispositions[i]} toward PCs`
			: `${dispositions[i]} toward ${relators[i - 1]}`;
	}

	return results;
};
exports.getNumOfAssets = (num) => {
	return getNumOfElements(npcTables.customTables.assets, num)
};
exports.getNumOfLimits = (num) => {
	return getNumOfElements(npcTables.customTables.limits, num);
};
exports.getNumOfApproaches = (num) => {
	return getNumOfElements(npcTables.customTables.approach, num);
};
function getNumOfElements(tablesObj, num = 2) {
	const results = [];

	do {
		// if tablesObj is an object containing many tables, pick a random table each time
		// if tablesObj is actually a table, then just use it normally
		const table = Array.isArray(tablesObj)
			? tablesObj
			: tablesObj[getRandomElement(Object.keys(tablesObj))];

		// roll on it
		const newEntry = getRandomElement(table);

		// ensure unique values
		if (!results.includes(newEntry)) {
			results.push(newEntry);
		}
	} while (results.length < num);

	return results;
}
