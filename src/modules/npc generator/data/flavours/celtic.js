import { rollOnTable } from "../../../../util/common";

const flavour = {
	name: "Celtic",
	generateName: (sex) => {
		const firstNames = sex === "Male" ? maleFirstNames : femaleFirstNames;
		return `${rollOnTable(firstNames)} ${rollOnTable(surnames)}`;
	}
};

const maleFirstNames = [
	// mythological
	"Áed",
	"Ailbe",
	"Ailbhe",
	"Ailill",
	"Aodh",
	"Aonghus",
	"Arawn",
	"Arthur",
	"Balor",
	"Bedivere",
	"Bedwyr",
	"Belenos",
	"Belenus",
	"Beli",
	"Bendigeidfran",
	"Bile",
	"Bran",
	"Cáel",
	"Cai",
	"Cernunnos",
	"Cian",
	"Ciar",
	"Conall",
	"Conchobar",
	"Conchobhar",
	"Conchúr",
	"Conlaoch",
	"Conn",
	"Connla",
	"Conor",
	"Cormac",
	"Cúchulainn",
	"Culann",
	"Culhwch",
	"Dagda",
	"Dáire",
	"Deimne",
	"Diarmaid",
	"Diarmait",
	"Diarmuid",
	"Dylan",
	"Éber",
	"Éibhear",
	"Éibhir",
	"Eógan",
	"Eoghan",
	"Fachtna",
	"Fearghas",
	"Fedelmid",
	"Fedlimid",
	"Feidlimid",
	"Fergus",
	"Fiachna",
	"Fiachra",
	"Fiachrae",
	"Finn",
	"Fintan",
	"Fion",
	"Fionn",
	"Geraint",
	"Gobannos",
	"Gofannon",
	"Goibniu",
	"Goronwy",
	"Govannon",
	"Gronw",
	"Guendoleu",
	"Gwalchmai",
	"Gwalchmei",
	"Gwawl",
	"Gwenddoleu",
	"Gwydion",
	"Gwyn",
	"Gwythyr",
	"Heber",
	"Heilyn",
	"Kay",
	"Ler",
	"Lir",
	"Lleu",
	"Llew",
	"Lludd",
	"Llyr",
	"Llŷr",
	"Lóegaire",
	"Lú",
	"Lug",
	"Lugaid",
	"Lugh",
	"Lughaidh",
	"Lugos",
	"Lugus",
	"Mabon",
	"Macsen",
	"Manannán",
	"Manawydan",
	"Maponos",
	"Math",
	"Medraut",
	"Medrod",
	"Modred",
	"Mordred",
	"Myrddin",
	"Naoise",
	"Nechtan",
	"Nodens",
	"Noíse",
	"Nuada",
	"Nuadha",
	"Nuadu",
	"Nudd",
	"Óengus",
	"Oisín",
	"Oissíne",
	"OscarFrench",
	"Parthalán",
	"Partholón",
	"Peredur",
	"Pryderi",
	"Pwyll",
	"Ségdae",
	"Sláine",
	"Suibhne",
	"Suibne",
	"Sweeney",
	"Tadg",
	"Tadhg",
	"Taliesin",
	"Taranis",
	"Toutatis",
	"Uther",

	// modern
	"Aidan",
	"Brendan",
	"Callum",
	"Declan",
	"Eamon",
	"Finn",
	"Gavin",
	"Hamish",
	"Iain",
	"Kieran",
	"Liam",
	"Niall",
	"Owen",
	"Patrick",
	"Ronan",
	"Sean",
	"Tadhg",
	"Brian",
	"Cian",
	"Dermot",
	"Eoin",
	"Fergus",
	"Gareth",
	"Lorcan",
	"Malachy",
	"Alastair",
	"Colm",
	"Donal",
	"Ewan",
	"Padraig"
];
const femaleFirstNames = [
	// mythological
	"Æbbe",
	"Æðelflæd",
	"Æðelþryð",
	"Ælfflæd",
	"Ælfgifu",
	"Ælfswiþ",
	"Ælfthryth",
	"Ælfþryð",
	"Æthelflæd",
	"Æthelthryth",
	"Agrona",
	"Aífe",
	"Ailbe",
	"Ailbhe",
	"Áine",
	"Andraste",
	"Angharad",
	"Aoife",
	"Aranrhod",
	"Arianrhod",
	"Bébinn",
	"Béibhinn",
	"Bláithín",
	"Bláthíne",
	"Bláthnaid",
	"Bláthnat",
	"Blodeuedd",
	"Blodeuwedd",
	"Boann",
	"Bóinn",
	"Branwen",
	"Brígh",
	"Brighid",
	"Brigid",
	"Brigit",
	"Céibhfhionn",
	"Cleena",
	"Clídna",
	"Clíodhna",
	"Creiddylad",
	"Cyneburg",
	"Cyneburga",
	"Daireann",
	"Dáirine",
	"Deirdre",
	"Derdriu",
	"Doireann",
	"Doirend",
	"Eadán",
	"Éadaoin",
	"Eadburg",
	"Eadburga",
	"Eadgifu",
	"Eadgyð",
	"Ealdgyð",
	"Eigyr",
	"Éimhear",
	"Eithne",
	"Emer",
	"Eoforhild",
	"Epona",
	"Ériu",
	"Étaín",
	"Étan",
	"Ethne",
	"Ethniu",
	"Fedelm",
	"Fedelmid",
	"Fedlimid",
	"Feidelm",
	"Feidhelm",
	"Feidlimid",
	"Finnguala",
	"Fionnghuala",
	"Fionnuala",
	"Friðuswiþ",
	"Godgifu",
	"Godiva",
	"Gráinne",
	"Gwenddydd",
	"Gwenhwyfar",
	"Hild",
	"Hilda",
	"Leofflæd",
	"Leofgyð",
	"Maeve",
	"Matrona",
	"Méabh",
	"Meadhbh",
	"Medb",
	"Mildburg",
	"Mildgyð",
	"Mildþryð",
	"Modron",
	"Mór-Ríoghain",
	"Morrígan",
	"Mórríghan",
	"Muireann",
	"Muirenn",
	"Muirgen",
	"Muirne",
	"Neas",
	"Neasa",
	"Ness",
	"Nessa",
	"Níam",
	"Niamh",
	"Olwen",
	"Rhiannon",
	"Rigantona",
	"Ríghnach",
	"Ríoghnach",
	"Sabia",
	"Sadb",
	"Sadbh",
	"Sadhbh",
	"Saraid",
	"Sárait",
	"Scáthach",
	"Sinann",
	"Sionann",
	"Sunngifu",
	"Wassa",
	"Wilburg",
	"Wilburh",
	"Wulfflæd",
	"Wulfgifu",
	"Wulfrun",
	"Wulfwynn",
	"Wynnflæd",

	//modern
	"Aisling",
	"Brigid",
	"Caoimhe",
	"Deirdre",
	"Eileen",
	"Finley",
	"Grace",
	"Isla",
	"Keeva",
	"Maura",
	"Niamh",
	"Orla",
	"Roisin",
	"Saoirse",
	"Teagan",
	"Aine",
	"Caitlin",
	"Eilidh",
	"Fiona",
	"Imogen",
	"Keira",
	"Maeve",
	"Nessa",
	"Siobhan",
	"Tegan",
	"Caitriona",
	"Ailis",
	"Aislinn",
	"Eithne",
	"Oona"
];
const surnames = [
	"Ahearn",
	"Angus",
	"Barry",
	"Baire",
	"Beirne",
	"Bell",
	"Berne",
	"Boyle",
	"Braden",
	"Brady",
	"Brannon",
	"Brennan",
	"Brogan",
	"Brown",
	"Buckley",
	"Burke",
	"Burns",
	"Butler",
	"Callaghan",
	"Campbell",
	"Caomhánach",
	"Carey",
	"Carmody",
	"Carran",
	"Carroll",
	"Cary",
	"Casey",
	"Cassidy",
	"Cavan",
	"Cavey",
	"Clarke",
	"Clery",
	"Coghlan",
	"Coleman",
	"Collins",
	"Connolly",
	"Connor",
	"Cooney",
	"Corcoran",
	"Coughlan",
	"Cullen",
	"Cunningham",
	"Curran",
	"Daly",
	"Daugherty",
	"Davin",
	"Deasun",
	"Delaney",
	"Dempsey",
	"Desmond",
	"Devlin",
	"Doherty",
	"Dolan",
	"Donaghue",
	"Donne",
	"Donnell",
	"Donnelly",
	"Donovan",
	"Doran",
	"Doyle",
	"Driscoll",
	"Duane",
	"Duffy",
	"Dunn",
	"Durnin",
	"Ennis",
	"Fannon",
	"Farrell",
	"Ferguson",
	"Finn",
	"Finnegan",
	"Flanagan",
	"Flynn",
	"Foley",
	"Friel",
	"Fylan",
	"Gallagher",
	"Gorman",
	"Griffin",
	"Guinness",
	"Hayes",
	"Healy",
	"Higgins",
	"Hogan",
	"Hughes",
	"Ivers",
	"Kane",
	"Kavanagh",
	"Kearney",
	"Kelly",
	"Kennedy",
	"Kilduff",
	"Lennon",
	"Lynch",
	"Murdock",
	"Murphy",
	"Murray",
	"Neil",
	"Nolan",
	"Orman",
	"Power",
	"Quinn",
	"Regan",
	"Rinne",
	"Ryan",
	"Scully",
	"Sheehy",
	"Sloan",
	"Sullivan",
	"Tighe",
	"Toole",
	"Vincent",
	"Walsh",
	"Ward",
	"Whelan",
	"Hill",
	"Brooks",
	"Fields",
	"Woods",
	"Lake",
	"Rivers",
	"Stone",
	"Marsh",
	"Ford",
	"Meadows",
	"Valley",
	"Moore",
	"Bridge",
	"Glen",
	"Park",
	"Forest",
	"Vale",
	"Dale",
	"Beach",
	"Hilliard",
	"Brown",
	"White",
	"Short",
	"Young",
	"Long",
	"Strong",
	"Wise",
	"Gray",
	"Black",
	"Bright",
	"Noble",
	"Hardy",
	"Swift",
	"Sweet",
	"Fair",
	"Gentle",
	"Stern",
	"Wild",
	"Sharp",
	"Keen",
	"Smith",
	"Baker",
	"Mason",
	"Taylor",
	"Fisher",
	"Turner",
	"Miller",
	"Potter",
	"Cooper",
	"Carpenter"
];

export default flavour;
