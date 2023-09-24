/**
 * _API_
 *
 * These are the publicly available functions which can be used to request an NPC
 * based on certain given parameters
 *  */

import { npcNames, npcOptionNameListMap, npcOptions } from "../datasource";
const { flavour: flavourOptions, sex: sexOptions } = npcOptions;

const getNpcs = (quantity, sex, flavour) => {
	/**
	 * What is an NPC?
	 *
	 * A name
	 *
	 * High concept / occupation
	 *
	 * Characterisation
	 *
	 * Relationships
	 *
	 * Agenda
	 *
	 * Approach
	 *
	 * Assets
	 *
	 * Limits
	 *
	 */

	const npcs = [];
	for (let i = 0; i < quantity; i++) {
		// resolve "Random" values for sex and flavour
		flavour =
			flavour === "Random"
				? resolveRandomOption(flavourOptions)
				: flavour;
		sex = sex === "Random" ? resolveRandomOption(sexOptions) : sex;

		// generate an npc
		const npc = {};

		npc.name = getName(sex, flavour);
		npc.sex = sex;
		npcs.push(npc);
	}

	return npcs;
};

const resolveRandomOption = (optionList) => {
	return optionList[parseInt(Math.random() * (optionList.length - 1)) + 1];
};

const getName = (sex, flavour) => {
	const { firstNames, surnames } = getNameTables(sex, flavour);

	// generate name
	const firstName = firstNames[parseInt(Math.random() * firstNames.length)];
	const surname = surnames[parseInt(Math.random() * surnames.length)];

	return { firstName, surname };
};

const getNameTables = (sex, flavour) => {
	// get specific name tables
	let { maleForenames, femaleForenames, surnames } =
		npcOptionNameListMap[flavour];

	const firstNames = sex === "Male" ? maleForenames : femaleForenames;

	// create nametable for Norse flavour names
	if (flavour === "Norse") {
		const suffix = sex === "Male" ? "son" : "sdottir";
		surnames = maleForenames.map((n) => n + suffix);
	}

	return { firstNames, surnames };
};

export default getNpcs;
