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
	Air,
	ArrowDownward,
	ArrowUpward,
	Cloud,
	Thermostat,
	WaterDrop,
	WbTwilight
} from "@mui/icons-material";
import terrainTypes from "./data/terrainTypes";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { generateWeather, isValidClimate } from "./weatherService";
import dayjs from "dayjs";
import dayOfYear from "dayjs/plugin/dayOfYear";
import StyledSelect from "../../components/StyledSelect";

dayjs.extend(dayOfYear);

const WeatherComponent = ({ datetime }) => {
	const dayOfYear = datetime.dayOfYear();
	const [terrainType, setTerrainType] = useState(terrainTypes[0]);
	const [isCoastal, setIsCoastal] = useState(false);
	const [latitude, setLatitude] = useState(55);
	const [weather, setWeather] = useState(
		generateWeather(terrainType, latitude, false, dayOfYear)
	);
	const [disabled, setDisabled] = useState();

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

	const latitudeMarks = [
		{
			value: 0
		},
		{
			value: 25
		},
		{
			value: 35
		},
		{
			value: 45
		},
		{
			value: 55
		},
		{
			value: 75
		},
		{
			value: 90
		}
	];

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
					flexDirection: "column"
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
							<WaterDrop fontSize={"small"} />
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
				<Card variant={"outlined"} sx={{ height: "120px" }}>
					<CardContent>
						<Typography
							variant={"body2"}
							sx={{
								color: "rgba(255, 255, 255, 0.7)"
							}}>
							{weather.wind.type}
						</Typography>
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
					<StyledSelect
						label="Terrain Type"
						optionsArray={terrainTypes}
						value={terrainType}
						setValue={setTerrainType}
					/>
				</Box>
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
					<Checkbox checked={isCoastal} sx={{ padding: "0 6px 0" }} />
				</FlexBox>
				<Box sx={{ padding: "0 14px" }}>
					<Typography>latitude {latitude}°</Typography>
					<Slider
						defaultValue={55}
						step={null}
						marks={latitudeMarks}
						max={90}
						valueLabelDisplay="auto"
						onChangeCommitted={(event, value) => setLatitude(value)}
						sx={{
							width: "100%"
						}}
					/>
				</Box>
				<Box sx={{ flexGrow: "1" }} />
				<FlexBox sx={{ justifyContent: "center" }}>
					<Button
						variant="contained"
						size="small"
						onClick={generate}
						disabled={disabled}>
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
