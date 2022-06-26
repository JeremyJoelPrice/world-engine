const { genericStats } = require("../table roller/tables").npcTables;
const { generateIndex } = require("../utils");

export default (minHd, maxHd) => {
	// get some random stats
	const statKey = getRandomStatKey();
	let statBlock = genericStats[statKey];

	// calculate the hitpoints
	statBlock = insertHitPoints(statBlock);

	// fill in the weapons & damage
	return { [statKey]: statBlock };
};

function getRandomStatKey() {
	const index = generateIndex(Object.keys(genericStats).length);
	return Object.keys(genericStats)[index];
}

function insertHitPoints(statBlock) {
	// establish hit dice
	const hdStart = statBlock.indexOf(" ");
	const hdEnd = statBlock.indexOf(";");
	const hd = statBlock.substring(hdStart, hdEnd);

	// roll hit points
	const hp = rollHitPoints(hd);

	// input hit points
	statBlock = `${statBlock.substring(0, hdEnd)}, ${hp}hp${statBlock.substring(
		hdEnd
	)}`;

	// return statblock
	return statBlock;
}

function rollHitPoints(hitDice) {
	let hp = 0;
	for (let i = 0; i < Number(hitDice); i++) {
		hp += Math.floor(Math.random() * 6 + 1) + 1;
	}
	return hp;
}
