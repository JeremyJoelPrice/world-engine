import { Box, Button, Container, Paper, Typography } from "@mui/material";
import { useState } from "react";
import colors from "../../components/Colors";
import {
	generateAgenda,
	generateAsset,
	generateEvent,
	generateInnerCircle,
	generateInnerCircleFunction,
	generateLimitation,
	generateOutcome,
	generatePlot,
	generateRelation
} from "./SeedGeneratorService";
import Copyable from "../../components/Copyable";

const SeedGeneratorComponent = () => {
	const [display, setDisplay] = useState("");

	/* plot */
	const [agenda, setAgenda] = useState("");
	const [limitation, setLimitation] = useState("");
	const [asset, setAsset] = useState("");

	const copyPlot = () => {
		const plotString = `I want to ${agenda},\nbut I can't because ${limitation},\nhowever, I have ${asset}`;

		navigator.clipboard.writeText(plotString);
	};

	/* relationship */
	const [relation, setRelation] = useState("");
	const [event, setEvent] = useState("");
	const [outcome, setOutcome] = useState("");
	const [innerCirlceFunction, setInnerCirlceFunction] = useState("");

	const generateRelationship = () => {
		setDisplay("relationship");
		setRelation(generateRelation);
		setEvent(generateEvent);
		setOutcome(generateOutcome);
		setInnerCirlceFunction(generateInnerCircleFunction);
	};
	const copyRelationship = () => {
		const relString = `They are my ${relation}.\nWe ${event}, and we ${outcome}.\n${
			innerCirlceFunction.desc.substring(0, 1).toUpperCase() +
			innerCirlceFunction.desc.substring(1)
		} (${innerCirlceFunction.label}).`;

		navigator.clipboard.writeText(relString);
	};

	/* 3 degrees of separation */
	const [threeDegrees, setThreeDegrees] = useState("");

	const generate3Degrees = () => {
		setDisplay("3 degrees");
		const degrees = [];
		while (degrees.length < 3) {
			let degree = "";
			do {
				degree = generateRelation();
			} while (degrees.includes(degree));
			degrees.push(degree);
		}
		const result = `They're my ${degrees[0]}'s ${degrees[1]}'s, ${degrees[2]}.`;
		setThreeDegrees(result);
	};
	const copy3Degrees = () => {
		navigator.clipboard.writeText(threeDegrees);
	};

	/* inner circle */
	const [innerCircle, setInnerCircle] = useState("");

	const copyInnerCircle = () => {
		let string = "";
		innerCircle.forEach((e) => {
			string += `${e.label.toUpperCase()}; my ${e.relation}\n- ${e.desc}\n- they have ${e.asset}\n- but ${e.limit}\n`;
		});
		navigator.clipboard.writeText(string);
	};

	return (
		<Paper
			variant="outlined"
			sx={{
				gridColumn: "3 / span 1",
				gridRow: "2 / span 1",
				paddingTop: "10px"
			}}>
			<Container>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-evenly"
					}}>
					<Button
						onClick={() => {
							generatePlot(
								setAgenda,
								setLimitation,
								setAsset,
								setDisplay
							);
							setDisplay("plot");
						}}>
						Plot
					</Button>
					<Button onClick={generateRelationship}>Relationship</Button>
					<Button onClick={generate3Degrees}>3 Degrees</Button>
					<Button
						onClick={() => {
							setDisplay("inner circle");
							generateInnerCircle(setInnerCircle);
						}}>
						Inner Circle
					</Button>
				</Box>
				<Box>
					{display && (
						<Paper
							elevation={1}
							sx={{
								marginTop: "24px",
								padding: "10px",
								textAlign: "center"
							}}>
							{display === "plot" && (
								<Copyable copyFunc={copyPlot}>
									<Typography>
										They want to{" "}
										<Replaceable
											replace={() =>
												generateAgenda(setAgenda)
											}>
											{agenda}
										</Replaceable>
										,
										<br />
										but can't because{" "}
										<Replaceable
											replace={() =>
												generateLimitation(
													setLimitation
												)
											}>
											{limitation}
										</Replaceable>
										,
										<br />
										however, they have{" "}
										<Replaceable
											replace={() =>
												generateAsset(setAsset)
											}>
											{asset}
										</Replaceable>
										.
									</Typography>
								</Copyable>
							)}
							{display === "relationship" && (
								<Copyable copyFunc={copyRelationship}>
									<Typography>
										They are my{" "}
										<Replaceable
											replace={() =>
												setRelation(generateRelation())
											}>
											{relation},
										</Replaceable>
										<br />
										We{" "}
										<Replaceable
											replace={() =>
												setEvent(generateEvent())
											}>
											{event},
										</Replaceable>
										<br />
										and we{" "}
										<Replaceable
											replace={() =>
												setOutcome(generateOutcome)
											}>
											{outcome}.
										</Replaceable>
										<br />
										<Replaceable
											replace={() =>
												setInnerCirlceFunction(
													generateInnerCircleFunction()
												)
											}>
											{innerCirlceFunction.desc
												.substring(0, 1)
												.toUpperCase() +
												innerCirlceFunction.desc.substring(
													1
												)}{" "}
											({innerCirlceFunction.label}).
										</Replaceable>
									</Typography>
								</Copyable>
							)}
							{display === "3 degrees" && (
								<Copyable copyFunc={copy3Degrees}>
									<Typography>{threeDegrees}</Typography>
								</Copyable>
							)}
							{display === "inner circle" && (
								<Copyable copyFunc={copyInnerCircle}>
									<Typography
										fontSize={"medium"}
										sx={{
											textAlign: "left"
										}}>
										{innerCircle.map((e, key) => {
											return (
												<>
													{e.label.toUpperCase()}; my{" "}
													{e.relation}
													<br />
													<li>They have {e.asset}</li>
													<li>but {e.limit}</li>
												</>
											);
										})}
									</Typography>
								</Copyable>
							)}
						</Paper>
					)}
				</Box>
			</Container>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center"
				}}>
				<Button
					onClick={() => setDisplay("")}
					sx={{
						position: "absolute",
						bottom: 0
					}}>
					clear
				</Button>
			</Box>
		</Paper>
	);
};

export default SeedGeneratorComponent;

const Replaceable = ({ replace, children }) => {
	return (
		<Box
			sx={{
				textDecoration: "underline",
				cursor: "pointer",
				display: "inline",
				textDecorationColor: colors.darkgrey2
			}}
			onClick={replace}>
			{children}
		</Box>
	);
};
