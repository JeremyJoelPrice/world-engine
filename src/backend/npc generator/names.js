const { getRandomElement } = require("./utils");
const nameTables = require("../table roller/tables/NPCs/names");

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
		firstNameTable = lastNameTable = nameTables.norrænMaleNames;
		lastNameSuffix = "son";
	}
	if (sex === "female") {
		firstNameTable = nameTables.norrænFemaleNames;
		lastNameTable =
			Math.random() < 0.8
				? nameTables.norrænMaleNames
				: nameTables.norrænFemaleNames;
		lastNameSuffix = "sdottir";
	}

	return `${getRandomElement(firstNameTable)} ${getRandomElement(
		lastNameTable
	)}${lastNameSuffix}`;
}

function getRandomAsculumName(sex) {
	const praenomenTable =
		sex === "male"
			? nameTables.asculumMalePraenomina
			: nameTables.asculumFemalePraenomina;
	const nomenTable = nameTables.asculumNomina;
	const cognomenTable = nameTables.asculumCognomina;

	return `${getRandomElement(praenomenTable)} ${getRandomElement(
		nomenTable
	)} ${getRandomElement(cognomenTable)}`;
}

function getRandomWoodlandName(sex) {
	let firstName = getRandomElement(
		sex === "male"
			? nameTables.woodlandMaleFirstNames
			: nameTables.woodlandFemaleFirstNames
	);

	let lastName;
	const random = Math.random();
	if (random <= 0.25) {
		lastName = getRandomElement(nameTables.occupationalSurnames);
	} else if (random <= 75) {
		lastName = `Mac${getRandomElement(nameTables.woodlandMaleFirstNames)}`;
	} else {
		lastName = `O'${getRandomElement(nameTables.woodlandMaleFirstNames)}`;
	}

	return `${firstName} ${lastName}`;
}
