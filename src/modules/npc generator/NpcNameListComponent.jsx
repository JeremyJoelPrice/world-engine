import styled, { keyframes } from "styled-components";
import { BodyText, Subheader } from "../../components/StyledText";
import { useState } from "react";
import { getName } from "./npcGeneratorService";

const NpcNameListComponent = () => {
	const flavours = ["Norse", "Celtic"];

	return (
		<MainColumn>
			<Row>
				<BodyText>male</BodyText>
				<BodyText>female</BodyText>
			</Row>
			{flavours.map((flavour, index) => {
				return (
					<div key={index}>
						<Subheader>{flavour}</Subheader>
						<Row>
							<ReplacerListItem
								flavour={flavour}
								sex="Male"
								align="right"
							/>
							<ReplacerListItem
								flavour={flavour}
								sex="Female"
								align="left"
							/>
						</Row>
						<Row>
							<ReplacerListItem
								flavour={flavour}
								sex="Male"
								align="right"
							/>
							<ReplacerListItem
								flavour={flavour}
								sex="Female"
								align="left"
							/>
						</Row>
						<Row>
							<ReplacerListItem
								flavour={flavour}
								sex="Male"
								align="right"
							/>
							<ReplacerListItem
								flavour={flavour}
								sex="Female"
								align="left"
							/>
						</Row>
					</div>
				);
			})}
		</MainColumn>
	);
};

export default NpcNameListComponent;

/* other components */

const ReplacerListItem = ({ align, flavour, sex }) => {
	const [fadeState, setFadeState] = useState("none"); // 'none', 'fadingOut', or 'fadingIn'
	const [name, setName] = useState(getName(sex, flavour));

	const handleClick = () => {
		// copy npc name
		navigator.clipboard.writeText(name);

		// Start fading out
		setFadeState("fadingOut");

		// After fade-out duration, calculate the new value
		setTimeout(() => {
			setName(getName(sex, flavour)); // Replace this with your actual calculation function

			// Start fading in
			setFadeState("fadingIn");

			// Reset to no animation after fade-in duration
			setTimeout(() => setFadeState("none"), 500);
		}, 500); // Fade-out duration should match the CSS animation duration
	};

	return (
		<StyledReplacerListItem
			$fadeState={fadeState}
			$textAlign={align === "left" ? "left" : "right"}
			onClick={() => handleClick()}>
			<BodyText>{name}</BodyText>
		</StyledReplacerListItem>
	);
};

/* styled components */

const MainColumn = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledReplacerListItem = styled.div`
	width: 100%;
	text-align: ${({ $textAlign }) => $textAlign};

	animation: ${({ $fadeState }) =>
			$fadeState === "fadingOut"
				? fadeOut
				: $fadeState === "fadingIn"
				? fadeIn
				: "none"}
		0.5s ease-in-out;
	cursor: pointer;
`;

const Row = styled.div`
	display: flex;
	justify-content: center;
	gap: 60px;
`;
