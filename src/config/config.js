import { names } from "../datasource/npcGenerationTables";

const config = {
	"npc generator": {
		race: [
			"Human",
			"Dwarf",
			"Gnome",
			"Elf",
			"Tiefling",
			"Dragonborn",
			"Half-Elf",
			"Halfling"
		],
		flavour: ["Celtic", "Latin", "Norse", "Persian", "Hebrew"],
		raceFlavourMap: {
			Human: "Latin",
			Dwarf: "Norse",
			Gnome: "Celtic",
			Elf: "Celtic",
			Tiefling: "Latin",
			Dragonborn: "Persian",
			Halfling: "Celtic"
		},
		flavourNameMap: {
			Celtic: {
				maleForenames: names.celticNames["male forenames"],
				femaleForenames: names.celticNames["female forenames"],
				surnames: names.celticNames.surnames
			},
			Latin: {
				maleForenames: names.latinNames["male forenames"],
				femaleForenames: names.latinNames["female forenames"],
				surnames: names.latinNames.surnames
			},
			Norse: {
				maleForenames: names.norseNames["male forenames"],
				femaleForenames: names.norseNames["female forenames"]
			},
			Persian: {
				maleForenames: names.persianNames["male forenames"],
				femaleForenames: names.persianNames["female forenames"],
				surnames: names.persianNames.surnames
			},
			Hebrew: {
				maleForenames: names.hebrewNames["male forenames"],
				femaleForenames: names.hebrewNames["female forenames"],
				surnames: names.hebrewNames.surnames
			}
		}
	}
};

export default config;
