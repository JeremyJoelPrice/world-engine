const climates = [
	{
		terrainType: "broken land",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: ["warm with dry winter"]
	},
	{
		terrainType: "broken land",
		isCoastal: false,
		latitudeMin: 41,
		latitudeMax: 70,
		climate: ["cool & rainy"]
	},
	{
		terrainType: "broken land",
		isCoastal: false,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: ["polar"]
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: ["desert"]
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: ["warm & rainy", "warm with dry summer"]
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: ["cool with dry winter"]
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: ["tundra"]
	},
	{
		terrainType: "desert",
		isCoastal: "all",
		latitudeMin: 0,
		latitudeMax: 30,
		climate: ["desert"]
	},
	{
		terrainType: "desert",
		isCoastal: "all",
		latitudeMin: 31,
		latitudeMax: 90,
		climate: ["n/a"]
	},
	{
		terrainType: "forest",
		isCoastal: "all",
		latitudeMin: 0,
		latitudeMax: 20,
		climate: ["tropical savanna"]
	},
	{
		terrainType: "forest",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: ["warm with dry winter"]
	},
	{
		terrainType: "forest",
		isCoastal: false,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: ["cool & rainy"]
	},
	{
		terrainType: "forest",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: ["warm & rainy", "warm with dry summer"]
	},
	{
		terrainType: "forest",
		isCoastal: true,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: ["cool with dry winter"]
	},
	{
		terrainType: "forest",
		isCoastal: "all",
		latitudeMin: 71,
		latitudeMax: 90,
		climate: ["n/a"]
	},
	{
		terrainType: "grassland",
		isCoastal: "all",
		latitudeMin: 0,
		latitudeMax: 20,
		climate: ["tropical savanna"]
	},
	{
		terrainType: "grassland",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: ["steppe"]
	},
	{
		terrainType: "grassland",
		isCoastal: false,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: ["cool & rainy"]
	},
	{
		terrainType: "grassland",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: ["warm & rainy", "warm with dry summer"]
	},
	{
		terrainType: "grassland",
		isCoastal: true,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: ["cool with dry winter"]
	},
	{
		terrainType: "grassland",
		isCoastal: "all",
		latitudeMin: 71,
		latitudeMax: 90,
		climate: ["tundra", "polar"]
	},
	{
		terrainType: "hills",
		isCoastal: false,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: ["tropical savanna"]
	},
	{
		terrainType: "hills",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: ["warm with dry winter"]
	},
	{
		terrainType: "hills",
		isCoastal: false,
		latitudeMin: 41,
		latitudeMax: 70,
		climate: ["cool & rainy"]
	},
	{
		terrainType: "hills",
		isCoastal: false,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: ["polar"]
	},
	{
		terrainType: "hills",
		isCoastal: true,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: ["tropical savanna"]
	},
	{
		terrainType: "hills",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: ["warm & rainy", "warm with dry summer"]
	},
	{
		terrainType: "hills",
		isCoastal: true,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: ["cool with dry winter"]
	},
	{
		terrainType: "hills",
		isCoastal: true,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: ["tundra"]
	},
	{
		terrainType: "jungle",
		isCoastal: false,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: ["equatorial"]
	},
	{
		terrainType: "jungle",
		isCoastal: true,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: ["monsoon"]
	},
	{
		terrainType: "jungle",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 90,
		climate: ["(treat as forest)"]
	},
	{
		terrainType: "mountains",
		isCoastal: "all",
		latitudeMin: 0,
		latitudeMax: 20,
		climate: ["warm with dry summer", "warm & rainy"]
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: ["warm with dry winter"]
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		latitudeMin: 41,
		latitudeMax: 70,
		climate: ["cool & rainy"]
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: ["polar"]
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: ["warm & rainy", "warm with dry summer"]
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		latitudeMin: 41,
		latitudeMax: 70,
		climate: ["cool with dry winter"]
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: ["tundra"]
	},
	{
		terrainType: "swamp",
		isCoastal: false,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: ["equatorial"]
	},
	{
		terrainType: "swamp",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: ["warm with dry summer"]
	},
	{
		terrainType: "swamp",
		isCoastal: true,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: ["monsoon"]
	},
	{
		terrainType: "swamp",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: ["warm & rainy"]
	},
	{
		terrainType: "swamp",
		isCoastal: "all",
		latitudeMin: 41,
		latitudeMax: 90,
		climate: ["(as per surrounding terrain)"]
	}
];

export default climates;
