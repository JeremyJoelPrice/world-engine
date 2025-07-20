/* Returns a unique key for lists in React */
const uid = () => {
	return parseInt(Math.random() * 10000000);
};

/**
 * Returns one or more unique (if possible) results from an array
 *
 * If there are nested arrays, it continues rolling until it finds a non-array element
 * 
 * BUG: results.includes() will always return `false` if given an array of objects.
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

/**
 * biasedSelect() returns a random element from an array,
 * but with a heavy bias towards the specific index.
 * Each neighbouring element has a lower probability.
 */
function biasedSelection(array, biasIndex, biasStrength = 0.5) {
	if (!Array.isArray(array) || array.length === 0) {
		throw new Error("The first argument must be a non-empty array.");
	}
	if (
		typeof biasIndex !== "number" ||
		biasIndex < 0 ||
		biasIndex >= array.length
	) {
		throw new Error(
			"The bias index must be a valid index within the array."
		);
	}
	if (
		typeof biasStrength !== "number" ||
		biasStrength <= 0 ||
		biasStrength >= 1
	) {
		throw new Error(
			"The bias strength must be a number between 0 and 1 (exclusive)."
		);
	}

	const totalElements = array.length;

	// Calculate weights for each element based on distance from biasIndex and biasStrength
	const weights = array.map((_, index) => {
		return Math.pow(1 - biasStrength, Math.abs(index - biasIndex));
	});

	// Calculate the total weight
	const totalWeight = weights.reduce((acc, weight) => acc + weight, 0);

	// Calculate cumulative weights for weighted random selection
	const cumulativeWeights = [];
	weights.reduce((acc, weight, index) => {
		cumulativeWeights[index] = acc + weight;
		return cumulativeWeights[index];
	}, 0);

	// Get a random number between 0 and totalWeight
	const random = Math.random() * totalWeight;

	// Find the index based on the random number
	for (let i = 0; i < cumulativeWeights.length; i++) {
		if (random < cumulativeWeights[i]) {
			return array[i];
		}
	}

	// Fallback in case of rounding errors
	return array[totalElements - 1];
}

export { biasedSelection, expect_or, rollOnTable, uid };
