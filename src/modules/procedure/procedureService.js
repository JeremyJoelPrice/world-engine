import roll from "../../util/roll";

/* API */

// expects -1 for disadvantage, 1 for advantage, and 0/undefined for unmodified
export const reactionRoll = (modifier) => {
	let rolledDice;

	switch (modifier) {
		case 1:
			rolledDice = roll("2d6h2");
			break;
		case -1:
			rolledDice = roll("2d6l2");
			break;
		default:
			rolledDice = roll("2d6");
	}

	switch (rolledDice.value) {
		case 2:
		case 3:
			return { rolledDice, value: rolledDice.value, reaction: "hostile" };
		case 4:
		case 5:
		case 6:
			return {
				rolledDice,
				value: rolledDice.value,
				reaction: "unfriendly/suspicious"
			};
		case 7:
		case 8:
		case 9:
			return { rolledDice, value: rolledDice.value, reaction: "neutral" };
		case 10:
		case 11:
			return {
				rolledDice,
				value: rolledDice.value,
				reaction: "friendly"
			};
		default:
			return {
				rolledDice,
				value: rolledDice.value,
				reaction: "very friendly/helpful"
			};
	}
};
