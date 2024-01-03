import genericMonsterStats from "../datasource/genericMonsterStats";

/**
 * Combat Stats API
 */

const crOptions = [
	0, 0.125, 0.25, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
	17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];

const roleOptions = [
	"infantry",
	"brute",
	"artillery",
	"skirmisher",
	"lurker",
	"controller",
	"leader"
];

/**
 * Combat Stats API
 */

const getStats = (cr, role) => {
	const stats = genericMonsterStats.filter(
		(statblock) => statblock.cr === cr
	)[0];

	// console.log("[getStats()]");
	// console.log("	cr: ", cr);
	// console.log("	role: ", role);
	// console.log("	stats: ", stats);

	return stats;
};

/**
 * Combat Stats Utility Functions
 */

const applyRole = (stats, role) => {
	// switch(role) {

	// }
	return stats;
};

export { crOptions, getStats, roleOptions };
