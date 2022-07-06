exports.rollOnTable = (table, numOfRolls = 1) => {
	if (numOfRolls === 1) return recursivelyGetRandomElement(table);

	const results = [];

	do {
		const newEntry = recursivelyGetRandomElement(table);
		if (!results.includes(newEntry) || results.length === table.length) {
			results.push(newEntry);
		}
	} while (results.length < numOfRolls);

	return results;
};

// returns random results from a given table.
const getRandomElement = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};

// for nested tables
const recursivelyGetRandomElement = (e) => {
	return Array.isArray(e)
		? recursivelyGetRandomElement(getRandomElement(e))
		: e;
};
