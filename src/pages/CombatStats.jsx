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
				role,
				id: uid()
			});
			return newRows;
		});
	};

	const removeRow = (id) => {
		setRows((currentRows) => currentRows.filter((row) => id !== row.id));
	};

	const copyCombat = (event) => {
		event.preventDefault();
		let text = "copied text";
		console.log(text);
		// navigator.clipboard.writeText(text);
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
				<ColumnContainer>
					<CopyCombatButton onClick={() => setRows([])}>
						Clear
					</CopyCombatButton>
					<CopyCombatButton onClick={copyCombat}>
						Copy
					</CopyCombatButton>
				</ColumnContainer>
			</MenuContainer>
			<StyledCombatCard>
				{rows.map(({ stats, role, id }) => {
					return (
						<StatRow
							key={id}
							id={id}
							stats={stats}
							role={role}
							removeFunc={removeRow}
						/>
					);
				})}
			</StyledCombatCard>
		</>
	);
};

export default CombatStats;

/* Other Components */

const StatRow = ({ stats, role, id, removeFunc }) => {
	return (
		<StyledStatRow>
			<WidthLabel width={"90px"}>{role}</WidthLabel>
			CR
			<WidthLabel width={"50px"}>{stats.cr}</WidthLabel>
			ac{stats.ac} hp
			<WidthLabel width={"40px"}>{stats.hp}</WidthLabel>
			att
			<WidthLabel width={"40px"}>{stats.att}</WidthLabel>
			dmg
			<WidthLabel width={"40px"}>{stats.dmg}</WidthLabel>
			prof high
			<WidthLabel width={"40px"}> {stats.highProf}</WidthLabel>
			prof low
			<WidthLabel width={"20px"}>{stats.lowProf}</WidthLabel>
			dc{stats.dc}
			<RemoveRowButton onClick={() => removeFunc(id)}>X</RemoveRowButton>
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

const StyledCombatCard = styled.div`
	width: fit-content;
	margin: 40px auto 0;
	padding: 10px 30px;
	background-color: ${colors.bluegrey};

	&:empty {
		padding: 0;
	}
`;

const RemoveRowButton = styled.button`
	height: 23px;
	width: 28px;
	margin: 4px 4px 4px 20px;
	background-color: ${colors.darkgrey2};
	color: ${colors.cream2};
	box-shadow: ${colors.cream2} 0px 0px 1px 1px;
	border-radius: 20%;

	&:hover {
		cursor: pointer;
		background-color: ${colors.bluegrey};
	}
`;

const CopyCombatButton = styled.button`
	color: ${colors.cream};
	background-color: ${colors.darkgrey};
	border-radius: 6px;
	flex: 1;
	&:hover {
		cursor: pointer;
	}
`;

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 60px;
`;
