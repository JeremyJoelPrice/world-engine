// returns random results from a given table.
// does not repeat results, unless it runs out of unique table entries.
// exports = (table, numOfResults) => {
// 	const results = [];

// 	do {
// 		const index = Math.floor(Math.random() * table.length);
// 		if (!results.includes(index) || results.length >= table.length)
// 			results.push(index);
// 	} while (results.length < numOfResults);

// 	return results.map((e) => table[e]);
// };

exports.getRandomElement = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};