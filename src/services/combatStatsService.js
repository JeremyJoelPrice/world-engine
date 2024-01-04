import genericMonsterStats from "../datasource/genericMonsterStats";

/**
 * Combat Stats Config
 */

const roles = [
	{ name: "leader" },
	{ name: "controller", buff: ["dc"] },
	{ name: "lurker", buff: ["highProf", "dc"], debuff: ["hp"] },
	{ name: "skirmisher" },
	{ name: "artillery", buff: ["dmg"], debuff: ["ac", "hp"] },
	{ name: "brute", buff: ["hp", "dmg"], debuff: ["ac"] },
	{ name: "infantry" }
];

/**
 * Combat Stats API
 */

export const getStats = (cr, roleName) => {
	const stats = {
		...genericMonsterStats.filter((statblock) => statblock.cr === cr)[0]
	};

	const role = roles.filter(({ name }) => name === roleName)[0];

	return applyRole(stats, role);
};

/**
 * Combat Stats Utility Functions
 */

const applyRole = (stats, role) => {
	role.buff?.forEach((buff) => {
		switch (buff) {
			case "dmg":
			case "hp":
				stats[buff] = getFromOtherCR(buff, stats.cr, 2);
				break;
			case "ac":
			case "dc":
				stats[buff] += 2;
				break;
			case "highProf":
				stats[buff] += 3;
				break;
			default:
				break;
		}
	});
	role.debuff?.forEach((debuff) => {
		switch (debuff) {
			case "dmg":
			case "hp":
				stats[debuff] = getFromOtherCR(debuff, stats.cr, -2);
				break;
			case "ac":
			case "dc":
				stats[debuff] -= 2;
				break;
			case "highProf":
				stats[debuff] -= 3;
				break;
			default:
				break;
		}
	});
	return stats;
};

function getFromOtherCR(statName, cr, crModifier) {
	for (let i = 0; i < genericMonsterStats.length; i++) {
		if (genericMonsterStats[i].cr === cr)
			return genericMonsterStats[
				Math.max(
					0,
					Math.min(genericMonsterStats.length - 1, i + crModifier)
				)
			][statName];
	}
}

export const crOptions = genericMonsterStats.map(({ cr }) => cr);
export const roleOptions = roles.map(({ name }) => name);
