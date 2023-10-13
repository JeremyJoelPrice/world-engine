import styled from "styled-components";
import { BodyText, Header, Subheader } from "../components/StyledText";
import { useState } from "react";
import { uid } from "../utils/utils";
import { getNpcs, npcOptions } from "../services/npcGeneratorService";
const { sexOptions, raceOptions, flavourOptions } = npcOptions;

const NpcGenerator = () => {
	const [npcs, setNpcs] = useState();
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
		setNpcs(getNpcs(1, chosenSex, chosenFlavour, chosenRace));
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
			{npcs?.map((npc) => {
				return <NpcCard key={uid()} npc={npc} />;
			})}
		</>
	);
};

export default NpcGenerator;

/* Other Components */

const Option = ({ label, isActive, onClick }) => {
	return isActive ? (
		<StyledChosenOption onClick={onClick}>{label}</StyledChosenOption>
	) : (
		<StyledOption onClick={onClick}>{label}</StyledOption>
	);
};

const NpcCard = ({ npc }) => {
	/* 'copied' tooltip text */
	const [tooltipVisible, setTooltipVisible] = useState("false");
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

	const handleClick = (e) => {
		setTooltipVisible("true");

		setTooltipPosition({
			x: e.clientX + window.scrollX,
			y: e.clientY + window.scrollY
		});
		// Update tooltip position while the mouse moves
		const moveHandler = (e) => {
			setTooltipPosition({
				x: e.clientX + window.scrollX,
				y: e.clientY + window.scrollY
			});
		};

		document.addEventListener("mousemove", moveHandler);

		// Hide the tooltip gradually before disappearing
		setTimeout(() => {
			setTooltipVisible("false");
			document.removeEventListener("mousemove", moveHandler); // Remove the event listener
		}, 1000);

		// Copy the actual text
		copyNpcText(npc);
	};

	return (
		<StyledNpcCard onClick={handleClick}>
			<TooltipWrapper
				visible={tooltipVisible}
				style={{
					top: tooltipPosition.y + "px",
					left: tooltipPosition.x + "px"
				}}>
				copied
			</TooltipWrapper>
			<NpcName>{npc.name}</NpcName>
			<CeneteredText>{`${npc.sex} ${npc.race}`}</CeneteredText>
			<CeneteredText>{npc.highConcept}</CeneteredText>

			<NpcHeader>Characterisation</NpcHeader>
			{npc.characterisation.map((c) => (
				<BodyText key={uid()}>{c}</BodyText>
			))}

			<NpcHeader>Relationships</NpcHeader>
			{npc.relationships.map((c) => (
				<BodyText key={uid()}>{c}</BodyText>
			))}

			<NpcHeader>Agenda</NpcHeader>
			<BodyText>{npc.agenda}</BodyText>
			<NpcHeader>Approach</NpcHeader>
			{npc.approach.map((c) => (
				<BodyText key={uid()}>{c}</BodyText>
			))}

			<NpcHeader>Assets</NpcHeader>
			{npc.assets.map((c) => (
				<BodyText key={uid()}>{c}</BodyText>
			))}

			<NpcHeader>Limits</NpcHeader>
			{npc.limits.map((c) => (
				<BodyText key={uid()}>{c}</BodyText>
			))}
		</StyledNpcCard>
	);
};

function copyNpcText({
	name,
	sex,
	race,
	highConcept,
	characterisation,
	relationships,
	agenda,
	approach,
	assets,
	limits
}) {
	let text = `${name}
${sex} ${race}
${highConcept}\n`;

	text += `\n_Characterisation_\n`;
	characterisation.forEach((e) => {
		text += `\t${e}\n`;
	});
	text += `\n_Relationships_\n`;
	relationships.forEach((e) => {
		text += `\t${e}\n`;
	});
	text += `\n_Agenda_\n${agenda}\n`;
	text += `\n_Approach_\n`;
	approach.forEach((e) => {
		text += `\t${e}\n`;
	});
	text += `\n_Assets_\n`;
	assets.forEach((e) => {
		text += `\t${e}\n`;
	});
	text += `\n_Limits_\n`;
	limits.forEach((e) => {
		text += `\t${e}\n`;
	});
	navigator.clipboard.writeText(text);
}

/* Styled Components */

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

const StyledNpcCard = styled.div`
	width: fit-content;
	margin: 40px auto 0;
	padding: 10px 30px;
	background-color: rgb(32, 32, 42);

	&:hover {
		cursor: pointer;
	}
`;

const NpcName = styled(Subheader)`
	text-align: center;
	margin: 0;
`;

const CeneteredText = styled(BodyText)`
	text-align: center;
`;

const NpcHeader = styled(BodyText)`
	color: rgb(213, 194, 103);
`;

const TooltipWrapper = styled(NpcHeader)`
	position: absolute;

	color: rgb(142, 142, 142);
	font-family: Helvetica, sans serif;

	transition: opacity 0.5s;
	opacity: ${(props) => (props.visible === "true" ? 1 : 0)};
`;
