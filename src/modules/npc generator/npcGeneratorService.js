import { rollOnTable } from "../../util/common";
import {
	approach,
	characterisation,
	highConcepts,
	leverage
} from "./data/npcGenerationTables";
import flavours from "./data/flavours/index.js";

/* getters for displayable menu options */

export const getFlavoursByRace = (race) => {
	if (race === "Dwarf") return [flavours.dwarf];
	return [flavours.nordlanðr, flavours.asculum, flavours.celtic];
};

export const getRaces = () => {
	return ["Human", "Dwarf"];
};

export const getSexesByRace = () => {
	return ["Random", "Female", "Male"];
};

/* generators for creating NPCs */

export const generateName = (sex, flavour) => {
	return Object.values(flavours)
		.filter(({ name }) => name === flavour)[0]
		.generateName(sex);
};

export const generateNpc = (npcParameters, setGeneratedNpc) => {
	const npcTemplate = Object.assign({}, npcParameters);

	// resolve random sex
	if (npcTemplate.sex === "Random") {
		npcTemplate.sex = Math.random() < 0.5 ? "Female" : "Male";
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
	actualNpc.name = generateName(npcTemplate["sex"], npcTemplate["flavour"]);

	setGeneratedNpc(actualNpc);
};

export const copyNpcAsText = (generatedNpc) => {
	let npcString = `${generatedNpc.name}\n${generatedNpc.sex} ${generatedNpc.race}\n${generatedNpc.highConcept.name}\n${generatedNpc.highConcept.description}\n${generatedNpc.approach1}/${generatedNpc.approach2}\nLeverage: ${generatedNpc.leverage}`;
	navigator.clipboard.writeText(npcString);
};
