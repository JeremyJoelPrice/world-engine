import { useEffect, useState } from "react";
import OutdoorsInterface from "./OutdoorsInterface";
import config from "./config";

const OutdoorsComponent = () => {
	const [currentWeather, setCurrentWeather] = useState();

	useEffect(() => {
		getNextWeather(null, setCurrentWeather);
	}, []);

	return currentWeather === undefined ? (
		<></>
	) : (
		<OutdoorsInterface
			weather={currentWeather}
			weatherButtonFunc={() =>
				getNextWeather(currentWeather, setCurrentWeather)
			}
		/>
	);
};

/* Utility Functions */

const getNextWeather = (currentWeather, setCurrentWeather) => {
	console.log("getting next weather");
	const weather =
		config.weathers[Math.floor(Math.random() * config.weathers.length)];
	console.log(weather);
	setCurrentWeather(weather);
};

export default OutdoorsComponent;
