const climates = {
	custom: {
		"coastal lowlands": {
			seasons: {
				summer: { high: 12, low: 6 },
				winter: { high: 2, low: -5 }
			},
			precipPeriods: [
				{ firstDay: 90, percentChance: 0.65 },
				{ firstDay: 150, percentChance: 0.45 },
				{ firstDay: 230, percentChance: 0.75 },
				{ firstDay: 300, percentChance: 0.6 }
			]
		},
		fjords: {
			seasons: {
				summer: { high: 11, low: 5 },
				winter: { high: 1, low: -7 }
			},
			precipPeriods: [
				{ firstDay: 90, percentChance: 0.7 },
				{ firstDay: 150, percentChance: 0.5 },
				{ firstDay: 230, percentChance: 0.8 },
				{ firstDay: 300, percentChance: 0.6 }
			]
		},
		"geothermal fields": {
			seasons: {
				summer: { high: 14, low: 7 },
				winter: { high: 5, low: -2 }
			},
			precipPeriods: [{ firstDay: 1, percentChance: 0.5 }]
		},
		"glacial regions": {
			seasons: {
				summer: { high: 3, low: -3 },
				winter: { high: -10, low: -25 }
			},
			precipPeriods: [
				{ firstDay: 150, percentChance: 0.2 },
				{ firstDay: 270, percentChance: 0.35 }
			]
		},
		"interior highlands": {
			seasons: {
				summer: { high: 8, low: 2 },
				winter: { high: -5, low: -15 }
			},
			precipPeriods: [
				{ firstDay: 120, percentChance: 0.4 },
				{ firstDay: 210, percentChance: 0.3 },
				{ firstDay: 270, percentChance: 0.5 }
			]
		},
		"mountain ranges": {
			seasons: {
				summer: { high: 7, low: 1 },
				winter: { high: -8, low: -20 }
			},
			precipPeriods: [
				{ firstDay: 120, percentChance: 0.4 },
				{ firstDay: 210, percentChance: 0.35 },
				{ firstDay: 270, percentChance: 0.5 }
			]
		},
		"sparse coastal woodland": {
			seasons: {
				summer: { high: 13, low: 7 },
				winter: { high: 3, low: -4 }
			},
			precipPeriods: [{ firstDay: 1, percentChance: 0.6 }]
		},
		"volcanic desert": {
			seasons: {
				summer: { high: 9, low: 3 },
				winter: { high: -4, low: -14 }
			},
			precipPeriods: [
				{ firstDay: 120, percentChance: 0.2 },
				{ firstDay: 210, percentChance: 0.1 },
				{ firstDay: 270, percentChance: 0.2 }
			]
		},
		"wetlands and bogs": {
			seasons: {
				summer: { high: 11, low: 5 },
				winter: { high: 1, low: -6 }
			},
			precipPeriods: [
				{ firstDay: 90, percentChance: 0.75 },
				{ firstDay: 150, percentChance: 0.5 },
				{ firstDay: 230, percentChance: 0.8 },
				{ firstDay: 300, percentChance: 0.6 }
			]
		}
	},
	generic: {
		desert: {
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
			precipPeriods: [{ firstDay: 1, percentChance: 0.05 }]
		},
		"tropical savanna": {
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
		steppe: {
			seasons: {
				summer: { high: 34, low: 20 },
				winter: { high: 7, low: -5 }
			},
			precipPeriods: [
				{ firstDay: 182, percentChance: 0.05 },
				{ firstDay: 244, percentChance: 0.2 }
			]
		},
		equatorial: {
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
		monsoon: {
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
		"warm & rainy": {
			seasons: {
				summer: {
					high: 25,
					low: 16
				},
				winter: { high: -3, low: -15 }
			},
			precipPeriods: [{ firstDay: 1, percentChance: 0.4 }]
		},
		"warm with dry summer": {
			seasons: {
				summer: { high: 26, low: 13 },
				winter: { high: -6, low: -20 }
			},
			precipPeriods: [
				{ firstDay: 152, percentChance: 0.1 },
				{ firstDay: 244, percentChance: 0.3 }
			]
		},
		"warm with dry winter": {
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
		"cool & rainy": {
			seasons: {
				summer: { high: 20, low: 13 },
				winter: { high: -4, low: -10 }
			},
			precipPeriods: [{ firstDay: 1, percentChance: 0.35 }]
		},
		"cool with dry winter": {
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
		tundra: {
			seasons: {
				summer: { high: 5, low: 1 },
				winter: { high: -20, low: -30 }
			},
			precipPeriods: [{ firstDay: 1, percentChance: 0.1 }]
		},
		polar: {
			seasons: {
				summer: { high: -30, low: -40 },
				winter: { high: -62, low: -70 }
			},
			precipPeriods: [{ firstDay: 1, percentChance: 0.1 }]
		}
	}
};
export default climates;
