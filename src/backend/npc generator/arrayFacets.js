const tables = require("../table roller/tables");
const { rollOnTable } = require("../table roller/tableUtils");
const getStats = require("./stats");

exports.getNumOfCharacterisations = (num) => {
	return rollOnTable(Object.values(tables.appearance), num);
};
exports.getNumOfRelationships = (num) => {
	// get num of dispositions
	const dispositions = rollOnTable(tables.customTables.disposition, num);

	// get num - 1 relators, because the PCs are always the first relators
	const relators = rollOnTable(tables.customTables.relator, num - 1);

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
	return rollOnTable(tables.customTables.assets, num);
};
exports.getNumOfLimits = (num) => {
	return rollOnTable(tables.customTables.limits, num);
};
exports.getNumOfApproaches = (num) => {
	return rollOnTable(tables.customTables.approach, num);
};
