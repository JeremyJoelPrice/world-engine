import styled from "styled-components";
import { BodyText, Subheader } from "../../components/StyledText";
import colors from "../../components/Colors";
import { useEffect, useState } from "react";
import config from "./config";
import { uid } from "../../util/common";
import {
	getDayOfYearFromMonthDay,
	getMonthAndDayFromDayOfYear
} from "./weather/util";
import terrainTypes from "./data/terrainTypes";
import temperatureZones from "./data/temperatureZones";

const OutdoorsInterface = ({
	dayOfYear,
	setDayOfYear,
	terrainType,
	setTerrainType,
	isCoastal,
	setIsCoastal,
	latitude,
	setLatitude,
	currentClimate,
	setCurrentClimate,
	currentTemp,
	setCurrentTemp,
	currentSky,
	setCurrentSky,
	currentWind,
	setCurrentWind,
	generateNewCurrentWeather,
	refreshSky,
	getYearOfWeather,
	invalidClimate,
	displayCurrentWeather,
	setDisplayCurrentWeather
}) => {
	// this function only exists for debugging reasons,
	// and won't be part of the finished app
	function renderYearOfWeather() {
		const yearOfWeather = getYearOfWeather();
		// open table
		let html = `<div style="color: bisque; text-align: center; font-size: 24pt;">Weather for a ${currentClimate.name} climate</div>`;
		html +=
			"<table style='border-color: bisque; border-style: ridge; color: bisque; text-align: center;'>";
		// headers
		const headers = [
			"Date",
			"Temp High",
			"Temp Low",
			"Cloud",
			"Precip",
			"Wind",
			"Description",
			"Wind Speed",
			"Direction"
		];
		html += "<tr>";
		headers.forEach((header) => {
			html += `<th style='padding: 5px 10px;'>${header}</th>`;
		});
		html += "</tr>";
		// data
		for (let i = 0; i < yearOfWeather.length; i++) {
			const currentDay = yearOfWeather[i];
			const { monthName: currentMonthName, dayNum: currentDayNum } =
				getMonthAndDayFromDayOfYear(currentDay.dayOfYear);
			html += `<tr><td style="width: 100px;">${currentDayNum} ${currentMonthName}</td>
				<td style="width: 100px;">${currentDay.temp.high}</td>
				<td style="width: 100px;">${currentDay.temp.low}</td>
				<td style="width: 100px;">${currentDay.sky.cloud}</td>
				<td style="width: 100px;">${currentDay.sky.precipitation}</td>
				<td style="width: 100px;">${currentDay.wind.wind}</td>
				<td style="width: 380px;">${currentDay.wind.description}</td>
				<td style="width: 100px;">${currentDay.wind.speed}</td>
				<td style="width: 100px;">${currentDay.wind.direction}</td></tr>`;
		}

		// close table
		html += "</table>";

		setDisplayYearOfWeather(html);
	}
	const [DisplayYearOfWeather, setDisplayYearOfWeather] = useState();

	/* Controlled Component: Date Selector */
	const { monthName: currentMonthName, dayNum: currentDayNum } =
		getMonthAndDayFromDayOfYear(dayOfYear);
	const [currentMonth, setCurrentMonth] = useState(
		config.monthsOfTheYear.filter(
			({ name }) => name === currentMonthName
		)[0]
	);
	const [daysInCurrentMonth, setDaysInCurrentMonth] = useState([1]);
	const [dayOfCurrentMonth, setDayOfCurrentMonth] = useState(currentDayNum);
	useEffect(() => {
		const dayNumbers = [];
		for (let day = 1; day <= currentMonth.numOfDays; day++) {
			dayNumbers.push(day);
		}
		setDaysInCurrentMonth(dayNumbers);
		setDayOfYear(
			getDayOfYearFromMonthDay(
				currentMonth.name,
				parseInt(dayOfCurrentMonth)
			)
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentMonth, dayOfCurrentMonth]);
	// 	if (currentTemp && currentSky && currentWind) {
	// 		const headers = [
	// 			"Date",
	// 			"Temp High",
	// 			"Temp Low",
	// 			"Cloud",
	// 			"Precip",
	// 			"Wind",
	// 			"Description",
	// 			"Wind Speed",
	// 			"Direction"
	// 		];
	// 		// open table
	// 		let html = `<div style="color: bisque; text-align: center; font-size: 24pt;">Weather for a ${currentClimate.name} climate</div>`;
	// 		html +=
	// 			"<table style='border-color: bisque; border-style: ridge; color: bisque; text-align: center;'>";
	// 		// headers
	// 		html += "<tr>";
	// 		headers.forEach((header) => {
	// 			html += `<th style='padding: 5px 10px;'>${header}</th>`;
	// 		});
	// 		html += "</tr>";
	// 		// data
	// 		html += `<tr><td style="width: 100px;">${dayOfCurrentMonth} ${currentMonth.name}</td>
	// 		<td style="width: 100px;">${currentTemp.high}</td>
	// 		<td style="width: 100px;">${currentTemp.low}</td>
	// 		<td style="width: 100px;">${currentSky.cloud}</td>
	// 		<td style="width: 100px;">${currentSky.precipitation}</td>
	// 		<td style="width: 100px;">${currentWind.wind}</td>
	// 		<td style="width: 380px;">${currentWind.description}</td>
	// 		<td style="width: 100px;">${currentWind.speed}</td>
	// 		<td style="width: 100px;">${currentWind.direction}</td></tr>`;

	// 		// close table
	// 		html += "</table>";
	// 		// setDisplayYearOfWeather(html);
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [currentTemp, currentSky]);

	return (
		<>
			<FlexRow>
				<StateLabel>Date: </StateLabel>
				<StyledDropDown
					value={dayOfCurrentMonth}
					onChange={(event) =>
						setDayOfCurrentMonth(event.target.value)
					}>
					{daysInCurrentMonth.map((day) => {
						return (
							<option key={uid()} value={day}>
								{day}
							</option>
						);
					})}
				</StyledDropDown>
				<StyledDropDown
					value={currentMonth.name}
					onChange={(event) => {
						setCurrentMonth(
							config.monthsOfTheYear.filter(
								({ name }) => name === event.target.value
							)[0]
						);
					}}>
					{config.monthsOfTheYear.map(({ name }) => {
						return (
							<option value={name} key={uid()}>
								{name}
							</option>
						);
					})}
				</StyledDropDown>
			</FlexRow>
			<FlexRow>
				<StateLabel>Terrain Type: </StateLabel>
				<StyledDropDown
					value={terrainType}
					onChange={(event) => {
						setTerrainType(event.target.value);
					}}>
					{terrainTypes.map((t) => {
						return (
							<option value={t} key={uid()}>
								{t}
							</option>
						);
					})}
				</StyledDropDown>
			</FlexRow>
			<FlexRow>
				<StateLabel>Is Coastal: </StateLabel>
				<StyledCheckbox
					type="checkbox"
					checked={isCoastal}
					onChange={() =>
						setIsCoastal((prev) => !prev)
					}></StyledCheckbox>
			</FlexRow>
			<FlexRow>
				<StateLabel>Latitude: {latitude}</StateLabel>
				<StyledRange
					type="range"
					min="0"
					max="90"
					value={latitude}
					onChange={(event) => {
						setLatitude(event.target.value);
					}}></StyledRange>
			</FlexRow>
			<StateLabel>Current Climate: {currentClimate?.name}</StateLabel>

			{invalidClimate ? (
				<StyledWarning>No Such Climate</StyledWarning>
			) : null}

			<GenerateButton
				onClick={() => {
					setDisplayYearOfWeather();
					generateNewCurrentWeather();
				}}>
				New Day's Weather
			</GenerateButton>
			<GenerateButton
				onClick={() => {
					setDisplayYearOfWeather();
					refreshSky();
				}}>
				Refresh Sky
			</GenerateButton>
			<GenerateButton
				onClick={() => {
					setDisplayCurrentWeather(false);
					renderYearOfWeather();
				}}>
				Get a year of weather
			</GenerateButton>
			<GenerateButton
				onClick={() => {
					setDisplayCurrentWeather(false);
					setDisplayYearOfWeather();
				}}>
				Clear
			</GenerateButton>
			{DisplayYearOfWeather ? (
				<div
					dangerouslySetInnerHTML={{ __html: DisplayYearOfWeather }}
				/>
			) : null}
			<WeatherDisplay
				dayOfYear={dayOfYear}
				terrainType={terrainType}
				isCoastal={isCoastal}
				latitude={latitude}
				currentClimate={currentClimate}
				currentTemp={currentTemp}
				currentSky={currentSky}
				currentWind={currentWind}
				generateNewCurrentWeather={generateNewCurrentWeather}
				refreshSky={refreshSky}
				getYearOfWeather={getYearOfWeather}
				invalidClimate={invalidClimate}
				displayCurrentWeather={displayCurrentWeather}
			/>
		</>
	);
};

export default OutdoorsInterface;

/* Components */

const WeatherDisplay = ({
	currentSky,
	currentTemp,
	currentWind,
	displayCurrentWeather
}) => {
	function getTemperatureZones(temp) {
		return temperatureZones.filter(({ min, max }) => {
			if (min && max) {
				return temp >= min && temp <= max;
			} else if (min) {
				return temp >= min;
			} else {
				return temp <= max;
			}
		})[0].description;
	}
	return displayCurrentWeather ? (
		<div style={{ margin: "20px" }}>
			<BodyText>
				High:{" "}
				<HighlightedText>
					{currentTemp.high}ºC
					<br />
					{getTemperatureZones(currentTemp.high)}
				</HighlightedText>{" "}
				<br />
				Low:{" "}
				<HighlightedText>
					{currentTemp.low}ºC
					<br />
					{getTemperatureZones(currentTemp.low)}
					<br />
				</HighlightedText>
				Cloud:{" "}
				<HighlightedText>
					{currentSky.cloud} <br />
				</HighlightedText>
				Precipitation:{" "}
				<HighlightedText>
					{currentSky.precipitation} <br />
				</HighlightedText>
				Wind: <HighlightedText>{currentWind.wind}</HighlightedText>
				<HighlightedText>{currentWind.description}</HighlightedText>
				<br />
				Speed:{" "}
				<HighlightedText>
					{currentWind.speed} mph <br />
				</HighlightedText>
				Direction:{" "}
				<HighlightedText>{currentWind.direction}</HighlightedText>
			</BodyText>
		</div>
	) : null;
};

/* Styled Components */

const StateLabel = styled(Subheader)`
	text-align: left;
	padding-left: 80px;
`;

const GenerateButton = styled.button`
	display: inline;

	margin: 0 auto;
	padding: 15px 60px;

	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 16pt;
	color: ${colors.cream};
	background-color: ${colors.darkgrey};
	border-radius: 6px;
	&:hover {
		cursor: pointer;
	}
`;

const FlexRow = styled.div`
	display: flex;
`;

const HighlightedText = styled(BodyText)`
	display: inline;
	color: ${colors.cream2};
`;

const StyledDropDown = styled.select`
	margin-left: 10px;

	background: none;
	border: none;
	text-decoration: underline;

	font-family: Georgia, "Times New Roman", Times, serif;
	white-space: pre-line;

	text-align: center;
	color: ${colors.cream2};

	font-size: 18pt;

	&:hover {
		cursor: pointer;
	}
`;

const StyledCheckbox = styled.input`
	margin-left: 10px;
	width: 25px;

	&:hover {
		cursor: pointer;
	}
`;

const StyledRange = styled.input`
	margin-left: 20px;

	&:hover {
		cursor: pointer;
	}
`;

const StyledWarning = styled.div`
	background-color: #ee5e5e;
	width: fit-content;
	color: ${colors.cream};
	font-size: 18pt;
	margin-left: 80px;
	padding: 5px 10px;
`;
