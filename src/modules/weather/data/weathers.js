import {
	HIGH_IMPACT,
	MODERATE_IMPACT,
	STATE_AFTERMATH,
	STATE_BORING,
	STATE_BUILDING,
	STATE_CLIMAX,
	STATE_EVENT
} from "../constants";

const boring = {
	desc: "calm & clear"
};

const weathers = [
	{
		label: "rainstorm",
		[STATE_BORING]: boring,
		[STATE_BUILDING]: {
			desc: "gathering clouds, gentle breeze"
		},
		[STATE_EVENT]: {
			desc: "steady rainfall, cool breeze",
			impact: {
				exposure: MODERATE_IMPACT,
				accuracy: MODERATE_IMPACT,
				hearing: MODERATE_IMPACT
			}
		},
		[STATE_CLIMAX]: {
			desc: "heavy rainfall, thunder rumbles overhead",
			impact: {
				exposure: MODERATE_IMPACT,
				accuracy: MODERATE_IMPACT,
				vision: MODERATE_IMPACT,
				hearing: HIGH_IMPACT
			}
		},
		[STATE_AFTERMATH]: {
			desc: "clouds parting, wet ground, petrichor"
		}
	},
	{
		label: "gale",
		[STATE_BORING]: boring,
		[STATE_BUILDING]: {
			desc: "wind picking up"
		},
		[STATE_EVENT]: {
			desc: "strong wind",
			impact: {
				exposure: MODERATE_IMPACT,
				accuracy: MODERATE_IMPACT,
				hearing: MODERATE_IMPACT
			}
		},
		[STATE_CLIMAX]: {
			desc: "furious gale",
			impact: {
				exposure: MODERATE_IMPACT,
				accuracy: HIGH_IMPACT,
				vision: MODERATE_IMPACT,
				hearing: HIGH_IMPACT
			}
		},
		[STATE_AFTERMATH]: {
			desc: "air clearing, occasional gusts only"
		}
	}
];

export default weathers;
