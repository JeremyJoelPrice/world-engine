import getStats from "./stats";
const { getRandomElement } = require("./utils");
const getRandomName = require("./names");
const arrayFacets = require("./arrayFacets");
const npcTables = require("../table roller/tables/NPCs");

const templates = {
	background: {
		descent: "random",
		sex: "random",
		name: "random",
		highConcept: "random"
	},
	minor: {
		descent: "random",
		sex: "random",
		name: "random",
		highConcept: "random",
		characterisation: "random",
		relationships: "random"
	},
	significant: {
		descent: "random",
		sex: "random",
		name: "random",
		highConcept: "random",
		characterisation: "random",
		relationships: "random",
		assets: "random",
		limits: "random",
		approach: "random"
	},
	main: {
		descent: "random",
		sex: "random",
		name: "random",
		highConcept: "random",
		characterisation: "random",
		relationships: "random",
		assets: "random",
		limits: "random",
		approach: "random",
		agenda: "random"
	}
};

export default (params = "background", count = 1) => {
	// declare array to hold results
	const npcs = [];
	if (typeof params === "string") params = templates[params];

	// for each increment of count, build an NPC using params
	for (; count > 0; count--) {
		const npc = getNpcFacets(params);
		npcs.push(npc);
	}

	// return results
	return npcs;
};

function getNpcFacets(params) {
	// replace any "random" values with actual values
	const npc = { ...params };
	Object.keys(npc).forEach((key) => {
		npc[key] =
			npc[key] === "random" ||
			(Array.isArray(npc[key]) && npc[key].includes("random"))
				? getNpcFacet(key, npc)
				: npc[key];
	});

	// return results
	return npc;
}

function getNpcFacet(key, params) {
	switch (key) {
		case "descent":
			return getRandomElement(["norræn", "woodlands", "asculum"]);
		case "sex":
			return getRandomElement(["male", "female"]);
		case "name":
			return getRandomName(params.sex, params.descent);
		case "highConcept":
			return getRandomHighConcept();
		case "characterisation":
			return getArrayOfNpcDetails(
				key,
				params,
				arrayFacets.getNumOfCharacterisations
			);
		case "relationships":
			return getArrayOfNpcDetails(
				key,
				params,
				arrayFacets.getNumOfRelationships
			);
		case "assets":
			return getArrayOfNpcDetails(
				key,
				params,
				arrayFacets.getNumOfAssets
			);
		case "limits":
			return getArrayOfNpcDetails(
				key,
				params,
				arrayFacets.getNumOfLimits
			);
		case "approach":
			return getArrayOfNpcDetails(
				key,
				params,
				arrayFacets.getNumOfApproaches
			);
		case "agenda":
			return getRandomElement(npcTables.customTables.agenda);
	}
}

function getRandomHighConcept() {
	const { npcTypes } = require("../table roller/tables/NPCs");
	let table =
		npcTypes[
			getRandomElement([
				"commoners",
				"underclass",
				"specificVillagers",
				"specificWarriors"
			])
		];

	return getRandomElement(table);
}

function getArrayOfNpcDetails(key, params, getElementsFunc) {
	const results = [];

	// if key is assets, get stats first
	if (key === "assets") {
		results.push(getStats(params));
	}

	// if key is missing, "random", or an empty array, then create 2 - 3 entries to return.
	if (!params[key] || params[key] === "random" || params[key].length === 0) {
		results.push(...getElementsFunc(2));
	}

	// if key is a non-empty array, replace any and all "random" elements.
	else if (Array.isArray(params[key]) && params[key].length > 0) {
		let numNeeded = 0;
		params[key].forEach((value) => {
			if (value === "random") numNeeded++;
		});
		const arr = getElementsFunc(numNeeded);
		results.push(
			...params[key].map((value) => {
				return value === "random" ? arr.shift() : value;
			})
		);
	}
	return results;
}
