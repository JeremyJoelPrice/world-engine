import styled from "styled-components";
import NpcWindow from "./modules/npc generator/NpcWindow";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import WeatherComponent from "./modules/weather/WeatherComponent";
import TimeComponent from "./modules/time/TimeComponent";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import dayjs from "dayjs";
import ProcedureComponent from "./modules/procedure/ProcedureComponent";
import lzString from "lz-string";
import terrainTypes from "./modules/weather/data/terrainTypes";
import SeedGeneratorComponent from "./modules/seed generator/SeedGeneratorComponent";

const App = () => {
	const myTheme = createTheme({
		palette: {
			mode: "dark",
			primary: {
				// defaults first, custom second
				main: "rgba(62, 214, 199, 0.9)",
				dark: "rgba(62, 214, 199, 1)",
				contrastText: "#000"
			},
			text: {
				secondary: "rgba(62, 214, 199, 1)" // a/b test
			},
			background: {
				paper: "#0b0b0b"
			},
			divider: "rgba(255, 255, 255, 0.12)"
		},
		typography: {
			fontFamily: "Optima",
			fontSize: 16,
			fontWeightMedium: 400,
			button: {
				fontFamily: "Avenir",
				fontWeight: 600
			}
		},
		components: {
			MuiInputLabel: {
				styleOverrides: {
					root: {
						fontSize: 20,
						fontFamily: "Avenir" // a/b test
					}
				}
			}
		}
	});

	const [searchParams, setSearchParams] = useSearchParams();

	// URL states
	const initialStates = (() => {
		const encoded = searchParams.get("s");
		if (encoded) {
			const decoded = decodeState(encoded);
			return decoded;
		}

		const states = {
			weather: {
				terrainType: terrainTypes[3],
				isCoastal: true,
				latitude: 65
			},
			datetime: "0793-06-08 00:00:00.000Z"
		};
		return states;
	})();

	const [terrainType, setTerrainType] = useState(
		initialStates.weather.terrainType
	);
	const [isCoastal, setIsCoastal] = useState(initialStates.weather.isCoastal);
	const [latitude, setLatitude] = useState(initialStates.weather.latitude);
	const [datetime, setDatetime] = useState(dayjs(initialStates.datetime));

	// Sync datetime to URL on change
	useEffect(() => {
		const encoded = encodeState({
			datetime: datetime.toISOString(),
			weather: {
				terrainType,
				isCoastal,
				latitude
			}
		});
		setSearchParams({ s: encoded });
	}, [datetime, terrainType, isCoastal, latitude, setSearchParams]);

	return (
		<ThemeProvider theme={myTheme}>
			<CssBaseline />
			<DashboardLayout>
				<ProcedureComponent />
				<WeatherComponent
					datetime={datetime}
					terrainType={terrainType}
					setTerrainType={setTerrainType}
					isCoastal={isCoastal}
					setIsCoastal={setIsCoastal}
					latitude={latitude}
					setLatitude={setLatitude}
				/>
				<TimeComponent datetime={datetime} setDatetime={setDatetime} />
				<NpcWindow />
				<SeedGeneratorComponent />
			</DashboardLayout>
		</ThemeProvider>
	);
};

export default App;

/* utility functions */

const decodeState = (encoded) => {
	try {
		return JSON.parse(lzString.decompressFromEncodedURIComponent(encoded));
	} catch {
		return null;
	}
};

const encodeState = (states) => {
	return lzString.compressToEncodedURIComponent(JSON.stringify(states));
};

/* styled components */

const DashboardLayout = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	position: relative;
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(3, 1fr);
	place-items: safe stretch;
	background-color: black;
`;
