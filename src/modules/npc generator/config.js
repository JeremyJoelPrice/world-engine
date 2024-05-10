import { names } from "./data/npcGenerationTables";

const config = {
	"npc generator": {
		race: ["Human", "Halfling", "Half-Elf", "Dwarf", "Half-Orc"],
		flavour: ["Victorian", "Celtic", "Norse", "Persian"],
		raceFlavourMap: {
			Human: "Victorian",
			Dwarf: "Norse",
			"Half-Elf": "Celtic",
			Halfling: "Victorian",
			"Half-Orc": "Persian"
		},
		flavourNameMap: {
			Celtic: {
				maleForenames: names.celticNames["male forenames"],
				femaleForenames: names.celticNames["female forenames"],
				surnames: names.celticNames.surnames
			},
			Victorian: {
				maleForenames: names.victorianNames["male forenames"],
				femaleForenames: names.victorianNames["female forenames"],
				surnames: names.victorianNames.surnames
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
