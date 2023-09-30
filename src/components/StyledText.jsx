import styled from "styled-components";

const BodyText = styled.div`
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 14pt;
	color: rgb(239, 233, 203);
	line-height: 1.5em;
	white-space: pre-line;
`;

const Header = styled(BodyText)`
	font-size: 24pt;
	margin: 20px 0 10px;
	text-align: center;
	line-height: 1em;
	color: rgb(213, 194, 103);
`;

const Subheader = styled(Header)`
	font-size: 18pt;
	text-align: left;
`;

export { BodyText, Header, Subheader };
