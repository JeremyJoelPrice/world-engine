import { rollOnTable } from "../../util/common";
import roll from "../../util/roll";
import {
	approach,
	characterisation,
	expertise,
	highConcepts,
	leverage
} from "./data/npcGenerationTables";
import flavours from "./data/flavours/index.js";

/* displayable menu options */

export const npcParameters = {
	sexes: ["Female", "Male"],
	flavours: Object.keys(flavours).map((k) => flavours[k]),
	honour: [
		"Bad (-1)",
		"Poor (+0)",
		"Fair (+1)",
		"Good (+2)",
		"Great (+3)",
		"Legendary (+4)"
	]
};

/* NPC generator & helper functions */
export const generateNpc = (chosenParameters, setGeneratedNpc) => {
	const npc = {};

	// resolve random sex
	npc.sex =
		chosenParameters.sex === "Random"
			? rollOnTable(npcParameters.sexes)
			: chosenParameters.sex;

	npc.name = generateName(npc.sex, chosenParameters.flavour);

	// approaches
	const approach1 = rollOnTable(approach);
	let approach2 = rollOnTable(approach);
	while (approach2 === approach1) {
		approach2 = rollOnTable(approach);
	}

	// build & return npc object
	npc.flavour = chosenParameters.flavour;
	npc.characterisationPhysical = rollOnTable(
		characterisation.physicalCharacterisation
	);
	npc.characterisationNonphysical = rollOnTable(
		characterisation.nonphysicalCharacterisation
	);
	npc.characterisationHair = rollOnTable(
		characterisation.hairCharacterisation
	);
	npc.approach1 = approach1;
	npc.approach2 = approach2;
	npc.honour = generateHonour();
	npc.expertise =
		Math.random() > 0.75
			? rollOnTable(expertise.uncommon)
			: rollOnTable(expertise.common);

	setGeneratedNpc(npc);
};

export const generateName = (sex, flavour) => {
	return Object.values(flavours)
		.filter(({ name }) => name === flavour)[0]
		.generateName(sex);
};

const generateHonour = () => {
	const dice = roll("2d6");
	const result = Math.floor(dice.value / 2 - 1);
	return npcParameters.honour[result];
};

export const copyNpcAsText = (npc) => {
	let npcString = `${npc.name}\n${npc.flavour} ${npc.sex}\n${npc.characterisationPhysical}\n${npc.characterisationNonphysical}\n${npc.characterisationHair}\n\nHonour/Reputation: ${npc.honour}\nPrefers to: ${npc.approach1}\nLast resort: ${npc.approach2}\n\nExpertise: ${npc.expertise}`;

	navigator.clipboard.writeText(npcString);
};
