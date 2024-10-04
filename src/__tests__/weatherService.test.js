import skyTable from "../modules/weather/data/skyTable";
import terrainTypes from "../modules/weather/data/terrainTypes";
import windTypes from "../modules/weather/data/windTypes";
import {
	getAverageTemperatureOfGivenDay,
	getClimate,
	getPrecipitationChance,
	getSky,
	getWind
} from "../modules/weather/weatherService";

describe("getClimate()", () => {
	describe("returns correct climate or 'no valid climate' error", () => {
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
});

describe("getTemperature()", () => {
	describe("getAverageTemperatureOfGivenDay()", () => {
		const climate = {
			seasons: {
				summer: { high: 10, low: 0 },
				winter: { high: 0, low: -10 }
			}
		};

		test("returns average temp for the given day", () => {
			expect(getAverageTemperatureOfGivenDay(climate, 152)).toEqual({
				high: 10,
				low: 0
			});
			expect(getAverageTemperatureOfGivenDay(climate, 1)).toEqual({
				high: 0,
				low: -10
			});
		});
		test("calulates linear values for seasons with no explicit data", () => {
			expect(getAverageTemperatureOfGivenDay(climate, 245)).toEqual({
				high: 10,
				low: 0
			});
			expect(getAverageTemperatureOfGivenDay(climate, 284)).toEqual({
				high: 6,
				low: -4
			});
		});
		test("handles climates with only a single season specified", () => {
			const climate = {
				seasons: {
					summer: { high: 33, low: 23 }
				}
			};
			expect(getAverageTemperatureOfGivenDay(climate, 1)).toEqual({
				high: 33,
				low: 23
			});
		});
		test("production data", () => {
			expect(
				getAverageTemperatureOfGivenDay(
					{
						name: "desert",
						seasons: {
							summer: {
								high: 39,
								low: 25
							},
							winter: {
								high: 20,
								low: 7
							}
						},
						precipPeriods: [{ firstDay: 1, percentChance: 5 }]
					},
					1
				)
			).toEqual({
				high: 20,
				low: 7
			});
		});
	});
});

describe("getPrecipitationChance()", () => {
	const precipPeriods = [
		{
			firstDay: 60,
			lastDay: 151,
			percentChance: 50
		},
		{
			firstDay: 152,
			lastDay: 1,
			percentChance: 40
		},
		{
			firstDay: 2,
			lastDay: 59,
			percentChance: 30
		}
	];
	test("returns valid precip period", () => {
		expect(getPrecipitationChance(65, precipPeriods)).toBe(50);
	});
	test("handles period starts on day of year", () => {
		expect(getPrecipitationChance(152, precipPeriods)).toBe(40);
	});
	test("handles period ends on day of year", () => {
		expect(getPrecipitationChance(59, precipPeriods)).toBe(30);
	});
	test("handles period contains end of year", () => {
		expect(getPrecipitationChance(1, precipPeriods)).toBe(40);
		expect(getPrecipitationChance(365, precipPeriods)).toBe(40);
	});
	test("handles array with a single precipPeriod", () => {
		const preciPeriods = [{ firstDay: 1, percentChance: 40 }];
		expect(getPrecipitationChance(50, preciPeriods)).toEqual(40);
	});
});

describe("getSky", () => {
	test("returns a random sky", () => {
		for (let i = 0; i < 1000; i++) {
			expect(getSky()).toMatchObject({
				precipitation: expect.any(String),
				cloud: expect.any(String),
				windTypeFactor: expect.any(String)
			});
		}
	});
	test("respects willPrecipitate boolean value", () => {
		let totals = {};

		for (let i = 0; i < 10000; i++) {
			const { precipitation } = getSky(false, 0);
			totals[precipitation] = totals[precipitation]
				? totals[precipitation] + 1
				: 1;
		}

		expect(totals.none).toEqual(10000);

		totals = { none: 0 };

		for (let i = 0; i < 10000; i++) {
			const { precipitation } = getSky(true, 0);
			totals[precipitation] = totals[precipitation]
				? totals[precipitation] + 1
				: 1;
		}
		expect(totals.none).toEqual(0);
	});
	test("bias toward clearer skies when no precipitation", () => {
		const totals = {};
		totals[skyTable[0].cloud] = 0;
		totals[skyTable[1].cloud] = 0;
		totals[skyTable[2].cloud] = 0;
		totals[skyTable[3].cloud] = 0;
		totals[skyTable[4].cloud] = 0;
		totals[skyTable[5].cloud] = 0;

		for (let i = 0; i < 10000; i++) {
			const { cloud } = getSky(0);
			totals[cloud]++;
		}
		expect(Math.max(...Object.values(totals))).toEqual(
			totals[skyTable[0].cloud]
		);
	});
	describe("getWind()", () => {
		test("returns wind based on give dice result", () => {
			expect(getWind(1)).toMatchObject({
				type: windTypes[0].wind,
				speed: expect.any(Number),
				direction: expect.any(String),
				description: windTypes[0].description
			});
			expect(getWind(10)).toMatchObject({
				type: windTypes[5].wind,
				speed: expect.any(Number),
				direction: expect.any(String),
				description: windTypes[5].description
			});
			expect(getWind(19)).toMatchObject({
				type: windTypes[10].wind,
				speed: expect.any(Number),
				direction: expect.any(String),
				description: windTypes[10].description
			});
		});
	});
});
