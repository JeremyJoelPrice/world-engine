import styled from "styled-components";
import { BodyText, Header, Subheader } from "../components/StyledText";
import { useState } from "react";
import { uid } from "../utils/utils";
import { getNpcs, npcOptions } from "../services/npcGeneratorService";
const { sexOptions, raceOptions, flavourOptions } = npcOptions;

const NpcGenerator = () => {
	const [chosenSex, setChosenSex] = useState(sexOptions[0]); // the 0th element is "random"
	const [chosenRace, setChosenRace] = useState(raceOptions[0]);
	const [chosenFlavour, setChosenFlavour] = useState(flavourOptions[0]);

	const menus = [
		{
			title: "Sex",
			options: sexOptions,
			state: chosenSex,
			stateChange: setChosenSex
		},
		{
			title: "Race",
			options: raceOptions,
			state: chosenRace,
			stateChange: setChosenRace
		},
		{
			title: "Flavour",
			options: flavourOptions,
			state: chosenFlavour,
			stateChange: setChosenFlavour
		}
	];

	const getRandomNpc = () => {
		const npcs = getNpcs(1, chosenSex, chosenFlavour);
		console.log(npcs[0]);
	};

	return (
		<>
			<Header>NPC Generator</Header>
			<MenusContainer>
				{menus.map(({ title, options, state, stateChange }) => (
					<Menu key={uid()}>
						<OptionTitle>{title}</OptionTitle>
						<OptionList>
							{options.map((optionName) => {
								return (
									<Option
										isActive={optionName === state}
										label={optionName}
										key={uid()}
										onClick={() => stateChange(optionName)}
									/>
								);
							})}
						</OptionList>
					</Menu>
				))}
			</MenusContainer>
			<br />
			<br />
			<GenerateButton onClick={getRandomNpc}>Generate</GenerateButton>
		</>
	);
};

export default NpcGenerator;

const MenusContainer = styled.div`
	justify-content: space-evenly;
	display: flex;
	width: 50%;
	margin: 0 auto;
`;

const Menu = styled.div`
	max-width: 35%;
`;

const OptionTitle = styled(Subheader)`
	text-align: center;
`;

const OptionList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const Option = ({ label, isActive, onClick }) => {
	return isActive ? (
		<StyledChosenOption onClick={onClick}>{label}</StyledChosenOption>
	) : (
		<StyledOption onClick={onClick}>{label}</StyledOption>
	);
};

const StyledOption = styled(BodyText)`
	width: 80px;
	text-align: center;
	padding: 5px 10px;
	border: 1pt solid gold;

	&:hover {
		background-color: rgba(40, 40, 40, 0.8);
		cursor: pointer;
	}
`;

const StyledChosenOption = styled(StyledOption)`
	background-color: rgba(40, 40, 40, 0.8);
`;

const GenerateButton = styled.button`
	display: block;

	margin: 0 auto;
	padding: 15px 60px;

	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 16pt;
	color: rgb(239, 233, 203);
	background-color: rgba(40, 40, 40, 0.8);
	border-radius: 6px;
`;
