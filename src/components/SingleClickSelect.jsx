import {
	ClickAwayListener,
	FormControl,
	InputLabel,
	MenuItem,
	Select
} from "@mui/material";
import { useState } from "react";
import SmallBodyText from "../components/SmallBodyText";

const SingleClickSelect = ({ label, optionsArray, value, setValue }) => {
	const [isOpen, setOpen] = useState(false);
	return (
		<ClickAwayListener onClickAway={() => setOpen(false)}>
			<FormControl>
				<InputLabel id={label}>{label}</InputLabel>
				<Select
					sx={{
						"& .MuiOutlinedInput-notchedOutline": {
							border: "none"
						},
						minWidth: "100px"
					}}
					open={isOpen}
					value={value}
					label={label}
					size="small"
					onTouchStart={(event) => {
						setOpen(true);
					}}
					onOpen={() => setOpen(true)}>
					{optionsArray.map((optionName, index) => {
						return (
							<MenuItem
								key={index}
								value={optionName}
								onMouseUp={(event) => {
									setValue(optionName);
									setOpen(false);
								}}>
								<SmallBodyText variant={"body2"}>
									{optionName}
								</SmallBodyText>
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</ClickAwayListener>
	);
};

export default SingleClickSelect;
