import {
	STATE_AFTERMATH,
	STATE_BORING,
	STATE_BUILDING,
	STATE_CLIMAX,
	STATE_EVENT
} from "../constants";

/**
 * impact:
 * - vision
 * - ranged weapons
 * - exposure to cold
 *
 * desc:
 */

const boring = {
	id: STATE_BORING,
	desc: "calm & clear"
};

const weathers = [
	{
		label: "rainstorm",
		[STATE_BORING]: boring,
		[STATE_BUILDING]: {
			id: STATE_BUILDING,
			desc: "gathering clouds, gentle breeze"
		},
		[STATE_EVENT]: {
			id: STATE_EVENT,
			desc: "steady rainfall, cool breeze",
			impact: "exposure increased, ranged accuracy reduced, rain muffles soft sounds"
		},
		[STATE_CLIMAX]: {
			id: STATE_CLIMAX,
			desc: "heavy rainfall, thunder rumbles overhead",
			impact: "exposure increased, ranged weapons impaired, vision reduced, rain muffles most sounds"
		},
		[STATE_AFTERMATH]: {
			id: STATE_AFTERMATH,
			desc: "clouds parting, wet ground",
			impact: "petrichor scent"
		}
	}
];

export default weathers;
