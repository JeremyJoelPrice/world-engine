import styled from "styled-components";
import { BodyText, Header, Subheader } from "../../components/StyledText";
import colors from "../../components/Colors";

const OutdoorsInterface = () => {
	return <>cheeseBalls</>;
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
