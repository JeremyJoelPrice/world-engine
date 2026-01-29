import climates from "./climates";

const climateLookup = {
	"broken land": {
		true: {
			tropical: climates.generic.desert,
			subtropical: climates.generic["warm with dry summer"],
			temperate: climates.generic["warm with dry summer"],
			"cool temperate": climates.generic["warm with dry summer"],
			subpolar: climates.generic["cool with dry winter"],
			polar: climates.generic.tundra
		},
		false: {
			subtropical: climates.generic["warm with dry winter"],
			temperate: climates.generic["warm with dry winter"],
			"cool temperate": climates.generic["cool & rainy"],
			subpolar: climates.generic["cool & rainy"],
			polar: climates.generic.polar
		}
	},
	desert: {
		true: {
			tropical: climates.generic.desert,
			subtropical: climates.generic.desert
		},
		false: {
			tropical: climates.generic.desert,
			subtropical: climates.generic.desert
		}
	},
	forest: {
		true: {
			tropical: climates.generic["tropical savanna"],
			subtropical: climates.generic["warm & rainy"],
			temperate: climates.generic["warm & rainy"],
			"cool temperate": climates.generic["warm & rainy"],
			subpolar: climates.generic["cool with dry winter"]
		},
		false: {
			tropical: climates.generic["tropical savanna"],
			subtropical: climates.generic["warm with dry winter"],
			temperate: climates.generic["warm with dry winter"],
			"cool temperate": climates.generic["warm with dry winter"],
			subpolar: climates.generic["cool & rainy"]
		}
	},
	grassland: {
		true: {
			tropical: climates.generic["tropical savanna"],
			subtropical: climates.generic["warm with dry summer"],
			temperate: climates.generic["warm with dry summer"],
			"cool temperate": climates.generic["warm with dry summer"],
			subpolar: climates.generic["cool with dry winter"],
			polar: climates.generic.tundra
		},
		false: {
			tropical: climates.generic["tropical savanna"],
			subtropical: climates.generic.steppe,
			temperate: climates.generic.steppe,
			"cool temperate": climates.generic.steppe,
			subpolar: climates.generic["cool & rainy"],
			polar: climates.generic.tundra
		}
	},
	hills: {
		true: {
			tropical: climates.generic["tropical savanna"],
			subtropical: climates.generic["warm with dry summer"],
			temperate: climates.generic["warm with dry summer"],
			"cool temperate": climates.generic["warm with dry summer"],
			subpolar: climates.generic["cool with dry winter"],
			polar: climates.generic.tundra
		},
		false: {
			tropical: climates.generic["tropical savanna"],
			subtropical: climates.generic["warm with dry winter"],
			temperate: climates.generic["warm with dry winter"],
			"cool temperate": climates.generic["cool & rainy"],
			subpolar: climates.generic["cool & rainy"],
			polar: climates.generic.polar
		}
	},
	jungle: {
		true: {
			tropical: climates.generic.monsoon,
			subtropical: climates.generic["warm & rainy"],
			temperate: climates.generic["warm & rainy"],
			"cool temperate": climates.generic["warm & rainy"],
			subpolar: climates.generic["cool with dry winter"]
		},
		false: {
			tropical: climates.generic.equatorial
		}
	},
	mountains: {
		true: {
			tropical: climates.generic["warm & rainy"],
			subtropical: climates.generic["warm with dry summer"],
			temperate: climates.generic["warm with dry summer"],
			"cool temperate": climates.generic["cool with dry winter"],
			subpolar: climates.generic["cool with dry winter"],
			polar: climates.generic.tundra
		},
		false: {
			tropical: climates.generic["warm & rainy"],
			subtropical: climates.generic["warm with dry winter"],
			"cool temperate": climates.generic["cool & rainy"],
			temperate: climates.generic["warm with dry winter"],
			subpolar: climates.generic["cool & rainy"],
			polar: climates.generic.polar
		}
	},
	swamp: {
		true: {
			tropical: climates.generic.monsoon,
			subtropical: climates.generic["warm & rainy"],
			temperate: climates.generic["warm & rainy"],
			"cool temperate": climates.generic.tundra,
			subpolar: climates.generic.tundra,
			polar: climates.generic.tundra
		},
		false: {
			tropical: climates.generic.equatorial,
			subtropical: climates.generic["warm with dry summer"],
			temperate: climates.generic["warm with dry summer"],
			"cool temperate": climates.generic.tundra,
			subpolar: climates.generic.tundra,
			polar: climates.generic.tundra
		}
	}
};

export default climateLookup;
