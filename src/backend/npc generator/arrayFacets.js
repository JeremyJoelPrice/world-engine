const tables = require("../table roller/tables");
const { getRandomElement } = require("../table roller/tableUtils");
const getStats = require("./stats");

exports.getNumOfCharacterisations = (num) => {
	return getNumOfElements(tables.appearance, num);
};
exports.getNumOfRelationships = (num) => {
	// get num of dispositions
	const dispositions = getNumOfElements(tables.customTables.disposition, num);

	// get num - 1 relators, because the PCs are always the first relators
	const relators = getNumOfElements(tables.customTables.relator, num - 1);

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
	return getNumOfElements(tables.customTables.assets, num);
};
exports.getNumOfLimits = (num) => {
	return getNumOfElements(tables.customTables.limits, num);
};
exports.getNumOfApproaches = (num) => {
	return getNumOfElements(tables.customTables.approach, num);
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
