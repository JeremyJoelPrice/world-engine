import {
	Box,
	Button,
	CircularProgress,
	Paper,
	Typography
} from "@mui/material";
import {
	LocalizationProvider,
	MobileDatePicker,
	TimeClock
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getMoon, getSunriseSunset } from "./timeService";
import { WbSunny, WbTwilight } from "@mui/icons-material";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const TimeComponent = ({
	datetime,
	setDatetime,
	latitude,
	sunriseSunset,
	setSunriseSunset
}) => {
	const [tenMinTurns, setTenMinTurns] = useState(0);

	const [moon, setMoon] = useState(getMoon(datetime, latitude.º));

	useEffect(() => {
		setSunriseSunset(getSunriseSunset(latitude.º, datetime));
		setMoon(getMoon(datetime, latitude.º));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [latitude, datetime]);

	const incrementTime = (value, unitString) => {
		setDatetime((prev) => prev.add(value, unitString));
	};

	const incrementTenMinTurns = () => {
		setTenMinTurns((previous) => {
			const newValue = previous + 16.666666666666668; // 100 ÷ 6
			if (Math.round(newValue) === 100) {
				incrementTime(1, "hour");
				return 0;
			}
			return newValue;
		});
	};

	return (
		<Paper
			variant="outlined"
			sx={{
				gridColumn: "2 / span 1",
				gridRow: "2 / span 1",
				padding: "15px"
			}}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<FlexBox>
					<MobileDatePicker
						views={["day", "month", "year"]}
						value={datetime}
						minDate={dayjs("0100-01-01 00:00")}
						onChange={setDatetime}
						format="DD/MMM/YYYY"
						sx={{
							"& .MuiOutlinedInput-notchedOutline": {
								borderLeft: "none",
								borderRight: "none",
								borderTop: "none"
							},
							"& .MuiOutlinedInput-input": {
								padding: "8px"
							},
							"& .MuiInputBase-root": {
								paddingRight: 0
							},
							width: "120px"
						}}
					/>
				</FlexBox>
				<FlexBox>
					<FlexBox
						style={{
							flexDirection: "column",
							justifyContent: "space-around",
							margin: "16px 0"
						}}>
						<Box>
							<WbSunny fontSize={"small"} />
							<Typography sx={{ margin: "auto 0" }}>
								{`${sunriseSunset.sunrise.format("HH:mm")}`}
							</Typography>
						</Box>
						<Box>
							<WbTwilight fontSize={"small"} />
							<Typography sx={{ margin: "auto 0" }}>
								{`${sunriseSunset.sunset.format("HH:mm")}`}
							</Typography>
						</Box>
					</FlexBox>
					<TimeClock
						ampm={false}
						value={datetime}
						views={["hours"]}
						onChange={(v) => {
							setDatetime(v.minute(0).second(0));
						}}
					/>
					<Box style={{ margin: "16px 0" }}>
						<MoonPhase moon={moon} />
					</Box>
				</FlexBox>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Button onClick={() => incrementTime(1, "week")}>
						+Week
					</Button>
					<Button onClick={() => incrementTime(1, "day")}>
						+Day
					</Button>
					<Button onClick={() => incrementTime(1, "hour")}>
						+Hour
					</Button>
				</Box>
				<CircularProgressWithLabel
					value={tenMinTurns}
					onClick={() => incrementTenMinTurns()}
				/>
			</LocalizationProvider>
		</Paper>
	);
};

export default TimeComponent;

/* other components */

function CircularProgressWithLabel({ onClick, value }) {
	return (
		<StyledBox>
			<StyledCircularProgress
				variant="determinate"
				size="70px"
				value={value}
				thickness={5}
				sx={{
					zIndex: 2
				}}
			/>
			<StyledTenMinuteButton
				variant="outlined"
				onClick={onClick}
				sx={{ zIndex: 1 }}>
				+10m
			</StyledTenMinuteButton>
		</StyledBox>
	);
}

function MoonPhase({ moon }) {
	const { phase, visible } = moon;

	const textDecoration = visible ? "none" : "line-through";
	const opacity = visible ? "" : "20%";

	return (
		<>
			<div style={{ fontSize: "24pt", opacity }}>{phase.emoji}</div>
			<div
				style={{
					fontSize: "10pt",
					maxWidth: "40px",
					textDecoration
				}}>
				{phase.label}
			</div>
			<span>{visible}</span>
		</>
	);
}

/* styled components */

const FlexBox = styled(Box)`
	display: flex;
	justify-content: space-between;
`;

const StyledBox = styled(Box)`
	position: relative;
	display: flex;
	justify-content: center;
`;

const StyledTenMinuteButton = styled(Button)`
	position: absolute;

	border-radius: 25pt;
	height: 70px;
	width: 70px;
`;

const StyledCircularProgress = styled(CircularProgress)`
	position: absolute;
	pointer-events: none;
`;
