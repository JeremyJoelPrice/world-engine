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
import { useEffect, useState } from "react";
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
	setDayOfYear,
	setTerrainType,
	setIsCoastal,
	setLatitude,
	setCurrentClimate,
	setCurrentTemp,
	setCurrentSky,
	setCurrentWind,
	setInvalidClimate
}) => {
	// /* inputs */
	// const [dayOfYear, setDayOfYear] = useState(1);
	// const [terrainType, setTerrainType] = useState("hills");
	// const [isCoastal, setIsCoastal] = useState(true);
	// const [latitude, setLatitude] = useState(20);

	// /* internal states */
	// const [currentClimate, setCurrentClimate] = useState();
	// const [currentTemp, setCurrentTemp] = useState();
	// const [currentSky, setCurrentSky] = useState();
	// const [currentWind, setCurrentWind] = useState();
	// const [invalidClimate, setInvalidClimate] = useState(false);

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
	}, [terrainType, isCoastal, latitude]);

	useEffect(() => {
		refreshSky();
	}, [currentTemp]);

	/* recalculates currentTemp, and uses useEffect to prompt the other values to refresh also */
	function getWeather() {
		setCurrentTemp(
			getCurrentTemperature(
				getAverageDailyTemperature(currentClimate, dayOfYear)
			)
		);
	}

	/* generate new weather with the current parameters,
	except leave temperature untouched */
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
			getWeather={getWeather}
			refreshSky={refreshSky}
			getYearOfWeather={getYearOfWeather}
			invalidClimate={invalidClimate}
		/>
	);
};

export default OutdoorsComponent;
