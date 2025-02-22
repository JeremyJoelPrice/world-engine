import { rollOnTable } from "../../util/common";
import config from "./config";
import {
	approach,
	characterisation,
	highConcepts,
	leverage
} from "./data/npcGenerationTables";
import flavours from "./data/flavours/index.js";

export const getName = (sex, flavour) => {
	return flavours.filter(({ name }) => name === flavour)[0].generateName(sex);
};

export const generateNpc = (npcParameters, setGeneratedNpc) => {
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
	actualNpc.name = getName(npcTemplate["sex"], npcTemplate["flavour"]);

	setGeneratedNpc(actualNpc);
};

export const copyNpcAsText = (generatedNpc) => {
	let npcString = `${generatedNpc.name}\n${generatedNpc.sex} ${generatedNpc.race}\n${generatedNpc.highConcept.name}\n${generatedNpc.highConcept.description}\n${generatedNpc.approach1}/${generatedNpc.approach2}\nLeverage: ${generatedNpc.leverage}`;
	navigator.clipboard.writeText(npcString);
};
