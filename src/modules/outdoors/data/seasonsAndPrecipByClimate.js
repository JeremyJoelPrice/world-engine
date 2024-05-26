const seasonsAndPrecipByClimate = [
	{
		climateName: "desert",
		seasons: [
			{
				name: "winter",
				firstDay: 335,
				lastDay: 31,
				averageTemperatureOptions: [
					{ name: "cold", percentChance: 5, temperature: 13 },
					{ name: "cool", percentChance: 90, temperature: 18 },
					{ name: "warm", percentChance: 5, temperature: 21 }
				]
			},
			{
				name: "spring/summer/autumn",
				firstDay: 32,
				lastDay: 306,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 18 },
					{ name: "hot", percentChance: 90, temperature: "21-32" },
					{ name: "very hot", percentChance: 5, temperature: 43 }
				]
			}
		],
		precipPeriods: [{ firstDay: 1, percentChance: 5 }]
	},
	{
		climateName: "tropical savanna",
		seasons: [
			{
				name: "winter/spring/summer/autumn",
				firstDay: 1,
				averageTemperatureOptions: [
					{ name: "warm", percentChance: 5, temperature: 23 },
					{ name: "hot", percentChance: 90, temperature: "32-41" },
					{ name: "very hot", percentChance: 5, temperature: 46 }
				]
			}
		],
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
		climateName: "steppe",
		seasons: [
			{
				name: "winter",
				firstDay: 335,
				lastDay: 59,
				averageTemperatureOptions: [
					{ name: "cold", percentChance: 5, temperature: 2 },
					{ name: "chilly", percentChance: 90, temperature: "4-7" },
					{ name: "cool", percentChance: 5, temperature: 10 }
				]
			},
			{
				name: "spring",
				firstDay: 60,
				lastDay: 151,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 10 },
					{ name: "warm", percentChance: 90, temperature: "16-21" },
					{ name: "hot", percentChance: 5, temperature: 27 }
				]
			},
			{
				name: "summer",
				firstDay: 152,
				lastDay: 243,
				averageTemperatureOptions: [
					{ name: "warm", percentChance: 5, temperature: 21 },
					{ name: "hot", percentChance: 90, temperature: "29-35" },
					{ name: "very hot", percentChance: 5, temperature: 43 }
				]
			},
			{
				name: "autumn",
				firstDay: 244,
				lastDay: 334,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 10 },
					{ name: "warm", percentChance: 90, temperature: "16-21" },
					{ name: "hot", percentChance: 5, temperature: 27 }
				]
			}
		],
		precipPeriods: [
			{ firstDay: 182, lastDay: 243, percentChance: 5 },
			{ firstDay: 244, lastDay: 181, percentChance: 20 }
		]
	},
	{
		climateName: "equatorial",
		seasons: [
			{
				name: "winter/spring/summer/autumn",
				firstDay: 1,
				averageTemperatureOptions: [
					{
						name: "unusually cool",
						percentChance: 5,
						temperature: 16
					},
					{ name: "hot", percentChance: 90, temperature: "21-29" },
					{ name: "very hot", percentChance: 5, temperature: 38 }
				]
			}
		],
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
		climateName: "monsoon",
		seasons: [
			{
				name: "winter/spring/summer/autumn",
				firstDay: 1,
				averageTemperatureOptions: [
					{
						name: "warm",
						percentChance: 5,
						temperature: 21
					},
					{ name: "hot", percentChance: 45, temperature: "29-38" },
					{
						name: "very hot",
						percentChance: 45,
						temperature: "38-43"
					},
					{ name: "extremely hot", percentChance: 5, temperature: 49 }
				]
			}
		],
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
		climateName: "warm & rainy",
		seasons: [
			{
				name: "winter",
				firstDay: 305,
				lastDay: 59,
				averageTemperatureOptions: [
					{ name: "very cold", percentChance: 5, temperature: -12 },
					{
						name: "freezing",
						percentChance: 45,
						temperature: "-4-0"
					},
					{ name: "cold", percentChance: 45, temperature: "1-7" },
					{ name: "cool", percentChance: 5, temperature: 10 }
				]
			},
			{
				name: "spring",
				firstDay: 60,
				lastDay: 151,
				averageTemperatureOptions: [
					{ name: "cold", percentChance: 5, temperature: 4 },
					{ name: "chilly", percentChance: 45, temperature: 10 },
					{ name: "cool", percentChance: 45, temperature: 16 },
					{ name: "very warm", percentChance: 5, temperature: 18 }
				]
			},
			{
				name: "summer",
				firstDay: 152,
				lastDay: 273,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 16 },
					{ name: "warm", percentChance: 45, temperature: "18-21" },
					{ name: "hot", percentChance: 45, temperature: "22-24" },
					{ name: "very hot", percentChance: 5, temperature: 29 }
				]
			},
			{
				name: "autumn",
				firstDay: 274,
				lastDay: 304,
				averageTemperatureOptions: [
					{ name: "cold", percentChance: 5, temperature: 4 },
					{ name: "chilly", percentChance: 45, temperature: 10 },
					{ name: "cool", percentChance: 45, temperature: 16 },
					{ name: "very warm", percentChance: 5, temperature: 18 }
				]
			}
		],
		precipPeriods: [{ firstDay: 1, percentChance: 40 }]
	},
	{
		climateName: "warm with dry summer",
		seasons: [
			{
				name: "winter",
				firstDay: 335,
				lastDay: 59,
				averageTemperatureOptions: [
					{ name: "very cold", percentChance: 5, temperature: -12 },
					{
						name: "freezing",
						percentChance: 45,
						temperature: "-6-0"
					},
					{ name: "cold", percentChance: 45, temperature: "2-10" },
					{ name: "cool", percentChance: 5, temperature: 16 }
				]
			},
			{
				name: "spring",
				firstDay: 60,
				lastDay: 120,
				averageTemperatureOptions: [
					{ name: "chilly", percentChance: 5, temperature: 10 },
					{ name: "cool", percentChance: 45, temperature: 16 },
					{ name: "warm", percentChance: 45, temperature: 18 },
					{ name: "very warm", percentChance: 5, temperature: 21 }
				]
			},
			{
				name: "summer",
				firstDay: 121,
				lastDay: 273,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 16 },
					{ name: "warm", percentChance: 45, temperature: "18-21" },
					{ name: "hot", percentChance: 45, temperature: "22-29" },
					{ name: "very hot", percentChance: 5, temperature: 32 }
				]
			},
			{
				name: "autumn",
				firstDay: 274,
				lastDay: 334,
				averageTemperatureOptions: [
					{ name: "chilly", percentChance: 5, temperature: 10 },
					{ name: "cool", percentChance: 45, temperature: 16 },
					{ name: "warm", percentChance: 45, temperature: 18 },
					{ name: "very warm", percentChance: 5, temperature: 21 }
				]
			}
		],
		precipPeriods: [
			{ firstDay: 152, lastDay: 243, percentChance: 10 },
			{ firstDay: 244, lastDay: 151, percentChance: 30 }
		]
	},
	{
		climateName: "warm with dry winter",
		seasons: [
			{
				name: "winter",
				firstDay: 305,
				lastDay: 59,
				averageTemperatureOptions: [
					{ name: "frosty", percentChance: 5, temperature: 0 },
					{ name: "chilly", percentChance: 90, temperature: "2-7" },
					{ name: "cool", percentChance: 5, temperature: 10 }
				]
			},
			{
				name: "spring",
				firstDay: 60,
				lastDay: 151,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 10 },
					{ name: "warm", percentChance: 90, temperature: "16-18" },
					{ name: "hot", percentChance: 5, temperature: 21 }
				]
			},
			{
				name: "summer",
				firstDay: 152,
				lastDay: 212,
				averageTemperatureOptions: [
					{ name: "warm", percentChance: 5, temperature: 21 },
					{ name: "hot", percentChance: 90, temperature: "29-32" },
					{ name: "very hot", percentChance: 5, temperature: 43 }
				]
			},
			{
				name: "autumn",
				firstDay: 213,
				lastDay: 304,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 10 },
					{ name: "warm", percentChance: 90, temperature: "16-18" },
					{ name: "hot", percentChance: 5, temperature: 21 }
				]
			}
		],
		precipPeriods: [
			{ firstDay: 182, lastDay: 243, percentChance: 45 },
			{ firstDay: 244, lastDay: 181, percentChance: 15 }
		]
	},
	{
		climateName: "cool & rainy",
		seasons: [
			{
				name: "winter",
				firstDay: 305,
				lastDay: 59,
				averageTemperatureOptions: [
					{ name: "very cold", percentChance: 5, temperature: -15 },
					{ name: "cold", percentChance: 45, temperature: "-9--4" },
					{
						name: "freezing",
						percentChance: 45,
						temperature: "-3-0"
					},
					{ name: "chilly", percentChance: 5, temperature: 4 }
				]
			},
			{
				name: "spring",
				firstDay: 60,
				lastDay: 181,
				averageTemperatureOptions: [
					{ name: "cold", percentChance: 5, temperature: 2 },
					{ name: "chilly", percentChance: 45, temperature: "4-10" },
					{ name: "cool", percentChance: 45, temperature: "11-16" },
					{ name: "warm", percentChance: 5, temperature: 18 }
				]
			},
			{
				name: "summer",
				firstDay: 182,
				lastDay: 273,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 16 },
					{ name: "warm", percentChance: 45, temperature: "18-21" },
					{ name: "hot", percentChance: 45, temperature: "22-23" },
					{ name: "very hot", percentChance: 5, temperature: 29 }
				]
			},
			{
				name: "autumn",
				firstDay: 274,
				lastDay: 304,
				averageTemperatureOptions: [
					{ name: "cold", percentChance: 5, temperature: 2 },
					{ name: "chilly", percentChance: 45, temperature: "4-10" },
					{ name: "cool", percentChance: 45, temperature: "11-16" },
					{ name: "warm", percentChance: 5, temperature: 18 }
				]
			}
		],
		precipPeriods: [{ firstDay: 1, percentChance: 35 }]
	},
	{
		climateName: "cool with dry winter",
		seasons: [
			{
				name: "winter",
				firstDay: 305,
				lastDay: 59,
				averageTemperatureOptions: [
					{ name: "very cold", percentChance: 5, temperature: -15 },
					{
						name: "very cold",
						percentChance: 45,
						temperature: "-9--4"
					},
					{
						name: "freezing",
						percentChance: 45,
						temperature: "-3-0"
					},
					{ name: "chilly", percentChance: 5, temperature: 4 }
				]
			},
			{
				name: "spring",
				firstDay: 60,
				lastDay: 181,
				averageTemperatureOptions: [
					{ name: "cold", percentChance: 5, temperature: 2 },
					{ name: "chilly", percentChance: 45, temperature: "4-10" },
					{ name: "cool", percentChance: 45, temperature: "11-16" },
					{ name: "warm", percentChance: 5, temperature: 18 }
				]
			},
			{
				name: "summer",
				firstDay: 182,
				lastDay: 273,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 16 },
					{ name: "warm", percentChance: 45, temperature: "18-21" },
					{ name: "hot", percentChance: 45, temperature: "22-23" },
					{ name: "very hot", percentChance: 5, temperature: 29 }
				]
			},
			{
				name: "autumn",
				firstDay: 274,
				lastDay: 304,
				averageTemperatureOptions: [
					{ name: "cold", percentChance: 5, temperature: 2 },
					{ name: "chilly", percentChance: 45, temperature: "4-10" },
					{ name: "cool", percentChance: 45, temperature: "11-16" },
					{ name: "warm", percentChance: 5, temperature: 18 }
				]
			}
		],
		precipPeriods: [
			{ firstDay: 182, lastDay: 273, percentChance: 35 },
			{ firstDay: 274, lastDay: 304, percentChance: 20 },
			{ firstDay: 305, lastDay: 120, percentChance: 10 },
			{ firstDay: 121, lastDay: 181, percentChance: 20 }
		]
	},
	{
		climateName: "tundra",
		seasons: [
			{
				name: "winter",
				firstDay: 335,
				lastDay: 31,
				averageTemperatureOptions: [
					{
						name: "extremely cold",
						percentChance: 5,
						temperature: -26
					},
					{
						name: "very cold",
						percentChance: 45,
						temperature: "-25--20"
					},
					{
						name: "freezing",
						percentChance: 45,
						temperature: "-9-0"
					},
					{ name: "chilly", percentChance: 5, temperature: 2 }
				]
			},
			{
				name: "spring",
				firstDay: 32,
				lastDay: 151,
				averageTemperatureOptions: [
					{ name: "very cold", percentChance: 5, temperature: -12 },
					{ name: "cold", percentChance: 45, temperature: "-9--7" },
					{
						name: "freezing",
						percentChance: 45,
						temperature: "-4-0"
					},
					{ name: "chilly", percentChance: 5, temperature: 2 }
				]
			},
			{
				name: "summer",
				firstDay: 152,
				lastDay: 212,
				averageTemperatureOptions: [
					{ name: "cold", percentChance: 5, temperature: 0 },
					{ name: "chilly", percentChance: 45, temperature: "2-4" },
					{ name: "cool", percentChance: 45, temperature: "5-10" },
					{ name: "warm", percentChance: 5, temperature: 16 }
				]
			},
			{
				name: "autumn",
				firstDay: 213,
				lastDay: 334,
				averageTemperatureOptions: [
					{ name: "very cold", percentChance: 5, temperature: -12 },
					{ name: "cold", percentChance: 45, temperature: "-9--7" },
					{
						name: "freezing",
						percentChance: 45,
						temperature: "-4-0"
					},
					{ name: "chilly", percentChance: 5, temperature: 2 }
				]
			}
		],
		precipPeriods: [{ firstDay: 1, percentChance: 10 }]
	},
	{
		climateName: "polar",
		seasons: [
			{
				name: "winter",
				firstDay: 335,
				lastDay: 31,
				averageTemperatureOptions: [
					{
						name: "extremely cold",
						percentChance: 5,
						temperature: -37
					},
					{
						name: "very cold",
						percentChance: 45,
						temperature: "-32--18"
					},
					{
						name: "cold",
						percentChance: 45,
						temperature: "-17--1"
					},
					{ name: "frosty", percentChance: 5, temperature: 0 }
				]
			},
			{
				name: "spring",
				firstDay: 32,
				lastDay: 151,
				averageTemperatureOptions: [
					{ name: "very cold", percentChance: 5, temperature: -4 },
					{ name: "cold", percentChance: 45, temperature: -1 },
					{
						name: "frosty",
						percentChance: 45,
						temperature: 0
					},
					{ name: "cool", percentChance: 5, temperature: 4 }
				]
			},
			{
				name: "summer",
				firstDay: 152,
				lastDay: 212,
				averageTemperatureOptions: [
					{ name: "cold", percentChance: 5, temperature: 0 },
					{ name: "chilly", percentChance: 45, temperature: "2-4" },
					{ name: "cool", percentChance: 45, temperature: "5-10" },
					{ name: "warm", percentChance: 5, temperature: 16 }
				]
			},
			{
				name: "autumn",
				firstDay: 213,
				lastDay: 334,
				averageTemperatureOptions: [
					{ name: "very cold", percentChance: 5, temperature: -4 },
					{ name: "cold", percentChance: 45, temperature: -1 },
					{
						name: "frosty",
						percentChance: 45,
						temperature: 0
					},
					{ name: "cool", percentChance: 5, temperature: 4 }
				]
			}
		],
		precipPeriods: [{ firstDay: 1, percentChance: 10 }]
	}
];

export default seasonsAndPrecipByClimate;
