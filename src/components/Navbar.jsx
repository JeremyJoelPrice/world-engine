import styled from "styled-components";
import { Subheader } from "../components/StyledText";
import colors from "./Colors";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<Background>
			<StyledReactLink to="/npc-generator">
				<NavbarItem>NPC Generator</NavbarItem>
			</StyledReactLink>
			<StyledReactLink to="/outdoors">
				<NavbarItem>Outdoors</NavbarItem>
			</StyledReactLink>
			<StyledReactLink to="/combat-stats">
				<NavbarItem>Combat Stats</NavbarItem>
			</StyledReactLink>
		</Background>
	);
};

export default Navbar;

const NavbarItem = ({ children, page, setCurrentPage }) => {
	return (
		<StyledNavbarItem>
			<NavbarText>{children}</NavbarText>
		</StyledNavbarItem>
	);
};

const Background = styled.div`
	background-color: ${colors.darkgrey};
	min-width: 200px;
`;

const StyledNavbarItem = styled.div`
	border: 1pt solid ${colors.grey};
	text-align: center;
	&:hover {
		background-color: ${colors.bluegrey};
		cursor: pointer;
	}
	&:active {
		background-color: ${colors.darkgrey};
	}
`;

const StyledReactLink = styled(Link)`
	text-decoration: none;
`;

const NavbarText = styled(Subheader)`
	text-align: center;
	margin: 30px 0;
`;
