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

/**
 * biasedSelect() returns a random element from an array,
 * but with a heavy bias towards the specific index.
 * Each neighbouring element has a lower probability.
 */

function biasedSelection(arr, stdDev = 1, targetIndex, prevIndex = null) {
	const n = arr.length;
	const probabilities = new Array(n);

	// Calculate individual biases
	let sum = 0;
	for (let i = 0; i < n; i++) {
		const targetBias = gaussian(i, targetIndex, stdDev);
		const prevBias =
			prevIndex !== null ? gaussian(i, prevIndex, stdDev) : 1;
		probabilities[i] = targetBias * prevBias; // Combine biases by multiplying
		sum += probabilities[i];
	}

	// Normalize probabilities
	for (let i = 0; i < n; i++) {
		probabilities[i] /= sum;
	}

	// Create a cumulative probability array
	const cumulativeProbabilities = new Array(n);
	cumulativeProbabilities[0] = probabilities[0];
	for (let i = 1; i < n; i++) {
		cumulativeProbabilities[i] =
			cumulativeProbabilities[i - 1] + probabilities[i];
	}

	// Generate a random number
	const randomValue = Math.random();

	// Select the element based on the random number
	for (let i = 0; i < n; i++) {
		if (randomValue < cumulativeProbabilities[i]) {
			return arr[i];
		}
	}

	// In case of rounding errors, return the last element
	return arr[n - 1];
}

function gaussian(x, mean, stdDev) {
	const exponent = -((x - mean) ** 2) / (2 * stdDev ** 2);
	return Math.exp(exponent) / (stdDev * Math.sqrt(2 * Math.PI));
}

export { biasedSelection, expect_or, rollOnTable, uid };
