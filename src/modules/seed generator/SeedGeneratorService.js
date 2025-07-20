const { rollOnTable } = require("../../util/common");
const {
	agenda,
	limits,
	assets,
	innerCircleFunctions,
	events,
	relations,
	eventOutcomes
} = require("./data/seedGenerationTables");

/* API */
exports.generatePlot = (setAgenda, setLimitation, setAsset, setDisplay) => {
	setAgenda(rollOnTable(agenda));
	setLimitation(rollOnTable(limits));
	setAsset(rollOnTable(assets));
	setDisplay("plot");
};

exports.generateAgenda = (setAgenda) => {
	return setAgenda(rollOnTable(agenda));
};

exports.generateLimitation = (setLimitation) => {
	return setLimitation(rollOnTable(limits));
};

exports.generateAsset = (setAsset) => {
	return setAsset(rollOnTable(assets));
};

exports.generateRelation = () => {
	return rollOnTable(relations);
};

exports.generateEvent = () => {
	return rollOnTable(events);
};

exports.generateOutcome = () => {
	return rollOnTable(eventOutcomes);
};

exports.generateInnerCircleFunction = () => {
	return rollOnTable(innerCircleFunctions);
};

exports.generateInnerCircle = (setInnerCircle) => {
	const ids = [];

	// generate 2 - 5 entries
	const entries = Math.floor(Math.random() * 3 + 2);

	// no repitition
	while (ids.length < entries) {
		let id;
		do {
			id = Math.floor(Math.random() * innerCircleFunctions.length);
		} while (ids.includes(id));
		ids.push(id);
	}

	const innerCircle = ids.map((id) => innerCircleFunctions[id]);

	innerCircle.forEach((e) => {
		e.relation = rollOnTable(relations);
		e.asset = rollOnTable(assets);
		e.limit = rollOnTable(limits);
	});

	setInnerCircle(innerCircle);
};
