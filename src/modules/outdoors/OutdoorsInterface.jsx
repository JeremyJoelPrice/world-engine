import styled from "styled-components";
import { BodyText, Header, Subheader } from "../../components/StyledText";
import colors from "../../components/Colors";

const OutdoorsInterface = ({ weather, weatherButtonFunc }) => {
	return (
		<>
			<div
				style={{
					border: "1pt solid pink",
					padding: "10px",
					marginBottom: "20px"
				}}>
				<Header>Weather</Header>
				<Subheader>{weather.label}</Subheader>
				<CenteredBodyText>{weather.description}</CenteredBodyText>
				<GenerateButton onClick={weatherButtonFunc}>
					Get Next Weather
				</GenerateButton>
			</div>
		</>
	);
};

export default OutdoorsInterface;

/* Styled Components */

const CenteredBodyText = styled(BodyText)`
	text-align: center;
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
