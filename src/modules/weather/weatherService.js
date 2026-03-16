import weathers from "./data/weathers";
import {
	DICE_RESULT_PRIMARY,
	DICE_RESULT_SECONDARY,
	DICE_RESULT_TERTIARY,
	HOTTEST_HOUR_OF_DAY,
	SEASON_PERIODS,
	STATE_AFTERMATH,
	STATE_BORING,
	STATE_BUILDING,
	STATE_CLIMAX,
	STATE_EVENT,
	WINTER
} from "./constants";
import roll from "../../util/roll";
import dayjs from "dayjs";
import { rollOnTable } from "../../util/common";

export function generateWeatherJourney(hourOfDay) {
	// TODO prepare a list of candidate weathers based on season & latitude
	const weather = rollOnTable(weathers);
	let state = STATE_BORING;
	let journey = [];
	let futureHour = hourOfDay;
	while (
		!(
			journey.length >= 3 &&
			journey[journey.length - 1].desc === weather[STATE_BORING].desc
		)
	) {
		journey.push({
			state,
			hourOfDay: futureHour,
			desc: weather[state].desc,
			impact: weather[state].impact
		});
		state = getNextState(state, rollWeatherDice());
		futureHour = futureHour.add(roll("1d3").value, "hour");
	}

	return { label: weather.label, journey };
}

function rollWeatherDice() {
	const result = roll("2d6l1").value;

	if (result <= 2) {
		return DICE_RESULT_PRIMARY;
	} else if (result <= 4) {
		return DICE_RESULT_SECONDARY;
	} else {
		return DICE_RESULT_TERTIARY;
	}
}

function getNextState(currentState, diceResult) {
	const stateMatrix = {
		[STATE_BORING]: [STATE_BORING, STATE_BUILDING, STATE_BUILDING],
		[STATE_BUILDING]: [STATE_EVENT, STATE_BORING, STATE_BUILDING],
		[STATE_EVENT]: [STATE_AFTERMATH, STATE_CLIMAX, STATE_EVENT],
		[STATE_CLIMAX]: [STATE_AFTERMATH, STATE_AFTERMATH, STATE_CLIMAX],
		[STATE_AFTERMATH]: [STATE_BORING, STATE_BORING, STATE_BUILDING]
	};

	return stateMatrix[currentState][diceResult];
}

export function getDecompressedWeatherJourney({ label, journey }) {
	const weatherData = weathers.filter((w) => w.label === label)[0];

	journey = journey.map(({ state, hourOfDay }) => {
		const { desc, impact } = weatherData[state];
		return { state, hourOfDay: dayjs(hourOfDay), desc, impact };
	});

	return { label, journey };
}

export function getCurrentTemp(
	hourOfDay,
	diurnalTemp,
	sunriseHour,
	tempModifier = 0
) {
	const { high, low } = diurnalTemp;

	// Calculate the "time since last low"
	const hoursSinceSunrise = (hourOfDay - sunriseHour + 24) % 24;

	// Length of the rising and falling phases
	const riseDuration = (HOTTEST_HOUR_OF_DAY - sunriseHour + 24) % 24;
	const fallDuration = 24 - riseDuration;

	let t;
	if (hoursSinceSunrise <= riseDuration) {
		// Rising phase: low -> high
		t = hoursSinceSunrise / riseDuration;
		return lerp(low, high, t) + tempModifier;
	} else {
		// Falling phase: high -> low
		t = (hoursSinceSunrise - riseDuration) / fallDuration;
		return lerp(high, low, t) + tempModifier;
	}
}

export function getAverageTempOfGivenDay(climate, dayOfYear) {
	// If climate has only one season, return that season's temperature
	if (Object.keys(climate.seasons).length === 1) {
		return Object.values(climate.seasons)[0];
	}

	// Determine current season based on day of the year
	const currentSeason =
		[...SEASON_PERIODS]
			.reverse()
			.find(({ firstDay }) => dayOfYear >= firstDay)?.label || WINTER;

	// Return early if current season explicitely exists in climate object
	if (climate.seasons[currentSeason]) {
		return climate.seasons[currentSeason];
	} else {
		// Get neighbouring seasons
		const currentIndex = SEASON_PERIODS.findIndex(
			({ label }) => label === currentSeason
		);
		const prevSeason =
			SEASON_PERIODS[
				(currentIndex - 1 + SEASON_PERIODS.length) %
					SEASON_PERIODS.length
			].label;

		const nextSeason =
			SEASON_PERIODS[(currentIndex + 1) % SEASON_PERIODS.length].label;

		const prevSeasonObj =
			climate.seasons[prevSeason] || climate.seasons[nextSeason];
		const nextSeasonObj =
			climate.seasons[nextSeason] || climate.seasons[prevSeason];

		// Determine transition boundaries
		const lastDayOfPrevTemp = SEASON_PERIODS[currentIndex].firstDay - 1;
		const firstDayOfNextTemp =
			SEASON_PERIODS[(currentIndex + 1) % SEASON_PERIODS.length].firstDay;

		// Handle wrap-around at year-end
		const daysInTransition =
			firstDayOfNextTemp > lastDayOfPrevTemp
				? firstDayOfNextTemp - lastDayOfPrevTemp
				: firstDayOfNextTemp + 365 - lastDayOfPrevTemp;

		// Progress through the transition [0..1]
		const dayOfTransition =
			(dayOfYear -
				lastDayOfPrevTemp +
				(dayOfYear < lastDayOfPrevTemp ? 365 : 0)) /
			daysInTransition;

		// Interpolate temperatures
		const high = Math.round(
			lerp(prevSeasonObj.high, nextSeasonObj.high, dayOfTransition)
		);
		let low = Math.round(
			lerp(prevSeasonObj.low, nextSeasonObj.low, dayOfTransition)
		);

		low = low === -0 ? 0 : low;

		return { high: high, low: low };
	}
}

function lerp(start, end, t) {
	// t between 0.0 and 1.0
	return start + (end - start) * t;
}
