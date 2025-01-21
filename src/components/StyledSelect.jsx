import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import SmallBodyText from "./SmallBodyText";

const StyledSelect = ({ label, optionsArray, value, setValue }) => {
	return (
		<FormControl>
			<InputLabel id={label}>{label}</InputLabel>
			<Select
				sx={{
					"& .MuiOutlinedInput-notchedOutline": {
						border: "none"
					},
					minWidth: "100px"
				}}
				value={value}
				label={label}
				size="small"
				onChange={({ target }) => setValue(target.value)}>
				{optionsArray.map((optionName, index) => {
					return (
						<MenuItem key={index} value={optionName}>
							<SmallBodyText variant={"body2"}>
								{optionName}
							</SmallBodyText>
						</MenuItem>
					);
				})}
			</Select>
		</FormControl>
	);
};

export default StyledSelect;
