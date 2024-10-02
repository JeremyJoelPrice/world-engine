import { names } from "./data/npcGenerationTables";

const config = {
	menus: [
		{
			title: "sex",
			options: [{ name: "Random" }, { name: "Male" }, { name: "Female" }]
		},
		{
			title: "race",
			options: [
				{ name: "Random" },
				{ name: "Human", defaultFlavour: "Victorian" },
				{ name: "Halfling", defaultFlavour: "Victorian" },
				{ name: "Half-Elf", defaultFlavour: "Celtic" },
				{ name: "Dwarf", defaultFlavour: "Norse" },
				{ name: "Half-Orc", defaultFlavour: "Persian" }
			]
		},
		{
			title: "flavour",
			options: [
				{ name: "Default" },
				{
					name: "Victorian",
					maleForenames: names.victorianNames["male forenames"],
					femaleForenames: names.victorianNames["female forenames"],
					surnames: names.victorianNames.surnames
				},
				{
					name: "Celtic",
					maleForenames: names.celticNames["male forenames"],
					femaleForenames: names.celticNames["female forenames"],
					surnames: names.celticNames.surnames
				},
				{
					name: "Norse",
					maleForenames: names.norseNames["male forenames"],
					femaleForenames: names.norseNames["female forenames"]
				},
				{
					name: "Persian",
					maleForenames: names.persianNames["male forenames"],
					femaleForenames: names.persianNames["female forenames"],
					surnames: names.persianNames.surnames
				}
			]
		}
	]
};

export default config;
