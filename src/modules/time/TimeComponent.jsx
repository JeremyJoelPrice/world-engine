import { Box, Button, Paper } from "@mui/material";
import {
	DatePicker,
	DesktopDatePicker,
	LocalizationProvider,
	TimeClock
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import SingleClickSelect from "../../components/SingleClickSelect";
// import dayjs from "dayjs";

const TimeComponent = () => {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	const [datetime, setDatetime] = useState(dayjs("0793-06-08 00:00"));

	const incrementTime = (value, unitString) => {
		setDatetime((prev) => prev.add(value, unitString));
	};

	return (
		<Paper
			variant="outlined"
			sx={{
				gridColumn: "2 / 3",
				gridRow: "2 / 3",
				padding: "15px"
			}}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DesktopDatePicker
					label={"day"}
					views={["day"]}
					disablePast={false}
					value={datetime}
					minDate={dayjs("0793-01-01 00:00")}
					onChange={setDatetime}
					sx={{
						"& .MuiOutlinedInput-notchedOutline": {
							border: "none"
						},
						"& .MuiOutlinedInput-input ": {
							padding: "8px"
						},
						maxWidth: "100px"
					}}
				/>
				<SingleClickSelect
					label="Month"
					optionsArray={months}
					value={datetime.format("MMMM")}
					setValue={(monthString) =>
						setDatetime((prev) =>
							prev.month(months.indexOf(monthString))
						)
					}
				/>
				<TimeClock
					ampm={false}
					value={datetime}
					views={["hours"]}
					onChange={setDatetime}
				/>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<Button onClick={() => incrementTime(-1, "day")}>
						-1 Day
					</Button>
					<Button onClick={() => incrementTime(-1, "hour")}>
						-1 Hr
					</Button>
					<Button onClick={() => incrementTime(1, "hour")}>
						+1 Hr
					</Button>
					<Button onClick={() => incrementTime(1, "day")}>
						+1 Day
					</Button>
				</Box>
			</LocalizationProvider>
		</Paper>
	);
};

export default TimeComponent;
