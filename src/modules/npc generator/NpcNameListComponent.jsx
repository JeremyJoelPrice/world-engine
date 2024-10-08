import { useState } from "react";
import { getName } from "./npcGeneratorService";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { keyframes } from "@emotion/react";
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
	const [fadeState, setFadeState] = useState("none"); // 'none', 'fadingOut', or 'fadingIn'
	const [name, setName] = useState(getName(sex, flavour));

	const handleClick = () => {
		navigator.clipboard.writeText(name);
		setFadeState("fadingOut");
		setTimeout(() => {
			setName(getName(sex, flavour));
			setFadeState("fadingIn");
		}, 400); // Fade-out duration should not exceed the CSS animation duration
	};

	const fadeOut = keyframes`
	0% {
	  opacity: 1;
	}
	100% {
	  opacity: 0;
	}
  `;

	const fadeIn = keyframes`
	0% {
	  opacity: 0;
	}
	100% {
	  opacity: 1;
	}
  `;

	return (
		<>
			<Box
				onClick={() => handleClick()}
				onTouchStart={(event) => {
					handleClick();
				}}
				sx={{
					width: "100%",
					textAlign: align,
					margin: "5px 0",
					animation:
						fadeState === "fadingOut"
							? `${fadeOut} 0.4s ease-in-out`
							: fadeState === "fadingIn"
							? `${fadeIn} 0.4s ease-in-out`
							: "none",
					cursor: "pointer"
				}}>
				<SmallBodyText>{name}</SmallBodyText>
			</Box>
		</>
	);
};
