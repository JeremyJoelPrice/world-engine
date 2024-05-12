import terrainTypes from "./terrainTypes";

const climateCategories = [
	{
		terrainType: "broken land",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climateCategory: "warm with dry winter"
	},
	{
		terrainType: "broken land",
		isCoastal: false,
		lattitudeMin: 41,
		lattitudeMax: 70,
		climateCategory: "cool & rainy"
	},
	{
		terrainType: "broken land",
		isCoastal: false,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climateCategory: "polar"
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climateCategory: "desert"
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climateCategory: "warm & rainy, or warm with dry summer"
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climateCategory: "cool with dry winter"
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climateCategory: "tundra"
	},
	{
		terrainType: "desert",
		isCoastal: "All",
		lattitudeMin: 0,
		lattitudeMax: 30,
		climateCategory: "desert"
	},
	{
		terrainType: "desert",
		isCoastal: "All",
		lattitudeMin: 31,
		lattitudeMax: 90,
		climateCategory: "n/a"
	},
	{
		terrainType: "forest",
		isCoastal: "All",
		lattitudeMin: 0,
		lattitudeMax: 20,
		climateCategory: "tropical savanna"
	},
	{
		terrainType: "forest",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climateCategory: "warm with dry winter"
	},
	{
		terrainType: "forest",
		isCoastal: false,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climateCategory: "cool & rainy"
	},
	{
		terrainType: "forest",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climateCategory: "warm & rainy, or warm with dry summer"
	},
	{
		terrainType: "forest",
		isCoastal: true,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climateCategory: "cool with dry winter"
	},
	{
		terrainType: "forest",
		isCoastal: "All",
		lattitudeMin: 71,
		lattitudeMax: 90,
		climateCategory: "n/a"
	},
	{
		terrainType: "grassland",
		isCoastal: "All",
		lattitudeMin: 0,
		lattitudeMax: 20,
		climateCategory: "tropical savanna"
	},
	{
		terrainType: "grassland",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climateCategory: "steppe"
	},
	{
		terrainType: "grassland",
		isCoastal: false,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climateCategory: "cool & rainy"
	},
	{
		terrainType: "grassland",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climateCategory: "warm & rainy, or warm with dry summer"
	},
	{
		terrainType: "grassland",
		isCoastal: true,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climateCategory: "cool with dry winter"
	},
	{
		terrainType: "grassland",
		isCoastal: "All",
		lattitudeMin: 71,
		lattitudeMax: 90,
		climateCategory: "tundra, or polar"
	},
	{
		terrainType: "hills",
		isCoastal: false,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climateCategory: "tropical savanna"
	},
	{
		terrainType: "hills",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climateCategory: "warm with dry winter"
	},
	{
		terrainType: "hills",
		isCoastal: false,
		lattitudeMin: 41,
		lattitudeMax: 70,
		climateCategory: "cool & rainy"
	},
	{
		terrainType: "hills",
		isCoastal: false,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climateCategory: "polar"
	},
	{
		terrainType: "hills",
		isCoastal: true,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climateCategory: "tropical savanna"
	},
	{
		terrainType: "hills",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 50,
		climateCategory: "warm & rainy, or warm with dry summer"
	},
	{
		terrainType: "hills",
		isCoastal: true,
		lattitudeMin: 51,
		lattitudeMax: 70,
		climateCategory: "cool with dry winter"
	},
	{
		terrainType: "hills",
		isCoastal: true,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climateCategory: "tundra"
	},
	{
		terrainType: "jungle",
		isCoastal: false,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climateCategory: "equatorial"
	},
	{
		terrainType: "jungle",
		isCoastal: true,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climateCategory: "monsoon"
	},
	{
		terrainType: "jungle",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 90,
		climateCategory: "(treat as forest)"
	},
	{
		terrainType: "mountains",
		isCoastal: "All",
		lattitudeMin: 0,
		lattitudeMax: 20,
		climateCategory: "warm with dry summer, or warm & rainy"
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climateCategory: "warm with dry winter"
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		lattitudeMin: 41,
		lattitudeMax: 70,
		climateCategory: "cool & rainy"
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climateCategory: "polar"
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climateCategory: "warm & rainy, or warm with dry summer"
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		lattitudeMin: 41,
		lattitudeMax: 70,
		climateCategory: "cool with dry winter"
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		lattitudeMin: 71,
		lattitudeMax: 90,
		climateCategory: "tundra"
	},
	{
		terrainType: "swamp",
		isCoastal: false,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climateCategory: "equatorial"
	},
	{
		terrainType: "swamp",
		isCoastal: false,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climateCategory: "warm with dry summer"
	},
	{
		terrainType: "swamp",
		isCoastal: true,
		lattitudeMin: 0,
		lattitudeMax: 20,
		climateCategory: "monsoon"
	},
	{
		terrainType: "swamp",
		isCoastal: true,
		lattitudeMin: 21,
		lattitudeMax: 40,
		climateCategory: "warm & rainy"
	},
	{
		terrainType: "swamp",
		isCoastal: "All",
		lattitudeMin: 41,
		lattitudeMax: 90,
		climateCategory: "(as per surrounding terrain)"
	}
];

export default climateCategories;
