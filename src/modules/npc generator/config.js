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
		}
	]
};

export default config;
