const seasonsAndPrecipByClimate = [
	{
		name: "desert",
		seasons: {
			summer: {
				high: 39,
				low: 25
			},
			winter: {
				high: 20,
				low: 7
			}
		},
		precipPeriods: [{ firstDay: 1, percentChance: 5 }]
	},
	{
		name: "tropical savanna",
		seasons: {
			spring: { high: 34, low: 19 },
			summer: { high: 31, low: 23 },
			autumn: { high: 32, low: 20 },
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
			winter: { high: 17, low: 6 }
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
			spring: {
				high: 34,
				low: 22
			},
			summer: {
				high: 30,
				low: 20
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
				high: 29,
				low: 20
			},
			winter: { high: 9, low: 1 }
		},
		precipPeriods: [{ firstDay: 1, percentChance: 40 }]
	},
	{
		name: "warm with dry summer",
		seasons: {
			summer: { high: 31, low: 18 },
			winter: { high: 10, low: 1 }
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
			summer: { high: 23, low: 12 },
			winter: { high: 21, low: 7 }
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
			winter: { high: 10, low: 4 }
		},
		precipPeriods: [{ firstDay: 1, percentChance: 35 }]
	},
	{
		name: "cool with dry winter",
		seasons: {
			summer: { high: 14, low: 7 },
			winter: { high: 4, low: -1 }
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
			winter: { high: -2, low: -20 }
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

export default seasonsAndPrecipByClimate;
