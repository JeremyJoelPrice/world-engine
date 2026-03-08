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
import SeedGeneratorComponent from "./modules/seed generator/SeedGeneratorComponent";
import colors from "./util/colors";

const App = () => {
	const myTheme = createTheme({
		palette: {
			mode: "dark",
			primary: {
				// defaults first, custom second
				main: colors.bluegreen,
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
			return decodeState(encoded);
		} else {
			const states = {
				datetime: "0793-04-08T00:00:00.000"
			};

			return states;
		}
	})();
	const [datetime, setDatetime] = useState(dayjs(initialStates.datetime));

	// Sync datetime to URL on change
	useEffect(() => {
		const encoded = encodeState({
			datetime: datetime.toISOString()
		});
		setSearchParams({ s: encoded });
	}, [datetime, setSearchParams]);

	return (
		<ThemeProvider theme={myTheme}>
			<CssBaseline />
			<DashboardLayout>
				<ProcedureComponent />
				<WeatherComponent datetime={datetime} />
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
