import { rollOnTable } from "../../../../util/common";

const flavour = {
	name: "Norðlandr",
	generateName: (sex) => {
		const firstNames = sex === "Male" ? maleNames : femaleNames;
		return `${rollOnTable(firstNames)} ${rollOnTable(maleNames)}${
			sex === "Male" ? "son" : "sdóttir"
		}`;
	}
};

const maleNames = [
	"Åsmund",
	"Æinridi",
	"Æirik",
	"Ærinmund",
	"Ærnmund",
	"Æsbiorn",
	"Æskil",
	"Ævar",
	"Øpir",
	"Øybiorn",
	"Øystæin",
	"Øysten",
	"Abi",
	"Adils",
	"Agmundr",
	"Agnar",
	"Aki",
	"Aleifr",
	"Alf",
	"Alfarin",
	"Alfgeir",
	"Alfketill",
	"Ali",
	"Alrik",
	"Alvi",
	"Amundi",
	"An",
	"Anakol",
	"Andvett",
	"Anlaf",
	"Anund",
	"Arfast",
	"Ari",
	"Arinbjorn",
	"Armod",
	"Arn",
	"Arnbjorn",
	"Arnfinn",
	"Arngeir",
	"Arngrim",
	"Arni",
	"Arnkel",
	"Arnketill",
	"Arnlaug",
	"Arnljot",
	"Arnor",
	"Arnstein",
	"Arnthor",
	"Arnulfr",
	"Arnvid",
	"Aron",
	"Asbjorn",
	"Asbrand",
	"Asfrith",
	"Asgaut",
	"Asgeir",
	"Asgrim",
	"Askel",
	"Asketill",
	"Aslak",
	"Asmund",
	"Assur",
	"Asulf",
	"Asvald",
	"Asvard",
	"Athils",
	"Atli",
	"Atsurr",
	"Auðunar",
	"Audbjorn",
	"Audgisil",
	"Audgisli",
	"Audolf",
	"Audun",
	"Austmathr",
	"Authgrim",
	"Authketill",
	"Authulf",
	"Authun",
	"Auti",
	"Balki",
	"Balli",
	"Banki",
	"Bard",
	"Bardi",
	"Baug",
	"Beigarth",
	"Beiner",
	"Beinir",
	"Berg",
	"Bergfinn",
	"Bergthor",
	"Bergvid",
	"Bersi",
	"Bior",
	"Biorn",
	"Birning",
	"Bjalfi",
	"Bjalki",
	"Bjarki",
	"Bjarni",
	"Bjartmar",
	"Bjor",
	"Bjorgolf",
	"Bjorgulf",
	"Bjorn",
	"Bjornulf",
	"Blæng",
	"Blann",
	"Bodalf",
	"Bodvar",
	"Boe",
	"Bolli",
	"Bolverk",
	"Borgar",
	"Bork",
	"Borstig",
	"Bothvar",
	"Botulf",
	"Bræsi",
	"Bragi",
	"Bram",
	"Brand",
	"Bretakollr",
	"Broddi",
	"Brodir",
	"Brondulf",
	"Bruni",
	"Brusi",
	"Bui",
	"Byrnjolf",
	"Cnut",
	"Dag",
	"Dagfinn",
	"Dan",
	"Diarf",
	"Dunfjall",
	"Dyri",
	"Edgar",
	"Egil",
	"Eid",
	"Eilif",
	"Einar",
	"Eindridi",
	"Eirik",
	"Eldgrim",
	"Elgfrothi",
	"Engli",
	"Erlend",
	"Erling",
	"Ernmund",
	"Erp",
	"Eskil",
	"Eydis",
	"Eyjolf",
	"Eystein",
	"Eyvald",
	"Eyvind",
	"Fargrim",
	"Farmann",
	"Farthegn",
	"Fastulf",
	"Finn",
	"Finnleik",
	"Finnvid",
	"Firthgest",
	"Floki",
	"Flosi",
	"Folkbiorn",
	"Folkmar",
	"Forni",
	"Frømund",
	"Freystein",
	"Fridgeir",
	"Fridmund",
	"Frodi",
	"Frostulf",
	"Frothi",
	"Gæda",
	"Gæira",
	"Gæirmund",
	"Gærhialm",
	"Gærrar",
	"Gætir",
	"Galti",
	"Gamal",
	"Gamli",
	"Gardar",
	"Gardi",
	"Gauk",
	"Gaut",
	"Gauti",
	"Gavtvid",
	"Geir",
	"Geirfinn",
	"Geirleif",
	"Geirmund",
	"Geirolf",
	"Geirstein",
	"Geirthjof",
	"Geitir",
	"Geitirgest",
	"Gellir",
	"Geri",
	"Gest",
	"Giermund",
	"Gilli",
	"Gils",
	"Gisli",
	"Gizor",
	"Gizur",
	"Glam",
	"Glum",
	"Gnupa",
	"Gnupi",
	"Gorm",
	"Grani",
	"Gretter",
	"Grettir",
	"Grim",
	"Grimar",
	"Grimkel",
	"Grimolf",
	"Grimwald",
	"Grind",
	"Griotgard",
	"Gris",
	"Grith",
	"Grjotgard",
	"Guda",
	"Gudbrand",
	"Gudlaug",
	"Gudleif",
	"Gudmund",
	"Gudrik",
	"Gudrod",
	"Gudvær",
	"Gufi",
	"Gulli",
	"Gunbjorn",
	"Gunnald",
	"Gunnar",
	"Gunnbjorn",
	"Gunnhautr",
	"Gunni",
	"Gunnkel",
	"Gunnlæif",
	"Gunnlaug",
	"Gunnleif",
	"Gunnstein",
	"Gunnulf",
	"Gunnvid",
	"Guthhere",
	"Guthorm",
	"Guthroth",
	"Guthrum",
	"Gylfi",
	"Gyrd",
	"Häming",
	"Hæfnir",
	"Hælæif",
	"Hælgi",
	"Hæming",
	"Hæng",
	"Hadd",
	"Haf",
	"Hafgrim",
	"Haflidi",
	"Hafr",
	"Hagi",
	"Haki",
	"Haklang",
	"Hakon",
	"Halfdan",
	"Halftan",
	"Hall",
	"Hallad",
	"Hallbjorn",
	"Halldor",
	"Hallfred",
	"Hallfrid",
	"Hallgrim",
	"Halli",
	"Hallkel",
	"Hallmund",
	"Hallstein",
	"Hallvard",
	"Halvdan",
	"Ham",
	"Hamund",
	"Hanef",
	"Harald",
	"Hardbein",
	"Hardrefil",
	"Harek",
	"Hastein",
	"Hauk",
	"Havard",
	"Hedin",
	"Hegg",
	"Helgi",
	"Heming",
	"Heriolf",
	"Herjolf",
	"Herlaug",
	"Herlu",
	"Hermund",
	"Herstein",
	"Hialti",
	"Hildiglum",
	"Hildir",
	"Hiorvard",
	"Hjalkar",
	"Hjalti",
	"Hjarrandi",
	"Hjor",
	"Hjorleif",
	"Hjort",
	"Hjorvarth",
	"Hlenni",
	"Hlodvir",
	"Hogni",
	"Holmfast",
	"Holmgavt",
	"Holmgeir",
	"Holmstæin",
	"Holmstein",
	"Hord",
	"Hoskuld",
	"Hosvir",
	"Hott",
	"Hrærek",
	"Hrafn",
	"Hrafnkel",
	"Hrafnvartr",
	"Hragnelf",
	"Hranfast",
	"Hrani",
	"Hrapp",
	"Hreida",
	"Hreidar",
	"Hrein",
	"Hreitharr",
	"Hrifla",
	"Hring",
	"Hroald",
	"Hroar",
	"Hrodgæir",
	"Hrodgeir",
	"Hrodi",
	"Hrok",
	"Hrolf",
	"Hrollaug",
	"Hromund",
	"Hrossbjorn",
	"Hrosskel",
	"Hrosskell",
	"Hrossketil",
	"Hrut",
	"Hunbogi",
	"Hundi",
	"Hundolfr",
	"Hvitserk",
	"Iarl",
	"Iarlabanki",
	"Iarund",
	"Illugi",
	"Ingemar",
	"Ingi",
	"Ingibjorg",
	"Ingifast",
	"Ingimar",
	"Ingimund",
	"Ingjald",
	"Ingolf",
	"Ingulbjörn",
	"Ingvar",
	"Iogæir",
	"Ioketill",
	"Iorthr",
	"Iorund",
	"Irenmund",
	"Iri",
	"Iric",
	"Isgaut",
	"Isi",
	"Isleif",
	"Isulf",
	"Iuli",
	"Ivar",
	"Jarlabanki",
	"Jarlebanke",
	"Jarnskeggi",
	"Jobjorn",
	"Johan",
	"Jokul",
	"Jomar",
	"Jon",
	"Jorund",
	"Käre",
	"Kætiløy",
	"Kætil",
	"Kætilfast",
	"Kætilmund",
	"Kabbi",
	"Kadal",
	"Kalf",
	"Kar",
	"Kari",
	"Karl",
	"Karli",
	"Karsi",
	"Kaupmann",
	"Ketil",
	"Ketilbiorn",
	"Ketilbjorn",
	"Ketill",
	"Kisping",
	"Kjallak",
	"Kjartan",
	"Kjotvi",
	"Klakkr",
	"Knútr",
	"Knut",
	"Kodran",
	"Koigrim",
	"Kol",
	"Kolbein",
	"Kolfinn",
	"Koll",
	"Kollskegg",
	"Kollsvein",
	"Kolskegg",
	"Konal",
	"Kori",
	"Kormak",
	"Kotkel",
	"Kotkell",
	"Kraki",
	"Kveldulf",
	"Lambi",
	"Leidolf",
	"Leif",
	"Leiknir",
	"Lifolf",
	"Lifstæn",
	"Lini",
	"Liut",
	"Ljot",
	"Lodin",
	"Lodmund",
	"Lopt",
	"Ludin",
	"Lyting",
	"Magnus",
	"Mak",
	"Manni",
	"Mar",
	"Meldun",
	"Modolf",
	"Moldof",
	"Mord",
	"Mursi",
	"Nærfi",
	"Naddod",
	"Nafni",
	"Nasi",
	"Nefstein",
	"Nikolas",
	"Njal",
	"Northri",
	"Odd",
	"Oddløg",
	"Oddleif",
	"Odinkar",
	"Ofeig",
	"Ofieg",
	"Ogmund",
	"Olæ",
	"Olæif",
	"Olaf",
	"Oleif",
	"Olvir",
	"Onäm",
	"Ondott",
	"Onem",
	"Ongul",
	"Onund",
	"Orøkia",
	"Orest",
	"Orgumleidi",
	"Orlyg",
	"Orm",
	"Orn",
	"Ornolf",
	"Ornulf",
	"Orri",
	"Orrin",
	"Ospak",
	"Osvald",
	"Osvif",
	"Oswald",
	"Otkel",
	"Otrygg",
	"Ottar",
	"Oystæin",
	"Ozur",
	"Paul",
	"Ragi",
	"Ragnar",
	"Ragnfast",
	"Ragnvald",
	"Raudebjorn",
	"Ref",
	"Regin",
	"Reinn",
	"Rodmar",
	"Rognvald",
	"Runolf",
	"Sæbbi",
	"Sæmund",
	"Sævil",
	"Saksi",
	"Sam",
	"Saxi",
	"Selkollr",
	"Serk",
	"Sibbi",
	"Sigbjorn",
	"Sigbrand",
	"Sigebeorht",
	"Sigeferth",
	"Sigegar",
	"Sigeheah",
	"Sigehelm",
	"Sigehere",
	"Sigelac",
	"Sigemær",
	"Sigemund",
	"Sigenoth",
	"Sigeræd",
	"Sigeric",
	"Sigestæl",
	"Sigeweard",
	"Sigewine",
	"Sigewulf",
	"Sigfast",
	"Sigfus",
	"Sigguatr",
	"Sighadd",
	"Sighvat",
	"Sigmund",
	"Sigtrygg",
	"Sigurd",
	"Sigvaldi",
	"Sigvat",
	"Sigvid",
	"Sinfiotli",
	"Singasven",
	"Skœdir",
	"Skallagrim",
	"Skamkel",
	"Skap",
	"Skapti",
	"Skard",
	"Skardi",
	"Skarf",
	"Skegg",
	"Skeggi",
	"Skialg",
	"Skidi",
	"Skjaldulf",
	"Skjold",
	"Skopti",
	"Skorri",
	"Skuf",
	"Skuld",
	"Skuli",
	"Skurfa",
	"Skuti",
	"Slode",
	"Slodi",
	"Slothi",
	"Snæbjorn",
	"Snækol",
	"Snorri",
	"Sod",
	"Sokkolf",
	"Solmund",
	"Solvi",
	"Sorli",
	"Spiallbudi",
	"Spiut",
	"Spjut",
	"Stækar",
	"Starkad",
	"Starolf",
	"Starri",
	"Stein",
	"Steinar",
	"Steinbitr",
	"Steinbjorn",
	"Steingrim",
	"Steinkel",
	"Steinketill",
	"Steinmod",
	"Steinolf",
	"Steinthor",
	"Steinunn",
	"Stigandi",
	"Storolf",
	"Stuf",
	"Sturla",
	"Styr",
	"Styrbiorn",
	"Styrkar",
	"Styrkollr",
	"Styrmir",
	"Suit",
	"Sumarlid",
	"Sumarlidi",
	"Surt",
	"Svæin",
	"Svafar",
	"Svalfi",
	"Svan",
	"Svart",
	"Svartbrand",
	"Svartgeirr",
	"Svartkollr",
	"Svartlingr",
	"Svein",
	"Sveinbjorn",
	"Sven",
	"Sveni",
	"Sverting",
	"Svinulf",
	"Svipday",
	"Swein",
	"Teit",
	"Thangbrand",
	"Thialfi",
	"Thidrandi",
	"Thidrik",
	"Thiodolf",
	"Thjodofl",
	"Thjodoft",
	"Thjostolf",
	"Thokodolf",
	"Thometill",
	"Thorald",
	"Thoraldr",
	"Thorarin",
	"Thorberg",
	"Thorbjorn",
	"Thorbrand",
	"Thord",
	"Thorfast",
	"Thorfinn",
	"Thorfrethr",
	"Thorgaut",
	"Thorgeir",
	"Thorgest",
	"Thorgils",
	"Thorgrim",
	"Thorhall",
	"Thorir",
	"Thorkel",
	"Thorkell",
	"Thorketil",
	"Thorlak",
	"Thorleif",
	"Thorleik",
	"Thormar",
	"Thormod",
	"Thormothr",
	"Thoroard",
	"Thorod",
	"Thorodd",
	"Thorolf",
	"Thororm",
	"Thorred",
	"Thorstar",
	"Thorstein",
	"Thorvald",
	"Thorvard",
	"Thorvid",
	"Thrain",
	"Thrand",
	"Throst",
	"Tjorvi",
	"Tofi",
	"Toki",
	"Tola",
	"Tore",
	"Torfi",
	"Torrad",
	"Torsten",
	"Tosti",
	"Trandil",
	"Trud",
	"Trygg",
	"Tryggvi",
	"Tufi",
	"Tumi",
	"Tyrfing",
	"Tyrkir",
	"Ubbein",
	"Ufi",
	"Uglubathr",
	"Ulf",
	"Ulfar",
	"Ulfbjorn",
	"Ulfgrim",
	"Ulfketil",
	"Ulfljot",
	"Ulfrik",
	"Ulvkil",
	"Uni",
	"Unn",
	"Unnulf",
	"Värmod",
	"Valbrand",
	"Valgard",
	"Vali",
	"Valthjof",
	"Vandil",
	"Vandrad",
	"Var",
	"Varin",
	"Vathlauss",
	"Vebjorn",
	"Vebrand",
	"Vegeir",
	"Vekel",
	"Veleif",
	"Vermund",
	"Vertlithi",
	"Vestar",
	"Vestein",
	"Vestgeir",
	"Veturlidi",
	"Vidkunn",
	"Vifil",
	"Vigbjord",
	"Vigfus",
	"Vigi",
	"Vigot",
	"Vikar",
	"Visäte",
	"Vog",
	"Vott",
	"Waltheof",
	"Wary",
	"Wealglist",
	"Wengo",
	"Yngvar",
	"Ysoppa"
];
const femaleNames = [
	"Æsa",
	"Æstrid",
	"Þuriðr",
	"Abi",
	"Aldis",
	"Alfdis",
	"Alfeid",
	"Alof",
	"Armod",
	"Arnbjorg",
	"Arngunn",
	"Arnkatla",
	"Arnora",
	"Arnthrud",
	"Asa",
	"Asdis",
	"Asfrid",
	"Asgard",
	"Asgerd",
	"Ashild",
	"Aslaug",
	"Asleif",
	"Asny",
	"Asta",
	"Astrid",
	"Asvor",
	"Aud",
	"Audbjorg",
	"Audhild",
	"Bera",
	"Bergljot",
	"Bergthora",
	"Bjartney",
	"Bjorg",
	"Bolla",
	"Bothild",
	"Brynhild",
	"Dalla",
	"Dotta",
	"Drifa",
	"Droplaug",
	"Ermingard",
	"Estrid",
	"Fastvi",
	"Freydis",
	"Freygerd",
	"Frida",
	"Frideburg",
	"Fridgerd",
	"Gæierlaug",
	"Geirhild",
	"Geirlaug",
	"Geirny",
	"Gerd",
	"Gerrid",
	"Gillaug",
	"Ginnlaug",
	"Gjaflaug",
	"Greiland",
	"Grelod",
	"Grima",
	"Grimhild",
	"Gro",
	"Groa",
	"Guðný",
	"Gudbjorg",
	"Gudfinna",
	"Gudfrid",
	"Gudlang",
	"Gudney",
	"Gudny",
	"Gudrid",
	"Gudrun",
	"Gunnhild",
	"Gunnvor",
	"Gyda",
	"Gyrd",
	"Gyrid",
	"Halla",
	"Hallbera",
	"Hallberta",
	"Halldis",
	"Halldora",
	"Hallfrid",
	"Hallgerd",
	"Hallgrim",
	"Hallkatla",
	"Hallveig",
	"Hedinfrid",
	"Heith",
	"Helga",
	"Herbjorg",
	"Herdis",
	"Herkja",
	"Hervor",
	"Hild",
	"Hilde",
	"Hildigunn",
	"Hildirid",
	"Hlif",
	"Holmfrid",
	"Holmlaug",
	"Hrafnhild",
	"Hrefna",
	"Hrodny",
	"Hungerd",
	"Inga",
	"Ingegärd",
	"Ingeltore",
	"Ingibjorg",
	"Ingigerd",
	"Ingirid",
	"Ingirun",
	"Ingithora",
	"Ingrid",
	"Ingulfrid",
	"Ingun",
	"Ingunn",
	"Isgerd",
	"Jaddvor",
	"Jarngerd",
	"Jodis",
	"Jofrid",
	"Joreid",
	"Jorunn",
	"Kadlin",
	"Katla",
	"Ketiloy",
	"Ljot",
	"Ljufa",
	"Ljufu",
	"Luta",
	"Mœid",
	"Maria",
	"Matilda",
	"Melkorka",
	"Nidbiorg",
	"Nidbjorg",
	"Oddbjorg",
	"Oddny",
	"Odindis",
	"Ogn",
	"Olof",
	"Ormhild",
	"Osk",
	"Ottkatla",
	"Rafarta",
	"Raghild",
	"Ragna",
	"Ragneid",
	"Ragnfrid",
	"Ragnhild",
	"Rannveig",
	"Ranveig",
	"Reginleif",
	"Runa",
	"Sæunn",
	"Salbjorg",
	"Sibbe",
	"Signy",
	"Sigrid",
	"Sigrunn",
	"Sigvor",
	"Siv",
	"Skuld",
	"Skur",
	"Solveig",
	"Solvor",
	"Steinunn",
	"Steinvor",
	"Styrlaug",
	"Svala",
	"Svanhild",
	"Svanlaug",
	"Thjodhild",
	"Thkatla",
	"Thora",
	"Thorballa",
	"Thorbjorg",
	"Thordis",
	"Thorelf",
	"Thorfinna",
	"Thorfrid",
	"Thorfrithr",
	"Thorgærd",
	"Thorgerd",
	"Thorgrima",
	"Thorgunna",
	"Thorhalla",
	"Thorhild",
	"Thorkatla",
	"Thorlaug",
	"Thorljot",
	"Thorunn",
	"Thorve",
	"Thorvor",
	"Thraslaug",
	"Thurid",
	"Thyre",
	"Thyri",
	"Tofa",
	"Tola",
	"Tonna",
	"Torgärd",
	"Torhild",
	"Torunn",
	"Turid",
	"Ulfeid",
	"Ulfheid",
	"Una",
	"Unn",
	"Valborg",
	"Valgerd",
	"Vandrad",
	"Vigdis",
	"Yngvild",
	"Yri",
	"Yrsa"
];

export default flavour;
