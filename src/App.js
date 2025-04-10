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
import { useState } from "react";
import dayjs from "dayjs";
import ProcedureComponent from "./modules/procedure/ProcedureComponent";

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

	const [datetime, setDatetime] = useState(dayjs("0793-06-08 00:00"));

	return (
		<ThemeProvider theme={myTheme}>
			<CssBaseline />
			<DashboardLayout>
				<ProcedureComponent />
				<WeatherComponent datetime={datetime} />
				<TimeComponent datetime={datetime} setDatetime={setDatetime} />
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
	grid-template: repeat(2, 1fr) / repeat(3, 1fr);
	place-items: safe stretch;
	background-color: black;
`;
