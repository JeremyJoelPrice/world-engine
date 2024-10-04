import climateData from "./climates";

const climates = [
	{
		terrainType: "broken land",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: climateData[7] // warm with dry winter
	},
	{
		terrainType: "broken land",
		isCoastal: false,
		latitudeMin: 41,
		latitudeMax: 70,
		climate: climateData[8] // cool & rainy
	},
	{
		terrainType: "broken land",
		isCoastal: false,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: climateData[11] // polar
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: climateData[0] // desert
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: climateData[6] // warm with dry summer
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: climateData[9] // cool with dry winter
	},
	{
		terrainType: "broken land",
		isCoastal: true,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: climateData[10] // tundra
	},
	{
		terrainType: "desert",
		isCoastal: "all",
		latitudeMin: 0,
		latitudeMax: 30,
		climate: climateData[0] // desert
	},
	{
		terrainType: "forest",
		isCoastal: "all",
		latitudeMin: 0,
		latitudeMax: 20,
		climate: climateData[1] // tropical savanna
	},
	{
		terrainType: "forest",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: climateData[7] // warm with dry winter
	},
	{
		terrainType: "forest",
		isCoastal: false,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: climateData[8] // cool & rainy
	},
	{
		terrainType: "forest",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: climateData[5] // warm & rainy
	},
	{
		terrainType: "forest",
		isCoastal: true,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: climateData[9] // cool with dry winter
	},
	{
		terrainType: "grassland",
		isCoastal: "all",
		latitudeMin: 0,
		latitudeMax: 20,
		climate: climateData[1] // tropical savanna
	},
	{
		terrainType: "grassland",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: climateData[2] // steppe
	},
	{
		terrainType: "grassland",
		isCoastal: false,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: climateData[8] // cool & rainy
	},
	{
		terrainType: "grassland",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: climateData[6] // warm with dry summer
	},
	{
		terrainType: "grassland",
		isCoastal: true,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: climateData[9] // cool with dry winter
	},
	{
		terrainType: "grassland",
		isCoastal: "all",
		latitudeMin: 71,
		latitudeMax: 90,
		climate: climateData[10] // tundra
	},
	{
		terrainType: "hills",
		isCoastal: false,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: climateData[1] // tropical savanna
	},
	{
		terrainType: "hills",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: climateData[7] // warm with dry winter
	},
	{
		terrainType: "hills",
		isCoastal: false,
		latitudeMin: 41,
		latitudeMax: 70,
		climate: climateData[8] // cool & rainy
	},
	{
		terrainType: "hills",
		isCoastal: false,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: climateData[11] // polar
	},
	{
		terrainType: "hills",
		isCoastal: true,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: climateData[1] // tropical savanna
	},
	{
		terrainType: "hills",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: climateData[6] // warm with dry summer
	},
	{
		terrainType: "hills",
		isCoastal: true,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: climateData[9] // cool with dry winter
	},
	{
		terrainType: "hills",
		isCoastal: true,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: climateData[10] // tundra
	},
	{
		terrainType: "jungle",
		isCoastal: false,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: climateData[3] // equatorial
	},
	{
		terrainType: "jungle",
		isCoastal: true,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: climateData[4] // monsoon
	},
	{
		terrainType: "jungle",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 50,
		climate: climateData[5] // warm & rainy
	},
	{
		terrainType: "jungle",
		isCoastal: true,
		latitudeMin: 51,
		latitudeMax: 70,
		climate: climateData[9] // cool with dry winter
	},
	{
		terrainType: "mountains",
		isCoastal: "all",
		latitudeMin: 0,
		latitudeMax: 20,
		climate: climateData[5] // warm & rainy
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: climateData[7] // warm with dry winter
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		latitudeMin: 41,
		latitudeMax: 70,
		climate: climateData[8] // cool & rainy
	},
	{
		terrainType: "mountains",
		isCoastal: false,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: climateData[11] // polar
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: climateData[6] // warm with dry summer
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		latitudeMin: 41,
		latitudeMax: 70,
		climate: climateData[9] // cool with dry winter
	},
	{
		terrainType: "mountains",
		isCoastal: true,
		latitudeMin: 71,
		latitudeMax: 90,
		climate: climateData[10] // tundra
	},
	{
		terrainType: "swamp",
		isCoastal: false,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: climateData[3] // equatorial
	},
	{
		terrainType: "swamp",
		isCoastal: false,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: climateData[6] // warm with dry summer
	},
	{
		terrainType: "swamp",
		isCoastal: true,
		latitudeMin: 0,
		latitudeMax: 20,
		climate: climateData[4] // monsoon
	},
	{
		terrainType: "swamp",
		isCoastal: true,
		latitudeMin: 21,
		latitudeMax: 40,
		climate: climateData[5] // warm & rainy
	},
	{
		terrainType: "swamp",
		isCoastal: "all",
		latitudeMin: 41,
		latitudeMax: 90,
		climate: climateData[10] // tundra
	}
];

export default climates;
