import styled from "styled-components";
import { BodyText, Subheader } from "../../components/StyledText";
import colors from "../../components/Colors";
import { useState } from "react";
import xpLevels from "./xpLevels";

const XPCalculator = () => {
	const [partyLevel, setPartyLevel] = useState(1);
	const [isChecked, setChecked] = useState(false);
	const [xp, setXP] = useState();
	const choosableLevels = Object.keys(xpLevels);
	choosableLevels.pop();

	const handleClick = (e) => {
		e.preventDefault();
		setXP(getXp(partyLevel, isChecked));
	};

	return (
		<>
			<FlexContainer>
				<Subheader>Party Level:</Subheader>
				<StyledDropdown
					value={partyLevel}
					onChange={(event) => {
						event.preventDefault();
						setPartyLevel(Number(event.target.value));
						setXP();
					}}>
					{choosableLevels.map((o) => {
						return (
							<option key={o} value={o}>
								{o}
							</option>
						);
					})}
				</StyledDropdown>
				<Subheader>Secret found?</Subheader>
				<StyledCheckbox
					type="checkbox"
					checked={isChecked}
					onChange={() => setChecked(!isChecked)}
				/>
				<CalculateButton onClick={handleClick}>
					Calculate
				</CalculateButton>
				{xp ? (
					<StyledCard>
						<BodyText>{xp} XP</BodyText>
					</StyledCard>
				) : null}
			</FlexContainer>
		</>
	);
};

export default XPCalculator;

/* Utility Funcitons */
const getXp = (level, secret) => {
	/**
	 * The concept here is that if the players discover a secret each game, they'll level up every 3 sessions.
	 * If they discover no secrets, they'll level up every 6 sessions.
	 * So each session in which they discover a secret, they'll earn 1/3rd of what they need to level up, and each session in whcih they don't discover a secret, they'll earn 1/6th of what they need to level up.
	 *
	 * And to keep the numbers round, the result will be rounded to the nearest 50!
	 */
	const xpNeeded = xpLevels[level + 1] - xpLevels[level];
	const xpAwarded = xpNeeded / (secret ? 3 : 6);
	return xpAwarded % 50 === 0
		? xpAwarded
		: xpAwarded + (50 - (xpAwarded % 50));
};

/* Styled Components */

const FlexContainer = styled.div`
	justify-content: space-evenly;
	display: flex;
	flex-direction: column;
	width: 50%;
	margin: 0 auto;
`;

const StyledDropdown = styled.select`
	color: ${colors.cream};
	background-color: ${colors.darkgrey2};
	border: none;
	outline: none;
	font-family: Times, "Times New Roman", Georgia, serif;
	font-size: 14pt;
	text-align: center;
	margin: 0 auto;
	width: fit-content;
`;

const StyledCheckbox = styled.input`
	margin-bottom: 20px;
`;

const CalculateButton = styled.button`
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

const StyledCard = styled.div`
	width: fit-content;
	margin: 40px auto 0;
	padding: 10px 30px;
	background-color: ${colors.bluegrey};
`;
