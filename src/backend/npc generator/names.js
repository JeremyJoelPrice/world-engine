const { rollOnTable } = require("../table roller/tableUtils");
const tables = require("../table roller/tables");

module.exports = (sex, descent) => {
	// in case sex is given a default value other than 'male' or 'female', set the parameter randomly to either 'male' or 'female' for the sake of choosing a name list.
	if (sex !== "male" && sex !== "female") {
		sex = rollOnTable(["male", "female"]);
	}
	if (
		descent !== "norræn" &&
		descent !== "asculum" &&
		descent !== "woodlands"
	) {
		descent = rollOnTable(["norræn", "woodlands", "asculum"]);
	}
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
		firstNameTable = lastNameTable = tables.names.norrænMaleNames;
		lastNameSuffix = "son";
	}
	if (sex === "female") {
		firstNameTable = tables.names.norrænFemaleNames;
		lastNameTable =
			Math.random() < 0.8
				? tables.names.norrænMaleNames
				: tables.names.norrænFemaleNames;
		lastNameSuffix = "sdottir";
	}

	return `${rollOnTable(firstNameTable)} ${rollOnTable(
		lastNameTable
	)}${lastNameSuffix}`;
}

function getRandomAsculumName(sex) {
	const praenomenTable =
		sex === "male"
			? tables.names.asculumMalePraenomina
			: tables.names.asculumFemalePraenomina;
	const nomenTable = tables.names.asculumNomina;
	const cognomenTable = tables.names.asculumCognomina;

	return `${rollOnTable(praenomenTable)} ${rollOnTable(
		nomenTable
	)} ${rollOnTable(cognomenTable)}`;
}

function getRandomWoodlandName(sex) {
	let firstName = rollOnTable(
		sex === "male"
			? tables.names.woodlandMaleFirstNames
			: tables.names.woodlandFemaleFirstNames
	);

	let lastName;
	const random = Math.random();
	if (random <= 0.25) {
		lastName = rollOnTable(tables.names.occupationalSurnames);
	} else if (random <= 75) {
		lastName = `Mac${rollOnTable(tables.names.woodlandMaleFirstNames)}`;
	} else {
		lastName = `O'${rollOnTable(tables.names.woodlandMaleFirstNames)}`;
	}

	return `${firstName} ${lastName}`;
}
