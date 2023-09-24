/* NPC Name Lists */
import npcNames from "./npcNameLists";

/**
 * celtic
 * old english
 * latin
 * asian
 * dwarven/gnomish
 * elven
 * goblin
 */

/* NPC Generator Options */

const sex = ["Random", "Male", "Female"];
const race = ["Random", "Human", "Dwarf", "Gnome", "Elf", "Tiefling", "Goblin"];
const flavour = ["Random", "Celtic", "Latin", "Norse", "Persian"];
const npcOptions = { sex, race, flavour };

// NPC option to name list map
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

export { npcNames, npcOptions, npcOptionNameListMap };
