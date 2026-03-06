import roll from "../../util/roll";

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

/**
 * PROGRAM FLOW
 *
 * 0. prepare a list of candidate weather events based on season & latitude
 *
 * 1. select weather event
 *
 * 2. set intitial state as 'boring'
 *
 * 3. print initial state with timestamp
 *
 * 3. roll dice
 *
 * 4. parse result, update state
 *
 * 5. print new state with timestamp
 *
 * 6. check if event is over, if not go to step 3
 *
 * Event is over when either:
 * a) the state returns to 'boring'
 * b) 3 consecutive 'boring' states
 *
 */

function generateWeather(season, latitude) {
	// prepare a list of candidate weather events based on season & latitude
	const candidateWeathers = makeWeatherEventsMenu(season, latitude);

	// select weather event
	console.log(roll("1d6").value);
}

function makeWeatherEventsMenu(season, latitude) {
	// returns a list of weather events based on season and latitude
	return [
		{
			label: "rain",
			event: "heavy rain",
			brewing: "dark clouds gather",
			impact: "vision is reduced, ranged weapons are less effective, exposure to cold increases",
			fallout: "petrichor smell, wet ground"
		}
	];
}

generateWeather();