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

const App = () => {
	const darkTheme = createTheme({
		palette: {
			mode: "dark"
		}
	});

	const [datetime, setDatetime] = useState(dayjs("0793-06-08 00:00"));

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<DashboardLayout>
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
