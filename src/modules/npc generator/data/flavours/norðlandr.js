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
	"Alver",
	"Anders",
	"Arne",
	"Bjorn",
	"Cnut",
	"Dagr",
	"Egil",
	"Eskil",
	"Finn",
	"Galti",
	"Halvar",
	"Harald",
	"Ivar",
	"Jokul",
	"Karl",
	"Knut",
	"Kolr",
	"Lambi",
	"Leif",
	"Magnus",
	"Nafni",
	"Nils",
	"Olaf",
	"Ragnar",
	"Rune",
	"Sigurd",
	"Sten",
	"Svend",
	"Torsten",
	"Trygg",
	"Ulf",
	"Vali",
	"Yngvar"
];

const femaleNames = [
	"Agatha",
	"Alva",
	"Astrid",
	"Bodil",
	"Brita",
	"Brynhild",
	"Dagny",
	"Dalla",
	"Elisif",
	"Estrid",
	"Freya",
	"Frida",
	"Grimhild",
	"Gudrun",
	"Helga",
	"Hilda",
	"Ingunn",
	"Ingrid",
	"Jórunn",
	"Kari",
	"Katla",
	"Lífa",
	"Liv",
	"Magna",
	"Nefja",
	"Oda",
	"Ragnhild",
	"Runa",
	"Rúna",
	"Signe",
	"Sigrid",
	"Skuld",
	"Thyra",
	"Tóla",
	"Tora",
	"Una",
	"Valka",
	"Yrsa",
	"Ylva"
];

export default flavour;
