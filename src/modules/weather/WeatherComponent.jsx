import { Button, Paper } from "@mui/material";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import colors from "../../util/colors";
import { generateWeatherJourney } from "./weatherService";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HearingIcon from "@mui/icons-material/Hearing";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { Thermostat } from "@mui/icons-material";
import { HIGH_IMPACT, MODERATE_IMPACT } from "./constants";
dayjs.extend(isSameOrAfter);

const WeatherComponent = ({ datetime, weatherJourney, setWeatherJourney }) => {
	const currentStepIndex = weatherJourney.journey.findIndex((step, i) => {
		const next = weatherJourney.journey[i + 1];
		return !next
			? datetime.isSameOrAfter(step.hourOfDay)
			: datetime.isSameOrAfter(step.hourOfDay) &&
					datetime.isBefore(next.hourOfDay);
	});

	return (
		<Paper
			variant="outlined"
			sx={{
				gridColumn: "2 / span 1",
				gridRow: "1 / span 1",
				p: 2,
				height: "100%",
				display: "grid",
				gridTemplateRows: "2fr 1fr",
				gridTemplateColumns: "3fr 1fr",
				gap: 3
			}}>
			<div
				style={{
					gridColumn: "1 / span 2",
					borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
					height: "272px",
					overflowY: "auto",
					"&::WebkitScrollbarTrack": { background: "#1e1e1e" },
					"&::WebkitScrollbarThumb": {
						backgroundColor: "#888",
						borderRadius: 4
					},
					scrollbarWidth: "thin",
					scrollbarColor: "#888 #1e1e1e"
				}}>
				{weatherJourney.journey.map((step, index) => (
					<WeatherStep
						key={index}
						hourOfDay={step.hourOfDay}
						desc={step.desc}
						highlight={index === currentStepIndex}
					/>
				))}
			</div>

			<div
				style={{
					gridColumn: 1,
					gridRow: 2,
					display: "grid",
					gridTemplateColumns: "repeat(2, 1fr)",
					gridTemplateRows: "repeat(2, 1fr)",
					gap: "4px"
				}}>
				<Impact
					icon={<VisibilityIcon fontSize={"small"} />}
					impact={
						weatherJourney.journey[currentStepIndex].impact?.vision
					}
				/>
				<Impact
					icon={<Thermostat fontSize={"small"} />}
					impact={
						weatherJourney.journey[currentStepIndex].impact
							?.exposure
					}
				/>
				<Impact
					icon={<HearingIcon fontSize={"small"} />}
					impact={
						weatherJourney.journey[currentStepIndex].impact?.hearing
					}
				/>
				<Impact
					icon={<AdsClickIcon fontSize={"small"} />}
					impact={
						weatherJourney.journey[currentStepIndex].impact
							?.accuracy
					}
				/>
			</div>

			<div style={{ gridColumn: 2, gridRow: 2 }}>
				<Button
					variant="contained"
					size="small"
					onClick={() =>
						setWeatherJourney(generateWeatherJourney(datetime))
					}>
					Generate
				</Button>
			</div>
		</Paper>
	);
};

export default WeatherComponent;

const WeatherStep = ({ hourOfDay, desc, highlight }) => {
	return (
		<div
			style={{
				padding: "4px 0"
			}}>
			<span
				style={{
					color: highlight ? colors.bluegreen : colors.grey
				}}>
				{`[${hourOfDay.format("HH:mm")}] - `}
			</span>
			<span style={highlight ? {} : { color: colors.grey }}>
				{`${desc}`}
			</span>
		</div>
	);
};

const Impact = ({ icon, impact }) => {
	let flag = "?";
	switch (impact) {
		case MODERATE_IMPACT:
			flag = "🟠";
			break;
		case HIGH_IMPACT:
			flag = "🔴";
			break;
		default:
			flag = "🟢";
			break;
	}

	return (
		<div>
			{icon}
			<span style={{ verticalAlign: "top", margin: "5px" }}>{flag}</span>
		</div>
	);
};
