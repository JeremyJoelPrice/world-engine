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
import dayjs from "dayjs";

export function generateWeatherJourney(hourOfDay) {
	// TODO prepare a list of candidate weathers based on season & latitude
	const weather = weathers[0];
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
