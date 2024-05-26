const climates = [
	{
		terrainType: "broken land",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climate: ["warm with dry winter"]
	},
	{
		terrainType: "broken land",
		isCoastal: false,
		lattitudeMin: 41,
		lattitudeMax: 70,
		climate: ["cool & rainy"]
	},
	{
		terrainType: "broken land",
		isCoastal: false,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climate: ["polar"]
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climate: ["desert"]
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climate: ["warm & rainy", "warm with dry summer"]
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climate: ["cool with dry winter"]
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climate: ["tundra"]
	},
	{
		terrainType: "desert",
		isCoastal: "all",
		lattitudeMin: 0,
		lattitudeMax: 30,
		climate: ["desert"]
	},
	{
		terrainType: "desert",
		isCoastal: "all",
		lattitudeMin: 31,
		lattitudeMax: 90,
		climate: ["n/a"]
	},
	{
		terrainType: "forest",
		isCoastal: "all",
		lattitudeMin: 0,
		lattitudeMax: 20,
		climate: ["tropical savanna"]
	},
	{
		terrainType: "forest",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climate: ["warm with dry winter"]
	},
	{
		terrainType: "forest",
		isCoastal: false,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climate: ["cool & rainy"]
	},
	{
		terrainType: "forest",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climate: ["warm & rainy", "warm with dry summer"]
	},
	{
		terrainType: "forest",
		isCoastal: true,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climate: ["cool with dry winter"]
	},
	{
		terrainType: "forest",
		isCoastal: "all",
		lattitudeMin: 71,
		lattitudeMax: 90,
		climate: ["n/a"]
	},
	{
		terrainType: "grassland",
		isCoastal: "all",
		lattitudeMin: 0,
		lattitudeMax: 20,
		climate: ["tropical savanna"]
	},
	{
		terrainType: "grassland",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climate: ["steppe"]
	},
	{
		terrainType: "grassland",
		isCoastal: false,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climate: ["cool & rainy"]
	},
	{
		terrainType: "grassland",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climate: ["warm & rainy", "warm with dry summer"]
	},
	{
		terrainType: "grassland",
		isCoastal: true,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climate: ["cool with dry winter"]
	},
	{
		terrainType: "grassland",
		isCoastal: "all",
		lattitudeMin: 71,
		lattitudeMax: 90,
		climate: ["tundra", "polar"]
	},
	{
		terrainType: "hills",
		isCoastal: false,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climate: ["tropical savanna"]
	},
	{
		terrainType: "hills",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climate: ["warm with dry winter"]
	},
	{
		terrainType: "hills",
		isCoastal: false,
		lattitudeMin: 41,
		lattitudeMax: 70,
		climate: ["cool & rainy"]
	},
	{
		terrainType: "hills",
		isCoastal: false,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climate: ["polar"]
	},
	{
		terrainType: "hills",
		isCoastal: true,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climate: ["tropical savanna"]
	},
	{
		terrainType: "hills",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climate: ["warm & rainy", "warm with dry summer"]
	},
	{
		terrainType: "hills",
		isCoastal: true,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climate: ["cool with dry winter"]
	},
	{
		terrainType: "hills",
		isCoastal: true,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climate: ["tundra"]
	},
	{
		terrainType: "jungle",
		isCoastal: false,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climate: ["equatorial"]
	},
	{
		terrainType: "jungle",
		isCoastal: true,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climate: ["monsoon"]
	},
	{
		terrainType: "jungle",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 90,
		climate: ["(treat as forest)"]
	},
	{
		terrainType: "mountains",
		isCoastal: "all",
		lattitudeMin: 0,
		lattitudeMax: 20,
		climate: ["warm with dry summer", "warm & rainy"]
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climate: ["warm with dry winter"]
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		lattitudeMin: 41,
		lattitudeMax: 70,
		climate: ["cool & rainy"]
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climate: ["polar"]
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climate: ["warm & rainy", "warm with dry summer"]
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		lattitudeMin: 41,
		lattitudeMax: 70,
		climate: ["cool with dry winter"]
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climate: ["tundra"]
	},
	{
		terrainType: "swamp",
		isCoastal: false,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climate: ["equatorial"]
	},
	{
		terrainType: "swamp",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climate: ["warm with dry summer"]
	},
	{
		terrainType: "swamp",
		isCoastal: true,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climate: ["monsoon"]
	},
	{
		terrainType: "swamp",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climate: ["warm & rainy"]
	},
	{
		terrainType: "swamp",
		isCoastal: "all",
		lattitudeMin: 41,
		lattitudeMax: 90,
		climate: ["(as per surrounding terrain)"]
	}
];

export default climates;
