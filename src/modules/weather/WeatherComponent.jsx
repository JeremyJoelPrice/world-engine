import { Button, Paper } from "@mui/material";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import dayOfYear from "dayjs/plugin/dayOfYear";
import colors from "../../util/colors";
import {
	generateWeatherJourney,
	getAverageTempOfGivenDay,
	getCurrentTemp
} from "./weatherService";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HearingIcon from "@mui/icons-material/Hearing";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { Thermostat } from "@mui/icons-material";
import { HIGH_IMPACT, LATITUDE_BANDS, MODERATE_IMPACT } from "./constants";
import StyledSelect from "../../components/StyledSelect";
import { useEffect } from "react";
import climates from "./data/climates";

dayjs.extend(dayOfYear);
dayjs.extend(isSameOrAfter);

const WeatherComponent = ({
	datetime,
	weatherJourney,
	setWeatherJourney,
	latitude,
	setLatitude,
	sunriseSunset,
	tempModifier
}) => {
	const generateNewWeatherJourney = () => {
		setWeatherJourney(generateWeatherJourney(datetime));
	};

	const currentStepIndex = weatherJourney.journey.findIndex((step, i) => {
		const next = weatherJourney.journey[i + 1];
		return !next
			? datetime.isSameOrAfter(step.hourOfDay)
			: datetime.isSameOrAfter(step.hourOfDay) &&
					datetime.isBefore(next.hourOfDay);
	});

	const temp = Math.round(
		getCurrentTemp(
			datetime.hour(),
			getAverageTempOfGivenDay(climates[0], datetime.dayOfYear()),
			sunriseSunset.sunrise,
			tempModifier
		)
	);

	useEffect(() => {
		if (currentStepIndex === weatherJourney.journey.length - 1)
			generateNewWeatherJourney();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [datetime]);

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
					icon={<VisibilityIcon fontSize={"large"} />}
					impact={
						weatherJourney.journey[currentStepIndex]?.impact?.vision
					}
				/>
				<div>
					<Impact
						icon={<Thermostat fontSize={"large"} />}
						impact={
							weatherJourney.journey[currentStepIndex]?.impact
								?.exposure
						}
						label={`${temp}º`}
					/>
				</div>
				<Impact
					icon={<HearingIcon fontSize={"large"} />}
					impact={
						weatherJourney.journey[currentStepIndex]?.impact
							?.hearing
					}
				/>
				<Impact
					icon={<AdsClickIcon fontSize={"large"} />}
					impact={
						weatherJourney.journey[currentStepIndex]?.impact
							?.accuracy
					}
				/>
			</div>

			<div style={{ gridColumn: 2, gridRow: 2 }}>
				<StyledSelect
					optionsArray={LATITUDE_BANDS.map(({ label }) => label)}
					value={latitude.label}
					setValue={(currentLabel) => {
						setLatitude(
							LATITUDE_BANDS.filter(
								({ label }) => label === currentLabel
							)[0]
						);
						generateNewWeatherJourney();
					}}
				/>
				<Button
					variant="contained"
					size="small"
					onClick={() => generateNewWeatherJourney()}>
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

const Impact = ({ icon, impact, label }) => {
	let color =
		impact === MODERATE_IMPACT
			? "orange"
			: impact === HIGH_IMPACT
				? "red"
				: colors.grey;

	return (
		<>
			<div style={{ color, display: "flex" }}>
				{icon}
				{label}
			</div>
		</>
	);
};
