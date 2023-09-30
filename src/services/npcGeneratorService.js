import { npcNames } from "../datasource";
import { rollOnTable } from "../utils/utils";

/**
 * NPC Generator Config
 *
 * These variabels define the menu options shown on the front end
 *
 * */

// options lists comprise the menus
const sexOptions = ["Random", "Male", "Female"];
const raceOptions = [
	"Random",
	"Human",
	"Dwarf",
	"Gnome",
	"Elf",
	"Tiefling",
	"Goblin"
];
const flavourOptions = ["Random", "Celtic", "Latin", "Norse", "Persian"];
const npcOptions = { sexOptions, raceOptions, flavourOptions };

// map name lists from the db to the name options defined above
const npcOptionNameListMap = {
	Norse: {
		maleForenames: npcNames.norseNames["male forenames"],
		femaleForenames: npcNames.norseNames["female forenames"]
	},
	Latin: {
		maleForenames: npcNames.latinNames["male forenames"],
		femaleForenames: npcNames.latinNames["female forenames"],
		surnames: npcNames.latinNames.surnames
	},
	Celtic: {
		maleForenames: npcNames.celticNames["male forenames"],
		femaleForenames: npcNames.celticNames["female forenames"],
		surnames: npcNames.celticNames.surnames
	},
	Persian: {
		maleForenames: npcNames.persianNames["male forenames"],
		femaleForenames: npcNames.persianNames["female forenames"],
		surnames: npcNames.persianNames.surnames
	}
};

/**
 * _API_
 *
 * These are the publicly available functions which can be used to request an NPC
 * based on certain given parameters
 *  */

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
	const firstName = rollOnTable(firstNames);
	const surname = rollOnTable(surnames);

	return `${firstName} ${surname}`;
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

export { npcOptions, getNpcs };
