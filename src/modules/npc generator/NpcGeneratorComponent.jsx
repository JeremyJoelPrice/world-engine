import { useState } from "react";
import {
	copyNpcAsText,
	generateNpc,
	getFlavoursByRace,
	getRaces,
	getSexesByRace
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
	const races = getRaces();
	const [flavours, setFlavours] = useState(getFlavoursByRace(races[0]));
	const sexes = getSexesByRace(races[0]);

	const [npcParameters, setNpcParameters] = useState({
		sex: sexes[0],
		race: races[0],
		flavour: flavours[0].name
	});

	const [generatedNpc, setGeneratedNpc] = useState();

	const handleChange = (k, v) => {
		setNpcParameters((prevNpc) => {
			const newNpc = Object.assign({}, prevNpc);
			newNpc[k] = v;

			if (k === "race") {
				const flavours = getFlavoursByRace(v);
				newNpc.flavour = flavours[0].name;
				setFlavours(flavours);
			}

			return newNpc;
		});
	};

	return (
		npcParameters && (
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
						value={npcParameters.sex}
						setValue={(value) => handleChange("sex", value)}
					/>

					<StyledSelect
						label="Race"
						optionsArray={races}
						value={npcParameters.race}
						setValue={(value) => handleChange("race", value)}
					/>

					<StyledSelect
						label="Flavour"
						optionsArray={flavours.map(({ name }) => name)}
						value={npcParameters.flavour}
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
							generateNpc(npcParameters, setGeneratedNpc)
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
					<Typography variant="body">{`${displayNpc.sex} ${displayNpc.race} ${displayNpc.highConcept.name}`}</Typography>
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
