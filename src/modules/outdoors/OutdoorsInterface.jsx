import styled from "styled-components";
import { Subheader } from "../../components/StyledText";
import colors from "../../components/Colors";
import { useEffect, useState } from "react";
import config from "./config";
import { uid } from "../../util/common";
import {
	getDayOfYearFromMonthDay,
	getMonthAndDayFromDayOfYear
} from "./weather/util";
import terrainTypes from "./data/terrainTypes";

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
	getCurrentWind,
	getWeather,
	refreshSky,
	getYearOfWeather,
	invalidClimate
}) => {
	const [displayTable, setDisplayTable] = useState();

	/* Rendering results */
	useEffect(() => {
		if (currentTemp && currentSky && currentWind) {
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
			// open table
			let html = `<div style="color: bisque; text-align: center; font-size: 24pt;">Weather for a ${currentClimate.name} climate</div>`;
			html +=
				"<table style='border-color: bisque; border-style: ridge; color: bisque; text-align: center;'>";
			// headers
			html += "<tr>";
			headers.forEach((header) => {
				html += `<th style='padding: 5px 10px;'>${header}</th>`;
			});
			html += "</tr>";
			// data
			const { monthName, dayNum } =
				getMonthAndDayFromDayOfYear(dayOfYear);
			html += `<tr><td style="width: 100px;">${dayNum} ${monthName}</td>
			<td style="width: 100px;">${currentTemp.high}</td>
			<td style="width: 100px;">${currentTemp.low}</td>
			<td style="width: 100px;">${currentSky.cloud}</td>
			<td style="width: 100px;">${currentSky.precipitation}</td>
			<td style="width: 100px;">${currentWind.wind}</td>
			<td style="width: 380px;">${currentWind.description}</td>
			<td style="width: 100px;">${currentWind.speed}</td>
			<td style="width: 100px;">${currentWind.direction}</td></tr>`;

			// close table
			html += "</table>";
			setDisplayTable(html);
		}
	}, [currentTemp, currentSky]);

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
			const { dayNum, monthName } = getMonthAndDayFromDayOfYear(
				currentDay.dayOfYear
			);
			html += `<tr><td style="width: 100px;">${dayNum} ${monthName}</td>
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

		setDisplayTable(html);
	}

	/* Controlled Component: Date Selector */
	// month
	const { monthName, dayNum } = getMonthAndDayFromDayOfYear(dayOfYear);
	const [currentMonth, setCurrentMonth] = useState(
		config.monthsOfTheYear.filter(({ name }) => name === monthName)[0]
	);
	const [daysInMonth, setDaysInMonth] = useState([1]);

	// day of month
	const [dayOfMonth, setDayOfMonth] = useState(dayNum);

	useEffect(() => {
		const dayNumbers = [];
		for (let day = 1; day <= currentMonth.numOfDays; day++) {
			dayNumbers.push(day);
		}
		setDaysInMonth(dayNumbers);
		setDayOfYear(
			getDayOfYearFromMonthDay(currentMonth.name, parseInt(dayOfMonth))
		);
	}, [currentMonth, dayOfMonth]);

	return (
		<>
			<FlexRow>
				<StateLabel>Date: </StateLabel>
				<StyledDropDown
					value={dayOfMonth}
					onChange={(event) => setDayOfMonth(event.target.value)}>
					{daysInMonth.map((day) => {
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

			<GenerateButton onClick={getWeather}>
				New Day's Weather
			</GenerateButton>
			<GenerateButton onClick={refreshSky}>Refresh Sky</GenerateButton>
			<GenerateButton onClick={renderYearOfWeather}>
				Get a year of weather
			</GenerateButton>
			<GenerateButton
				onClick={() => {
					setDisplayTable("");
				}}>
				Clear
			</GenerateButton>
			{displayTable ? (
				<div dangerouslySetInnerHTML={{ __html: displayTable }} />
			) : null}
		</>
	);
};

export default OutdoorsInterface;

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
`;

const StyledCheckbox = styled.input`
	margin-left: 10px;
	width: 25px;
`;

const StyledRange = styled.input`
	margin-left: 20px;
`;

const StyledWarning = styled.div`
	background-color: #ee5e5e;
	width: fit-content;
	color: ${colors.cream};
	font-size: 18pt;
	margin-left: 80px;
	padding: 5px 10px;
`;
