import { Box, Button, CircularProgress, Paper } from "@mui/material";
import {
	LocalizationProvider,
	MobileDatePicker,
	TimeClock
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useState } from "react";
import styled from "@emotion/styled";

const TimeComponent = ({ datetime, setDatetime }) => {
	const [tenMinTurns, setTenMinTurns] = useState(0);

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
				<FlexRow>
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
				</FlexRow>
				<TimeClock
					ampm={false}
					value={datetime}
					views={["hours"]}
					onChange={setDatetime}
				/>
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
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						width: "100%"
					}}></Box>
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

/* styled components */

const FlexRow = styled.div`
	display: flex;
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
