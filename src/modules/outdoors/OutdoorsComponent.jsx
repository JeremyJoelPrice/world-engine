import {
	getCurrentTemperature,
	getAverageDailyTemperature,
	getClimateName,
	getCurrentPrecipChance,
	getCurrentSky,
	getClimateByName,
	getWind
} from "./weather/util";
import roll from "../../util/roll";
import { useEffect } from "react";
import OutdoorsInterface from "./OutdoorsInterface";

const OutdoorsComponent = ({
	dayOfYear,
	terrainType,
	isCoastal,
	latitude,
	currentClimate,
	currentTemp,
	currentSky,
	currentWind,
	invalidClimate,
	displayCurrentWeather,
	setDayOfYear,
	setTerrainType,
	setIsCoastal,
	setLatitude,
	setCurrentClimate,
	setCurrentTemp,
	setCurrentSky,
	setCurrentWind,
	setInvalidClimate,
	setDisplayCurrentWeather
}) => {
	/* Recalculates currentClimate after user input */
	useEffect(() => {
		try {
			setCurrentClimate(
				getClimateByName(
					getClimateName(terrainType, latitude, isCoastal)[0]
				)
			);
			setInvalidClimate(false);
		} catch (error) {
			setInvalidClimate(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [terrainType, isCoastal, latitude]);

	/** Using useEffect for proper sequencing,
	 * recalculates currentTemp, then currentSky, then currentWind.
	 * Finally updates displayCurrentWeather, which will prompt
	 * the interface component to render the results
	 */
	function generateNewCurrentWeather() {
		setCurrentTemp(
			getCurrentTemperature(
				getAverageDailyTemperature(currentClimate, dayOfYear)
			)
		);
	}
	useEffect(() => {
		refreshSky();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentTemp]);
	// Generate new weather with the current parameters,except leave temperature untouched
	function refreshSky() {
		if (!currentTemp) return;

		// update current Sky
		const nextSky = {};
		const { rain, snow, cloud, windTypeFactor } = getCurrentSky(
			getCurrentPrecipChance(dayOfYear, currentClimate.precipPeriods),
			currentSky,
			currentTemp
		);

		// including rain and snow as options in case the sky repeats
		// but the precipitation chance rolls a different result
		nextSky.rain = rain;
		nextSky.snow = snow;
		nextSky.precipitation = currentTemp.high <= 0 ? snow : rain;
		nextSky.cloud = cloud;
		setCurrentSky(nextSky);

		// update Wind
		setCurrentWind(getWind(roll(windTypeFactor).value));
	}
	useEffect(() => {
		if (!currentTemp) return;
		setDisplayCurrentWeather(true);
	}, [currentWind]);

	/* this function only exists for debugging reasons,
	and won't be part of the finished app */
	function getYearOfWeather() {
		// returns weather without changing state
		const weather = [];
		let prevSky;
		for (let dayOfYear = 1; dayOfYear <= 365; dayOfYear++) {
			const day = {};
			day.dayOfYear = dayOfYear;

			day.temp = getCurrentTemperature(
				getAverageDailyTemperature(currentClimate, dayOfYear)
			);

			// update current Sky
			const nextSky = {};
			const { rain, snow, cloud, windTypeFactor } = getCurrentSky(
				getCurrentPrecipChance(dayOfYear, currentClimate.precipPeriods),
				prevSky,
				day.temp
			);
			// including rain and snow as options in case the sky repeats
			// but the precipitation chance rolls a different result
			nextSky.rain = rain;
			nextSky.snow = snow;

			nextSky.precipitation = day.temp.high <= 0 ? snow : rain;
			nextSky.cloud = cloud;

			day.sky = nextSky;
			prevSky = nextSky;

			// update Wind
			day.wind = getWind(roll(windTypeFactor).value);

			weather.push(day);
		}
		return weather;
	}

	return (
		<OutdoorsInterface
			dayOfYear={dayOfYear}
			setDayOfYear={setDayOfYear}
			terrainType={terrainType}
			setTerrainType={setTerrainType}
			isCoastal={isCoastal}
			setIsCoastal={setIsCoastal}
			latitude={latitude}
			setLatitude={setLatitude}
			currentClimate={currentClimate}
			setCurrentClimate={setCurrentClimate}
			currentTemp={currentTemp}
			setCurrentTemp={setCurrentTemp}
			currentSky={currentSky}
			setCurrentSky={setCurrentSky}
			currentWind={currentWind}
			setCurrentWind={setCurrentWind}
			generateNewCurrentWeather={generateNewCurrentWeather}
			refreshSky={refreshSky}
			getYearOfWeather={getYearOfWeather}
			invalidClimate={invalidClimate}
			displayCurrentWeather={displayCurrentWeather}
			setDisplayCurrentWeather={setDisplayCurrentWeather}
		/>
	);
};

export default OutdoorsComponent;
