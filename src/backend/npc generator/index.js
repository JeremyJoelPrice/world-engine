import getStats from "./stats";
const getRandomName = require("./names");
const arrayFacets = require("./arrayFacets");
const tables = require("../table roller/tables");
const { getRandomElement } = require("../table roller/tableUtils");

export const npcTemplates = {
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

export const getNpcs = (params = npcTemplates.background, count = 1) => {
	// declare array to hold results
	const npcs = [];

	// for each increment of count, build an NPC using params
	for (; count > 0; count--) {
		const npc = replaceAllRandomValues(params);
		npcs.push(npc);
	}

	// return results
	return npcs;
};

function replaceAllRandomValues(params) {
	const npc = { ...params };
	Object.keys(npc).forEach((key) => {
		npc[key] =
			npc[key] === "random" ||
			(Array.isArray(npc[key]) && npc[key].includes("random"))
				? getNpcFacet(key, npc)
				: npc[key];
	});
	return npc;
}

function getNpcFacet(key, params) {
	let func;
	switch (key) {
		case "descent":
			return getRandomElement(["norræn", "woodlands", "asculum"]);
		case "sex":
			return getRandomElement(["male", "female"]);
		case "agenda":
			return getRandomElement(tables.customTables.agenda);
		case "name":
			return getRandomName(params.sex, params.descent);
		case "highConcept":
			const table =
				tables.npcTypes[
					getRandomElement([
						"commoners",
						"underclass",
						"specificVillagers",
						"specificWarriors"
					])
				];
			return getRandomElement(table);
		case "characterisation":
			func = arrayFacets.getNumOfCharacterisations;
			return getArrayOfNpcDetails(key, params, func);
		case "relationships":
			func = arrayFacets.getNumOfRelationships;
			return getArrayOfNpcDetails(key, params, func);
		case "assets":
			func = arrayFacets.getNumOfAssets;
			return getArrayOfNpcDetails(key, params, func);
		case "limits":
			func = arrayFacets.getNumOfLimits;
			return getArrayOfNpcDetails(key, params, func);
		case "approach":
			func = arrayFacets.getNumOfApproaches;
			return getArrayOfNpcDetails(key, params, func);
	}
}

function getArrayOfNpcDetails(key, params, getElementsFunc) {
	let results = [];

	// if key is assets, get stats first
	if (key === "assets") {
		results.push(getStats(params));
	}
	// if key is the string 'random', call the given function for a value
	if (params[key] === "random") {
		results.push(...getElementsFunc(2));
	}
	// if key is a non-empty array, replace any and all "random" elements
	else if (Array.isArray(params[key]) && params[key].length > 0) {
		results.push(
			...params[key].map((v) => {
				return v === "random" ? getElementsFunc(1)[0] : v;
			})
		);
	}

	return results;
}
