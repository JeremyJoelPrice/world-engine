import npcTables, {
	agenda,
	approach,
	assets,
	disposition,
	highConcepts,
	limits,
	nonphysicalCharacterisation,
	physicalCharacterisation,
	relator
} from "../datasource/npcGenerationTables";
import { rollOnTable } from "../utils/utils";

const { names: npcNames } = npcTables;

/**
 * NPC Generator Config
 */

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
const npcFlavourOptionNameListMap = {
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
 * NPC Generator API
 */

const getNpcs = (quantity, sex, flavour, race) => {
	const npcs = [];
	for (let i = 0; i < quantity; i++) {
		// resolve "Random" values for sex, flavour and race
		flavour =
			flavour === "Random"
				? resolveRandomOption(flavourOptions)
				: flavour;
		sex = sex === "Random" ? resolveRandomOption(sexOptions) : sex;
		race = race === "Random" ? resolveRandomOption(raceOptions) : race;

		// generate an npc
		const npc = {};

		npc.name = getName(sex, flavour);
		npc.sex = sex;
		npc.race = race;
		npc.highConcept = rollOnTable(highConcepts);
		npc.characterisation = getCharacterisation();
		npc.relationships = getRelationships();
		npc.agenda = rollOnTable(agenda);
		npc.approach = rollOnTable(approach, 2);
		npc.assets = rollOnTable(assets, 2);
		npc.limits = rollOnTable(limits, 2);
		npcs.push(npc);
	}

	return npcs;
};

const resolveRandomOption = (optionList) => {
	return optionList[parseInt(Math.random() * (optionList.length - 1)) + 1];
};

/**
 * NPC Generator Utility Functions
 */

// NPC Names

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
		npcFlavourOptionNameListMap[flavour];

	const firstNames = sex === "Male" ? maleForenames : femaleForenames;

	// create nametable for Norse flavour names
	if (flavour === "Norse") {
		const suffix = sex === "Male" ? "son" : "sdottir";
		surnames = maleForenames.map((n) => n + suffix);
	}

	return { firstNames, surnames };
};

// Other NPC Details

const getCharacterisation = () => {
	return [
		rollOnTable(physicalCharacterisation),
		rollOnTable(nonphysicalCharacterisation)
	];
};

const getRelationships = () => {
	return [
		`${rollOnTable(disposition)} toward PCs`,
		`${rollOnTable(disposition)} toward ${rollOnTable(relator)}`
	];
};

export { npcOptions, getNpcs };
