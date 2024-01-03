import styled from "styled-components";
import { Header } from "../components/StyledText";
import colors from "../components/Colors";
import {
	crOptions,
	getStats,
	roleOptions
} from "../services/combatStatsService";
import { useState } from "react";

const CombatStats = () => {
	return (
		<>
			<Header>Combat Stats</Header>
			<StatRow />
		</>
	);
};

export default CombatStats;

/* Other Components */

const StatRow = () => {
	const [role, setRole] = useState(roleOptions[0]);
	const [cr, setCR] = useState(crOptions[0]);
	const [stats, setStats] = useState(getStats(cr, role));

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		switch (name) {
			case "role":
				setRole(value);
				break;
			case "cr":
				setCR(value);
				break;
			default:
				break;
		}
		setStats(getStats(cr, role));
	};

	return (
		<StyledStatRow>
			role
			<StyledDropdown name="role" value={role} onChange={handleChange}>
				{roleOptions.map((o) => {
					return (
						<option key={o} value={o}>
							{o}
						</option>
					);
				})}
			</StyledDropdown>
			CR
			<StyledDropdown name="cr" value={cr} onChange={handleChange}>
				{crOptions.map((o) => {
					return (
						<option key={o} value={o}>
							{o}
						</option>
					);
				})}
			</StyledDropdown>
			ac{stats.ac} prof{stats.proficiency} hp{stats.hpMin}-{stats.hpMax}{" "}
			att{stats.attack} dmg
			{stats.dmgMin}-{stats.dmgMax} dc{stats.dc}
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

	margin: 0 10px 0 0;
`;
