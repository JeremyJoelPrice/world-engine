import climates from "./climates";

const climateLookup = {
	"broken land": {
		true: {
			tropical: climates.generic[0], // desert
			subtropical: climates.generic[6], // warm with dry summer
			temperate: climates.generic[6], // warm with dry summer
			"cool temperate": climates.generic[6], // warm with dry summer
			subpolar: climates.generic[9], // cool with dry winter
			polar: climates.generic[10] // tundra
		},
		false: {
			subtropical: climates.generic[7], // warm with dry winter
			temperate: climates.generic[7], // warm with dry winter
			"cool temperate": climates.generic[8], // cool & rainy
			subpolar: climates.generic[8], // cool & rainy
			polar: climates.generic[11] // polar
		}
	},
	desert: {
		true: {
			tropical: climates.generic[0], // desert
			subtropical: climates.generic[0] // desert
		},
		false: {
			tropical: climates.generic[0], // desert
			subtropical: climates.generic[0] // desert
		}
	},
	forest: {
		true: {
			tropical: climates.generic[1], // tropical savanna
			subtropical: climates.generic[5], // warm & rainy
			temperate: climates.generic[5], // warm & rainy
			"cool temperate": climates.generic[5], // warm & rainy
			subpolar: climates.generic[9] // cool with dry winter
		},
		false: {
			tropical: climates.generic[1], // tropical savanna
			subtropical: climates.generic[7], // warm with dry winter
			temperate: climates.generic[7], // warm with dry winter
			"cool temperate": climates.generic[7], // warm with dry winter
			subpolar: climates.generic[8] // cool & rainy
		}
	},
	grassland: {
		true: {
			tropical: climates.generic[1], // tropical savanna
			subtropical: climates.generic[6], // warm with dry summer
			temperate: climates.generic[6], // warm with dry summer
			"cool temperate": climates.generic[6], // warm with dry summer
			subpolar: climates.generic[9], // cool with dry winter
			polar: climates.generic[10] // tundra
		},
		false: {
			tropical: climates.generic[1], // tropical savanna
			subtropical: climates.generic[2], // steppe
			temperate: climates.generic[2], // steppe
			"cool temperate": climates.generic[2], // steppe
			subpolar: climates.generic[8], // cool & rainy
			polar: climates.generic[10] // tundra
		}
	},
	hills: {
		true: {
			tropical: climates.generic[1], // tropical savanna
			subtropical: climates.generic[6], // warm with dry summer
			temperate: climates.generic[6], // warm with dry summer
			"cool temperate": climates.generic[6], // warm with dry summer
			subpolar: climates.generic[9], // cool with dry winter
			polar: climates.generic[10] // tundra
		},
		false: {
			tropical: climates.generic[1], // tropical savanna
			subtropical: climates.generic[7], // warm with dry winter
			temperate: climates.generic[7], // warm with dry winter
			"cool temperate": climates.generic[8], // cool & rainy
			subpolar: climates.generic[8], // cool & rainy
			polar: climates.generic[11] // polar
		}
	},
	jungle: {
		true: {
			tropical: climates.generic[4], // monsoon
			subtropical: climates.generic[5], // warm & rainy
			temperate: climates.generic[5], // warm & rainy
			"cool temperate": climates.generic[5], // warm & rainy
			subpolar: climates.generic[9] // cool with dry winter
		},
		false: {
			tropical: climates.generic[3] // equatorial
		}
	},
	mountains: {
		true: {
			tropical: climates.generic[5], // warm & rainy
			subtropical: climates.generic[6], // warm with dry summer
			temperate: climates.generic[6], // warm with dry summer
			"cool temperate": climates.generic[9], // cool with dry winter
			subpolar: climates.generic[9], // cool with dry winter
			polar: climates.generic[10] // tundra
		},
		false: {
			tropical: climates.generic[5], // warm & rainy
			subtropical: climates.generic[7], // warm with dry winter
			"cool temperate": climates.generic[8], // cool & rainy
			temperate: climates.generic[7], // warm with dry winter
			subpolar: climates.generic[8], // cool & rainy
			polar: climates.generic[11] // polar
		}
	},
	swamp: {
		true: {
			tropical: climates.generic[4], // monsoon
			subtropical: climates.generic[5], // warm & rainy
			temperate: climates.generic[5], // warm & rainy
			"cool temperate": climates.generic[10], // tundra
			subpolar: climates.generic[10], // tundra
			polar: climates.generic[10] // tundra
		},
		false: {
			tropical: climates.generic[3], // equatorial
			subtropical: climates.generic[6], // warm with dry summer
			temperate: climates.generic[6], // warm with dry summer
			"cool temperate": climates.generic[10], // tundra
			subpolar: climates.generic[10], // tundra
			polar: climates.generic[10] // tundra
		}
	}
};

export default climateLookup;
