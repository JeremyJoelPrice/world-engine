import styled from "styled-components";
import { Header } from "../components/StyledText";
import colors from "../components/Colors";
import {
	crOptions,
	getStats,
	roleOptions
} from "../services/combatStatsService";
import genericMonsterStats from "../datasource/genericMonsterStats";
import { useState } from "react";

const CombatStats = () => {
	const [rows, setRows] = useState([]);

	// const copyRow = (cr, role) => {};

	return (
		<>
			<Header>Combat Stats</Header>
			<CopyButton>Copy Row</CopyButton>
			<StatRow initialCR={crOptions[0]} initialRole={roleOptions[0]} />
			{rows.map((r) => {
				return <StatRow key={r} />;
			})}
		</>
	);
};

export default CombatStats;

/* Other Components */

const StatRow = ({ initialCR, initialRole }) => {
	const [role, setRole] = useState(initialRole);
	const [cr, setCR] = useState(initialCR);
	const [stats, setStats] = useState(getStats(cr, role));

	// console.log("[CombatStats]");
	// console.log("	cr: ", cr);
	// console.log("	role: ", role);
	// console.log("	stats: ", stats);

	const handleChange = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		switch (name) {
			case "role":
				setRole((prevRole) => {
					const newRole = value;
					setStats(getStats(cr, newRole));
					return newRole;
				});
				break;
			case "cr":
				setCR((prevCr) => {
					const newCr = Number(value);
					setStats(getStats(newCr, role));
					return newCr;
				});
				break;
			default:
				break;
		}
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

const NewRowButton = () => {
	return <StyledAddButton>+</StyledAddButton>;
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
	min-width: 65px;
	text-align: center;
	margin: 0 10px 0 0;
`;

const StyledAddButton = styled.button`
	background-color: transparent;
	color: ${colors.cream2};
	border: none;
	box-shadow: beige 0px 0px 1px 1px;
	border-radius: 25px;
	margin: 1px 10px 0;
	height: 1.5em;

	&:hover {
		cursor: pointer;
	}
`;

const CopyButton = styled.button`
	display: block;

	margin: 0 auto 10px;
	padding: 5px 10px;

	font-family: Georgia, "Times New Roman", Times, serif;
	font-size: 16pt;
	color: ${colors.cream};
	background-color: ${colors.darkgrey};
	border-radius: 6px;
	&:hover {
		cursor: pointer;
	}
`;
