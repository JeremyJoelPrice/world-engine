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
import {
	generateWeatherJourney,
	getDecompressedWeatherJourney
} from "./modules/weather/weatherService";
import { LATITUDE_BANDS } from "./modules/weather/constants";
import roll from "./util/roll";
import { getSunriseSunset } from "./modules/time/timeService";

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

	/* URL data */
	const initialStates = (() => {
		const encoded = searchParams.get("s");
		if (encoded) {
			let { datetime, weather, latitude, tempModifier } =
				decodeState(encoded);
			return {
				datetime: dayjs(datetime),
				weather: getDecompressedWeatherJourney(weather),
				latitude,
				tempModifier
			};
		} else {
			// default states in case of nothing in URL
			const datetime = dayjs("0793-06-08T11:00:00.000");
			return {
				datetime,
				weather: generateWeatherJourney(datetime),
				latitude: LATITUDE_BANDS[1],
				tempModifier: roll("2d6-7").value
			};
		}
	})();
	const [datetime, setDatetime] = useState(dayjs(initialStates.datetime));
	const [weatherJourney, setWeatherJourney] = useState(initialStates.weather);
	const [latitude, setLatitude] = useState(initialStates.latitude);
	const [tempModifier, setTempModifier] = useState(
		initialStates.tempModifier
	);
	const [sunriseSunset, setSunriseSunset] = useState(
		getSunriseSunset(latitude, datetime)
	);

	// Sync data to URL on change
	useEffect(() => {
		const newTempModifier =
			datetime.hour() === sunriseSunset.sunrise.hour()
				? roll("2d6-7").value
				: tempModifier;

		setTempModifier(newTempModifier);

		// encode data in URL
		setSearchParams({
			s: lzString.compressToEncodedURIComponent(
				JSON.stringify({
					datetime: datetime.toISOString(),
					weather: {
						label: weatherJourney.label,
						journey: weatherJourney.journey.map(
							({ hourOfDay, state }) => ({
								hourOfDay: hourOfDay.toISOString(),
								state
							})
						)
					},
					latitude,
					tempModifier: newTempModifier
				})
			)
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [datetime, weatherJourney, latitude]);

	/* end of URL data */

	// fix iPadOS viewport issue
	useEffect(() => {
		const fix = () => {
			requestAnimationFrame(() => {
				window.dispatchEvent(new Event("resize"));
			});
		};

		window.addEventListener("visibilitychange", fix);
		window.addEventListener("pageshow", fix);

		return () => {
			window.removeEventListener("visibilitychange", fix);
			window.removeEventListener("pageshow", fix);
		};
	}, []);

	return (
		<ThemeProvider theme={myTheme}>
			<CssBaseline />
			<DashboardLayout>
				<ProcedureComponent />
				<WeatherComponent
					datetime={datetime}
					weatherJourney={weatherJourney}
					setWeatherJourney={setWeatherJourney}
					latitude={latitude}
					setLatitude={setLatitude}
					tempModifier={tempModifier}
					setTempModifier={setTempModifier}
					sunriseSunset={sunriseSunset}
					setSunriseSunset={setSunriseSunset}
				/>
				<TimeComponent
					datetime={datetime}
					setDatetime={setDatetime}
					latitude={latitude}
					sunriseSunset={sunriseSunset}
					setSunriseSunset={setSunriseSunset}
				/>
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
		const state = JSON.parse(
			lzString.decompressFromEncodedURIComponent(encoded)
		);
		return state;
	} catch {
		return null;
	}
};

/* styled components */

const DashboardLayout = styled.div`
	height: 100vh;
	height: 100dvh;
	width: 100%;
	overflow: hidden;
	display: grid;
	grid-template: repeat(2, 1fr) / repeat(3, 1fr);
	place-items: safe stretch;
	background-color: black;
`;
