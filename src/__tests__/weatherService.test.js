import dayjs from "dayjs";
import skyTable from "../modules/weather/data/skyTable";
import terrainTypes from "../modules/weather/data/terrainTypes";
import climates from "../modules/weather/data/climates";
import {
	generateWeather,
	getAverageTemperatureOfGivenDay,
	getClimate,
	getCloud,
	getPrecipitation,
	getPrecipitationChance,
	getSunriseSunset,
	getWind
} from "../modules/weather/weatherService";

describe("data validation", () => {
	describe("climate objects", () => {
		const allClimates = climates.generic.concat(climates.custom);
		allClimates.forEach((climate) => {
			describe(`climate: ${climate.name}`, () => {
				test("has required properties", () => {
					expect(climate).toHaveProperty("name");
					expect(climate).toHaveProperty("seasons");
					expect(climate).toHaveProperty("precipPeriods");
				});
				test("precipPeriods in ascending order", () => {
					for (let i = 1; i < climate.precipPeriods.length; i++) {
						expect(
							climate.precipPeriods[i].firstDay >
								climate.precipPeriods[i - 1].firstDay
						).toBe(true);
					}
				});
				test("precipPeriods.percentChance expressed between 0 and 1", () => {
					for (const percentChance of climate.precipPeriods) {
						expect(
							percentChance.percentChance >= 0 &&
								percentChance.percentChance <= 1
						).toBe(true);
					}
				});
				test("if only two seasons defined, they must be summer & winter", () => {
					allClimates
						.filter((c) => Object.keys(c.seasons).length === 2)
						.forEach((c) => {
							expect(c.seasons).toHaveProperty("summer");
							expect(c.seasons).toHaveProperty("winter");
						});
				});
			});
		});
	});
});

describe("getClimate() returns correct climate or 'no valid climate' error", () => {
	test(`${terrainTypes[0]} terrain`, () => {
		const t = terrainTypes[0];
		expect(() => getClimate(t, 0, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 10, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 20, false)).toThrow(/no valid climate/);
		expect(getClimate(t, 30, false).name).toBe("warm with dry winter");
		expect(getClimate(t, 40, false).name).toBe("warm with dry winter");
		expect(getClimate(t, 50, false).name).toBe("cool & rainy");
		expect(getClimate(t, 60, false).name).toBe("cool & rainy");
		expect(getClimate(t, 70, false).name).toBe("cool & rainy");
		expect(getClimate(t, 80, false).name).toBe("polar");
		expect(getClimate(t, 90, false).name).toBe("polar");
		expect(getClimate(t, 0, true).name).toBe("desert");
		expect(getClimate(t, 10, true).name).toBe("desert");
		expect(getClimate(t, 20, true).name).toBe("desert");
		expect(getClimate(t, 30, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 40, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 50, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 60, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 70, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 80, true).name).toBe("tundra");
		expect(getClimate(t, 90, true).name).toBe("tundra");
	});
	test(`${terrainTypes[1]} terrain`, () => {
		const t = terrainTypes[1];
		expect(getClimate(t, 0, false).name).toBe("desert");
		expect(getClimate(t, 10, false).name).toBe("desert");
		expect(getClimate(t, 20, false).name).toBe("desert");
		expect(getClimate(t, 30, false).name).toBe("desert");
		expect(() => getClimate(t, 40, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 50, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 60, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 70, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 80, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 90, false)).toThrow(/no valid climate/);
		expect(getClimate(t, 0, true).name).toBe("desert");
		expect(getClimate(t, 10, true).name).toBe("desert");
		expect(getClimate(t, 20, true).name).toBe("desert");
		expect(getClimate(t, 30, true).name).toBe("desert");
		expect(() => getClimate(t, 40, true)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 50, true)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 60, true)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 70, true)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 80, true)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 90, true)).toThrow(/no valid climate/);
	});
	test(`${terrainTypes[2]} terrain`, () => {
		const t = terrainTypes[2];
		expect(getClimate(t, 0, false).name).toBe("tropical savanna");
		expect(getClimate(t, 10, false).name).toBe("tropical savanna");
		expect(getClimate(t, 20, false).name).toBe("tropical savanna");
		expect(getClimate(t, 30, false).name).toBe("warm with dry winter");
		expect(getClimate(t, 40, false).name).toBe("warm with dry winter");
		expect(getClimate(t, 50, false).name).toBe("warm with dry winter");
		expect(getClimate(t, 60, false).name).toBe("cool & rainy");
		expect(getClimate(t, 70, false).name).toBe("cool & rainy");
		expect(() => getClimate(t, 80, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 90, false)).toThrow(/no valid climate/);
		expect(getClimate(t, 0, true).name).toBe("tropical savanna");
		expect(getClimate(t, 10, true).name).toBe("tropical savanna");
		expect(getClimate(t, 20, true).name).toBe("tropical savanna");
		expect(getClimate(t, 30, true).name).toBe("warm & rainy");
		expect(getClimate(t, 40, true).name).toBe("warm & rainy");
		expect(getClimate(t, 50, true).name).toBe("warm & rainy");
		expect(getClimate(t, 60, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 70, true).name).toBe("cool with dry winter");
		expect(() => getClimate(t, 80, true)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 90, true)).toThrow(/no valid climate/);
	});
	test(`${terrainTypes[3]} terrain`, () => {
		const t = terrainTypes[3];
		expect(getClimate(t, 0, false).name).toBe("tropical savanna");
		expect(getClimate(t, 10, false).name).toBe("tropical savanna");
		expect(getClimate(t, 20, false).name).toBe("tropical savanna");
		expect(getClimate(t, 30, false).name).toBe("steppe");
		expect(getClimate(t, 40, false).name).toBe("steppe");
		expect(getClimate(t, 50, false).name).toBe("steppe");
		expect(getClimate(t, 60, false).name).toBe("cool & rainy");
		expect(getClimate(t, 70, false).name).toBe("cool & rainy");
		expect(getClimate(t, 80, false).name).toBe("tundra");
		expect(getClimate(t, 90, false).name).toBe("tundra");
		expect(getClimate(t, 0, true).name).toBe("tropical savanna");
		expect(getClimate(t, 10, true).name).toBe("tropical savanna");
		expect(getClimate(t, 20, true).name).toBe("tropical savanna");
		expect(getClimate(t, 30, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 40, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 50, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 60, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 70, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 80, true).name).toBe("tundra");
		expect(getClimate(t, 90, true).name).toBe("tundra");
	});
	test(`${terrainTypes[4]} terrain`, () => {
		const t = terrainTypes[4];
		expect(getClimate(t, 0, false).name).toBe("tropical savanna");
		expect(getClimate(t, 10, false).name).toBe("tropical savanna");
		expect(getClimate(t, 20, false).name).toBe("tropical savanna");
		expect(getClimate(t, 30, false).name).toBe("warm with dry winter");
		expect(getClimate(t, 40, false).name).toBe("warm with dry winter");
		expect(getClimate(t, 50, false).name).toBe("cool & rainy");
		expect(getClimate(t, 60, false).name).toBe("cool & rainy");
		expect(getClimate(t, 70, false).name).toBe("cool & rainy");
		expect(getClimate(t, 80, false).name).toBe("polar");
		expect(getClimate(t, 90, false).name).toBe("polar");
		expect(getClimate(t, 0, true).name).toBe("tropical savanna");
		expect(getClimate(t, 10, true).name).toBe("tropical savanna");
		expect(getClimate(t, 20, true).name).toBe("tropical savanna");
		expect(getClimate(t, 30, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 40, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 50, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 60, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 70, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 80, true).name).toBe("tundra");
		expect(getClimate(t, 90, true).name).toBe("tundra");
	});
	test(`${terrainTypes[5]} terrain`, () => {
		const t = terrainTypes[5];
		expect(getClimate(t, 0, false).name).toBe("equatorial");
		expect(getClimate(t, 10, false).name).toBe("equatorial");
		expect(getClimate(t, 20, false).name).toBe("equatorial");
		expect(() => getClimate(t, 30, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 40, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 50, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 60, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 70, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 80, false)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 90, false)).toThrow(/no valid climate/);
		expect(getClimate(t, 0, true).name).toBe("monsoon");
		expect(getClimate(t, 10, true).name).toBe("monsoon");
		expect(getClimate(t, 20, true).name).toBe("monsoon");
		expect(getClimate(t, 30, true).name).toBe("warm & rainy");
		expect(getClimate(t, 40, true).name).toBe("warm & rainy");
		expect(getClimate(t, 50, true).name).toBe("warm & rainy");
		expect(getClimate(t, 60, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 70, true).name).toBe("cool with dry winter");
		expect(() => getClimate(t, 80, true)).toThrow(/no valid climate/);
		expect(() => getClimate(t, 90, true)).toThrow(/no valid climate/);
	});
	test(`${terrainTypes[6]} terrain`, () => {
		const t = terrainTypes[6];
		expect(getClimate(t, 0, false).name).toBe("warm & rainy");
		expect(getClimate(t, 10, false).name).toBe("warm & rainy");
		expect(getClimate(t, 20, false).name).toBe("warm & rainy");
		expect(getClimate(t, 30, false).name).toBe("warm with dry winter");
		expect(getClimate(t, 40, false).name).toBe("warm with dry winter");
		expect(getClimate(t, 50, false).name).toBe("cool & rainy");
		expect(getClimate(t, 60, false).name).toBe("cool & rainy");
		expect(getClimate(t, 70, false).name).toBe("cool & rainy");
		expect(getClimate(t, 80, false).name).toBe("polar");
		expect(getClimate(t, 90, false).name).toBe("polar");
		expect(getClimate(t, 0, true).name).toBe("warm & rainy");
		expect(getClimate(t, 10, true).name).toBe("warm & rainy");
		expect(getClimate(t, 20, true).name).toBe("warm & rainy");
		expect(getClimate(t, 30, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 40, true).name).toBe("warm with dry summer");
		expect(getClimate(t, 50, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 60, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 70, true).name).toBe("cool with dry winter");
		expect(getClimate(t, 80, true).name).toBe("tundra");
		expect(getClimate(t, 90, true).name).toBe("tundra");
	});
	test(`${terrainTypes[7]} terrain`, () => {
		const t = terrainTypes[7];
		expect(getClimate(t, 0, false).name).toBe("equatorial");
		expect(getClimate(t, 10, false).name).toBe("equatorial");
		expect(getClimate(t, 20, false).name).toBe("equatorial");
		expect(getClimate(t, 30, false).name).toBe("warm with dry summer");
		expect(getClimate(t, 40, false).name).toBe("warm with dry summer");
		expect(getClimate(t, 50, false).name).toBe("tundra");
		expect(getClimate(t, 60, false).name).toBe("tundra");
		expect(getClimate(t, 70, false).name).toBe("tundra");
		expect(getClimate(t, 80, false).name).toBe("tundra");
		expect(getClimate(t, 90, false).name).toBe("tundra");
		expect(getClimate(t, 0, true).name).toBe("monsoon");
		expect(getClimate(t, 10, true).name).toBe("monsoon");
		expect(getClimate(t, 20, true).name).toBe("monsoon");
		expect(getClimate(t, 30, true).name).toBe("warm & rainy");
		expect(getClimate(t, 40, true).name).toBe("warm & rainy");
		expect(getClimate(t, 50, true).name).toBe("tundra");
		expect(getClimate(t, 60, true).name).toBe("tundra");
		expect(getClimate(t, 70, true).name).toBe("tundra");
		expect(getClimate(t, 80, true).name).toBe("tundra");
		expect(getClimate(t, 90, true).name).toBe("tundra");
	});
});

describe("getAverageTemperatureOfGivenDay()", () => {
	const springFirstDay = 60;
	const summerFirstDay = 152;
	const autumnFirstDay = 244;
	const winterFirstDay = 335;

	test("handles explicitely defined seasons", () => {
		const climate = {
			seasons: {
				spring: { high: 10, low: 0 },
				summer: { high: 20, low: 10 },
				autumn: { high: 5, low: -5 },
				winter: { high: 0, low: -10 }
			}
		};
		expect(
			getAverageTemperatureOfGivenDay(climate, springFirstDay)
		).toEqual(climate.seasons.spring);
		expect(
			getAverageTemperatureOfGivenDay(climate, summerFirstDay)
		).toEqual(climate.seasons.summer);
		expect(
			getAverageTemperatureOfGivenDay(climate, autumnFirstDay)
		).toEqual(climate.seasons.autumn);
		expect(
			getAverageTemperatureOfGivenDay(climate, winterFirstDay)
		).toEqual(climate.seasons.winter);
	});

	test("linearly interpolates daily temp when only opposite seasons are defined", () => {
		const climate = {
			seasons: {
				summer: { high: 10, low: 0 },
				winter: { high: 0, low: -10 }
			}
		};
		expect(getAverageTemperatureOfGivenDay(climate, 245)).toEqual({
			high: 10,
			low: 0
		});
		expect(getAverageTemperatureOfGivenDay(climate, 284)).toEqual({
			high: 6,
			low: -4
		});
		expect(getAverageTemperatureOfGivenDay(climate, 2)).toEqual({
			high: 0,
			low: -10
		});
	});

	test("handles climates with only a single season specified", () => {
		const climate = {
			seasons: {
				summer: { high: 33, low: 23 }
			}
		};
		expect(getAverageTemperatureOfGivenDay(climate, 1)).toEqual(
			climate.seasons.summer
		);
	});
});

describe("getPrecipitationChance()", () => {
	const precipPeriods = [
		{
			firstDay: 2,
			percentChance: 1
		},
		{
			firstDay: 60,
			percentChance: 2
		},
		{
			firstDay: 152,
			percentChance: 3
		}
	];
	test("returns first precip period", () => {
		expect(getPrecipitationChance(2, precipPeriods)).toBe(
			precipPeriods[0].percentChance
		);
		expect(getPrecipitationChance(35, precipPeriods)).toBe(
			precipPeriods[0].percentChance
		);
		expect(getPrecipitationChance(59, precipPeriods)).toBe(
			precipPeriods[0].percentChance
		);
	});
	test("returns second precip period", () => {
		expect(getPrecipitationChance(60, precipPeriods)).toBe(
			precipPeriods[1].percentChance
		);
		expect(getPrecipitationChance(85, precipPeriods)).toBe(
			precipPeriods[1].percentChance
		);
		expect(getPrecipitationChance(151, precipPeriods)).toBe(
			precipPeriods[1].percentChance
		);
	});
	test("returns third precip period", () => {
		expect(getPrecipitationChance(152, precipPeriods)).toBe(
			precipPeriods[2].percentChance
		);
		expect(getPrecipitationChance(365, precipPeriods)).toBe(
			precipPeriods[2].percentChance
		);
		expect(getPrecipitationChance(1, precipPeriods)).toBe(
			precipPeriods[2].percentChance
		);
	});
});

describe("getPrecipitation()", () => {
	const climate = {
		name: "sample climate",
		seasons: {
			summer: { high: 37, low: 29 },
			winter: { high: 32, low: 16 }
		},
		precipPeriods: [
			{
				firstDay: 91,
				percentChance: 1
			},
			{
				firstDay: 121,
				percentChance: 0
			},
			{
				firstDay: 274,
				percentChance: 0.5
			}
		]
	};

	afterEach(() => {
		jest.restoreAllMocks();
	});

	test("respects precipitation chance", () => {
		jest.spyOn(global.Math, "random").mockReturnValue(0.5);
		expect(getPrecipitation(climate, 121, 1)).toBe("none");
		expect(getPrecipitation(climate, 91, 1)).toBe("strong rainfall");
	});

	test("respectes temperature for rain vs snow", () => {
		jest.spyOn(global.Math, "random").mockReturnValue(0.1);
		expect(getPrecipitation(climate, 91, -5)).toBe("few flakes");
		expect(getPrecipitation(climate, 91, 5)).toBe("light mist");
	});
});

describe("getCloud()", () => {
	test("bias toward clearer skies when no precipitation", () => {
		const totals = {};
		totals[skyTable[0].cloud] = 0;
		totals[skyTable[1].cloud] = 0;
		totals[skyTable[2].cloud] = 0;
		totals[skyTable[3].cloud] = 0;
		totals[skyTable[4].cloud] = 0;
		totals[skyTable[5].cloud] = 0;

		for (let i = 0; i < 10000; i++) {
			const cloud = getCloud("none");
			totals[cloud]++;
		}
		expect(Math.max(...Object.values(totals))).toEqual(
			totals[skyTable[0].cloud]
		);
	});
});

describe("getWind()", () => {
	test("returns wind based on given clouds", () => {
		expect(["Calm", "Light air", "Light breeze"]).toContain(
			getWind(skyTable[0].cloud).type
		);
	});
});

function yearOfWeather() {
	const terrainType = "hills"; //from "../modules/weather/data/terrainTypes"
	const latitude = 65;
	const isCoastal = true;
	let previousWeather;

	let fileContents = `${
		isCoastal ? "" : "non "
	}coastal ${terrainType} at ${latitude} latitude\n`;
	fileContents +=
		"date,tempHigh,tempLow,cloud,precip,wind,speed,direction,sunrise,sunset\n";

	for (let dayOfYear = 1; dayOfYear <= 365; dayOfYear++) {
		const weather = generateWeather(
			terrainType,
			latitude,
			isCoastal,
			dayOfYear,
			previousWeather
		);

		const { sunrise, sunset } = getSunriseSunset(latitude, dayOfYear);

		// write weather to fileContents
		const date = dayjs("0793-01-01")
			.add(dayOfYear - 1, "day")
			.format("D MMM");

		fileContents += `${date},`;
		fileContents += `${weather.temperature.high}º,`;
		fileContents += `${weather.temperature.low}º,`;
		fileContents += `${weather.cloud},`;
		fileContents += `${weather.precipitation},`;
		fileContents += `${weather.wind.type},`;
		fileContents += `${weather.wind.speed} mph,`;
		fileContents += `${weather.wind.direction},`;
		fileContents += `${sunrise}:00,`;
		fileContents += `${sunset}:00\n`;
	}

	const fs = require("node:fs");
	fs.writeFile("./src/__tests__/year_of_weather.csv", fileContents, (err) => {
		if (err) console.error(err);
	});
}

// yearOfWeather();
