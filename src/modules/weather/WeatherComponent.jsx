import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	Grid2 as Grid,
	Paper,
	Slider,
	Typography
} from "@mui/material";
import {
	AcUnit,
	Air,
	ArrowDownward,
	ArrowUpward,
	Cloud,
	SwapVert,
	Thermostat,
	WaterDrop,
	WbTwilight
} from "@mui/icons-material";
import terrainTypes from "./data/terrainTypes";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
	generateWeather,
	getLatitudeBand,
	isValidClimate
} from "./weatherService";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import StyledSelect from "../../components/StyledSelect";
import climates from "./data/climates";
const customClimates = climates.custom.map((c) => c.name);

dayjs.extend(dayOfYear);

const WeatherComponent = ({
	datetime,
	terrainType,
	setTerrainType,
	isCoastal,
	setIsCoastal,
	latitude,
	setLatitude
}) => {
	const dayOfYear = datetime.dayOfYear();
	const [weather, setWeather] = useState({
		temperature: {
			high: 0,
			low: 0
		},
		cloud: "",
		precipitation: "",
		wind: {
			type: "",
			description: "",
			speed: 0,
			direction: ""
		},
		daylight: {
			sunrise: 0,
			sunset: 0
		}
	});
	const [disabled, setDisabled] = useState();
	const [genericClimateUi, setGenericClimateUi] = useState(true);
	const [customClimate, setCustomClimate] = useState(customClimates[0]);
	const [latitudeBand, setLatitudeBand] = useState(getLatitudeBand(latitude));

	const generate = () => {
		setWeather(
			generateWeather(
				terrainType,
				latitude,
				isCoastal,
				dayOfYear,
				weather
			)
		);
	};

	useEffect(() => {
		setDisabled(!isValidClimate(terrainType, latitude, isCoastal));
	}, [terrainType, latitude, isCoastal]);

	useEffect(() => {
		setLatitudeBand(getLatitudeBand(latitude));
	}, [latitude]);

	return (
		<Paper
			variant="outlined"
			sx={{
				gridColumn: "2 / span 1",
				gridRow: "1 / span 1",
				display: "flex"
			}}>
			<FlexBox
				sx={{
					padding: "32px 20px 20px",
					flexDirection: "column",
					width: "fit-content"
				}}>
				<Grid container spacing={3}>
					<Grid size={6} sx={{ minHeight: "50px" }}>
						<DataRow>
							<Thermostat fontSize={"small"} />
							<Typography sx={{ margin: "auto 0" }}>
								{`${weather.temperature.high}°/${weather.temperature.low}°`}
							</Typography>
						</DataRow>
					</Grid>
					<Grid size={6} sx={{ minHeight: "50px" }}>
						<DataRow>
							<Cloud fontSize={"small"} />
							<Typography sx={{ margin: "auto 0" }}>
								{weather.cloud}
							</Typography>
						</DataRow>
					</Grid>
					<Grid size={6} sx={{ minHeight: "50px" }}>
						<DataRow>
							<Air fontSize={"small"} />
							<Typography sx={{ margin: "auto 0" }}>
								{`${weather.wind.speed}mph / ${weather.wind.direction}`}
							</Typography>
						</DataRow>
					</Grid>
					<Grid size={6} sx={{ minHeight: "50px" }}>
						<DataRow>
							{Math.trunc(
								(weather.temperature.high +
									weather.temperature.low) /
									2
							) <= 0 ? (
								<AcUnit fontSize={"small"} />
							) : (
								<WaterDrop fontSize={"small"} />
							)}
							<Typography sx={{ margin: "auto 0" }}>
								{`${weather.precipitation}`}
							</Typography>
						</DataRow>
					</Grid>
					<Grid size={6} sx={{ minHeight: "50px" }}>
						<DataRow>
							<ArrowUpward fontSize={"small"} />
							<WbTwilight fontSize={"small"} />
							<Typography sx={{ margin: "auto 0" }}>
								{`${formatHour(weather.daylight.sunrise)}`}
							</Typography>
						</DataRow>
					</Grid>
					<Grid size={6} sx={{ minHeight: "50px" }}>
						<DataRow>
							<ArrowDownward fontSize={"small"} />
							<WbTwilight fontSize={"small"} />
							<Typography sx={{ margin: "auto 0" }}>
								{`${formatHour(weather.daylight.sunset)}`}
							</Typography>
						</DataRow>
					</Grid>
				</Grid>
				<Card variant={"outlined"} sx={{ flexGrow: 1 }}>
					<CardContent>
						<Typography
							variant={"body2"}
							sx={{
								color: "rgba(255, 255, 255, 0.7)"
							}}>
							{weather.wind.type}
						</Typography>
						<br />
						<Typography>{weather.wind.description}</Typography>
					</CardContent>
				</Card>
			</FlexBox>
			<Divider
				orientation="vertical"
				flexItem
				sx={{ margin: "20px 0" }}
			/>
			<FlexBox
				sx={{
					width: "40%",
					padding: "20px 10px",
					flexDirection: "column"
				}}>
				<Box>
					<Button
						size="small"
						onClick={() => {
							setGenericClimateUi((prev) => !prev);
						}}>
						{genericClimateUi
							? "Generic Climates"
							: "Custom Climates"}{" "}
						{<SwapVert fontSize={"small"} />}
					</Button>
				</Box>
				{genericClimateUi ? (
					<>
						<StyledSelect
							optionsArray={terrainTypes}
							value={terrainType}
							setValue={setTerrainType}
						/>
						<FlexBox
							sx={{
								justifyContent: "flex-start",
								alignItems: "center",
								padding: "0 14px 16.5px",
								cursor: "pointer"
							}}
							onClick={() => {
								setIsCoastal(!isCoastal);
							}}>
							<Typography>coastal</Typography>
							<Checkbox
								checked={isCoastal}
								sx={{ padding: "0 6px 0" }}
							/>
						</FlexBox>
						<Box sx={{ padding: "0 14px" }}>
							<Typography>latitude {latitude}°</Typography>
							<Slider
								max={90}
								value={latitude}
								valueLabelDisplay="auto"
								valueLabelFormat={(value) => latitudeBand}
								onChangeCommitted={(event, value) =>
									setLatitude(value)
								}
								sx={{
									width: "100%"
								}}
							/>
						</Box>{" "}
					</>
				) : (
					<StyledSelect
						optionsArray={customClimates}
						value={customClimate}
						setValue={setCustomClimate}
					/>
				)}
				<Box sx={{ flexGrow: "1" }} />
				<FlexBox sx={{ justifyContent: "center" }}>
					<Button variant="contained" size="small" onClick={generate}>
						{disabled ? "No Valid Climate" : "Generate Weather"}
					</Button>
				</FlexBox>
				<Box sx={{ flexGrow: "1" }} />
			</FlexBox>
		</Paper>
	);
};

export default WeatherComponent;

/* helper functions */

const formatHour = (hour) => {
	if (hour === 24) return "00:00";
	if (hour < 10) return `0${hour}:00`;
	return `${hour}:00`;
};

/* other components */

const DataRow = ({ children }) => {
	return (
		<Box
			sx={{
				display: "flex",
				columnGap: "8px",
				margin: "0 0"
			}}>
			{children}
		</Box>
	);
};

const FlexBox = ({ children, sx = {}, ...props }) => (
	<Box
		sx={{
			display: "flex",
			justifyContent: "space-between",
			...sx
		}}
		{...props}>
		{children}
	</Box>
);
