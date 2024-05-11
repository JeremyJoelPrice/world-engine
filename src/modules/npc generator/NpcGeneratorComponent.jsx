import { useEffect, useState } from "react";
import NpcGeneratorInterface from "./NpcGeneratorInterface";
import config from "./config";
import { rollOnTable } from "../../utils";
import {
	approach,
	characterisation,
	highConcepts,
	leverage
} from "./data/npcGenerationTables";

const NpcGeneratorComponent = () => {
	const [npcParameters, setNpcParameters] = useState();
	const [generatedNpc, setGeneratedNpc] = useState();

	useEffect(() => {
		const initParameters = {};
		for (let i = 0; i < config.menus.length; i++) {
			const { title, options } = config.menus[i];
			initParameters[title] = options[0].name;
		}
		setNpcParameters(initParameters);
	}, []);
	const menus = config.menus.map(({ title, options }) => {
		return {
			title,
			options,
			handleChange: (v) => {
				setNpcParameters((prevNpc) => {
					const newNpc = Object.assign({}, prevNpc);
					newNpc[title] = v;
					return newNpc;
				});
			}
		};
	});

	return npcParameters === undefined ? (
		<></>
	) : (
		<NpcGeneratorInterface
			menus={menus}
			npcParameters={npcParameters}
			generatedNpc={generatedNpc}
			generateFunc={() => generateNpc(npcParameters, setGeneratedNpc)}
			copyNpcAsText={() => copyNpcAsText(generatedNpc)}
		/>
	);
};

/**
 * NPC Generator Utility Functions
 */
const generateNpc = (npcParameters, setGeneratedNpc) => {
	const npcTemplate = Object.assign({}, npcParameters);
	// resolve "Random" values
	Object.keys(npcParameters).forEach((param) => {
		const menu = config.menus.filter(({ title }) => title === param)[0];
		while (npcTemplate[param] === "Random") {
			npcTemplate[param] =
				menu.options[
					Math.floor(Math.random() * menu.options.length)
				].name;
		}
	});
	// resolve "Default" flavour
	if (npcTemplate.Flavour === "Default") {
		npcTemplate["Flavour"] = config.menus
			.filter(({ title }) => title === "Race")[0]
			.options.filter(
				({ name }) => name === npcTemplate["Race"]
			)[0].defaultFlavour;
	}

	// create actual npc
	const approach1 = rollOnTable(approach);
	let approach2 = rollOnTable(approach);
	while (approach2 === approach1) {
		approach2 = rollOnTable(approach);
	}
	const actualNpc = {
		sex: npcTemplate["Sex"],
		race: npcTemplate["Race"],
		highConcept: rollOnTable(highConcepts),
		approach1,
		approach2,
		characterisation: rollOnTable(characterisation),
		leverage: rollOnTable(leverage)
	};
	actualNpc.name = getName(npcTemplate["Sex"], npcTemplate["Flavour"]);

	setGeneratedNpc(actualNpc);
};

const getName = (sex, flavour) => {
	// get name table
	let { maleForenames, femaleForenames, surnames } = config.menus
		.filter(({ title }) => title === "Flavour")[0]
		.options.filter(({ name }) => name === flavour)[0];
	const forenamesTable = sex === "Male" ? maleForenames : femaleForenames;
	if (flavour === "Norse") {
		const suffix = sex === "Male" ? "son" : "sdottir";
		surnames = forenamesTable.map((n) => n + suffix);
	}

	// generate name
	const forename = rollOnTable(forenamesTable);
	const surname = rollOnTable(surnames);
	return `${forename} ${surname}`;
};

const copyNpcAsText = (generatedNpc) => {
	let npcString = `${generatedNpc.name}\n${generatedNpc.sex} ${generatedNpc.race}\n${generatedNpc.highConcept.name}\n${generatedNpc.highConcept.description}\n${generatedNpc.approach1}/${generatedNpc.approach2}\nLeverage: ${generatedNpc.leverage}`;
	console.log(npcString);
	navigator.clipboard.writeText(npcString);
};

export default NpcGeneratorComponent;
