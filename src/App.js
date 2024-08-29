import { useState } from "react";
import styled from "styled-components";
import OutdoorsComponent from "./modules/outdoors/OutdoorsComponent";
import CombatStats from "./modules/combat stats/CombatStatsPage";
import NpcWindow from "./modules/npc generator/NpcWindow";

const App = () => {
	/**
	 * States
	 *  */

	/* Outdoor */
	const [dayOfYear, setDayOfYear] = useState(286);
	const [terrainType, setTerrainType] = useState("grassland");
	const [isCoastal, setIsCoastal] = useState(false);
	const [latitude, setLatitude] = useState(51);
	const [currentClimate, setCurrentClimate] = useState();
	const [currentTemp, setCurrentTemp] = useState();
	const [currentSky, setCurrentSky] = useState();
	const [currentWind, setCurrentWind] = useState();
	const [invalidClimate, setInvalidClimate] = useState(false);
	const [displayCurrentWeather, setDisplayCurrentWeather] = useState(false);

	const outdoorProps = {
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
	};

	return (
		<DashboardLayout>
			<NpcWindow />
		</DashboardLayout>
	);
};

export default App;

/* styled components */

const DashboardLayout = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	position: relative;
	display: grid;
	grid-template: repeat(3, 1fr) / repeat(3, 1fr);
	place-items: safe stretch;
`;
