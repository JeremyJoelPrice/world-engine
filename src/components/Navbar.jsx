import styled from "styled-components";
import { Subheader } from "../components/StyledText";
import colors from "./Colors";
import NpcGenerator from "../modules/npc generator/NpcGeneratorPage";
import CombatStats from "../modules/combat stats/CombatStatsPage";
import XPCalculator from "../modules/xp calculator/XPCalculatorPage";

const pageMap = {
	"NPC Generator": <NpcGenerator />,
	"Combat Stats": <CombatStats />,
	"XP Calculator": <XPCalculator />
};

const Navbar = ({ setCurrentPage }) => {
	return (
		<Background>
			{Object.keys(pageMap).map((key) => {
				return (
					<NavbarItem
						key={key}
						page={pageMap[key]}
						setCurrentPage={setCurrentPage}>
						{key}
					</NavbarItem>
				);
			})}
		</Background>
	);
};

export default Navbar;

const NavbarItem = ({ children, page, setCurrentPage }) => {
	return (
		<StyledNavbarItem
			onClick={() => {
				setCurrentPage(page);
			}}>
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

/* Styled Components */

const NavbarText = styled(Subheader)`
	text-align: center;
	margin: 30px 0;
`;
