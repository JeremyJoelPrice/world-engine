import { useState } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import OutdoorsComponent from "./modules/outdoors/OutdoorsComponent";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NpcGeneratorComponent from "./modules/npc generator/NpcGeneratorComponent";
import CombatStats from "./modules/combat stats/CombatStatsPage";

const App = () => {
	/**
	 * States
	 *  */

	/* Outdoor */
	const [dayOfYear, setDayOfYear] = useState(1);
	const [terrainType, setTerrainType] = useState("hills");
	const [isCoastal, setIsCoastal] = useState(true);
	const [latitude, setLatitude] = useState(20);
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
		<Router>
			<div className="App">
				<AppContainer>
					<Navbar />
					<PageContainer>
						<Switch>
							<Route
								path="/npc-generator"
								component={NpcGeneratorComponent}
							/>
							<Route
								path="/outdoors"
								render={() => (
									<OutdoorsComponent {...outdoorProps} />
								)}
								// component={OutdoorsComponent}
							/>
							<Route
								path="/combat-stats"
								component={CombatStats}
							/>
						</Switch>
					</PageContainer>
				</AppContainer>
			</div>
		</Router>
	);
};

export default App;

const AppContainer = styled.div`
	display: flex;
	height: 100vh;
	overflow: hidden;
`;

const PageContainer = styled.div`
	display: block;
	overflow-y: auto;
	flex-grow: 1;
`;
