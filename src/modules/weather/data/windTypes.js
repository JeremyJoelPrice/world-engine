const windTypes = [
	{
		diceMinResult: 1,
		diceMaxResult: 1,
		wind: "Calm",
		mphMin: 0,
		mphMax: 0,
		description: "Smoke rises vertically"
	},
	{
		diceMinResult: 2,
		diceMaxResult: 3,
		wind: "Light air",
		mphMin: 1,
		mphMax: 3,
		description: "Wind direction shown by smoke but not wind vanes"
	},
	{
		diceMinResult: 4,
		diceMaxResult: 5,
		wind: "Light breeze",
		mphMin: 4,
		mphMax: 7,
		description: "Wind felt on face, leaves rustle, vanes move"
	},
	{
		diceMinResult: 6,
		diceMaxResult: 7,
		wind: "Gentle breeze",
		mphMin: 8,
		mphMax: 12,
		description: "Leaves and small twigs sway and banners flap"
	},
	{
		diceMinResult: 8,
		diceMaxResult: 9,
		wind: "Moderate breeze",
		mphMin: 13,
		mphMax: 18,
		description:
			"Small branches move, and dust and small branches are raised"
	},
	{
		diceMinResult: 10,
		diceMaxResult: 11,
		wind: "Fresh breeze",
		mphMin: 19,
		mphMax: 24,
		description: "Small trees sway and small waves form on inland waters"
	},
	{
		diceMinResult: 12,
		diceMaxResult: 13,
		wind: "Strong breeze",
		mphMin: 25,
		mphMax: 31,
		description: "Large branches move"
	},
	{
		diceMinResult: 14,
		diceMaxResult: 15,
		wind: "Moderate gale",
		mphMin: 32,
		mphMax: 38,
		description:
			"Whole trees sway and walking against wind takes some effort"
	},
	{
		diceMinResult: 16,
		diceMaxResult: 17,
		wind: "Fresh gale",
		mphMin: 39,
		mphMax: 46,
		description: "Twigs break off trees and general progress is impeded"
	},
	{
		diceMinResult: 18,
		diceMaxResult: 18,
		wind: "Strong gale",
		mphMin: 47,
		mphMax: 54,
		description: "Slight structural damage occurs"
	},
	{
		diceMinResult: 19,
		diceMaxResult: 19,
		wind: "Storm",
		mphMin: 55,
		mphMax: 63,
		description:
			"Trees are uprooted and considerable structural damage occurs"
	},
	{
		diceMinResult: 20,
		diceMaxResult: 20,
		wind: "Violent storm",
		mphMin: 64,
		mphMax: 72,
		description: "Widespread damage occurs"
	}
];

export default windTypes;
