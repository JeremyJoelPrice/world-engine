import styled from "styled-components";
import { BodyText, Header, Subheader } from "../../components/StyledText";
import { uid } from "../../util/common";
import colors from "../../components/Colors";
import { useState } from "react";

const NpcGeneratorInterface = ({
	menus,
	npcParameters,
	generatedNpc,
	generateFunc,
	copyNpcAsText
}) => {
	return (
		<>
			<Header>NPC Generator</Header>
			<MenusContainer>
				{menus.map(({ title, options, handleChange }) => (
					<Menu key={uid()}>
						<Subheader>{title}</Subheader>
						<OptionList>
							{options.map(({ name: optionName }) => {
								return (
									<Option
										isActive={
											npcParameters[title]
												? optionName ===
												  npcParameters[title]
												: optionName === options[0].name
										}
										label={optionName}
										key={uid()}
										onClick={() => handleChange(optionName)}
									/>
								);
							})}
						</OptionList>
					</Menu>
				))}
			</MenusContainer>
			<br />
			<br />
			<GenerateButton onClick={generateFunc}>Generate</GenerateButton>
			{generatedNpc === undefined ? null : (
				<NpcCard
					key={uid()}
					displayNpc={generatedNpc}
					copyNpcAsText={copyNpcAsText}
				/>
			)}
		</>
	);
};

export default NpcGeneratorInterface;

/* Other Components */

const Option = ({ label, isActive, onClick }) => {
	return isActive ? (
		<StyledChosenOption onClick={onClick}>{label}</StyledChosenOption>
	) : (
		<StyledOption onClick={onClick}>{label}</StyledOption>
	);
};

const NpcCard = ({ displayNpc, copyNpcAsText }) => {
	/* 'copied' tooltip text */
	const [tooltipVisible, setTooltipVisible] = useState("false");
	const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

	const handleClick = (e) => {
		setTooltipVisible("true");

		setTooltipPosition({
			x: e.clientX + window.scrollX + 10,
			y: e.clientY + window.scrollY
		});
		// Update tooltip position while the mouse moves
		const moveHandler = (e) => {
			setTooltipPosition({
				x: e.clientX + window.scrollX + 10,
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
		copyNpcAsText();
	};

	return (
		<StyledNpcCard onClick={handleClick}>
			<TooltipWrapper
				$visible={tooltipVisible}
				style={{
					top: tooltipPosition.y + "px",
					left: tooltipPosition.x + "px"
				}}>
				copied
			</TooltipWrapper>
			<NpcName>{displayNpc.name}</NpcName>
			<CeneteredText>{`${displayNpc.sex} ${displayNpc.race}`}</CeneteredText>
			<CeneteredText>{displayNpc.highConcept.name}</CeneteredText>
			<CeneteredSubText>{`(${displayNpc.highConcept.description})`}</CeneteredSubText>
			<CeneteredText>{displayNpc.characterisation}</CeneteredText>
			<CeneteredText>{`${displayNpc.approach1}/${displayNpc.approach2}`}</CeneteredText>
			<CeneteredText>{`Leverage: ${displayNpc.leverage}`}</CeneteredText>
		</StyledNpcCard>
	);
};

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

const OptionList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const StyledOption = styled(BodyText)`
	width: 100px;
	text-align: center;
	padding: 5px 10px;
	border: 1pt solid gold;

	&:hover {
		background-color: ${colors.darkgrey};
		cursor: pointer;
	}
`;

const StyledChosenOption = styled(StyledOption)`
	background-color: ${colors.darkgrey};
`;

const GenerateButton = styled.button`
	display: block;

	margin: 0 auto;
	padding: 15px 60px;

	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 16pt;
	color: ${colors.cream};
	background-color: ${colors.darkgrey};
	border-radius: 6px;
	&:hover {
		cursor: pointer;
	}
`;

const StyledNpcCard = styled.div`
	width: fit-content;
	max-width: 60%;
	margin: 40px auto 0;
	padding: 10px 30px;
	background-color: ${colors.bluegrey};

	&:hover {
		cursor: pointer;
	}
`;

const NpcName = styled(Subheader)`
	margin: 0;
`;

const CeneteredText = styled(BodyText)`
	text-align: center;
`;

const CeneteredSubText = styled(CeneteredText)`
	font-size: 12pt;
	font-style: italic;
`;

const NpcHeader = styled(BodyText)`
	color: ${colors.cream2};
`;

const TooltipWrapper = styled(NpcHeader)`
	position: absolute;

	color: ${colors.grey};
	font-family: Helvetica, sans serif;

	transition: opacity 0.5s;
	opacity: ${(props) => (props.$visible === "true" ? 1 : 0)};
`;
