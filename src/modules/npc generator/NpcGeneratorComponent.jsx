import { useState } from "react";
import { copyNpcAsText, generateNpc } from "./npcGeneratorService";
import config from "./config";
import {
	Box,
	Button,
	ClickAwayListener,
	Container,
	Fade,
	FormControl,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	Tooltip,
	Typography
} from "@mui/material";

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
	const [sexOpen, setSexOpen] = useState(false);
	const [raceOpen, setRaceOpen] = useState(false);
	const [flavourOpen, setFlavourOpen] = useState(false);

	const handleMouseDown = (setStateOpenFunc) => setStateOpenFunc(true);

	const handleMouseUp = (k, v, setStateOpenFunc) => {
		handleChange(k, v);
		setStateOpenFunc(false);
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
					<ClickAwayListener onClickAway={() => setSexOpen(false)}>
						<FormControl fullWidth>
							<InputLabel id="sex">Sex</InputLabel>
							<Select
								open={sexOpen}
								value={npcParameters.sex}
								defaultValue={config.menus[0].options[0].name}
								label="Sex"
								onOpen={() => handleMouseDown(setSexOpen)}
								onChange={(event) => {
									handleChange("sex", event.target.value);
								}}>
								{config.menus[0].options.map(
									({ name }, index) => {
										return (
											<MenuItem
												key={index}
												value={name}
												onMouseUp={(event) =>
													handleMouseUp(
														"sex",
														name,
														setSexOpen
													)
												}>
												{name}
											</MenuItem>
										);
									}
								)}
							</Select>
						</FormControl>
					</ClickAwayListener>

					<ClickAwayListener onClickAway={() => setRaceOpen(false)}>
						<FormControl fullWidth>
							<InputLabel id="race">Race</InputLabel>
							<Select
								open={raceOpen}
								value={npcParameters.race}
								defaultValue={config.menus[1].options[0].name}
								label="Race"
								onOpen={() => {
									handleMouseDown(setRaceOpen);
								}}
								onChange={(event) => {
									handleChange("race", event.target.value);
								}}>
								{config.menus[1].options.map(
									({ name }, index) => {
										return (
											<MenuItem
												key={index}
												value={name}
												onMouseUp={(event) =>
													handleMouseUp(
														"race",
														name,
														setRaceOpen
													)
												}>
												{name}
											</MenuItem>
										);
									}
								)}
							</Select>
						</FormControl>
					</ClickAwayListener>

					<ClickAwayListener
						onClickAway={() => setFlavourOpen(false)}>
						<FormControl fullWidth>
							<InputLabel id="flavour">Flavour</InputLabel>
							<Select
								open={flavourOpen}
								value={npcParameters.flavour}
								defaultValue={config.menus[2].options[0].name}
								label="Flavour"
								onOpen={() => {
									handleMouseDown(setFlavourOpen);
								}}
								onChange={(event) => {
									handleChange("flavour", event.target.value);
								}}>
								{config.menus[2].options.map(
									({ name }, index) => {
										return (
											<MenuItem
												key={index}
												value={name}
												onMouseUp={(event) =>
													handleMouseUp(
														"flavour",
														name,
														setFlavourOpen
													)
												}>
												{name}
											</MenuItem>
										);
									}
								)}
							</Select>
						</FormControl>
					</ClickAwayListener>
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
