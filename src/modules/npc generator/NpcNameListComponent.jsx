import { useState } from "react";
import { getName } from "./npcGeneratorService";
import { Box, debounce, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SmallBodyText from "../../components/SmallBodyText";

const NpcNameListComponent = () => {
	const flavours = ["Norse", "Celtic"];

	return (
		<Box sx={{ textAlign: "center" }}>
			<Box>
				<Grid container spacing={12}>
					<Grid size={6}>
						<Typography textAlign={"right"}>male</Typography>
					</Grid>
					<Grid size={6}>
						<Typography textAlign={"left"}>female</Typography>
					</Grid>
				</Grid>
			</Box>
			{flavours.map((flavour, index) => {
				return (
					<div key={index}>
						<Typography variant="h6">{flavour}</Typography>
						<Grid container spacing={12}>
							<Grid size={6}>
								<ReplacerListItem
									flavour={flavour}
									sex={"Male"}
									align="right"
								/>
							</Grid>
							<Grid size={6}>
								<ReplacerListItem
									flavour={flavour}
									sex={"Female"}
									align="left"
								/>
							</Grid>
						</Grid>
						<Grid container spacing={12}>
							<Grid size={6}>
								<ReplacerListItem
									flavour={flavour}
									sex={"Male"}
									align="right"
								/>
							</Grid>
							<Grid size={6}>
								<ReplacerListItem
									flavour={flavour}
									sex={"Female"}
									align="left"
								/>
							</Grid>
						</Grid>
						<Grid container spacing={12}>
							<Grid size={6}>
								<ReplacerListItem
									flavour={flavour}
									sex={"Male"}
									align="right"
								/>
							</Grid>
							<Grid size={6}>
								<ReplacerListItem
									flavour={flavour}
									sex={"Female"}
									align="left"
								/>
							</Grid>
						</Grid>
					</div>
				);
			})}
		</Box>
	);
};

export default NpcNameListComponent;

/* other components */

const ReplacerListItem = ({ align, flavour, sex }) => {
	const [name, setName] = useState(getName(sex, flavour));

	const handleClick = () => {
		navigator.clipboard.writeText(name);
		setName(getName(sex, flavour));
	};

	return (
		<>
			<Box
				onClick={debounce(handleClick, 500)}
				onTouchStart={debounce(handleClick, 500)}
				sx={{
					width: "100%",
					textAlign: align,
					margin: "5px 0",
					cursor: "pointer"
				}}>
				<SmallBodyText>{name}</SmallBodyText>
			</Box>
		</>
	);
};
