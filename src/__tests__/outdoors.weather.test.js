import skyTable from "../modules/outdoors/data/skyTable";
import windTypes from "../modules/outdoors/data/windTypes";
import {
	getAverageDailyTemperature,
	getClimateName,
	getCurrentPrecipChance,
	getCurrentSeason,
	getCurrentSky,
	getClimateByName,
	getWind
} from "../modules/outdoors/weather/util";

describe("getClimateName()", () => {
	test("returns array containing expected climate type, or multiple types", () => {
		expect(getClimateName("broken land", 21, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimateName("broken land", 21, true)).toEqual([
			"warm & rainy",
			"warm with dry summer"
		]);
	});
	test("handles terrain type", () => {
		expect(getClimateName("desert", 21, false)).toEqual(["desert"]);
		expect(getClimateName("grassland", 21, false)).toEqual(["steppe"]);
	});
	test("handles lattitude", () => {
		expect(getClimateName("forest", 0, false)).toEqual([
			"tropical savanna"
		]);
		expect(getClimateName("forest", 1, false)).toEqual([
			"tropical savanna"
		]);
		expect(getClimateName("forest", 20, false)).toEqual([
			"tropical savanna"
		]);
		expect(getClimateName("forest", 21, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimateName("forest", 50, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimateName("forest", 50, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimateName("forest", 51, false)).toEqual(["cool & rainy"]);
		expect(getClimateName("forest", 70, false)).toEqual(["cool & rainy"]);
		expect(() => getClimateName("forest", -1, false)).toThrow(/undefined/);
		expect(() => getClimateName("forest", 91, false)).toThrow(/undefined/);
	});
	test("handles isCoastal", () => {
		expect(getClimateName("mountains", 21, false)).toEqual([
			"warm with dry winter"
		]);
		expect(getClimateName("mountains", 21, true)).toEqual([
			"warm & rainy",
			"warm with dry summer"
		]);
		expect(getClimateName("mountains", 0, false)).toEqual([
			"warm with dry summer",
			"warm & rainy"
		]);
		expect(getClimateName("mountains", 0, true)).toEqual([
			"warm with dry summer",
			"warm & rainy"
		]);
	});
	test("returns n/a for an empty option, but does not error", () => {
		expect(getClimateName("desert", 31, false)).toEqual(["n/a"]);
	});
});

describe("getClimateByName()", () => {
	test("returns seasons and precip periods of the given climate", () => {
		expect(getClimateByName("desert")).toEqual({
			seasons: {
				summer: {
					high: 39,
					low: 25
				},
				winter: {
					temp: 20,
					low: 7
				}
			},
			precipPeriods: [{ firstDay: 1, percentChance: 5 }]
		});
		expect(getClimateByName("cool & rainy")).toEqual({
			seasons: {
				summer: { high: 20, low: 13 },
				winter: { high: 10, low: 4 }
			},
			precipPeriods: [{ firstDay: 1, percentChance: 35 }]
		});
	});
});

// deprecated
describe.skip("getCurrentSeason()", () => {
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
		expect(getCurrentPrecipChance(65, precipPeriods)).toBe(50);
	});
	test("handles period starts on day of year", () => {
		expect(getCurrentPrecipChance(152, precipPeriods)).toBe(40);
	});
	test("handles period ends on day of year", () => {
		expect(getCurrentPrecipChance(59, precipPeriods)).toBe(30);
	});
	test("handles period contains end of year", () => {
		expect(getCurrentPrecipChance(1, precipPeriods)).toBe(40);
		expect(getCurrentPrecipChance(365, precipPeriods)).toBe(40);
	});
	test("handles array with a single precipPeriod", () => {
		const preciPeriods = [{ firstDay: 1, percentChance: 40 }];
		expect(getCurrentPrecipChance(50, preciPeriods)).toEqual(40);
	});
});

describe("getCurrentSky", () => {
	test("returns a random sky from skyTable", () => {
		for (let i = 0; i < 1000; i++) {
			const { rain, snow, cloud, windTypeFactor } = getCurrentSky(100);
			expect(
				skyTable.some((sky) => {
					return (
						sky.rain === rain &&
						sky.snow === snow &&
						sky.cloud === cloud &&
						sky.windTypeFactor === windTypeFactor
					);
				})
			).toEqual(true);
		}
	});
	test("handles a 50% chance of precipitation", () => {
		const totals = {};
		totals[skyTable[0].rain] = 0;
		totals[skyTable[1].rain] = 0;
		totals[skyTable[2].rain] = 0;
		totals[skyTable[3].rain] = 0;
		totals[skyTable[4].rain] = 0;
		totals[skyTable[5].rain] = 0;
		totals["none"] = 0;

		for (let i = 0; i < 10000; i++) {
			const { rain } = getCurrentSky(50, skyTable[2]);
			totals[rain]++;
		}
		expect(totals.none).toBeGreaterThan(0);
	});
	test("returns rain/snow given a 100% precipitation chance", () => {
		for (let i = 0; i < 1000; i++) {
			const { rain, snow } = getCurrentSky(100);
			expect(rain !== "none" && snow !== "none").toEqual(true);
		}
	});
	test("returns no rain/snow given a 0% precipitation chance", () => {
		for (let i = 0; i < 100; i++) {
			expect(getCurrentSky(0)).toEqual({
				rain: "none",
				snow: "none",
				cloud: expect.any(String),
				windTypeFactor: expect.any(String)
			});
		}
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
			const { cloud } = getCurrentSky(0);
			totals[cloud]++;
		}
		expect(Math.max(...Object.values(totals))).toEqual(
			totals[skyTable[0].cloud]
		);
	});
	test("bias toward current sky", () => {
		const totals = {};
		totals[skyTable[0].rain] = 0;
		totals[skyTable[1].rain] = 0;
		totals[skyTable[2].rain] = 0;
		totals[skyTable[3].rain] = 0;
		totals[skyTable[4].rain] = 0;
		totals[skyTable[5].rain] = 0;

		for (let i = 0; i < 10000; i++) {
			const { rain } = getCurrentSky(100, skyTable[2]);
			totals[rain]++;
		}
		expect(Math.max(...Object.values(totals))).toEqual(
			totals[skyTable[2].rain]
		);
	});
	test.skip("log some results", () => {
		const totals = { rain: {}, cloud: {} };
		totals.rain[skyTable[0].rain] = 0;
		totals.rain[skyTable[1].rain] = 0;
		totals.rain[skyTable[2].rain] = 0;
		totals.rain[skyTable[3].rain] = 0;
		totals.rain[skyTable[4].rain] = 0;
		totals.rain[skyTable[5].rain] = 0;
		totals.rain["none"] = 0;
		totals.cloud[skyTable[0].cloud] = 0;
		totals.cloud[skyTable[1].cloud] = 0;
		totals.cloud[skyTable[2].cloud] = 0;
		totals.cloud[skyTable[3].cloud] = 0;
		totals.cloud[skyTable[4].cloud] = 0;
		totals.cloud[skyTable[5].cloud] = 0;
		let output = "";
		output = "Rain		Snow		Cloud		WindFactor\n";
		let sky = undefined;
		for (let i = 0; i < 10000; i++) {
			// sky = getCurrentSky(100); // precipitation no bias
			// sky = getCurrentSky(0); // no precipitation no bias
			// sky = getCurrentSky(100, skyTable[1]); // precipitation w/bias
			// sky = getCurrentSky(0, skyTable[1]); // no precipitation w/bias
			sky = getCurrentSky(50, sky); // realistic use case
			totals.rain[sky.rain]++;
			totals.cloud[sky.cloud]++;
			output += `${sky.rain}		${sky.snow}		${sky.cloud}		${sky.windTypeFactor}\n`;
		}
		console.log(output);
		console.log(totals);
	});
	test.skip("binary bias", () => {
		const totals = { a: 0, b: 0 };
		let isA = Math.random() <= 0.5;

		let output = "";
		for (let i = 0; i < 1000; i++) {
			if (!(Math.random() <= 0.4)) {
				isA = !isA;
			}
			if (isA) {
				totals.a++;
				output += "A";
			} else {
				totals.b++;
				output += "B";
			}
		}
		console.log(totals);
		console.log(totals.a / totals.b);
		console.log(output);
	});
});

describe("getWind()", () => {
	test("returns wind based on give dice result", () => {
		expect(getWind(1)).toEqual(windTypes[0]);
		expect(getWind(2)).toEqual(windTypes[1]);
		expect(getWind(4)).toEqual(windTypes[2]);
		expect(getWind(6)).toEqual(windTypes[3]);
		expect(getWind(8)).toEqual(windTypes[4]);
		expect(getWind(10)).toEqual(windTypes[5]);
		expect(getWind(12)).toEqual(windTypes[6]);
		expect(getWind(14)).toEqual(windTypes[7]);
		expect(getWind(16)).toEqual(windTypes[8]);
		expect(getWind(18)).toEqual(windTypes[9]);
		expect(getWind(19)).toEqual(windTypes[10]);
		expect(getWind(20)).toEqual(windTypes[11]);
	});
});

describe("getAverageDailyTemperature()", () => {
	const climate = {
		seasons: {
			summer: { high: 10, low: 0 },
			winter: { high: 0, low: -10 }
		}
	};

	test("returns average temp for the given day", () => {
		expect(getAverageDailyTemperature(climate, 152)).toEqual({
			high: 10,
			low: 0
		});
		expect(getAverageDailyTemperature(climate, 1)).toEqual({
			high: 0,
			low: -10
		});
	});
	test("calulates linear values for seasons with no explicit data", () => {
		expect(getAverageDailyTemperature(climate, 245)).toEqual({
			high: 10,
			low: 0
		});
		expect(getAverageDailyTemperature(climate, 284)).toEqual({
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
		expect(getAverageDailyTemperature(climate, 1)).toEqual({
			high: 33,
			low: 23
		});
	});
	test.skip("log some results", () => {
		const climate = {
			seasons: {
				summer: { high: 34, low: 20 },
				winter: { high: 17, low: 6 }
			}
		};
		let text = "day of year		temp\n";
		for (let dayOfYear = 1; dayOfYear < 365; dayOfYear++) {
			const { high, low } = getAverageDailyTemperature(
				climate,
				dayOfYear
			);
			text += `${dayOfYear}		High ${high}, Low ${low}\n`;
		}
		console.log(text);
	});
});
