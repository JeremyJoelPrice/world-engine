const climates = {
	custom: [],
	generic: [
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
			precipPeriods: [{ firstDay: 1, percentChance: 0.5 }]
		},
		{
			name: "tropical savanna",
			seasons: {
				summer: { high: 37, low: 29 },
				winter: { high: 32, low: 16 }
			},
			precipPeriods: [
				{
					firstDay: 91,
					percentChance: 0.35
				},
				{
					firstDay: 121,
					percentChance: 0.85
				},
				{
					firstDay: 274,
					percentChance: 0.35
				},
				{
					firstDay: 305,
					percentChance: 0.1
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
				{ firstDay: 182, percentChance: 0.5 },
				{ firstDay: 244, percentChance: 0.2 }
			]
		},
		{
			name: "equatorial",
			seasons: {
				summer: { high: 33, low: 23 }
			},
			precipPeriods: [
				{
					firstDay: 1,
					percentChance: 0.3
				},
				{
					firstDay: 60,
					percentChance: 0.5
				},
				{
					firstDay: 152,
					percentChance: 0.4
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
					percentChance: 0.9
				},
				{
					firstDay: 305,
					percentChance: 0.15
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
			precipPeriods: [{ firstDay: 1, percentChance: 0.4 }]
		},
		{
			name: "warm with dry summer",
			seasons: {
				summer: { high: 26, low: 13 },
				winter: { high: -6, low: -20 }
			},
			precipPeriods: [
				{ firstDay: 152, percentChance: 0.1 },
				{ firstDay: 244, percentChance: 0.3 }
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
				{ firstDay: 182, percentChance: 0.45 },
				{ firstDay: 244, percentChance: 0.15 }
			]
		},
		{
			name: "cool & rainy",
			seasons: {
				summer: { high: 20, low: 13 },
				winter: { high: -4, low: -10 }
			},
			precipPeriods: [{ firstDay: 1, percentChance: 0.35 }]
		},
		{
			name: "cool with dry winter",
			seasons: {
				summer: { high: 18, low: 11 },
				winter: { high: -4, low: -9 }
			},
			precipPeriods: [
				{ firstDay: 121, percentChance: 0.2 },
				{ firstDay: 182, percentChance: 0.35 },
				{ firstDay: 274, percentChance: 0.2 },
				{ firstDay: 305, percentChance: 0.1 }
			]
		},
		{
			name: "tundra",
			seasons: {
				summer: { high: 5, low: 1 },
				winter: { high: -20, low: -30 }
			},
			precipPeriods: [{ firstDay: 1, percentChance: 0.1 }]
		},
		{
			name: "polar",
			seasons: {
				summer: { high: -30, low: -40 },
				winter: { high: -62, low: -70 }
			},
			precipPeriods: [{ firstDay: 1, percentChance: 0.1 }]
		}
	]
};
export default climates;
