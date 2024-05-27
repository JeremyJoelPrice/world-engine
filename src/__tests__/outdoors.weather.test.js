import skyTable from "../modules/outdoors/data/skyTable";
import windTypes from "../modules/outdoors/data/windTypes";
import {
	getClimate,
	getCurrentPrecipChance,
	getCurrentSeason,
	getCurrentSky,
	getSeasonsAndPrecipByClimate,
	getWind
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
