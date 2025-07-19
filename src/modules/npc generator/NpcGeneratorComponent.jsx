import { useState } from "react";
import {
	copyNpcAsText,
	generateNpc,
	getNpcParameters
} from "./npcGeneratorService";
import {
	Box,
	Button,
	Container,
	Fade,
	Paper,
	Tooltip,
	Typography
} from "@mui/material";
import SmallBodyText from "../../components/SmallBodyText";
import StyledSelect from "../../components/StyledSelect";

const NpcGeneratorComponent = () => {
	const npcParameters = getNpcParameters();

	const flavours = npcParameters.flavours;
	const sexes = npcParameters.sexes;

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
				<br />
				<Container
					sx={{
						display: "flex",
						justifyContent: "center"
					}}>
					<Button
						variant="contained"
						size="large"
						onClick={() =>
							generateNpc(chosenParameters, setGeneratedNpc)
						}>
						Generate
					</Button>
				</Container>
				<br />
				{generatedNpc && <NpcCard displayNpc={generatedNpc} />}
			</>
		)
	);
};

export default NpcGeneratorComponent;

/* Other Components */

const NpcCard = ({ displayNpc }) => {
	const [open, setSexOpen] = useState(false);

	return (
		<Container>
			<Tooltip
				title="copied"
				followCursor={true}
				open={open}
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 500 }}>
				<Paper
					elevation={3}
					onClick={() => {
						setSexOpen(true);
						copyNpcAsText(displayNpc);
						setTimeout(() => setSexOpen(false), 1100);
					}}
					sx={{
						margin: "5px",
						padding: "25px",
						textAlign: "center",
						cursor: "pointer"
					}}>
					<Typography variant="h6">{displayNpc.name}</Typography>
					<Typography variant="body">{`${displayNpc.sex} ${displayNpc.highConcept.name}`}</Typography>
					<SmallBodyText>
						{`(${displayNpc.highConcept.description})`}
						<br />
						{displayNpc.characterisation}
						<br />
						{`${displayNpc.approach1}/${displayNpc.approach2}`}
						<br />
						{`Leverage: ${displayNpc.leverage}`}
					</SmallBodyText>
				</Paper>
			</Tooltip>
		</Container>
	);
};
