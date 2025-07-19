import { rollOnTable } from "../../util/common";
import {
	approach,
	characterisation,
	highConcepts,
	leverage
} from "./data/npcGenerationTables";
import flavours from "./data/flavours/index.js";

/* getters for displayable menu options */
const npcParameters = {
	sexes: ["Female", "Male"],
	flavours: Object.keys(flavours).map((k) => flavours[k])
};

export const getNpcParameters = () => {
	return npcParameters;
};

/* generators for creating NPCs */

export const generateName = (sex, flavour) => {
	return Object.values(flavours)
		.filter(({ name }) => name === flavour)[0]
		.generateName(sex);
};

export const generateNpc = (chosenParameters, setGeneratedNpc) => {
	const npcTemplate = Object.assign({}, chosenParameters);

	// resolve random sex
	if (npcTemplate.sex === "Random") {
		npcTemplate.sex = rollOnTable(npcParameters.sexes);
	}

	// create actual npc
	const approach1 = rollOnTable(approach);
	let approach2 = rollOnTable(approach);
	while (approach2 === approach1) {
		approach2 = rollOnTable(approach);
	}
	const actualNpc = {
		sex: npcTemplate["sex"],
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
	let npcString = `${generatedNpc.name}\n${generatedNpc.sex}\n${generatedNpc.highConcept.name}\n${generatedNpc.highConcept.description}\n${generatedNpc.approach1}/${generatedNpc.approach2}\nLeverage: ${generatedNpc.leverage}`;
	navigator.clipboard.writeText(npcString);
};
