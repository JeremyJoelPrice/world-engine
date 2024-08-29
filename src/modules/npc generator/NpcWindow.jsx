import { useState } from "react";
import styled from "styled-components";
import NpcGeneratorComponent from "../npc generator/NpcGeneratorComponent";
import NpcNameListComponent from "./NpcNameListComponent";

const NpcWindow = () => {
	const [displayGenerator, setDisplayGenerator] = useState(false);

	const handleClick = () => {
		setDisplayGenerator((previous) => !previous);
	};

	return (
		<StyledWindow>
			<ToggleDisplayButton onClick={() => handleClick()} />
			{displayGenerator ? (
				<NpcGeneratorComponent />
			) : (
				<NpcNameListComponent />
			)}
		</StyledWindow>
	);
};
export default NpcWindow;

/* styled components */

const StyledWindow = styled.div`
	background-color: green;
	grid-column: 3 / 4;
	grid-row: 1 / 4;
`;

const ToggleDisplayButton = styled.div`
	height: 60px;
	width: 60px;
	position: absolute;
	top: 0;
	right: 0;
	background-color: blue;
	border-radius: 0 0 0 40%;
	&:hover {
		cursor: pointer;
	}
`;
