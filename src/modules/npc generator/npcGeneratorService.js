import config from "./config";
import {
	agenda,
	approach,
	assets,
	disposition,
	highConcepts,
	limits,
	nonphysicalCharacterisation,
	physicalCharacterisation,
	relator
} from "./data/npcGenerationTables";
import { rollOnTable } from "../../utils";

/**
 * NPC Generator Config
 */
const npcGenTables = config["npc generator"];
// options lists comprise the menus
const sexOptions = ["Random", "Male", "Female"];
const races = npcGenTables.race;
const raceOptions = ["Random", ...races];
const flavourOptions = [
	"Default",
	"Random",
	...npcGenTables.flavour
];
const npcOptions = { sexOptions, raceOptions, flavourOptions };
/**
 * NPC Generator API
 */
const getNpcs = (quantity, sex, flavour, race) => {
	const npcs = [];
	for (let i = 0; i < quantity; i++) {
		// resolve "Random" values for sex and race
		if (sex === "Random") sex = Math.random() > 0.5 ? "Male" : "Female";
		if (race === "Random")
			race = races[Math.floor(Math.random() * races.length)];

		// resolve "Default" and "Random" values for flavour
		if (flavour === "Default")
			flavour = npcGenTables.raceFlavourMap[race]
				? npcGenTables.raceFlavourMap[race]
				: "Random";
		if (flavour === "Random")
			flavour =
				npcGenTables.flavour[
					Math.floor(
						Math.random() * npcGenTables.flavour.length
					)
				];

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

/**
 * NPC Generator Utility Functions
 */
const getName = (sex, flavour) => {
	// get name table
	const nameTables = npcGenTables.flavourNameMap[flavour];
	const firstNames =
		sex === "Male" ? nameTables.maleForenames : nameTables.femaleForenames;
	let surnames = nameTables.surnames;
	if (flavour === "Norse") {
		const suffix = sex === "Male" ? "son" : "sdottir";
		surnames = firstNames.map((n) => n + suffix);
	}

	// generate name
	const firstName = rollOnTable(firstNames);
	const surname = rollOnTable(surnames);

	return `${firstName} ${surname}`;
};

// Other NPC Details
const getCharacterisation = () => {
	return [
		rollOnTable(nonphysicalCharacterisation),
		rollOnTable(physicalCharacterisation)
	];
};

const getRelationships = () => {
	return [`${rollOnTable(disposition)} toward ${rollOnTable(relator)}`];
};

export { npcOptions, getNpcs };
