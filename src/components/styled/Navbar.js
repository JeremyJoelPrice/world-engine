import styled from "styled-components";
import { colors, dimensions } from "./global";

export const StyledNavbar = styled.nav`
	float: left;
	width: 20%;
	min-width: ${dimensions.medium};
	height: 100vh;

	background-color: ${colors.dark};
`;

export const StyledNavbarButton = styled.button`
	width: 100%;
	height: ${dimensions.medium};

	color: ${colors.light};
	background-color: ${colors.grey};
	font-size: 1.5em;
	text-shadow: 1px 1px ${colors.black}
`;