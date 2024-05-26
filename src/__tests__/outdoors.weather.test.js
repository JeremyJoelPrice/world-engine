import {
	getClimate,
	getCurrentPrecipChance,
	getCurrentSeason,
	getSeasonsAndPrecipByClimate
} from "../modules/outdoors/weather/util";

describe("getClimate()", () => {
	test("returns array containing expected climate type, or multiple types", () => {
		expect(getClimate("broken land", 21, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimate("broken land", 21, true)).toEqual([
			"warm & rainy",
			"warm with dry summer"
		]);
	});
	test("handles terrain type", () => {
		expect(getClimate("desert", 21, false)).toEqual(["desert"]);
		expect(getClimate("grassland", 21, false)).toEqual(["steppe"]);
	});
	test("handles lattitude", () => {
		expect(getClimate("forest", 0, false)).toEqual(["tropical savanna"]);
		expect(getClimate("forest", 1, false)).toEqual(["tropical savanna"]);
		expect(getClimate("forest", 20, false)).toEqual(["tropical savanna"]);
		expect(getClimate("forest", 21, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimate("forest", 50, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimate("forest", 50, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimate("forest", 51, false)).toEqual(["cool & rainy"]);
		expect(getClimate("forest", 70, false)).toEqual(["cool & rainy"]);
		expect(() => getClimate("forest", -1, false)).toThrow(/undefined/);
		expect(() => getClimate("forest", 91, false)).toThrow(/undefined/);
	});
	test("handles isCoastal", () => {
		expect(getClimate("mountains", 21, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimate("mountains", 21, true)).toEqual([
			"warm & rainy",
			"warm with dry summer"
		]);
		expect(getClimate("mountains", 0, false)).toEqual([
			"warm with dry summer",
			"warm & rainy"
		]);
		expect(getClimate("mountains", 0, true)).toEqual([
			"warm with dry summer",
			"warm & rainy"
		]);
	});
	test("returns n/a for an empty option, but does not error", () => {
		expect(getClimate("desert", 31, false)).toEqual(["n/a"]);
	});
});

describe("getSeasonsAndPrecipByClimate()", () => {
	test("returns seasons and precip periods of the given climate", () => {
		expect(getSeasonsAndPrecipByClimate("desert")).toEqual({
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
						{
							name: "hot",
							percentChance: 90,
							temperature: "21-32"
						},
						{ name: "very hot", percentChance: 5, temperature: 43 }
					]
				}
			],
			precipPeriods: [{ firstDay: 1, percentChance: 5 }]
		});
	});
});

describe("getCurrentSeason()", () => {
	const seasons = [
		{
			name: "winter",
			firstDay: 335,
			lastDay: 59
		},
		{
			name: "spring",
			firstDay: 60,
			lastDay: 151
		},
		{
			name: "summer",
			firstDay: 152,
			lastDay: 243
		},
		{
			name: "autumn",
			firstDay: 244,
			lastDay: 334
		}
	];
	test("returns valid season object", () => {
		expect(getCurrentSeason(1, seasons)).toEqual({
			name: "winter",
			firstDay: 335,
			lastDay: 59
		});
	});
	test("handles season starts on day of year", () => {
		expect(getCurrentSeason(151, seasons)).toEqual({
			name: "spring",
			firstDay: 60,
			lastDay: 151
		});
	});
	test("handles season ends of day of year", () => {
		expect(getCurrentSeason(152, seasons)).toEqual({
			name: "summer",
			firstDay: 152,
			lastDay: 243
		});
	});
	test("handles season containing end of year", () => {
		expect(getCurrentSeason(1, seasons)).toEqual({
			name: "winter",
			firstDay: 335,
			lastDay: 59
		});
		expect(getCurrentSeason(365, seasons)).toEqual({
			name: "winter",
			firstDay: 335,
			lastDay: 59
		});
	});
});

describe("getCurrentPrecipChance()", () => {
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
		expect(getCurrentPrecipChance(65, precipPeriods)).toEqual(50);
	});
	test("handles period starts on day of year", () => {
		expect(getCurrentPrecipChance(152, precipPeriods)).toEqual(40);
	});
	test("handles period ends on day of year", () => {
		expect(getCurrentPrecipChance(59, precipPeriods)).toEqual(30);
	});
	test("handles period contains end of year", () => {
		expect(getCurrentPrecipChance(1, precipPeriods)).toEqual(40);
		expect(getCurrentPrecipChance(365, precipPeriods)).toEqual(40);
	});
});

describe("getCurrentSky", () => {
	// returns a random sky
	test("returns a random sky", () => {});
	// returns a clear sky given zero chance of precipitation
});
