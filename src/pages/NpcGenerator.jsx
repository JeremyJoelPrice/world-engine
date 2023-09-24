import styled from "styled-components";
import { BodyText, Header, Subheader } from "../components/StyledText";
import { useState } from "react";
import { uid } from "../utils/utils";
import { npcOptions } from "../datasource";
import getNpcs from "../services/npcGeneratorService";
const { sex, race, flavour } = npcOptions;

const NpcGenerator = () => {
	const [chosenSex, setChosenSex] = useState(sex[0]); // the 0th element is "random"
	const [chosenRace, setChosenRace] = useState(race[0]);
	const [chosenFlavour, setChosenFlavour] = useState(flavour[0]);

	const menuOptions = [
		{
			title: "Sex",
			options: sex,
			state: chosenSex,
			stateChange: setChosenSex
		},
		{
			title: "Race",
			options: race,
			state: chosenRace,
			stateChange: setChosenRace
		},
		{
			title: "Flavour",
			options: flavour,
			state: chosenFlavour,
			stateChange: setChosenFlavour
		}
	];

	const getRandomNpc = () => {
		const { name, sex } = getNpcs(1, chosenSex, chosenFlavour)[0];
		console.log(name);
		console.log(sex);
	};

	return (
		<>
			<Header>NPC Generator</Header>
			<Menu>
				{menuOptions.map(({ title, options, state, stateChange }) => (
					<div key={uid()}>
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
					</div>
				))}
			</Menu>
			<br />
			<br />
			<GenerateButton onClick={getRandomNpc}>Generate</GenerateButton>
		</>
	);
};

export default NpcGenerator;

const Menu = styled.div`
	justify-content: space-evenly;
	display: flex;
	width: 50%;
	margin: 0 auto;
`;

const OptionTitle = styled(Subheader)`
	text-align: center;
`;

const OptionList = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 150px;
`;

const Option = ({ label, isActive, onClick }) => {
	return isActive ? (
		<StyledChosenOption onClick={onClick}>{label}</StyledChosenOption>
	) : (
		<StyledOption onClick={onClick}>{label}</StyledOption>
	);
};

const StyledOption = styled(BodyText)`
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
