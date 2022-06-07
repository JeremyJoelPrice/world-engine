// returns random results from a given table.
exports.getRandomElement = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};

// for nested tables
exports.recursivelyGetRandomElement = (e) => {
	return typeof e === "string"
		? e
		: this.recursivelyGetRandomElement(this.getRandomElement(e));
};
