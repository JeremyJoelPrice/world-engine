import styled from "styled-components";
import { BodyText, Header, Subheader } from "../components/StyledText";
import colors from "./Colors";
import NpcGenerator from "../pages/NpcGenerator";

const pageMap = {
	"NPC Generator": NpcGenerator
};

const Navbar = () => {
	return (
		<Background>
			{Object.keys(pageMap).map((key) => {
				return (
					<NavbarItem key={key} page={pageMap[key]}>
						{key}
					</NavbarItem>
				);
			})}
		</Background>
	);
};

export default Navbar;

const NavbarItem = ({ children }) => {
	return (
		<StyledNavbarItem>
			<NavbarText>{children}</NavbarText>
		</StyledNavbarItem>
	);
};

const Background = styled.div`
	background-color: ${colors.darkgrey};
	width: 200px;
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

/* Styled Components */

const NavbarText = styled(Subheader)`
	text-align: center;
	margin: 30px 0;
`;
