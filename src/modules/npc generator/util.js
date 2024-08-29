const { rollOnTable } = require("../../util/common");
const { default: config } = require("./config");

exports.getName = (sex, flavour) => {
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
