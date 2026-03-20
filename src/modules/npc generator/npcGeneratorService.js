import { rollOnTable } from "../../util/common";
import {
	approach,
	characterisation,
	expertise
} from "./data/npcGenerationTables";
import flavours from "./data/flavours/index.js";

/* displayable menu options */

export const npcParameters = {
	sexes: ["Female", "Male"],
	flavours: Object.keys(flavours).map((k) => flavours[k])
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
	npc.characterisationPhysical =
		Math.random() > 0.5
			? rollOnTable(characterisation.physicalCharacterisation)
			: rollOnTable(characterisation.hairCharacterisation);
	npc.characterisationNonphysical = rollOnTable(
		characterisation.nonphysicalCharacterisation
	);
	npc.approach1 = approach1;
	npc.approach2 = approach2;
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

export const copyNpcAsText = (npc) => {
	let npcString = `${npc.name}\n${npc.flavour} ${npc.sex}\n${npc.characterisationPhysical}\n${npc.characterisationNonphysical}\n\nPrefers to: ${npc.approach1}\nLast resort: ${npc.approach2}\n\nExpertise: ${npc.expertise}`;

	navigator.clipboard.writeText(npcString);
};
