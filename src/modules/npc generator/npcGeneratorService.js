const { rollOnTable } = require("../../util/common");
const { default: config } = require("./config");
const {
	approach,
	characterisation,
	highConcepts,
	leverage
} = require("./data/npcGenerationTables");

exports.getName = (sex, flavour) => {
	// get name table
	let { maleForenames, femaleForenames, surnames } = config.menus
		.filter(({ title }) => title === "flavour")[0]
		.options.filter(({ name }) => name === flavour)[0];
	const forenamesTable = sex === "Male" ? maleForenames : femaleForenames;
	if (flavour === "Norse") {
		const suffix = sex === "Male" ? "son" : "sdottir";
		surnames = forenamesTable.map((n) => n + suffix);
	}

	// generate name
	const forename = rollOnTable(forenamesTable);
	const surname = rollOnTable(surnames);
	return `${forename} ${surname}`;
};

exports.generateNpc = (npcParameters, setGeneratedNpc) => {
	const npcTemplate = Object.assign({}, npcParameters);
	// resolve "Random" values
	Object.keys(npcParameters).forEach((param) => {
		const menu = config.menus.filter(({ title }) => title === param)[0];
		while (npcTemplate[param] === "Random") {
			npcTemplate[param] =
				menu.options[
					Math.floor(Math.random() * menu.options.length)
				].name;
		}
	});
	// resolve "Default" flavour
	if (npcTemplate["flavour"] === "Default") {
		npcTemplate["flavour"] = config.menus
			.filter(({ title }) => title === "race")[0]
			.options.filter(
				({ name }) => name === npcTemplate["race"]
			)[0].defaultFlavour;
	}

	// create actual npc
	const approach1 = rollOnTable(approach);
	let approach2 = rollOnTable(approach);
	while (approach2 === approach1) {
		approach2 = rollOnTable(approach);
	}
	const actualNpc = {
		sex: npcTemplate["sex"],
		race: npcTemplate["race"],
		highConcept: rollOnTable(highConcepts),
		approach1,
		approach2,
		characterisation: rollOnTable(characterisation),
		leverage: rollOnTable(leverage)
	};
	actualNpc.name = this.getName(npcTemplate["sex"], npcTemplate["flavour"]);

	setGeneratedNpc(actualNpc);
};

exports.copyNpcAsText = (generatedNpc) => {
	let npcString = `${generatedNpc.name}\n${generatedNpc.sex} ${generatedNpc.race}\n${generatedNpc.highConcept.name}\n${generatedNpc.highConcept.description}\n${generatedNpc.approach1}/${generatedNpc.approach2}\nLeverage: ${generatedNpc.leverage}`;
	navigator.clipboard.writeText(npcString);
};
