import {
	Box,
	Button,
	Card,
	CardContent,
	Divider,
	Grid2 as Grid,
	Paper,
	Slider,
	Typography
} from "@mui/material";
import { Air, Cloud, Thermostat, WaterDrop } from "@mui/icons-material";
import SingleClickSelect from "../../components/SingleClickSelect";
import terrainTypes from "./data/terrainTypes";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const WeatherComponent = () => {
	const [terrainType, setTerrainType] = useState(terrainTypes[0]);
	const [isCoastal, setIsCoastal] = useState(false);
	const [latitude, setLatitude] = useState(60);

	const latitudeMarks = [
		{
			value: 0
		},
		{
			value: 25
		},
		{
			value: 35
		},
		{
			value: 45
		},
		{
			value: 55
		},
		{
			value: 75
		},
		{
			value: 90
		}
	];

	return (
		<Paper
			variant="outlined"
			sx={{
				gridColumn: "2 / 3",
				gridRow: "1 / 2",
				display: "flex"
			}}>
			<FlexBox
				sx={{
					padding: "32px 20px 20px",
					flexDirection: "column"
				}}>
				<Grid container spacing={4}>
					<Grid size={6} sx={{ minHeight: "35px" }}>
						<DataRow>
							<Thermostat fontSize={"large"} />
							<Typography
								fontSize={"1.2rem"}
								sx={{ margin: "auto 0" }}>
								21°/11°
							</Typography>
						</DataRow>
					</Grid>
					<Grid size={6} sx={{ minHeight: "35px" }}>
						<DataRow>
							<Cloud fontSize={"large"} />
							<Typography
								fontSize={"1.2rem"}
								sx={{ margin: "auto 0" }}>
								clear
							</Typography>
						</DataRow>
					</Grid>
					<Grid size={6} sx={{ minHeight: "35px" }}>
						<DataRow>
							<Air fontSize={"large"} />
							<Typography
								fontSize={"1.2rem"}
								sx={{ margin: "auto 0" }}>
								9mph NW
							</Typography>
						</DataRow>
					</Grid>
					<Grid size={6} sx={{ minHeight: "35px" }}>
						<DataRow>
							<WaterDrop fontSize={"large"} />
							<Typography
								fontSize={"1.2rem"}
								sx={{ margin: "auto 0" }}>
								none
							</Typography>
						</DataRow>
					</Grid>
				</Grid>
				<Card variant={"outlined"}>
					<CardContent>
						<Typography>Gentle Breeze</Typography>
						<Typography>
							Leaves and small twigs sway and banners flap
						</Typography>
					</CardContent>
				</Card>
			</FlexBox>
			<Divider
				orientation="vertical"
				flexItem
				sx={{ margin: "20px 0" }}
			/>
			<FlexBox
				sx={{
					minWidth: "300px",
					padding: "20px 10px",
					flexDirection: "column"
				}}>
				<Box>
					<SingleClickSelect
						label="Terrain Type"
						optionsArray={terrainTypes}
						value={terrainType}
						setValue={setTerrainType}
					/>
				</Box>
				<FlexBox
					sx={{
						justifyContent: "flex-start",
						alignItems: "center",
						padding: "0 14px 16.5px",
						cursor: "pointer"
					}}
					onClick={() => {
						setIsCoastal(!isCoastal);
					}}>
					<Typography>coastal</Typography>
					<Checkbox checked={isCoastal} sx={{ padding: "0 6px 0" }} />
				</FlexBox>
				<Box sx={{ padding: "0 14px" }}>
					<Typography>latitude {latitude}°</Typography>
					<Slider
						defaultValue={55}
						step={null}
						marks={latitudeMarks}
						max={90}
						onChange={(event) => {
							setLatitude(event.target.value);
						}}
						sx={{
							width: "100%"
						}}
					/>
				</Box>
				<Box sx={{ flexGrow: "1" }} />
				<FlexBox sx={{ justifyContent: "center" }}>
					<Button
						variant="contained"
						size="large"
						onClick={() => console.log("click")}>
						Generate Weather
					</Button>
				</FlexBox>
				<Box sx={{ flexGrow: "1" }} />
			</FlexBox>
		</Paper>
	);
};

export default WeatherComponent;

/* other components */

const DataRow = ({ children }) => {
	return (
		<Box
			sx={{
				display: "flex",
				columnGap: "8px",
				margin: "0 0"
			}}>
			{children}
		</Box>
	);
};

const FlexBox = ({ children, sx = {}, ...props }) => (
	<Box
		sx={{
			display: "flex",
			justifyContent: "space-between",
			...sx
		}}
		{...props}>
		{children}
	</Box>
);
