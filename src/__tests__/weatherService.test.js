import {
	AUTUMN,
	HOTTEST_HOUR_OF_DAY,
	SEASON_PERIODS,
	SPRING,
	SUMMER,
	WINTER
} from "../modules/weather/constants";
import {
	getAverageTempOfGivenDay,
	getCurrentTemp
} from "../modules/weather/weatherService";

describe("getAverageTempOfGivenDay()", () => {
	test("handles explicitely defined seasons", () => {
		const climate = {
			label: "example",
			seasons: {
				[SPRING]: { high: 6, low: 2 },
				[SUMMER]: { high: 13, low: 7 },
				[AUTUMN]: { high: 5, low: -1 },
				[WINTER]: { high: 3, low: -3 }
			}
		};
		expect(
			getAverageTempOfGivenDay(climate, SEASON_PERIODS[0].firstDay)
		).toEqual(climate.seasons[SPRING]);
		expect(
			getAverageTempOfGivenDay(climate, SEASON_PERIODS[1].firstDay)
		).toEqual(climate.seasons[SUMMER]);
		expect(
			getAverageTempOfGivenDay(climate, SEASON_PERIODS[2].firstDay)
		).toEqual(climate.seasons[AUTUMN]);
		expect(
			getAverageTempOfGivenDay(climate, SEASON_PERIODS[3].firstDay)
		).toEqual(climate.seasons[WINTER]);
	});

	test("linearly interpolates daily temp when only opposite seasons are defined", () => {
		const climate = {
			seasons: {
				summer: { high: 10, low: 0 },
				winter: { high: 0, low: -10 }
			}
		};
		expect(getAverageTempOfGivenDay(climate, 245)).toEqual({
			high: 10,
			low: 0
		});
		expect(getAverageTempOfGivenDay(climate, 284)).toEqual({
			high: 6,
			low: -4
		});
		expect(getAverageTempOfGivenDay(climate, 2)).toEqual({
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
		expect(getAverageTempOfGivenDay(climate, 1)).toEqual(
			climate.seasons.summer
		);
	});
});

describe("getCurrentTemp()", () => {
	const diurnal = { high: 10, low: -10 };
	const sunriseHour = 6;
	test("returns diurnal high at 14:00", () => {
		expect(getCurrentTemp(HOTTEST_HOUR_OF_DAY, diurnal, sunriseHour)).toBe(
			diurnal.high
		);
	});
	test("returns dirunal low at sunrise", () => {
		expect(getCurrentTemp(sunriseHour, diurnal, sunriseHour)).toBe(
			diurnal.low
		);
	});
	test("returns interpolated temp between sunrise and 14:00", () => {
		expect(getCurrentTemp(10, diurnal, sunriseHour)).toBe(0);
	});
});
