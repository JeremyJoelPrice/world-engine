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
import config from "./config";
import { useEffect, useState } from "react";
import OutdoorsInterface from "./OutdoorsInterface";

const OutdoorsComponent = () => {
	/* inputs */
	const [dayOfYear, setDayOfYear] = useState(1);
	const [terrainType, setTerrainType] = useState("hills");
	const [isCoastal, setIsCoastal] = useState(true);
	const [latitude, setLatitude] = useState(80);

	/* internal states */
	const [currentClimate, setCurrentClimate] = useState();
	const [currentTemp, setCurrentTemp] = useState();
	const [currentSky, setCurrentSky] = useState();
	const [currentWind, setCurrentWind] = useState();

	useEffect(() => {
		setCurrentClimate(
			getClimateByName(
				getClimateName(terrainType, latitude, isCoastal)[0]
			)
		);
	}, [terrainType, isCoastal, latitude]);

	useEffect(() => refreshSky(), [currentTemp]);

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
		/>
	);
};

export default OutdoorsComponent;
