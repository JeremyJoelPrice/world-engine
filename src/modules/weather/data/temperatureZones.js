const temperatureZones = [
	{
		min: 40,
		description:
			"next constant hydration, difficulty breathing severe heatstroke in minutes"
	},
	{
		min: 30,
		max: 40,
		description:
			"need extra water & reduced clothing or dizziness in minutes & heatstroke in minutes"
	},
	{
		min: 25,
		max: 30,
		description:
			"uncomfortably hot, risk of heatstroke if you're already unwell/injured"
	},
	{ min: 20, max: 25, description: "warm" },
	{ min: 15, max: 20, description: "mild" },
	{ min: 10, max: 15, description: "cool" },
	{ min: 5, max: 10, description: "chilly" },
	{
		min: 0,
		max: 5,
		description:
			"warm clothes needed or numbness in minutes, hypothermia in hours"
	},
	{
		min: -5,
		max: 0,
		description:
			"warm clothes needed or numbess in seconds, hypothermia in minutes, frostbite in hours"
	},
	{
		min: -10,
		max: -5,
		description:
			"Freezing: special gear required or hypothermia in seconds & frostbite in minutes"
	},
	{
		min: -20,
		max: -10,
		description:
			"dangerous: special gear required, or hypothermia & frostbite in seconds"
	},
	{
		min: -30,
		max: -20,
		description:
			"life threatening: special gear required & only stay outside for hours"
	},
	{
		min: -40,
		max: -30,
		description: "special gear required & only stay outside for minutes"
	},
	{
		min: -50,
		max: -40,
		description:
			"life threatening: sever frostbite in minutes, death in hours"
	},
	{ max: -50, description: "uninhabitable: death in minutes" }
];

export default temperatureZones;
