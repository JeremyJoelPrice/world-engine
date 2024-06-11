const climates = [
	{
		name: "desert",
		seasons: {
			summer: {
				high: 39,
				low: 25
			},
			winter: {
				high: 18,
				low: 5
			}
		},
		precipPeriods: [{ firstDay: 1, percentChance: 5 }]
	},
	{
		name: "tropical savanna",
		seasons: {
			summer: { high: 37, low: 29 },
			winter: { high: 32, low: 16 }
		},
		precipPeriods: [
			{
				firstDay: 305,
				lastDay: 90,
				disregardHemisphere: true,
				percentChance: 10
			},
			{
				firstDay: 91,
				lastDay: 120,
				disregardHemisphere: true,
				percentChance: 35
			},
			{
				firstDay: 121,
				lastDay: 273,
				disregardHemisphere: true,
				percentChance: 85
			},
			{
				firstDay: 274,
				lastDay: 304,
				disregardHemisphere: true,
				percentChance: 35
			}
		]
	},
	{
		name: "steppe",
		seasons: {
			summer: { high: 34, low: 20 },
			winter: { high: 7, low: -5 }
		},
		precipPeriods: [
			{ firstDay: 182, lastDay: 243, percentChance: 5 },
			{ firstDay: 244, lastDay: 181, percentChance: 20 }
		]
	},
	{
		name: "equatorial",
		seasons: {
			summer: { high: 33, low: 23 }
		},
		precipPeriods: [
			{
				firstDay: 60,
				lastDay: 151,
				disregardHemisphere: true,
				percentChance: 50
			},
			{
				firstDay: 152,
				lastDay: 365,
				disregardHemisphere: true,
				percentChance: 40
			},
			{
				firstDay: 1,
				lastDay: 59,
				disregardHemisphere: true,
				percentChance: 30
			}
		]
	},
	{
		name: "monsoon",
		seasons: {
			summer: {
				high: 35,
				low: 25
			}
		},
		precipPeriods: [
			{
				firstDay: 152,
				lastDay: 304,
				disregardHemisphere: true,
				percentChance: 90
			},
			{
				firstDay: 305,
				lastDay: 151,
				disregardHemisphere: true,
				percentChance: 15
			}
		]
	},
	{
		name: "warm & rainy",
		seasons: {
			summer: {
				high: 25,
				low: 16
			},
			winter: { high: -3, low: -15 }
		},
		precipPeriods: [{ firstDay: 1, percentChance: 40 }]
	},
	{
		name: "warm with dry summer",
		seasons: {
			summer: { high: 26, low: 13 },
			winter: { high: -6, low: -20 }
		},
		precipPeriods: [
			{ firstDay: 152, lastDay: 243, percentChance: 10 },
			{ firstDay: 244, lastDay: 151, percentChance: 30 }
		]
	},
	{
		name: "warm with dry winter",
		seasons: {
			spring: { high: 27, low: 11 },
			summer: { high: 30, low: 12 },
			winter: { high: 4, low: -10 }
		},
		precipPeriods: [
			{ firstDay: 182, lastDay: 243, percentChance: 45 },
			{ firstDay: 244, lastDay: 181, percentChance: 15 }
		]
	},
	{
		name: "cool & rainy",
		seasons: {
			summer: { high: 20, low: 13 },
			winter: { high: -4, low: -10 }
		},
		precipPeriods: [{ firstDay: 1, percentChance: 35 }]
	},
	{
		name: "cool with dry winter",
		seasons: {
			summer: { high: 18, low: 11 },
			winter: { high: -4, low: -9 }
		},
		precipPeriods: [
			{ firstDay: 182, lastDay: 273, percentChance: 35 },
			{ firstDay: 274, lastDay: 304, percentChance: 20 },
			{ firstDay: 305, lastDay: 120, percentChance: 10 },
			{ firstDay: 121, lastDay: 181, percentChance: 20 }
		]
	},
	{
		name: "tundra",
		seasons: {
			summer: { high: 5, low: 1 },
			winter: { high: -20, low: -30 }
		},
		precipPeriods: [{ firstDay: 1, percentChance: 10 }]
	},
	{
		name: "polar",
		seasons: {
			summer: { high: -30, low: -40 },
			winter: { high: -62, low: -70 }
		},
		precipPeriods: [{ firstDay: 1, percentChance: 10 }]
	}
];

export default climates;
