import { Box, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { reactionRoll } from "./procedureService";

const ProcedureComponent = () => {
	const [reaction, setReaction] = useState("reaction");
	const [value, setValue] = useState("2d6");

	const handleClick = (modifier) => {
		const rolledDice = reactionRoll(modifier);
		const { reaction, value } = rolledDice;
		setReaction(reaction);
		setValue(value);
	};

	const clear = () => {
		setReaction("reaction");
		setValue("2d6");
	};

	return (
		<Paper
			variant="outlined"
			sx={{
				gridColumn: "1 / span 1",
				gridRow: "1 / span 1",
				paddingTop: "10px"
			}}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					height: "100%"
				}}>
				<Box
					sx={{
						width: "fit-content",
						margin: "10px auto"
					}}>
					<Typography variant={"body1"} onClick={clear}>
						{reaction}
					</Typography>
				</Box>
				<Box sx={{ width: "fit-content", margin: "10px auto" }}>
					<Button size="small" onClick={() => handleClick(-1)}>
						malus
					</Button>
					<Button
						variant="contained"
						size="large"
						sx={{ textTransform: "none" }}
						onClick={() => handleClick(0)}>
						{value}
					</Button>
					<Button size="small" onClick={() => handleClick(1)}>
						bonus
					</Button>
				</Box>
			</Box>
		</Paper>
	);
};

export default ProcedureComponent;
