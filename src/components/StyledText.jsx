import styled from "styled-components";
import colors from "./Colors";

const BodyText = styled.div`
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 14pt;
	color: ${colors.cream};
	line-height: 1.5em;
	white-space: pre-line;
`;

const Header = styled(BodyText)`
	font-size: 24pt;
	padding: 20px 0 20px;
	text-align: center;
	line-height: 1em;
	color: ${colors.cream2};
`;

const Subheader = styled(Header)`
	font-size: 18pt;
`;

export { BodyText, Header, Subheader };
