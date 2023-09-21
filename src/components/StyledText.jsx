import styled from "styled-components";

const BodyText = styled.div`
	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 16pt;
	color: rgb(239, 233, 203);
	line-height: 1.5em;
	white-space: pre-line;
`;

const Header = styled(BodyText)`
	margin: 20px 0 10px;
	text-align: center;
	line-height: 1em;
	font-size: 34pt;
	color: rgb(213, 194, 103);
`;

const Subheader = styled(Header)`
	font-size: 22pt;
	text-align: left;
`;

export { BodyText, Header, Subheader };
