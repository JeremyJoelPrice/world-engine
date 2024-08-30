import styled from "styled-components";
import { BodyText, Subheader } from "../../components/StyledText";
import { uid } from "../../util/common";
import colors from "../../components/Colors";
import { useEffect, useState } from "react";
import { copyNpcAsText, generateNpc } from "./npcGeneratorService";
import config from "./config";
import PopOutMenu from "../../components/PopOutMenu";

const NpcGeneratorComponent = () => {
	const [npcParameters, setNpcParameters] = useState();
	const [generatedNpc, setGeneratedNpc] = useState();

	useEffect(() => {
		const initParameters = {};
		for (let i = 0; i < config.menus.length; i++) {
			const { title, options } = config.menus[i];
			initParameters[title] = options[0].name;
		}
		setNpcParameters(initParameters);
	}, []);

	const menus = config.menus.map(({ title, options }) => {
		return {
			title,
			options,
			handleChange: (v) => {
				setNpcParameters((prevNpc) => {
					const newNpc = Object.assign({}, prevNpc);
					newNpc[title] = v;
					return newNpc;
				});
			}
		};
	});
	return (
		npcParameters && (
			<>
				<MenusContainer>
					{menus.map(({ title, options, handleChange }, index) => (
						<PopOutMenu
							key={index}
							optionsArray={options.map(({ name }) => name)}
							handleChange={handleChange}
							title={title}
						/>
					))}
				</MenusContainer>
				<br />
				<br />
				<GenerateButton
					onClick={() => generateNpc(npcParameters, setGeneratedNpc)}>
					Generate
				</GenerateButton>
				{generatedNpc && (
					<NpcCard key={uid()} displayNpc={generatedNpc} />
				)}
			</>
		)
	);
};

export default NpcGeneratorComponent;

/* Other Components */

const NpcCard = ({ displayNpc }) => {
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
		copyNpcAsText(displayNpc);
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
	margin: 20px auto 0;
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
