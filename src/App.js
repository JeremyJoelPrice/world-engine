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

const App = () => {
	const darkTheme = createTheme({
		palette: {
			mode: "dark"
		}
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<DashboardLayout>
				<WeatherComponent />
				<TimeComponent />
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
