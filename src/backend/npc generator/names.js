const { getRandomElement } = require("../table roller/tableUtils");
const tables = require("../table roller/tables");

module.exports = (sex, descent) => {
	// in case sex is given a default value other than 'male' or 'female', set the parameter randomly to either 'male' or 'female' for the sake of choosing a name list.
	if (sex !== "male" && sex !== "female")
		sex = getRandomElement(["male", "female"]);
	if (
		descent !== "norræn" &&
		descent !== "asculum" &&
		descent !== "woodlands"
	)
		descent = getRandomElement(["norræn", "woodlands", "asculum"]);

	switch (descent) {
		case "norræn":
			return getRandomNorrænName(sex);
		case "asculum":
			return getRandomAsculumName(sex);
		case "woodlands":
			return getRandomWoodlandName(sex);
	}
};

function getRandomNorrænName(sex) {
	let firstNameTable, lastNameTable, lastNameSuffix;
	if (sex === "male") {
		firstNameTable = lastNameTable = tables.norrænMaleNames;
		lastNameSuffix = "son";
	}
	if (sex === "female") {
		firstNameTable = tables.norrænFemaleNames;
		lastNameTable =
			Math.random() < 0.8
				? tables.norrænMaleNames
				: tables.norrænFemaleNames;
		lastNameSuffix = "sdottir";
	}

	return `${getRandomElement(firstNameTable)} ${getRandomElement(
		lastNameTable
	)}${lastNameSuffix}`;
}

function getRandomAsculumName(sex) {
	const praenomenTable =
		sex === "male"
			? tables.asculumMalePraenomina
			: tables.asculumFemalePraenomina;
	const nomenTable = tables.asculumNomina;
	const cognomenTable = tables.asculumCognomina;

	return `${getRandomElement(praenomenTable)} ${getRandomElement(
		nomenTable
	)} ${getRandomElement(cognomenTable)}`;
}

function getRandomWoodlandName(sex) {
	let firstName = getRandomElement(
		sex === "male"
			? tables.woodlandMaleFirstNames
			: tables.woodlandFemaleFirstNames
	);

	let lastName;
	const random = Math.random();
	if (random <= 0.25) {
		lastName = getRandomElement(tables.occupationalSurnames);
	} else if (random <= 75) {
		lastName = `Mac${getRandomElement(tables.woodlandMaleFirstNames)}`;
	} else {
		lastName = `O'${getRandomElement(tables.woodlandMaleFirstNames)}`;
	}

	return `${firstName} ${lastName}`;
}
