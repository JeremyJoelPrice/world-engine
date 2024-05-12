import {
	getClimateCategory,
	getDaysPerYear,
	getSeason
} from "../modules/outdoors/util";

describe("getClimateCategory()", () => {
	test("returns array containing expected climate type, or multiple types", () => {
		expect(getClimateCategory("broken land", 21, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimateCategory("broken land", 21, true)).toEqual([
			"warm & rainy",
			"warm with dry summer"
		]);
	});
	test("handles terrain type", () => {
		expect(getClimateCategory("desert", 21, false)).toEqual(["desert"]);
		expect(getClimateCategory("grassland", 21, false)).toEqual(["steppe"]);
	});
	test("handles lattitude", () => {
		expect(getClimateCategory("forest", 0, false)).toEqual([
			"tropical savanna"
		]);
		expect(getClimateCategory("forest", 1, false)).toEqual([
			"tropical savanna"
		]);
		expect(getClimateCategory("forest", 20, false)).toEqual([
			"tropical savanna"
		]);
		expect(getClimateCategory("forest", 21, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimateCategory("forest", 50, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimateCategory("forest", 50, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimateCategory("forest", 51, false)).toEqual([
			"cool & rainy"
		]);
		expect(getClimateCategory("forest", 70, false)).toEqual([
			"cool & rainy"
		]);
		expect(() => getClimateCategory("forest", -1, false)).toThrow(
			/undefined/
		);
		expect(() => getClimateCategory("forest", 91, false)).toThrow(
			/undefined/
		);
	});
	test("handles isCoastal", () => {
		expect(getClimateCategory("mountains", 21, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimateCategory("mountains", 21, true)).toEqual([
			"warm & rainy",
			"warm with dry summer"
		]);
		expect(getClimateCategory("mountains", 0, false)).toEqual([
			"warm with dry summer",
			"warm & rainy"
		]);
		expect(getClimateCategory("mountains", 0, true)).toEqual([
			"warm with dry summer",
			"warm & rainy"
		]);
	});
	test("returns n/a for an empty option, but does not error", () => {
		expect(getClimateCategory("desert", 31, false)).toEqual(["n/a"]);
	});
});

describe("getSeason()", () => {
	test("returns valid season array", () => {
		expect(getSeason("desert", 336)).toEqual({
			name: "winter",
			firstDay: 335,
			lastDay: 31,
			averageTemperatureOptions: [
				{ name: "cold", percentChance: 5, temperature: 13 },
				{ name: "cool", percentChance: 90, temperature: 18 },
				{ name: "warm", percentChance: 5, temperature: 21 }
			]
		});
		expect(getSeason("steppe", 55)).toEqual({
			name: "winter",
			firstDay: 335,
			lastDay: 59,
			averageTemperatureOptions: [
				{ name: "cold", percentChance: 5, temperature: 2 },
				{ name: "chilly", percentChance: 90, temperature: "4-7" },
				{ name: "cool", percentChance: 5, temperature: 10 }
			]
		});
	});
	test("handles dayOfYear", () => {
		expect(getSeason("desert", 1)).toEqual({
			name: "winter",
			firstDay: 335,
			lastDay: 31,
			averageTemperatureOptions: [
				{ name: "cold", percentChance: 5, temperature: 13 },
				{ name: "cool", percentChance: 90, temperature: 18 },
				{ name: "warm", percentChance: 5, temperature: 21 }
			]
		});
		expect(getSeason("desert", getDaysPerYear())).toEqual({
			name: "winter",
			firstDay: 335,
			lastDay: 31,
			averageTemperatureOptions: [
				{ name: "cold", percentChance: 5, temperature: 13 },
				{ name: "cool", percentChance: 90, temperature: 18 },
				{ name: "warm", percentChance: 5, temperature: 21 }
			]
		});
		expect(getSeason("desert", 31)).toEqual({
			name: "winter",
			firstDay: 335,
			lastDay: 31,
			averageTemperatureOptions: [
				{ name: "cold", percentChance: 5, temperature: 13 },
				{ name: "cool", percentChance: 90, temperature: 18 },
				{ name: "warm", percentChance: 5, temperature: 21 }
			]
		});
		expect(() => getSeason("desert", 0)).toThrow(/Invalid day of year/);
		expect(() => getSeason("desert", getDaysPerYear() + 1)).toThrow(
			/Invalid day of year/
		);
		expect(getSeason("tropical savanna", 1)).toEqual({
			name: "winter/spring/summer/autumn",
			firstDay: 1,
			averageTemperatureOptions: [
				{ name: "warm", percentChance: 5, temperature: 23 },
				{ name: "hot", percentChance: 90, temperature: "32-41" },
				{ name: "very hot", percentChance: 5, temperature: 46 }
			]
		});
		expect(getSeason("polar", 153)).toEqual({
			name: "summer",
			firstDay: 152,
			lastDay: 212,
			averageTemperatureOptions: [
				{ name: "cold", percentChance: 5, temperature: 0 },
				{ name: "chilly", percentChance: 45, temperature: "2-4" },
				{ name: "cool", percentChance: 45, temperature: "5-10" },
				{ name: "warm", percentChance: 5, temperature: 16 }
			]
		});
	});
});
