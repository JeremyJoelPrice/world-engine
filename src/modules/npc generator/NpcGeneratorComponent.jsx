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
						{npc.characterisationHair}
						<br />
						<br />
						Honour/Reputation: {npc.honour}
						<br />
						Prefers to: {npc.approach1}
						<br />
						Last resort: {npc.approach2}
						<br />
						<br />
						Expertise: {npc.expertise}
					</SmallBodyText>
				</Paper>
			</Copyable>
		</Container>
	);
};
