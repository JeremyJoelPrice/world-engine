import { Button, Paper } from "@mui/material";
import { useState } from "react";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import roll from "../../util/roll";
import colors from "../../util/colors";

dayjs.extend(isSameOrAfter);

const WeatherComponent = ({ datetime }) => {
	const [weatherSteps, setWeatherSteps] = useState([]);

	function handleGenerate() {
		const steps = [];
		let time = datetime;
		steps.push({
			time,
			desc: "clear skies, calm winds",
			impact: "full visibility and hearing, mild temperature, no additional exposure"
		});
		time = time.add(roll("1d3").value, "hour");

		steps.push({
			time,
			desc: "clear skies, calm winds",
			impact: "excellent visibility and hearing, slightly cooler air, comfortable exposure"
		});
		time = time.add(roll("1d3").value, "hour");

		steps.push({
			time,
			desc: "clouds gather, light breeze",
			impact: "visibility slightly reduced, distant sounds muffled, mild chill begins"
		});
		time = time.add(roll("1d3").value, "hour");

		steps.push({
			time,
			desc: "light rain, moderate breeze",
			impact: "visibility reduced by rain, sound partially muffled, wind intensifies cold exposure"
		});
		time = time.add(roll("1d3").value, "hour");

		steps.push({
			time,
			desc: "clouds part, breeze dies down",
			impact: "visibility improves, sound clearer, temperature stabilizes, exposure decreases"
		});
		time = time.add(roll("1d3").value, "hour");

		steps.push({
			time,
			desc: "clear skies, calm winds",
			impact: "full visibility and hearing restored, temperature mild, minimal exposure"
		});
		setWeatherSteps(steps);
	}

	const currentStepIndex = weatherSteps.findIndex((step, i) => {
		const next = weatherSteps[i + 1];
		return !next
			? datetime.isSameOrAfter(step.time)
			: datetime.isSameOrAfter(step.time) && datetime.isBefore(next.time);
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
					borderBottom: "1px solid rgba(255, 255, 255, 0.12)"
				}}>
				{weatherSteps.map((step, index) => (
					<WeatherStep
						key={index}
						time={step.time}
						desc={step.desc}
						highlight={index === currentStepIndex}
					/>
				))}
			</div>

			<div>{weatherSteps[currentStepIndex]?.impact}</div>

			<div>
				<Button
					variant="contained"
					size="small"
					onClick={handleGenerate}>
					Generate
				</Button>
			</div>
		</Paper>
	);
};

export default WeatherComponent;

const WeatherStep = ({ time, desc, highlight }) => {
	return (
		<div>
			<span
				style={{
					color: highlight ? colors.bluegreen : colors.grey
				}}>
				{`[${time.format("HH:mm")}] - `}
			</span>
			{`${desc}`}
		</div>
	);
};
