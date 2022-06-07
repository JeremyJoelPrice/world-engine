exports.generateIndex = (range) => {
	// generate numbers according to a power law
	const rand = Math.random();

	let result = 1;
	// return Math.floor(Math.random() * range + 1)
	for (let i = 0; i < range; i++) {
		// for each possibility, see if the result of Math.random is less than 1 / that possibility
		if (rand < 1 / Math.pow(2, i)) result = i;
	}

	return result;
};
