import { Typography } from "@mui/material";

const SmallBodyText = ({ children }) => {
	return (
		<Typography variant={"body2"} component="div">
			{children}
		</Typography>
	);
};

export default SmallBodyText;
