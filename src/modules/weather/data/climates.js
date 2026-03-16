import { SUMMER, WINTER } from "../constants";

const climates = [
	{
		label: "coastal & fjord",
		seasons: {
			[SUMMER]: { high: 13, low: 7 },
			[WINTER]: { high: 3, low: -3 }
		}
	},
	{
		label: "glacial",
		seasons: {
			[SUMMER]: { high: 2, low: -4 },
			[WINTER]: { high: -8, low: -18 }
		}
	},
	{
		label: "highlands",
		seasons: {
			[SUMMER]: { high: 8, low: 2 },
			[WINTER]: { high: -4, low: -14 }
		}
	},
	{
		label: "woodlands & wetlands",
		seasons: {
			[SUMMER]: { high: 13, low: 7 },
			[WINTER]: { high: 3, low: -3 }
		}
	},
	{
		label: "volcanic desert",
		seasons: {
			[SUMMER]: { high: 7, low: 1 },
			[WINTER]: { high: -5, low: -13 }
		}
	}
];

export default climates;
