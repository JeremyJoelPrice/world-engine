import { useState } from "react";
import styled from "styled-components";
import OutdoorsComponent from "./modules/outdoors/OutdoorsComponent";
import CombatStats from "./modules/combat stats/CombatStatsPage";
import NpcWindow from "./modules/npc generator/NpcWindow";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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

	const darkTheme = createTheme({
		palette: {
			mode: "dark"
		}
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<DashboardLayout>
				<NpcWindow />
			</DashboardLayout>
		</ThemeProvider>
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
	background-color: black;
`;
