import { rollOnTable } from "../../../../util/common";

const flavour = {
	name: "Asculum",
	generateName: (sex) => {
		const praenomenTable =
			sex === "Male" ? malePraenomina : femalePraenomina;
		const nomenTable = nomina;
		const cognomenTable = cognomina;

		return `${rollOnTable(praenomenTable)} ${rollOnTable(
			nomenTable
		)} ${rollOnTable(cognomenTable)}`;
	}
};

const malePraenomina = [
	"Agrippa",
	"Appius",
	"Aulus",
	"Caeso",
	"Decimus",
	"Faustus",
	"Gaius",
	"Gnaeus",
	"Hostus",
	"Lucius",
	"Mamercus",
	"Manius",
	"Marcus",
	"Mettius",
	"Nonus",
	"Numerius",
	"Octavius",
	"Opiter",
	"Paullus",
	"Postumus",
	"Proculus",
	"Publius",
	"Quintus",
	"Septimus",
	"Sertor",
	"Servius",
	"Sextus",
	"Spurius",
	"Statius",
	"Tiberius",
	"Titus",
	"Tullus",
	"Vibius",
	"Volesus",
	"Vopiscus"
];
const femalePraenomina = [
	"Appia",
	"Aula",
	"Caesula",
	"Decima",
	"Fausta",
	"Gaia",
	"Gnaea",
	"Hosta",
	"Lucia",
	"Maio",
	"Mamerca",
	"Mania",
	"Marcia",
	"Maxima",
	"Mettia",
	"Mino",
	"Nona",
	"Numeria",
	"Octavia",
	"Paulla",
	"Postuma",
	"Prima",
	"Procula",
	"Publia",
	"Quarta",
	"Quinta",
	"Secunda",
	"Septima",
	"Servia",
	"Sexta",
	"Spuria",
	"Statia",
	"Tertia",
	"Titia",
	"Tiberia",
	"Tulla",
	"Vibia",
	"Volusa",
	"Vopisca"
];
const nomina = [
	"Abronius",
	"Abudius",
	"Aburius",
	"Accius",
	"Accoleius",
	"Acerronius",
	"Acilius",
	"Aconius",
	"Actorius",
	"Acutius",
	"Adginnius",
	"Aebutius",
	"Aedinius",
	"Aelius",
	"Aemilius",
	"Aerelius",
	"Afinius",
	"Afranius",
	"Agnanius",
	"Agorius",
	"Albanius",
	"Albatius",
	"Albinius",
	"Albius",
	"Albinovanus",
	"Albucius",
	"Alburius",
	"Alfenus",
	"Alfius",
	"Allectius",
	"Allienus",
	"Amafinius",
	"Amatius",
	"Amblasius",
	"Ambrosius",
	"Ampius",
	"Amplas",
	"Ampudius",
	"Amusanus",
	"Ancharius",
	"Anicius",
	"Anisinus",
	"Anisius",
	"Annaeus",
	"Anneius",
	"Annius",
	"Anquirinnius",
	"Antistius",
	"Antius",
	"Antonius",
	"Apisius",
	"Aponius",
	"Appianius",
	"Appius",
	"Appuleius",
	"Apronius",
	"Apustius",
	"Aquillius",
	"Aquinius",
	"Arellius",
	"Arennius",
	"Arminius",
	"Arpineius",
	"Arrecinus",
	"Arrius",
	"Arruntius",
	"Arsinius",
	"Articuleius",
	"Artorius",
	"Asconius",
	"Asellius",
	"Asinius",
	"Asvillius",
	"Ateius",
	"Aternius",
	"Ateronius",
	"Atius",
	"Atilius",
	"Atinius",
	"Atrius",
	"Attius",
	"Atzicius",
	"Auconius",
	"Auctorius",
	"Audasius",
	"Aufeius",
	"Aufidius",
	"Aulius",
	"Aurelius",
	"Aurius",
	"Aurunculeius",
	"Ausonius",
	"Autrodius",
	"Autronius",
	"Avianus",
	"Avidius",
	"Avienus",
	"Avilius",
	"Avius",
	"Axius",
	"Babrius",
	"Baebius",
	"Balonius",
	"Balventius",
	"Bantius",
	"Barbatius",
	"Barrius",
	"Barsius",
	"Bavius",
	"Bellicius",
	"Bellienus",
	"Bellius",
	"Betilienus",
	"Betitius",
	"Betucius",
	"Betuus",
	"Bicleius",
	"Blandius",
	"Blossius",
	"Boionius",
	"Bruttius",
	"Bucculeius",
	"Burbuleius",
	"Burrienus",
	"Butronius",
	"Caecilius",
	"Caecina",
	"Caecius",
	"Caedicius",
	"Caelius",
	"Caeparius",
	"Caepasius",
	"Caerellius",
	"Caesellius",
	"Caesennius",
	"Caesetius",
	"Caesius",
	"Caesonius",
	"Caesulenus",
	"Caetronius",
	"Calavius",
	"Calesterna",
	"Calidius",
	"Calpurnius",
	"Calumeius",
	"Calvenus",
	"Calventius",
	"Calvisius",
	"Camaronius",
	"Campatius",
	"Canidius",
	"Caninius",
	"Canius",
	"Cantilius",
	"Cantius",
	"Canuleius",
	"Canutius",
	"Carfulenus",
	"Carisius",
	"Caristanius",
	"Caristicus",
	"Carius",
	"Carpinatius",
	"Carrinas",
	"Carsicius",
	"Carteius",
	"Carvilius",
	"Casperius",
	"Cassius",
	"Castricius",
	"Castrinius",
	"Catabronius",
	"Catienus",
	"Catilius",
	"Catius",
	"Cavinnius",
	"Ceionius",
	"Centenius",
	"Ceppuleius",
	"Cerenius",
	"Cervilius",
	"Cervonius",
	"Cestius",
	"Cicereius",
	"Cilnius",
	"Cincius",
	"Cispius",
	"Classidius",
	"Claudius",
	"Cloelius",
	"Cluentius",
	"Clutorius",
	"Cluvius",
	"Cocceius",
	"Coelius",
	"Cominius",
	"Communius",
	"Concessius",
	"Condetius",
	"Consentius",
	"Considius",
	"Consius",
	"Coponius",
	"Cordius",
	"Corfidius",
	"Cornelius",
	"Cornificius",
	"Coruncanius",
	"Cosconius",
	"Cossinius",
	"Cossutius",
	"Cotius",
	"Cottius",
	"Crassicius",
	"Crastinus",
	"Cremutius",
	"Crepereius",
	"Critonius",
	"Cupiennius",
	"Curiatius",
	"Curius",
	"Curtilius",
	"Curtius",
	"Cusinius",
	"Cuspius",
	"Decidius",
	"Decimius",
	"Decitius",
	"Decius",
	"Decumenus",
	"Dellius",
	"Dercullius",
	"Desticius",
	"Dexius",
	"Didius",
	"Digitius",
	"Dillius",
	"Distubuanus",
	"Domitius",
	"Dubius",
	"Duccius",
	"Duilius",
	"Duratenus",
	"Durmius",
	"Duronius",
	"Ebetius",
	"Eggius",
	"Egilius",
	"Egnatius",
	"Egnatuleius",
	"Egrilius",
	"Elvius",
	"Ennius",
	"Epidius",
	"Eppius",
	"Equitius",
	"Eranius",
	"Erucius",
	"Evasius",
	"Fabius",
	"Fabricius",
	"Fadenus",
	"Fadius",
	"Faenius",
	"Falcidius",
	"Falerius",
	"Faminius",
	"Fannius",
	"Farsuleius",
	"Faucius",
	"Favonius",
	"Festinius",
	"Fidiculanius",
	"Firmius",
	"Flaminius",
	"Flanus",
	"Flavinius",
	"Flavius",
	"Flavoleius",
	"Flavonius",
	"Floridius",
	"Florius",
	"Floronius",
	"Fonteius",
	"Foslius",
	"Fufetius",
	"Fuficius",
	"Fufidius",
	"Fufius",
	"Fulcinius",
	"Fulginas",
	"Fulvius",
	"Fundanius",
	"Furius",
	"Furnius",
	"Gabinius",
	"Gagilius",
	"Galerius",
	"Gallius",
	"Gargonius",
	"Gavius",
	"Geganius",
	"Gellius",
	"Geminius",
	"Genucius",
	"Gessius",
	"Glicius",
	"Granius",
	"Gratidius",
	"Gratius",
	"Haterius",
	"Hedusius",
	"Heius",
	"Helvidius",
	"Helvius",
	"Herennius",
	"Herennuleius",
	"Herminius",
	"Hirrius",
	"Hirtius",
	"Hirtuleius",
	"Hisseius",
	"Horatius",
	"Hordeonius",
	"Hortensius",
	"Hosidius",
	"Hostilius",
	"Hostius",
	"Humidius",
	"Iallius",
	"Iasidius",
	"Iccius",
	"Icilius",
	"Ignius",
	"Ingenius",
	"Insteius",
	"Istacidius",
	"Iteius",
	"Iturius",
	"Janius",
	"Javolenus",
	"Jucundius",
	"Julius",
	"Juncius",
	"Junius",
	"Justinius",
	"Juventius",
	"Laberius",
	"Labienus",
	"Lacerius",
	"Laecanius",
	"Laelius",
	"Laenius",
	"Laetilius",
	"Laetorius",
	"Lafrenius",
	"Lamponius",
	"Laronius",
	"Lartius",
	"Latinius",
	"Lavinius",
	"Lemonius",
	"Lentidius",
	"Lepanius",
	"Lepidius",
	"Libellius",
	"Libertius",
	"Liburnius",
	"Licinius",
	"Ligarius",
	"Limisius",
	"Litrius",
	"Livinius",
	"Livius",
	"Lollius",
	"Longinius",
	"Loreius",
	"Lucceius",
	"Lucienus",
	"Lucilius",
	"Lucius",
	"Lucretius",
	"Lurius",
	"Luscidius",
	"Luscius",
	"Lusius",
	"LutatiusMaccius",
	"Maccienus",
	"Macrinius",
	"Macrobius",
	"Maecenas",
	"Maecilius",
	"Maecius",
	"Maelius",
	"Maenas",
	"Maenius",
	"Maevius",
	"Magius",
	"Mallius",
	"Mamercius",
	"Mamilius",
	"Manilius",
	"Manlius",
	"Mannaius",
	"Marcius",
	"Marius",
	"Martinius",
	"Matienus",
	"Matinius",
	"Matius",
	"Matrinius",
	"Mattavius",
	"Matuius",
	"Maximius",
	"Memmius",
	"Menenius",
	"Menius",
	"Mercatorius",
	"Mescinius",
	"Messienus",
	"Messius",
	"Mestrius",
	"Metilius",
	"Mettius",
	"Milonius",
	"Mimesius",
	"Minatius",
	"Minicius",
	"Minidius",
	"Minius",
	"Minucius",
	"Moderatius",
	"Modius",
	"Mucimeius",
	"Mucius",
	"Multillius",
	"Mummius",
	"Munatius",
	"Munius",
	"Murrius",
	"Mussidius",
	"Mustius",
	"Mutilius",
	"MutiusNaevius",
	"Nasennius",
	"Nasidienus",
	"Nasidius",
	"Nautius",
	"Neratius",
	"Nercius",
	"Nerfinius",
	"Nerius",
	"Nessinius",
	"Nesulna",
	"Nigidius",
	"Nimmius",
	"Ninnius",
	"Nipius",
	"Nonius",
	"Norbanus",
	"Novellius",
	"Novercinius",
	"Novius",
	"Numerius",
	"Numicius",
	"Numisius",
	"Numitorius",
	"Nummius",
	"Numoleius",
	"Numonius",
	"Nunnuleius",
	"NymphidiusObellius",
	"Obultronius",
	"Occius",
	"Oclatinius",
	"Oclatius",
	"Ocratius",
	"Octavenus",
	"Octavius",
	"Ofanius",
	"Ofatulenus",
	"Ofilius",
	"Ogulnius",
	"Ollius",
	"Opellius",
	"Opetreius",
	"Opimius",
	"Opisius",
	"Opiternius",
	"Oppidius",
	"Oppius",
	"Opsidius",
	"Opsilius",
	"Opsius",
	"Oranius",
	"Orbicius",
	"Orbilius",
	"Orbius",
	"Orchius",
	"Orcivius",
	"Orfidius",
	"Orfius",
	"Orosius",
	"Oscius",
	"Ostorius",
	"Otacilius",
	"Ovidius",
	"OviniusPaccius",
	"Paciaecus",
	"Pacidius",
	"Pacilius",
	"Paconius",
	"Pactumeius",
	"Pacuvius",
	"Paldius",
	"Palfurius",
	"Palpellius",
	"Pantuleius",
	"Papinius",
	"Papirius",
	"Papius",
	"Pascellius",
	"Pasidienus",
	"Pasidius",
	"Passienus",
	"Patulcius",
	"Pedanius",
	"Pedius",
	"Peducaeus",
	"Peltrasius",
	"Percennius",
	"Perperna",
	"Persius",
	"Pescennius",
	"Petillius",
	"Petreius",
	"Petronius",
	"Petrosidius",
	"Pilius",
	"Pinarius",
	"Pinnius",
	"Pisentius",
	"Pitisedius",
	"Placidius",
	"Plaetorius",
	"Plaguleius",
	"Plancius",
	"Plarius",
	"Plautius",
	"Pleminius",
	"Plinius",
	"Ploticius",
	"Pluticius",
	"Poetelius",
	"Pollius",
	"Pompeius",
	"Pompilius",
	"Pomponius",
	"Pomptinus",
	"Pompuledius",
	"Pontidius",
	"Pontificius",
	"Pontilienus",
	"Pontilius",
	"Pontius",
	"Popaedius",
	"Popidius",
	"Poppaeus",
	"Porcius",
	"Porsina",
	"Postumius",
	"Postumulenus",
	"Potitius",
	"Praecilius",
	"Praeconius",
	"Prastinius",
	"Precius",
	"Priscius",
	"Procilius",
	"Proculeius",
	"Propertius",
	"Publicius",
	"Puccasius",
	"Publilius",
	"Pupius",
	"Pusonius",
	"Quartius",
	"Queresius",
	"Quinctilius",
	"Quinctius",
	"Quinquaius",
	"Quirinius",
	"Rabirius",
	"Rabonius",
	"Rabuleius",
	"Racectius",
	"Racilius",
	"Raecius",
	"Ragonius",
	"Rammius",
	"Ranius",
	"Rasinius",
	"Reconius",
	"Reginius",
	"Remmius",
	"Rennius",
	"Resius",
	"Ricinius",
	"Romanius",
	"Romilius",
	"Roscius",
	"Rubellius",
	"Rubrenus",
	"Rubrius",
	"Rufinius",
	"Rufius",
	"Rufrius",
	"Rullius",
	"Rupilius",
	"Rusonius",
	"Rusticelius",
	"Rustius",
	"RutiliusSabellius",
	"Sabidius",
	"Sabinius",
	"Sabucius",
	"Saenius",
	"Saevonius",
	"Safinius",
	"Sagarius",
	"Salienus",
	"Sallustius",
	"Salonius",
	"Saltius",
	"Saltorius",
	"Salvidienus",
	"Salvidius",
	"Salvius",
	"Salvienus",
	"Samacius",
	"Samientus",
	"Sammius",
	"Sanquinius",
	"Sariolenus",
	"Sarius",
	"Sarrenius",
	"Satellius",
	"Satrienus",
	"Satrius",
	"Sattius",
	"Saturius",
	"Saturninius",
	"Saufeius",
	"Scaevilius",
	"Scaevinius",
	"Scaevius",
	"Scalacius",
	"Scandilius",
	"Scantinius",
	"Scantius",
	"Scaptius",
	"Scatidius",
	"Scetanus",
	"Scoedius",
	"Scribonius",
	"Scuilius",
	"Scutarius",
	"Seccius",
	"Secundinius",
	"Secundius",
	"Sedatius",
	"Segulius",
	"Seius",
	"Selicius",
	"Sellius",
	"Sempronius",
	"Sennius",
	"Sentius",
	"Seppienus",
	"Seppius",
	"Septicius",
	"Septimius",
	"Septimuleius",
	"Septueius",
	"Sepullius",
	"Sepunius",
	"Sergius",
	"Serius",
	"Sertorius",
	"Servaeus",
	"Servenius",
	"Servilius",
	"Servius",
	"Sestius",
	"Severius",
	"Sextilius",
	"Sextius",
	"Sibidienus",
	"Sicinius",
	"Silicius",
	"Silius",
	"Silvius",
	"Simplicius",
	"Simplicinius",
	"Sinicius",
	"Sinnius",
	"Sinuleius",
	"Sisenna",
	"Sittius",
	"Socellius",
	"Sollius",
	"Sornatius",
	"Sosius",
	"Sotidius",
	"Spedioleius",
	"Spedius",
	"Spellius",
	"Splattius",
	"Spurilius",
	"Spurinna",
	"Spurius",
	"Staberius",
	"Staius",
	"Stallius",
	"Statilius",
	"Statinius",
	"Statioleius",
	"Statius",
	"Statorius",
	"Statrius",
	"Steius",
	"Stellius",
	"Stenius",
	"Stertinius",
	"Stlabillenus",
	"Stlaccius",
	"Stlammius",
	"Stlarius",
	"Strabonius",
	"Subrius",
	"Successius",
	"Suedius",
	"Suellius",
	"Suetonius",
	"Suettius",
	"Suilius",
	"Sulpicius",
	"Summianius",
	"SurdiniusTadius",
	"Talepius",
	"Talius",
	"Tampius",
	"Tanicius",
	"Tannonius",
	"Tanusius",
	"Tapsenna",
	"Tariolenus",
	"Taronius",
	"Tarpeius",
	"Tarquinius",
	"Tarquitius",
	"Tarrutenius",
	"Tarutius",
	"Tatius",
	"Tattius",
	"Taurius",
	"Tebanus",
	"Tecusenus",
	"Tedisenus",
	"Teditius",
	"Tedius",
	"Teiustius",
	"Terefrius",
	"Terrasidius",
	"Terentilius",
	"Terentius",
	"Tertinius",
	"Tertius",
	"Tetricius",
	"Tetrinius",
	"Tettidius",
	"Tettienus",
	"Tettius",
	"Thoranius",
	"Thorius",
	"Tiburtius",
	"Ticinius",
	"Tifernius",
	"Tigellius",
	"Tigidius",
	"Tilioficiosus",
	"Tillius",
	"Tineius",
	"Titanius",
	"Titedius",
	"Titinius",
	"Titioleius",
	"Titius",
	"Tittidienus",
	"Tittienus",
	"Tittius",
	"Titucius",
	"Tituculenus",
	"Titulenus",
	"Titurius",
	"Titurnius",
	"Togonius",
	"Traius",
	"Tranquillius",
	"Traulus",
	"Trausius",
	"Travinius",
	"Travius",
	"Trebanius",
	"Trebatius",
	"Trebellienus",
	"Trebellius",
	"Trebicius",
	"Trebius",
	"Trebulanus",
	"Trebonius",
	"Tremellius",
	"Triarius",
	"Triccius",
	"Trisimpedius",
	"Tritius",
	"Truttedius",
	"Tuccius",
	"Tudicius",
	"Tullius",
	"Turallasius",
	"Turciacus",
	"Turcilius",
	"Turbonius",
	"Turcius",
	"Turionius",
	"Turius",
	"Turpilius",
	"Turranius",
	"Turselius",
	"Tursidius",
	"Turullius",
	"Tuscenius",
	"Tuscilius",
	"Tussanius",
	"Tussidius",
	"Tuticanus",
	"Tuticius",
	"Tutilius",
	"Tutinius",
	"Tutius",
	"TutoriusUlentinius",
	"Ulpius",
	"Umberius",
	"Umbilius",
	"Umbirius",
	"Umboleius",
	"Umbonius",
	"Umbrenus",
	"Umbricius",
	"Umbrius",
	"Umbrilius",
	"Umerius",
	"Ummidius",
	"Urbanius",
	"Urbicius",
	"Urbinius",
	"Urgulanius",
	"Ursius",
	"Urseius",
	"Urvinius",
	"Ussinus",
	"UtiliusValerius",
	"Varenus",
	"Varinius",
	"Varisidius",
	"Varius",
	"Vatinius",
	"Vecilius",
	"Vedius",
	"Vedodius",
	"Vegetius",
	"Velanius",
	"Velius",
	"Velleius",
	"Vemnasius",
	"Ventidius",
	"Venuleius",
	"Vequasius",
	"Veranius",
	"Verbisius",
	"Verecundius",
	"Vergilius",
	"Verginius",
	"Verres",
	"Verrius",
	"Vesiculanus",
	"Vesnius",
	"Vesonius",
	"Vespasius",
	"Vestius",
	"Vestorius",
	"Vestricius",
	"Vestrius",
	"Vetilius",
	"Vettius",
	"Veturius",
	"Vibenius",
	"Vibidius",
	"Vibius",
	"Vibulliacus",
	"Vibullius",
	"Vicirius",
	"Victorinius",
	"Victorius",
	"Victricius",
	"Viducius",
	"Vigilius",
	"Villius",
	"Vinicius",
	"Vinius",
	"Vipsanius",
	"Vipstanus",
	"Viridius",
	"Virius",
	"Visellius",
	"Vistilius",
	"Vitellius",
	"Vitedius",
	"Vitrasius",
	"Vitruvius",
	"Vivanius",
	"Voconius",
	"Volcacius",
	"Volnius",
	"Volscius",
	"Volturcius",
	"Volumnius",
	"Volusenna",
	"Volusenus",
	"Volusius",
	"Vorenius",
	"Vulius"
];
const cognomina = [
	"Abercius",
	"Abito",
	"Abundantius",
	"Abundius",
	"Abundus",
	"Aburianus",
	"Acacius",
	"Acaunus",
	"Acceptus",
	"Achaicus",
	"Acidinus",
	"Acilianus",
	"Aculeo",
	"Acutianus",
	"Acutus",
	"Adauctus",
	"Adelphius",
	"Adiutor",
	"Adranos",
	"Adventus",
	"Aeacus",
	"Aebutus",
	"Aedesius",
	"Aelianus",
	"Aemilianus",
	"Aeserninus",
	"Aetius",
	"Afer",
	"Africanus",
	"Afrinus",
	"Agaptus",
	"Agatopus",
	"Agelastus",
	"Agorix",
	"Agricola",
	"Agrippa",
	"Agrippianus",
	"Agrippinillus",
	"Agrippinus",
	"Ahala",
	"Ahenobarbus",
	"Albanianus",
	"Albanus",
	"Albillus",
	"Albinianus",
	"Albinius",
	"Albinus",
	"Albucillus",
	"Albucius",
	"Albus",
	"Alcimus",
	"Alethius",
	"Alienus",
	"Allectus",
	"Aluredes",
	"Alypius",
	"Amabilis",
	"Amandianus",
	"Amandinus",
	"Amandus",
	"Amantillus",
	"Amantius",
	"Amarantus",
	"Amator",
	"Amatus",
	"Ambrosius",
	"Ambustus",
	"Amor",
	"Amphion",
	"Ampliatus",
	"Anatolius",
	"Andronicus",
	"Angelus",
	"Annaeanus",
	"Annianus",
	"Anniolus",
	"Antias",
	"Antius",
	"Antiquus",
	"Antistianus",
	"Antonianus",
	"Antonillus",
	"Antoninus",
	"Anulinus",
	"Anullinus",
	"Apelles",
	"Apellinus",
	"Aper",
	"Apollinaris",
	"Apollonarius",
	"Apollonius",
	"Appianillus",
	"Appianus",
	"Appuleianus",
	"Aprilis",
	"Aprillus",
	"Aprinus",
	"Apronianus",
	"Apronillus",
	"Apuleianus",
	"Aquila",
	"Aquilianus",
	"Aquilinus",
	"Aquillianus",
	"Arator",
	"Aratus",
	"Arcadius",
	"Arcanus",
	"Arcavius",
	"Archarius",
	"Arius",
	"Armiger",
	"Arminus",
	"Arnobius",
	"Arpagius",
	"Arrianus",
	"Arruntianus",
	"Arruntius",
	"Artorianus",
	"Arulenus",
	"Arvina",
	"Asellio",
	"Asellus",
	"Asiaticus",
	"Asina",
	"Asinianus",
	"Asper",
	"Asprenas",
	"Asprenus",
	"Assanius",
	"Atianus",
	"Atilianus",
	"Atratinus",
	"Attianus",
	"Attianillus",
	"Atticianus",
	"Atticillus",
	"Atticinus",
	"Atticus",
	"Attilianus",
	"Auctillus",
	"Auctus",
	"Audaios",
	"Audax",
	"Audens",
	"Aufidianus",
	"Augendus",
	"Augur",
	"Augurinus",
	"Augurius",
	"Augustalis",
	"Augustanus",
	"Augustinus",
	"Augustus",
	"Aurelianus",
	"Aurelius",
	"Aureolus",
	"Aurunculeianus",
	"Auruncus",
	"Ausonius",
	"Auspex",
	"Auspicatus",
	"Auxentius",
	"Auxientius",
	"Auxilius",
	"Avienus",
	"Aviola",
	"Avitianus",
	"Avitillus",
	"Avitus",
	"Axilla",
	"Baebianus",
	"Balbillus",
	"Balbinus",
	"Balbus",
	"Bambalio",
	"Bamballio",
	"Banquerius",
	"Barba",
	"Barbarus",
	"Barbatus",
	"Barbillus",
	"Barbula",
	"Baro",
	"Bassianus",
	"Bassinus",
	"Bassus",
	"Bato",
	"Belenus",
	"Belisarius",
	"Beatus",
	"Bellator",
	"Bellicianus",
	"Bellicus",
	"Bellus",
	"Benedictus",
	"Benignus",
	"Bestia",
	"Betto",
	"Bibaculus",
	"Bibulus",
	"Bitucus",
	"Blaesillus",
	"Blaesus",
	"Blandinus",
	"Blandus",
	"Blasius",
	"Blossianus",
	"Bodenius",
	"Boethius",
	"Boetius",
	"Bolanus",
	"Bonifatius",
	"Bonosus",
	"Bonus",
	"Bradua",
	"Briccius",
	"Bricius",
	"Briktius",
	"Britannicus",
	"Britius",
	"Brixius",
	"Brocchillus",
	"Brocchus",
	"Bromidus",
	"Bruccius",
	"Brucetus",
	"Bruscius",
	"Bruttianus",
	"Brutus",
	"Bubo",
	"Bubulcus",
	"Buca",
	"Buccio",
	"Bulbus",
	"Bulla",
	"Burcanius",
	"Burrus",
	"Buteo",
	"Caecilianus",
	"Caecina",
	"Caecinianus",
	"Caedicianus",
	"Caelianus",
	"Caelimontanus",
	"Caelinus",
	"Caecus",
	"Caelestinus",
	"Caelestius",
	"Caelianus",
	"Caelinus",
	"Caelistis",
	"Caepio",
	"Caerellius",
	"Caesennianus",
	"Caesianus",
	"Caesonianus",
	"Caesoninus",
	"Caianillus",
	"Caianus",
	"Calacicus",
	"Calamus",
	"Calaritanus",
	"Calatinus",
	"Calavianus",
	"Caldus",
	"Calenus",
	"Calerus",
	"Caletus",
	"Calidianus",
	"Callidianus",
	"Callisunus",
	"Calogerus",
	"Calpurnianus",
	"Calpurnis",
	"Calvinus",
	"Calvisianus",
	"Calvus",
	"Camerinus",
	"Camerius",
	"Camillus",
	"Campanianus",
	"Campanus",
	"Campester",
	"Candidianus",
	"Candidillus",
	"Candidinus",
	"Candidus",
	"Canianus",
	"Canidianus",
	"Canina",
	"Caninianus",
	"Cantaber",
	"Capella",
	"Capito",
	"Capitolinus",
	"Caprarius",
	"Capreorus",
	"Caracturus",
	"Carantus",
	"Carbo",
	"Carinus",
	"Carius",
	"Carnifex",
	"Carus",
	"Carvilianus",
	"Casca",
	"Cassianillus",
	"Cassianus",
	"Castinus",
	"Castorius",
	"Castus",
	"Catianus",
	"Catilina",
	"Cato",
	"Catonius",
	"Cattianus",
	"Catullinus",
	"Catullus",
	"Catulus",
	"Catus",
	"Caudex",
	"Caudinus",
	"Celatus",
	"Celer",
	"Celerianus",
	"Celerinus",
	"Celsillus",
	"Celsinillus",
	"Celsinus",
	"Celsus",
	"Cenaeus",
	"Cencius",
	"Censor",
	"Censorinillus",
	"Censorinus",
	"Censorius",
	"Centumalus",
	"Cerialis",
	"Cerinthus",
	"Certinus",
	"Certus",
	"Cerularius",
	"Cervianus",
	"Cervidus",
	"Cethegus",
	"Chlorus",
	"Christianus",
	"Cicatricula",
	"Cicero",
	"Cico",
	"Cicurinus",
	"Cicurius",
	"Cimber",
	"Cincinnatus",
	"Cinna",
	"Cinnianus",
	"Cita",
	"Cittinus",
	"Civilis",
	"Clarentius",
	"Clarianus",
	"Clarus",
	"Classicianus",
	"Classicus",
	"Claudianus",
	"Claudillus",
	"Claudus",
	"Clemens",
	"Clementianus",
	"Clementillus",
	"Clementinus",
	"Clodianus",
	"Clodus",
	"Cocceianus",
	"Cocles",
	"Coelianus",
	"Coelinus",
	"Cogitatus",
	"Colias",
	"Collatinus",
	"Colonus",
	"Columbanus",
	"Columella",
	"Coma",
	"Comes",
	"Comitianus",
	"Comitinus",
	"Commidius",
	"Commidus",
	"Commius",
	"Commodus",
	"Concessianus",
	"Concessus",
	"Congrio",
	"Constans",
	"Constantillus",
	"Constantinus",
	"Constantius",
	"Coranus",
	"Corbulo",
	"Corculum",
	"Cordillus",
	"Cordus",
	"Coriolanus",
	"Cornelianus",
	"Cornicen",
	"Cornix",
	"Cornutus",
	"Corvinus",
	"Corvus",
	"Cosmas",
	"Cossus",
	"Cotentinus",
	"Cotta",
	"Crassillus",
	"Crassus",
	"Cremutius",
	"Crescens",
	"Crescentianus",
	"Crescentillus",
	"Crescentinus",
	"Crescentius",
	"Creticus",
	"Crispianus",
	"Crispinianus",
	"Crispinillus",
	"Crispinus",
	"Crispus",
	"Crito",
	"Crotilo",
	"Crus",
	"Cucuphas",
	"Culleolus",
	"Cullio",
	"Cumanus",
	"Cunctator",
	"Cunobarrus",
	"Cupitianus",
	"Cupitus",
	"Curianus",
	"Curio",
	"Cursor",
	"Curtianus",
	"Curvus",
	"Cyprianus",
	"Cyricus",
	"Dacianus",
	"Dacicus",
	"Dacius",
	"Dalmaticus",
	"Dalmatius",
	"Dama",
	"Damascius",
	"Damasippus",
	"Damasus",
	"Damianus",
	"Dannicus",
	"Dardanius",
	"Dardanus",
	"Dativus",
	"Datus",
	"Decianus",
	"Deciminus",
	"Decimus",
	"Decmitius",
	"Decoratus",
	"Densus",
	"Dentatus",
	"Denter",
	"Dento",
	"Desideratus",
	"Desiderius",
	"Dexion",
	"Dexippus",
	"Dexter",
	"Dextrianus",
	"Diadematus",
	"Dianilla",
	"Didianus",
	"Didicus",
	"Didymus",
	"Dido",
	"Dignillus",
	"Dignissimus",
	"Dignus",
	"Dio",
	"Diocletianus",
	"Dioscourides",
	"Disertus",
	"Dives",
	"Docilinus",
	"Docilus",
	"Dolabella",
	"Dolens",
	"Dominicus",
	"Domitianus",
	"Domitillus",
	"Donatianus",
	"Donatillus",
	"Donatus",
	"Donicus",
	"Dorotheus",
	"Dorso",
	"Dorsuo",
	"Draco",
	"Drusillus",
	"Drusus",
	"Dubitatius",
	"Duilianus",
	"Dulcitius",
	"Durio",
	"Durus",
	"Duvianus",
	"Eborius",
	"Eburnus",
	"Ecdicius",
	"Eclectus",
	"Efficax",
	"Egbuttius",
	"Egnatianus",
	"Egnatillus",
	"Elerius",
	"Eliphas",
	"Elpidius",
	"Elvorix",
	"Emeritus",
	"Encratis",
	"Ennecus",
	"Ennodius",
	"Eonus",
	"Eparchius",
	"Epidianus",
	"Epimachus",
	"Epiphanius",
	"Epolonius",
	"Erasinus",
	"Esdras",
	"Esquilinus",
	"Equinus",
	"Etruscillus",
	"Etruscus",
	"Eucherius",
	"Eudomius",
	"Eudoxius",
	"Eugenius",
	"Eugenus",
	"Eulogius",
	"Eumenius",
	"Eunapius",
	"Euphemius",
	"Eurysaces",
	"Eustachius",
	"Eustacius",
	"Eustathius",
	"Eustochius",
	"Eutherius",
	"Evodius",
	"Excingus",
	"Exoratus",
	"Exsupereus",
	"Extricatus",
	"Exuperans",
	"Exuperantius",
	"Exuperatus",
	"Exupereus",
	"Exuperius",
	"Faber",
	"Fabianus",
	"Fabiolus",
	"Fabricianus",
	"Fabullianus",
	"Fabullus",
	"Facilis",
	"Facundinus",
	"Facundus",
	"Fadus",
	"Fagus",
	"Falco",
	"Falconillus",
	"Falx",
	"Fama",
	"Familiaris",
	"Fastidius",
	"Farus",
	"Fatalis",
	"Faustillus",
	"Faustinianus",
	"Faustinus",
	"Faustus",
	"Faventinus",
	"Favonianus",
	"Favorinus",
	"Felicianus",
	"Felicissimus",
	"Feliсitas",
	"Feliсius",
	"Felissimus",
	"Felix",
	"Ferentinus",
	"Ferox",
	"Ferreolus",
	"Festianus",
	"Festivus",
	"Festus",
	"Fidelis",
	"Fidenas",
	"Fidus",
	"Figulus",
	"Fimbria",
	"Fimus",
	"Firmianus",
	"Firmillus",
	"Firminianus",
	"Firminillus",
	"Firminus",
	"Firmus",
	"Flaccianus",
	"Flaccillus",
	"Flaccinator",
	"Flaccinus",
	"Flaccus",
	"Flamen",
	"Flaminianus",
	"Flaminillus",
	"Flamininus",
	"Flamma",
	"Flavianillus",
	"Flavianus",
	"Flavillus",
	"Flavinus",
	"Flavus",
	"Florens",
	"Florentianus",
	"Florentillus",
	"Florentinus",
	"Florentius",
	"Florianus",
	"Floridus",
	"Florillus",
	"Florinus",
	"Florus",
	"Fonteianus",
	"Forianus",
	"Fortis",
	"Fortunatianus",
	"Fortunatus",
	"Fraucus",
	"Frequens",
	"Frequentianus",
	"Frequentillus",
	"Frequentinus",
	"Frigidianus",
	"Frontalis",
	"Frontillus",
	"Frontinianus",
	"Frontinus",
	"Fronto",
	"Frontonianus",
	"Frontonillus",
	"Fructuosus",
	"Fructus",
	"Frugi",
	"Frugius",
	"Frumentius",
	"Fufianus",
	"Fulgentius",
	"Fullo",
	"Fullofaudes",
	"Fulvianillus",
	"Fulvianus",
	"Fulvillus",
	"Fulvus",
	"Fundanus",
	"Furianus",
	"Fuscianillus",
	"Fuscianus",
	"Fuscillus",
	"Fuscinillus",
	"Fuscinus",
	"Fuscus",
	"Fusus",
	"Gabinianus",
	"Gabinillus",
	"Gabinus",
	"Gaetulicus",
	"Gaianillus",
	"Gaianus",
	"Gala",
	"Galarius",
	"Galba",
	"Galenus",
	"Galerus",
	"Gallicanus",
	"Gallicus",
	"Gallienus",
	"Gallio",
	"Gallus",
	"Galvisius",
	"Garilianus",
	"Garrulus",
	"Gaudens",
	"Gaudentianus",
	"Gaudentius",
	"Gavianus",
	"Gavros",
	"Gelasius",
	"Gellianus",
	"Gemellianus",
	"Gemellinus",
	"Gemellus",
	"Geminianus",
	"Geminus",
	"Generidus",
	"Genesius",
	"Genialis",
	"Gennadius",
	"Gentilis",
	"Germanicus",
	"Germanus",
	"Jovinianus",
	"Geta",
	"Getha",
	"Glabrio",
	"Globulus",
	"Gluvias",
	"Glycia",
	"Gordianus",
	"Gordio",
	"Gorgonius",
	"Gracchanus",
	"Gracchus",
	"Gracilis",
	"Graecinus",
	"Granianus",
	"Granillus",
	"Gratianus",
	"Gratidianus",
	"Gratillus",
	"Gratinianus",
	"Gratinus",
	"Gratus",
	"Grattianus",
	"Gregorius",
	"Grumio",
	"Gryllus",
	"Grypus",
	"Gualterus",
	"Gurges",
	"Graecus",
	"Habitus",
	"Hadrianus",
	"Hardalio",
	"Hasta",
	"Helvianus",
	"Hemina",
	"Herculanus",
	"Herculius",
	"Herennianus",
	"Herennius",
	"Herenus",
	"Herma",
	"Hermias",
	"Hermina",
	"Hesychius",
	"Hiberus",
	"Hibrida",
	"Hilarianus",
	"Hilarillus",
	"Hilarinus",
	"Hilario",
	"Hilaris",
	"Hilarius",
	"Hilarus",
	"Hipparchus",
	"Hirpinius",
	"Hirrus",
	"Homullus",
	"Honoratianus",
	"Honoratus",
	"Honorinus",
	"Horatianus",
	"Horatius",
	"Hortensianus",
	"Hortensis",
	"Hortensus",
	"Hostilianus",
	"Humilus",
	"Hybrida",
	"Iacomus",
	"Ianuarius",
	"Iavolenus",
	"Imbrex",
	"Imperiosus",
	"Impetratus",
	"Indaletius",
	"Indus",
	"Ingeniosus",
	"Ingenuillis",
	"Ingenuus",
	"Ingenvinus",
	"Innocens",
	"Inregillensis",
	"Iocundus",
	"Iovianus",
	"Iovinianus",
	"Iovinus",
	"Iovius",
	"Irenaeus",
	"Isatis",
	"Isauricus",
	"Isaurus",
	"Isidorus",
	"Ismarus",
	"Italicus",
	"Iuba",
	"Iucundianus",
	"Iucundillus",
	"Iucundinus",
	"Iucundus",
	"Iulianus",
	"Iulillus",
	"Iuliolus",
	"Iulius",
	"Iulus",
	"Iuncinus",
	"Iuncus",
	"Iunianus",
	"Iunillus",
	"Iunior",
	"Iustianus",
	"Iustillus",
	"Iustinianus",
	"Iustinus",
	"Iustus",
	"Iuvenalis",
	"Iuvenis",
	"Iuventianus",
	"Iuventinus",
	"Iynx",
	"Labienus",
	"Labeo",
	"Laberianus",
	"Lactantius",
	"Lactuca",
	"Lacticinus",
	"Laeca",
	"Laelianus",
	"Laenas",
	"Laetillus",
	"Laetinianus",
	"Laetus",
	"Laevillus",
	"Laevinus",
	"Laevus",
	"Lamia",
	"Lanatus",
	"Larcianus",
	"Lartianus",
	"Largus",
	"Lateranus",
	"Latinus",
	"Latro",
	"Laurentinus",
	"Laurentius",
	"Laurinus",
	"Laurus",
	"Leddicus",
	"Lentullus",
	"Lentulus",
	"Leo",
	"Leontius",
	"Lepidianus",
	"Lepidillus",
	"Lepidinus",
	"Lepidus",
	"Lepontus",
	"Leporinus",
	"Lepos",
	"Libanius",
	"Liberalis",
	"Liberius",
	"Libo",
	"Licinianus",
	"Licinus",
	"Ligur",
	"Ligus",
	"Ligustinus",
	"Limetanus",
	"Linus",
	"Litorius",
	"Littera",
	"Litumaris",
	"Livianus",
	"Livigenus",
	"Livillus",
	"Lollianus",
	"Longillus",
	"Longinianus",
	"Longinillus",
	"Longinus",
	"Longus",
	"Lovernianus",
	"Lovernius",
	"Lucanus",
	"Lucianus",
	"Lucidus",
	"Lucifer",
	"Lucilianus",
	"Lucillianus",
	"Lucillus",
	"Lucinus",
	"Luciolus",
	"Lucretianus",
	"Luctacus",
	"Lucullus",
	"Lunaris",
	"Luonercus",
	"Lupercillus",
	"Lupercus",
	"Lupicinus",
	"Lupinus",
	"Lupulus",
	"Lupus",
	"Lurco",
	"Lurio",
	"Luscinus",
	"Luscus",
	"Lusianus",
	"Lustricus",
	"Lutatianus",
	"Lycaeus",
	"Maccalus",
	"Macer",
	"Macerinus",
	"Macrinianus",
	"Macrinillus",
	"Macrinus",
	"Macro",
	"Macrobius",
	"Mactator",
	"Maecenus",
	"Maecianus",
	"Magnentius",
	"Magnianus",
	"Magnillus",
	"Magnus",
	"Magunnus",
	"Maior",
	"Maius",
	"Malchus",
	"Malleolus",
	"Mallianus",
	"Mallus",
	"Maltinus",
	"Maluginensis",
	"Mamercinus",
	"Mamercus",
	"Mamertinus",
	"Mamilianus",
	"Mamma",
	"Mammula",
	"Mancinus",
	"Manilianus",
	"Manlianus",
	"Mansuetus",
	"Marcallas",
	"Marcellianus",
	"Marcellinus",
	"Marcellus",
	"Marcialis",
	"Marcianus",
	"Margarita",
	"Marianillus",
	"Marianus",
	"Marinianus",
	"Marinus",
	"Maritialis",
	"Maritimus",
	"Marius",
	"Maro",
	"Marsallas",
	"Marsicus",
	"Marsus",
	"Marsyas",
	"Martialis",
	"Martianus",
	"Martinianus",
	"Martinus",
	"Martius",
	"Martyrius",
	"Marullinus",
	"Marullus",
	"Masavo",
	"Masculus",
	"Materninus",
	"Maternus",
	"Matho",
	"Maturinus",
	"Maturus",
	"Mauricius",
	"Maurinus",
	"Mauritius",
	"Maurus",
	"Maxentius",
	"Maximianus",
	"Maximillianus",
	"Maximillus",
	"Maximinus",
	"Maximus",
	"Medullinus",
	"Megellus",
	"Meletius",
	"Melissus",
	"Melito",
	"Melitus",
	"Mellitus",
	"Melus",
	"Meminianus",
	"Memmianus",
	"Memor",
	"Mento",
	"Mercator",
	"Mercurialis",
	"Mercurinus",
	"Merenda",
	"Merula",
	"Messala",
	"Messalinus",
	"Messianus",
	"Messor",
	"Metellinus",
	"Metellus",
	"Metilianus",
	"Metunus",
	"Micianus",
	"Mico",
	"Milo",
	"Milonius",
	"Minervalis",
	"Minervinus",
	"Minianus",
	"Minicianus",
	"Minucianus",
	"Moderatillus",
	"Moderatus",
	"Modestinus",
	"Modestus",
	"Modianus",
	"Molacus",
	"Momus",
	"Montanillus",
	"Montanus",
	"Mordanticus",
	"Mucianus",
	"Mugillanus",
	"Munatianus",
	"Muncius",
	"Murena",
	"Mus",
	"Musa",
	"Musca",
	"Musicus",
	"Mutilus",
	"Nabor",
	"Naevianus",
	"Naevolus",
	"Narcissus",
	"Narses",
	"Nasica",
	"Naso",
	"Natalianus",
	"Natalinus",
	"Natalis",
	"Natalius",
	"Natta",
	"Nepos",
	"Nepotianus",
	"Naucratius",
	"Nazarius",
	"Nectaridus",
	"Nelius",
	"Nemesianus",
	"Nemnogenus",
	"Neneus",
	"Nennius",
	"Nepos",
	"Nepotillus",
	"Neptunalis",
	"Nero",
	"Nertomarus",
	"Nerva",
	"Nicasius",
	"Nicetius",
	"Nigellus",
	"Niger",
	"Nigidianus",
	"Nigrianus",
	"Nigrinus",
	"Ninnianus",
	"Niraemius",
	"Nobilior",
	"Noctua",
	"Nolus",
	"Nonianus",
	"Norbanianus",
	"Noricus",
	"Noster",
	"Novanus",
	"Novation",
	"Novellianus",
	"Novellus",
	"Novianus",
	"Numerianus",
	"Nummus",
	"Numonis",
	"Obsequens",
	"Oceanus",
	"Ocella",
	"Octavillus",
	"Octobrianus",
	"Oculatus",
	"Ofella",
	"Olennius",
	"Olympicus",
	"Opilio",
	"Opimianus",
	"Opis",
	"Oppianicus",
	"Oppianus",
	"Optatillus",
	"Optatus",
	"Ordius",
	"Orestes",
	"Orestillus",
	"Orientalis",
	"Orientius",
	"Orissus",
	"Orontius",
	"Ostorianus",
	"Otacilianus",
	"Otho",
	"Ovidus",
	"Pacatianus",
	"Pacatus",
	"Pachomius",
	"Pacilus",
	"Pacuvianus",
	"Paenula",
	"Paetillus",
	"Paetinus",
	"Paetus",
	"Palicanus",
	"Palma",
	"Pammachius",
	"Pamphilius",
	"Panaetius",
	"Pansa",
	"Pantensus",
	"Pantera",
	"Panthera",
	"Papianus",
	"Papinianus",
	"Papirianus",
	"Papus",
	"Paratus",
	"Pardus",
	"Parmensis",
	"Parnesius",
	"Pastor",
	"Paterculus",
	"Paternianus",
	"Paternus",
	"Patiens",
	"Patricius",
	"Paulinus",
	"Paullinus",
	"Paullus",
	"Pavo",
	"Pelagius",
	"Pennus",
	"Pera",
	"Peregrinus",
	"Perennis",
	"Perpetuus",
	"Persicus",
	"Pertacus",
	"Pertinax",
	"Pervincianus",
	"Pervincus",
	"Petasius",
	"Peticus",
	"Petilianus",
	"Petillianus",
	"Petro",
	"Petronax",
	"Petronianus",
	"Petronillus",
	"Petronius",
	"Petrus",
	"Philippus",
	"Philo",
	"Philus",
	"Photius",
	"Picens",
	"Pictor",
	"Pilatus",
	"Pilus",
	"Pinarianus",
	"Pinnus",
	"Piso",
	"Pitio",
	"Pius",
	"Placidianus",
	"Placidinus",
	"Placidus",
	"Plancianus",
	"Plancinus",
	"Plancus",
	"Planta",
	"Plautianus",
	"Plautillus",
	"Plautinus",
	"Plautis",
	"Plautus",
	"Pleminianus",
	"Plinianus",
	"Plotianus",
	"Plotillus",
	"Plotinus",
	"Plotus",
	"Pollianus",
	"Pollienus",
	"Pollio",
	"Pollus",
	"Polybius",
	"Pompeianus",
	"Pompilianus",
	"Pompolussa",
	"Pomponianus",
	"Pomponillus",
	"Pontianus",
	"Ponticillus",
	"Ponticus",
	"Poplicola",
	"Porcellus",
	"Porcianus",
	"Porcina",
	"Porcus",
	"Porphyrius",
	"Posca",
	"Postumianus",
	"Postuminus",
	"Postumus",
	"Potens",
	"Potentinus",
	"Potestas",
	"Potitianus",
	"Potitus",
	"Praenestinus",
	"Praesens",
	"Praetextatus",
	"Praetextus",
	"Prilidianus",
	"Primanus",
	"Primianus",
	"Primillus",
	"Primulus",
	"Primus",
	"Priscianus",
	"Priscillianus",
	"Priscillus",
	"Priscinus",
	"Priscus",
	"Privatus",
	"Privernas",
	"Probatus",
	"Probianus",
	"Probillus",
	"Probinus",
	"Probus",
	"Processus",
	"Proceus",
	"Proclus",
	"Proculianus",
	"Proculinus",
	"Proculus",
	"Procus",
	"Procyon",
	"Promptus",
	"Prontinus",
	"Profuturus",
	"Propertius",
	"Propinquus",
	"Prosperus",
	"Protacius",
	"Proteus",
	"Protus",
	"Provincialis",
	"Proximillus",
	"Proximus",
	"Prudens",
	"Prudentillus",
	"Publianus",
	"Publicianus",
	"Publicola",
	"Publicus",
	"Publilianus",
	"Pudens",
	"Pudentianus",
	"Pudentillus",
	"Pudentius",
	"Pulcher",
	"Pulcherius",
	"Pulex",
	"Pullus",
	"Pulvillus",
	"Pupianus",
	"Pupus",
	"Purpureo",
	"Pusinnus",
	"Pusio",
	"Pustula",
	"Quadratillus",
	"Quadratus",
	"Quartillus",
	"Quartinus",
	"Quarto",
	"Quartus",
	"Quietus",
	"Quintianus",
	"Quintilianus",
	"Quintillanius",
	"Quintillus",
	"Quintinus",
	"Quintus",
	"Quiricus",
	"Quirinalis",
	"Quirinus",
	"Rabirianus",
	"Raeticus",
	"Ramio",
	"Ravilla",
	"Rebilus",
	"Reburrinus",
	"Reburrus",
	"Receptus",
	"Rectus",
	"Regillensis",
	"Regillianus",
	"Regillus",
	"Reginus",
	"Regulianus",
	"Regulus",
	"Remigius",
	"Remus",
	"Renatus",
	"Repentinus",
	"Respectillus",
	"Respectus",
	"Restitutus",
	"Rex",
	"Rhesus",
	"Ripanus",
	"Robustus",
	"Rogatianus",
	"Rogatillus",
	"Rogatus",
	"Rogelius",
	"Romanillus",
	"Romanus",
	"Romulianus",
	"Romulus",
	"Roscianus",
	"Rufianus",
	"Rufillus",
	"Rufinianus",
	"Rufinillus",
	"Rufinus",
	"Rufrianus",
	"Rufus",
	"Ruga",
	"Rullianus",
	"Rullus",
	"Ruricius",
	"Rusca",
	"Ruso",
	"Russus",
	"Rusticus",
	"Rutilianus",
	"Rutilus",
	"Sabaco",
	"Sabellius",
	"Sabinianus",
	"Sabinillus",
	"Sabinus",
	"Saccus",
	"Sacerdos",
	"Saenus",
	"Salinator",
	"Sallustianus",
	"Salonianus",
	"Saloninus",
	"Salvianus",
	"Salvillus",
	"Salvinus",
	"Sanctinus",
	"Sanctus",
	"Sandilianus",
	"Sanga",
	"Sarimarcus",
	"Saserna",
	"Satullus",
	"Saturnalis",
	"Saturninus",
	"Saunio",
	"Saverrio",
	"Saxo",
	"Scaeva",
	"Scaevola",
	"Scapula",
	"Scaro",
	"Scarpus",
	"Scato",
	"Scaurus",
	"Schlerus",
	"Scipio",
	"Scribonianus",
	"Scrofa",
	"Sebastianus",
	"Secundianus",
	"Secundillus",
	"Secundinus",
	"Secundus",
	"Securus",
	"Sedatus",
	"Sedulus",
	"Segestes",
	"Seianus",
	"Sempronianus",
	"Senator",
	"Seneca",
	"Senecianus",
	"Senecio",
	"Senilianus",
	"Senilis",
	"Senna",
	"Senopianus",
	"Septimianus",
	"Septimillus",
	"Septimus",
	"Serapion",
	"Serenus",
	"Sergianus",
	"Sergillus",
	"Seronatus",
	"Serranus",
	"Sertorianus",
	"Servanus",
	"Servatius",
	"Servilianus",
	"Sestianus",
	"Sestinus",
	"Severlinus",
	"Severianus",
	"Severillus",
	"Severinus",
	"Severus",
	"Seuso",
	"Sextianus",
	"Sextilianus",
	"Sextillianus",
	"Sextillus",
	"Sextinus",
	"Sextus",
	"Siculus",
	"Sidonius",
	"Sigilis",
	"Silanus",
	"Silianus",
	"Silo",
	"Silus",
	"Silvanus",
	"Silvester",
	"Silvianus",
	"Silvillus",
	"Silvinus",
	"Silvius",
	"Similis",
	"Simo",
	"Simplex",
	"Simplicianus",
	"Simplicius",
	"Siricius",
	"Siricus",
	"Sisenna",
	"Sisinnius",
	"Sita",
	"Solinus",
	"Sollemnis",
	"Solon",
	"Solus",
	"Sophus",
	"Soranus",
	"Sorex",
	"Sorio",
	"Sospes",
	"Sotericus",
	"Sparsus",
	"Spartacus",
	"Spectatillus",
	"Spectatus",
	"Spendius",
	"Speratus",
	"Spinther",
	"Spurinna",
	"Squillus",
	"Statius",
	"Stellio",
	"Stilo",
	"Stichus",
	"Stolo",
	"Strabo",
	"Structus",
	"Suavis",
	"Subulo",
	"Suburanus",
	"Successianus",
	"Successus",
	"Sudrenus",
	"Sulca",
	"Sulinus",
	"Sulla",
	"Sulpicianus",
	"Super",
	"Superbus",
	"Superianus",
	"Superstes",
	"Superus",
	"Sura",
	"Surdus",
	"Surinus",
	"Surius",
	"Surus",
	"Symmachus",
	"Symphorianus",
	"Synistor",
	"Synnodus",
	"Syriacus",
	"Tacitianus",
	"Tacitus",
	"Taenaris",
	"Tancinus",
	"Tanicus",
	"Tantalus",
	"Tarcisius",
	"Tarquinianus",
	"Tatianus",
	"Taurillus",
	"Taurinus",
	"Taurus",
	"Tegula",
	"Telesinus",
	"Tenax",
	"Terentianus",
	"Terentillus",
	"Tertianus",
	"Tertinus",
	"Tertiolus",
	"Tertius",
	"Tertullianus",
	"Tertullus",
	"Tetricus",
	"Tettianus",
	"Thrasea",
	"Thurinus",
	"Tiberianus",
	"Tiberillus",
	"Tiberinus",
	"Tibullus",
	"Tiburs",
	"Tiro",
	"Titianus",
	"Titillus",
	"Titinianus",
	"Titiolus",
	"Torquatus",
	"Toxotius",
	"Traianus",
	"Trailus",
	"Tranio",
	"Tranquillinus",
	"Tranquillus",
	"Trebellianus",
	"Trebonianus",
	"Tremerus",
	"Tremorinus",
	"Tremulus",
	"Trenico",
	"Triarius",
	"Tricipitinus",
	"Trifer",
	"Trigeminus",
	"Trimalchio",
	"Trinus",
	"Trio",
	"Trogus",
	"Trypho",
	"Tubero",
	"Tubertus",
	"Tubulus",
	"Tuccianus",
	"Tuditanus",
	"Tullianus",
	"Turbo",
	"Turibius",
	"Turpilianus",
	"Turpilinus",
	"Turrinus",
	"Tuscillus",
	"Tuscus",
	"Tuticanus",
	"Tutor",
	"Ulpianus",
	"Ulpiolus",
	"Umbrianus",
	"Umbrinus",
	"Ummidianus",
	"Urbanillus",
	"Urbanus",
	"Urbicus",
	"Urgulanianus",
	"Urgulanillus",
	"Ursianus",
	"Ursinianus",
	"Ursillus",
	"Ursinus",
	"Ursulus",
	"Ursus",
	"Uticensis",
	"VVala",
	"Valens",
	"Valentianus",
	"Valentillus",
	"Valentinian",
	"Valentinus",
	"Valerianus",
	"Valerillus",
	"Valgus",
	"Varialus",
	"Varianus",
	"Varro",
	"Varus",
	"Vatia",
	"Vaticanus",
	"Vatinianus",
	"Vedrix",
	"Velikov",
	"Vegetus",
	"Vejento",
	"Velocianus",
	"Velox",
	"Venantianus",
	"Venantius",
	"Venator",
	"Venter",
	"Venustinus",
	"Venustus",
	"Verax",
	"Verecundus",
	"Vergilianus",
	"Verginianus",
	"Verinus",
	"Verissimus",
	"Verres",
	"Verrucosus",
	"Verullus",
	"Verus",
	"Vespa",
	"Vespasianus",
	"Vespillo",
	"Vestinus",
	"Vetranio",
	"Vettianus",
	"Vettillus",
	"Vettonianus",
	"Veturianus",
	"Vetus",
	"Viator",
	"Vibennis",
	"Vibianus",
	"Vibidianus",
	"Vibillus",
	"Vibulanus",
	"Vicanus",
	"Victor",
	"Victorianus",
	"Victoricus",
	"Victorinus",
	"Victorius",
	"Victricius",
	"Vigilantius",
	"Vincentius",
	"Vindex",
	"Vindicianus",
	"Vinicianus",
	"Vipsanianus",
	"Virgilianus",
	"Virginianus",
	"Viridio",
	"Virilis",
	"Viscellinus",
	"Vitalianus",
	"Vitalinus",
	"Vitalis",
	"Vitellianus",
	"Vitulus",
	"Vitus",
	"Vivianus",
	"Vocula",
	"Volumnianus",
	"Volusianus",
	"Volusus",
	"Vopiscus",
	"Vulso",
	"Zeno",
	"Zenodotus",
	"Zethos",
	"Zosimus",
	"Zoticusina"
];

export default flavour;
