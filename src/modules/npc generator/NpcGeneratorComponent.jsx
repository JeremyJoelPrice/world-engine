import { useState } from "react";
import { copyNpcAsText, generateNpc } from "./npcGeneratorService";
import config from "./config";
import {
	Box,
	Button,
	Container,
	Fade,
	Paper,
	Tooltip,
	Typography
} from "@mui/material";
import SingleClickSelect from "../../components/SingleClickSelect";

const NpcGeneratorComponent = () => {
	const [npcParameters, setNpcParameters] = useState({
		sex: "Random",
		race: "Random",
		flavour: "Default"
	});
	const [generatedNpc, setGeneratedNpc] = useState();

	let handleChange = (k, v) => {
		setNpcParameters((prevNpc) => {
			const newNpc = Object.assign({}, prevNpc);
			newNpc[k] = v;
			return newNpc;
		});
	};

	/* custom select behaviour */

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
					<SingleClickSelect
						label="Sex"
						optionsArray={config.menus[0].options.map(
							({ name }) => name
						)}
						value={npcParameters.sex}
						setValue={(value) => handleChange("sex", value)}
					/>

					<SingleClickSelect
						label="Race"
						optionsArray={config.menus[1].options.map(
							({ name }) => name
						)}
						value={npcParameters.race}
						setValue={(value) => handleChange("race", value)}
					/>

					<SingleClickSelect
						label="Flavour"
						optionsArray={config.menus[2].options.map(
							({ name }) => name
						)}
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
					<Typography variant="h5">{displayNpc.name}</Typography>
					<Typography variant="h6">{`${displayNpc.sex} ${displayNpc.race} ${displayNpc.highConcept.name}`}</Typography>
					<Typography>
						{`(${displayNpc.highConcept.description})`}
						<br />
						{displayNpc.characterisation}
						<br />
						{`${displayNpc.approach1}/${displayNpc.approach2}`}
						<br />
						{`Leverage: ${displayNpc.leverage}`}
					</Typography>
				</Paper>
			</Tooltip>
		</Container>
	);
};
