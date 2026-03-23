import { useState } from "react";
import {
	copyNpcAsText,
	generateNpc,
	npcParameters
} from "./npcGeneratorService";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import SmallBodyText from "../../components/SmallBodyText";
import StyledSelect from "../../components/StyledSelect";
import Copyable from "../../components/Copyable";
import styled from "styled-components";
import colors from "../../util/colors";

const NpcGeneratorComponent = () => {
	const flavours = npcParameters.flavours;
	const sexes = ["Random", ...npcParameters.sexes];

	const [chosenParameters, setChosenParameters] = useState({
		sex: sexes[0],
		flavour: flavours[0].name
	});

	const [generatedNpc, setGeneratedNpc] = useState();

	const handleChange = (k, v) => {
		setChosenParameters((prevNpc) => {
			const newNpc = Object.assign({}, prevNpc);
			newNpc[k] = v;
			return newNpc;
		});
	};

	return (
		chosenParameters && (
			<>
				<Box
					sx={{
						justifyContent: "space-evenly",
						display: "flex",
						width: "60%",
						margin: "20px auto 0",
						columnGap: "8px"
					}}>
					<StyledSelect
						label="Sex"
						optionsArray={sexes}
						value={chosenParameters.sex}
						setValue={(value) => handleChange("sex", value)}
					/>

					<StyledSelect
						label="Flavour"
						optionsArray={flavours.map(({ name }) => name)}
						value={chosenParameters.flavour}
						setValue={(value) => handleChange("flavour", value)}
					/>
				</Box>

				<Container
					sx={{
						display: "flex",
						justifyContent: "center"
					}}>
					<Button
						variant="contained"
						onClick={() =>
							generateNpc(chosenParameters, setGeneratedNpc)
						}>
						Generate
					</Button>
				</Container>

				{generatedNpc && <NpcCard npc={generatedNpc} />}
			</>
		)
	);
};

export default NpcGeneratorComponent;

/* Other Components */

const NpcCard = ({ npc }) => {
	return (
		<Container>
			<Copyable copyFunc={() => copyNpcAsText(npc)}>
				<Paper
					elevation={1}
					sx={{
						margin: "5px",
						padding: "10px",
						textAlign: "center"
					}}>
					<Typography variant="h6">{npc.name}</Typography>
					<SmallBodyText>
						{npc.flavour} {npc.sex}
						<br />
						{npc.characterisationPhysical}
						<br />
						{npc.characterisationNonphysical}
						<br />
						<br />
						<table style={{ width: "100%" }}>
							<tbody>
								<tr>
									<LeftCell>Expertise:</LeftCell>
									<RightCell>{npc.expertise}</RightCell>
								</tr>
								<tr>
									<LeftCell>Likes:</LeftCell>
									<RightCell>
										{npc.quirk1}, {npc.quirk2}
									</RightCell>
								</tr>
								<tr>
									<LeftCell>Prefers to:</LeftCell>
									<RightCell>{npc.approach1}</RightCell>
								</tr>
								<tr>
									<LeftCell>Last resort:</LeftCell>
									<RightCell>{npc.approach2}</RightCell>
								</tr>
							</tbody>
						</table>
					</SmallBodyText>
				</Paper>
			</Copyable>
		</Container>
	);
};

const LeftCell = styled.td`
	text-align: right;
	color: ${colors.grey};
	width: 40%;
	padding: 4px 0;
`;

const RightCell = styled.td`
	text-align: left;
`;
