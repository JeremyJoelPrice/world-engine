const seasonsByClimateCategory = [
	{
		climateCategoryName: "desert",
		seasons: [
			{
				name: "winter",
				firstDay: 336,
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
				lastDay: 335,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 18 },
					{ name: "hot", percentChance: 90, temperature: "21-32" },
					{ name: "very hot", percentChance: 5, temperature: 43 }
				]
			}
		]
	},
	{
		climateCategoryName: "steppe",
		seasons: [
			{
				name: "winter",
				firstDay: 336,
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
				lastDay: 152,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 10 },
					{ name: "warm", percentChance: 90, temperature: "16-21" },
					{ name: "hot", percentChance: 5, temperature: 27 }
				]
			},
			{
				name: "summer",
				firstDay: 153,
				lastDay: 244,
				averageTemperatureOptions: [
					{ name: "warm", percentChance: 5, temperature: 21 },
					{ name: "hot", percentChance: 90, temperature: "29-35" },
					{ name: "very hot", percentChance: 5, temperature: 43 }
				]
			},
			{
				name: "autumn",
				firstDay: 245,
				lastDay: 335,
				averageTemperatureOptions: [
					{ name: "cool", percentChance: 5, temperature: 10 },
					{ name: "warm", percentChance: 90, temperature: "16-21" },
					{ name: "hot", percentChance: 5, temperature: 27 }
				]
			}
		]
	}
];
export default seasonsByClimateCategory;
