/**
 * UI
 *
 * WHEN I click the generate weather button
 * THEN I see the current weather in detail, meaning how does it impact play (vision, ranged weapons, exposure to cold, etc).
 *
 * WHEN I click the generate weather button
 * THEN I see the entire weather journey, from the initial boring state to the final boring state.
 *
 * GIVEN I have generated a weather journey,
 * AND I have updated the date/time far enough to trigger the next chapter of the current weather journey,
 * THEN I see the current weather section update to show the weather chapter which matches the current date/time.
 *
 * GIVEN I have a generated a weather journey,
 * AND I have updated the date/time far enough to trigger the FINAL chapter of the current weather journey,
 * THEN I see some kind of indicator that the journey is over, and I am prompted to generate a new weather journey.
 *
 */

import weathers from "./data/weathers";
import {
	DICE_RESULT_PRIMARY,
	DICE_RESULT_SECONDARY,
	DICE_RESULT_TERTIARY,
	STATE_AFTERMATH,
	STATE_BORING,
	STATE_BUILDING,
	STATE_CLIMAX,
	STATE_EVENT
} from "./constants";
import roll from "../../util/roll";

/**
 * WEATHER EVENTS
 *
 * Examples:
 * - rain
 * - snow
 * - wind
 * - wind & rain
 * - wind & snow
 * - thunderstorm
 * - blizzard
 * - fog
 * - aurora
 * - hail
 * - fog & snow
 * - tornado
 *
 */

let weather;

export function generateWeatherJourney(hourOfDay) {
	// 0. prepare a list of candidate weathers based on season & latitude
	// 1. select a weather
	weather = weathers[0];

	// 2. set intitial state as 'boring'
	let state = STATE_BORING;

	// 3. populate weather journey
	return recursivelyCompleteJourney([], state, hourOfDay);
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

function recursivelyCompleteJourney(journey, state, hourOfDay) {
	// add new state with timestamp
	journey.push({
		hourOfDay: hourOfDay,
		desc: weather[state].desc,
		impact: weather[state].impact
	});

	/**
	 * Event is over when either:
	 * a) the state returns to 'boring'
	 * b) 3 consecutive 'boring' states
	 */
	state = getNextState(state, rollWeatherDice());
	if (
		journey.length >= 3 &&
		journey[journey.length - 1].desc === weather[STATE_BORING].desc
	) {
		return journey;
	}
	return recursivelyCompleteJourney(
		journey,
		state,
		hourOfDay.add(roll("1d3").value, "hour")
	);
}
