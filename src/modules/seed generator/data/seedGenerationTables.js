/* Plot */

exports.agenda = [
	// They want to...
	"murder someone",
	"earn tribute from someone else's raid",
	"discredit a rival",
	"help a friend or ally in trouble",
	"have a mystery solved",
	"slay a monster",
	"make a secret pact with some exiles",
	"elevate their social standing",
	"turn someone into an ally",
	"forever bury a crucial secret",
	"have a crime committed",
	"have someone driven away",
	"take land which belongs to another",
	"obtain a particular object",
	"have a matter hushed up",
	"win the love or possession of someone",
	"marry into a certain family",
	"gain riches and wealth",
	"win political power",
	"obtain glory or get fame for a skill",
	"claim some available land",
	"explore a far-off place",
	"sail south and explore the kingdoms there",
	"discover a new land",
	"learn an uncommon skill",
	"kill or ruin a hated rival",
	"oppose The Light in a dramatic way",
	"repay some immeasurable debt",
	"erase other gods for the glory of their own"
];

exports.assets = [
	// They have...

	// relationships
	"a network of friends/allies",
	"a teacher who can impart a great skill",
	"a faithful & skilled ally",
	"a reluctant rival-partner in their ambition",
	"an expendable mercenary",
	"guidance from a seiðkona",
	"a benefactor supporting them",
	"the loyalty of a monster",
	"the loyalty of a group of monsters",
	// status
	"an unassailable reputation",
	"powerful family connections",
	"political influence",
	"a strategic position or advantageous territory",
	// resources
	"great personal wealth",
	"a secret cache of wealth",
	"a book with critical information in it",
	"a dwarven relic",
	"access to secret or forbidden knowledge",
	"a hidden sanctuary",
	"an ancestral weapon or heirloom",
	"a potent and mysterious elixir",
	"a secret which could undermine my opposition",
	// abilities
	"personal strength",
	"willingness to sacrifice everything for this",
	"limited powers of prophecy",
	"shapeshifting powers",
	"specialized training or education",
	// luck
	"a fortunate coincidence",
	"a recent stroke of luck"
];

exports.limits = [
	// they're stuck because...
	'a jealous "ally" is sabotaging them',
	"their addiction is crippling",
	"their patron wants a favor",
	"they're consumed with envy & regret",
	"an amicable rival opposes them",
	"an awful coincidence just happened",
	"a deal came back with bitter consequences",
	"they've had a run of bad luck",
	"their ambitious crime is having consequences",
	"they fumbled and learned a grave lesson",
	"a disinterested third party is blocking them",
	"promises are coming due",
	"they're burning through a resource in pursuit of this",
	"they're pushing their body too hard",
	"someone they love is in the way",
	"they're hyperfocused on the wrong approach",
	"they were fed false information",
	"they've lost a critical resource",
	"a traitor is sabotaging them",
	"their success is attracting hostility",
	"they're being blackmailed",
	"they're enamoured with a manipulator",
	"they're a physical coward",
	"they're in serious, urgent debt",
	"a rival is beating them at their own game",
	"they underestimated their opposition",
	"their reputation is being eroded",
	"someone they love keeps making awful choices",
	"they've discovered that an underling plots against them",
	"an undead foe has their scent",
	"a vampire is toying with them"
];

/* Relationships */

exports.relator = [
	"local authority figure",
	"family member",
	"child",
	"elder",
	"romantic partner",
	"animal or pet",
	"friend",
	"outsider",
	"community pillar",
	"guardian",
	"town gossip",
	"nephew",
	"grandmother",
	"youngster",
	"ancestor",
	"paramour",
	"loyal companion",
	"frenemy",
	"stranger",
	"business associate",
	"business rival",
	"landlord",
	"tenant",
	"teacher",
	"mentor",
	"ally",
	"rival"
];

exports.relations = [
	"(ex?)spouse",
	"sibling",
	"half-sibling",
	"parent",
	"child",
	"aunt",
	"uncle",
	"cousin/in-law",
	"elder",
	"lover",
	"companion",
	"neighbour",
	"friend",
	"former enemy",
	"former thrall",
	"former master",
	"former rival",
	"estranged cousin",
	"comrade-in-arms"
];

exports.events = [
	"went raiding together",
	"went hunting",
	"recovered a dwarven relic",
	"fought a battle",
	"fended off a surprise attack",
	"went on a dangerous voyage",
	"explored a new land",
	"suffered a monster attack",
	"resolved a legal dispute together",
	"attended a þing where they vouched for me"
];

exports.eventOutcomes = [
	"barely made it out alive",
	"took heavy losses",
	"cleverly escaped",
	"cleverly stole a victory",
	"earned a profitable victory",
	"won a decisive victory"
];

exports.innerCircleFunctions = [
	{ label: "confidant", desc: "I trust them with everything" },
	{ label: "supporter", desc: "they provide me with what I need" },
	{
		label: "second",
		desc: "they know my goals and how I will achieve them"
	},
	{ label: "servant", desc: "they keep things running for me" },
	{ label: "mentor", desc: "they answer my questions and help me plan" },
	{
		label: "gossip",
		desc: "they like to talk to everyone, perhaps too much"
	},
	{
		label: "promotor",
		desc: "they make connections, and find a use for everyone"
	}
];

/* Quests */

exports.verbs = [
	"Save",
	"Kill",
	"Steal",
	"Recover",
	"Destroy",
	"Raid",
	"Sabotage",
	"Repair",
	"Create",
	"Recover",
	"Rescue",
	"Infiltrate",
	"Protect",
	"Deliver",
	"Discover",
	"Capture",
	"Retrieve",
	"Negotiate",
	"Defend",
	"Track",
	"Interrogate"
];

exports.nouns = {
	people: [
		// NPCs, monsters, groups
		"a warband",
		"an exile",
		"a troll",
		"a child of Fenrir",
		"a troubled king",
		"a concerned queen",
		"a mighty drengr",
		"a werewolf",
		"a sea troll",
		"a foreign warrior",
		"a crusader",
		"a priest of The Light",
		"an elf",
		"a seiðkona",
		"an innocent clansman",
		"a child from a nearby settlement",
		"a beloved pet",
		"a farm animal who swallowed a relic"
	],
	places: [
		"a dwarven megastructure",
		"an Asculum fortress-church",
		"a jarl's hall",
		"a sacred grove",
		"the slopes of a volcano",
		"a fjord",
		"a grotto"
	],
	objects: [
		"a famous ship",
		"a family sword",
		"an heirloom trinket",
		"a piece of magical jewellery",
		"a chest of silver",
		"the pelt of a monster",
		"an obscure monster sample",
		"an obscure herb/ingredient",
		"a dwarven relic",
		"a crusader's sword",
		"a Gospel of The Light",
		"a dwarven automaton",
		"an artistic masterpiece",
		"a branch of Yggdrasil"
	],
	abstract: ["relationship", "agreement", "contract", "information/clue"]
};

exports.opposition = [""];

exports.complication = [
	"exposure",
	"disease",
	"a violent storm",
	"toxic plantlife",
	"mosntrous predators",
	"a stampede of swinefolk",
	"a shifting glacier",
	"a volcanic eruption",
	"a detachment of crusaders",
	"a shakespearean drama"
];
