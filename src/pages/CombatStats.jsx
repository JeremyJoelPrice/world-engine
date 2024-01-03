import styled from "styled-components";
import { Header } from "../components/StyledText";
import colors from "../components/Colors";
import {
	crOptions,
	getStats,
	roleOptions
} from "../services/combatStatsService";
import { useState } from "react";
import { uid } from "../utils/utils";

const CombatStats = () => {
	const [rows, setRows] = useState([]);
	const [cr, setCr] = useState(crOptions[0]);

	const addRow = (role) => {
		setRows((currentRows) => {
			const newRows = [...currentRows];
			const stats = getStats(cr, role);
			newRows.push({
				stats,
				role
			});
			return newRows;
		});
	};

	return (
		<>
			<Header>Combat Stats</Header>
			<MenuContainer>
				<RoleButtonContainer>
					{roleOptions.map((r) => {
						return (
							<RoleButton key={r} onClick={() => addRow(r)}>
								{r}
							</RoleButton>
						);
					})}
				</RoleButtonContainer>
				<StyledDropdown
					value={cr}
					onChange={(event) => {
						event.preventDefault();
						setCr(Number(event.target.value));
					}}>
					{crOptions.map((o) => {
						return (
							<option key={o} value={o}>
								{o}
							</option>
						);
					})}
				</StyledDropdown>
			</MenuContainer>
			{rows.map(({ stats, role }) => {
				return <StatRow key={uid()} stats={stats} role={role} />;
			})}
		</>
	);
};

export default CombatStats;

/* Other Components */

const StatRow = ({ stats, role }) => {
	return (
		<StyledStatRow>
			<WidthLabel width={"90px"}>{role}</WidthLabel>
			CR
			<WidthLabel width={"25px"}>{stats.cr}</WidthLabel>
			ac{stats.ac} prof{stats.proficiency} hp
			<WidthLabel width={"75px"}>
				{stats.hpMin}-{stats.hpMax}
			</WidthLabel>
			att
			<WidthLabel width={"25px"}>{stats.attack}</WidthLabel>
			dmg
			<WidthLabel width={"75px"}>
				{stats.dmgMin}-{stats.dmgMax}
			</WidthLabel>
			dc{stats.dc}
		</StyledStatRow>
	);
};

/* Styled Components */

const StyledStatRow = styled.div`
	text-align: center;
	color: ${colors.cream};
	font-size: 14pt;
	font-family: Times, "Times New Roman", Georgia, serif;
`;

const StyledDropdown = styled.select`
	color: ${colors.cream};
	background-color: ${colors.darkgrey2};
	border: none;
	outline: none;
	font-family: Times, "Times New Roman", Georgia, serif;
	font-size: 14pt;
	text-align: center;
`;

const RoleButtonContainer = styled.div`
	display: flex;
	margin: 10px;
	flex-wrap: wrap;
	width: 200px;
`;

const RoleButton = styled.button`
	flex-grow: 1;
	min-width: 100px;
	padding: 5px;
	color: ${colors.cream};
	background-color: ${colors.darkgrey};
	border-radius: 6px;
	&:hover {
		cursor: pointer;
	}
`;

const MenuContainer = styled.div`
	text-align: center;
	display: flex;
	justify-content: center;
`;

const WidthLabel = styled.div`
	display: inline-block;
	width: ${(props) => props.width || "90px"};
`;
