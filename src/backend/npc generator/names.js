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
		firstNameTable = lastNameTable = tables.npcTables.names.norrænMaleNames;
		lastNameSuffix = "son";
	}
	if (sex === "female") {
		firstNameTable = tables.npcTables.names.norrænFemaleNames;
		lastNameTable =
			Math.random() < 0.8
				? tables.npcTables.names.norrænMaleNames
				: tables.npcTables.names.norrænFemaleNames;
		lastNameSuffix = "sdottir";
	}

	return `${rollOnTable(firstNameTable)} ${rollOnTable(
		lastNameTable
	)}${lastNameSuffix}`;
}

function getRandomAsculumName(sex) {
	const praenomenTable =
		sex === "male"
			? tables.npcTables.names.asculumMalePraenomina
			: tables.npcTables.names.asculumFemalePraenomina;
	const nomenTable = tables.npcTables.names.asculumNomina;
	const cognomenTable = tables.npcTables.names.asculumCognomina;

	return `${rollOnTable(praenomenTable)} ${rollOnTable(
		nomenTable
	)} ${rollOnTable(cognomenTable)}`;
}

function getRandomWoodlandName(sex) {
	let firstName = rollOnTable(
		sex === "male"
			? tables.npcTables.names.woodlandMaleFirstNames
			: tables.npcTables.names.woodlandFemaleFirstNames
	);

	let lastName;
	const random = Math.random();
	if (random <= 0.25) {
		lastName = rollOnTable(tables.npcTables.names.occupationalSurnames);
	} else if (random <= 75) {
		lastName = `Mac${rollOnTable(tables.npcTables.names.woodlandMaleFirstNames)}`;
	} else {
		lastName = `O'${rollOnTable(tables.npcTables.names.woodlandMaleFirstNames)}`;
	}

	return `${firstName} ${lastName}`;
}
