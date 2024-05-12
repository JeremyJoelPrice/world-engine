/* Returns a unique key for lists in React */
const uid = () => {
	return parseInt(Math.random() * 10000000);
};

/**
 * Returns one or more unique (if possible) results from an array
 *
 * If there are nested arrays, it continues rolling until it finds a non-array element
 */
const rollOnTable = (table, numOfRolls = 1) => {
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

/* Extends Jest to use multiple alternative expect conditions */

const expect_or = (...tests) => {
	try {
		tests.shift()();
	} catch (e) {
		if (tests.length) expect_or(...tests);
		else throw e;
	}
};

export { expect_or, rollOnTable, uid };
