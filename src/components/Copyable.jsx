import { ContentCopy } from "@mui/icons-material";
import { Box } from "@mui/material";

const Copyable = ({ copyFunc, children }) => {
	return (
		<Box position="relative">
			<ContentCopy
				fontSize="small"
				onClick={copyFunc}
				sx={{
					position: "absolute",
					top: 0,
					right: 0,
					margin: "5px",
					cursor: "pointer"
				}}
			/>
			{children}
		</Box>
	);
};

export default Copyable;
