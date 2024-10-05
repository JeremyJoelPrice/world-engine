import { useState } from "react";
import NpcGeneratorComponent from "../npc generator/NpcGeneratorComponent";
import NpcNameListComponent from "./NpcNameListComponent";
import { Paper, Switch } from "@mui/material";

const NpcWindow = () => {
	const [displayGenerator, setDisplayGenerator] = useState(false);

	const handleClick = () => {
		setDisplayGenerator((previous) => !previous);
	};

	return (
		<Paper
			variant="outlined"
			sx={{
				gridColumn: "3 / 4",
				gridRow: "1 / 4",
				paddingTop: "10px"
			}}>
			<Switch
				color="default"
				onClick={handleClick}
				sx={{
					position: "absolute",
					right: 0,
					top: 0
				}}
			/>
			{displayGenerator ? (
				<NpcGeneratorComponent />
			) : (
				<NpcNameListComponent />
			)}
		</Paper>
	);
};
export default NpcWindow;
