import styled from "styled-components";
import { colors } from "./global";

const Text = styled.p`
	color: ${colors.black};
	font-family: sans-serif;
`;

export const BodyText = styled(Text)`
	font-family: serif;
	display: inline;
`;

export const BoldBodyText = styled(BodyText)`
	font-weight: bold;
`

export const ItalicsBodyText = styled(BodyText)`
	font-style: italic;
`;

export const SmallText = styled(BodyText)`
	font-size: 0.9em;
`;

export const H1 = styled(Text)`
	font-size: 2em;
	text-shadow: 0.5px 0.5px ${colors.light};
	text-decoration: underline;
`;

export const H2 = styled(H1)`
	font-size: 1.5em;
	text-shadow: 0.5px 0.5px ${colors.light};
	text-decoration: none;
`;

export const H3 = styled(H2)`
	font-size: 1.2em;
`