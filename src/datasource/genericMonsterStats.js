const stats = [
	{
		cr: 0,
		ac: "13",
		hp: "8",
		dmg: "1",
		att: "+3",
		act: "1",
		highProf: 3,
		lowProf: -1,
		dc: 11
	},
	{
		cr: 0.125,
		ac: "13",
		hp: "11",
		dmg: "2",
		att: "+4",
		act: "1",
		highProf: 4,
		lowProf: -1,
		dc: 13
	},
	{
		cr: 0.25,
		ac: "13",
		hp: "13",
		dmg: "3",
		att: "+4",
		act: "2",
		highProf: 4,
		lowProf: 0,
		dc: 13
	},
	{
		cr: 0.5,
		ac: "13",
		hp: "18",
		dmg: "4",
		att: "+4",
		act: "2",
		highProf: 4,
		lowProf: 0,
		dc: 13
	},
	{
		cr: 1,
		ac: "13",
		hp: "28",
		dmg: "7",
		att: "+4",
		act: "2",
		highProf: 5,
		lowProf: 0,
		dc: 13
	},
	{
		cr: 2,
		ac: "13",
		hp: "48",
		dmg: "13",
		att: "+5",
		act: "2",
		highProf: 5,
		lowProf: 0,
		dc: 13
	},
	{
		cr: 3,
		ac: "13",
		hp: "68",
		dmg: "19",
		att: "+5",
		act: "2",
		highProf: 5,
		lowProf: 1,
		dc: 13
	},
	{
		cr: 4,
		ac: "14",
		hp: "88",
		dmg: "25",
		att: "+6",
		act: "2",
		highProf: 5,
		lowProf: 1,
		dc: 14
	},
	{
		cr: 5,
		ac: "14",
		hp: "108",
		dmg: "31",
		att: "+6",
		act: "2",
		highProf: 7,
		lowProf: 1,
		dc: 15
	},
	{
		cr: 6,
		ac: "14",
		hp: "128",
		dmg: "37",
		att: "+7",
		act: "2",
		highProf: 7,
		lowProf: 1,
		dc: 15
	},
	{
		cr: 7,
		ac: "15",
		hp: "148",
		dmg: "43",
		att: "+7",
		act: "3",
		highProf: 7,
		lowProf: 2,
		dc: 15
	},
	{
		cr: 8,
		ac: "15",
		hp: "168",
		dmg: "49",
		att: "+8",
		act: "3",
		highProf: 7,
		lowProf: 2,
		dc: 16
	},
	{
		cr: 9,
		ac: "15",
		hp: "188",
		dmg: "55",
		att: "+8",
		act: "3",
		highProf: 9,
		lowProf: 2,
		dc: 16
	},
	{
		cr: 10,
		ac: "16",
		hp: "208",
		dmg: "61",
		att: "+9",
		act: "3",
		highProf: 9,
		lowProf: 2,
		dc: 17
	},
	{
		cr: 11,
		ac: "16",
		hp: "228",
		dmg: "67",
		att: "+9",
		act: "3",
		highProf: 9,
		lowProf: 3,
		dc: 17
	},
	{
		cr: 12,
		ac: "16",
		hp: "248",
		dmg: "73",
		att: "+10",
		act: "4",
		highProf: 9,
		lowProf: 3,
		dc: 17
	},
	{
		cr: 13,
		ac: "17",
		hp: "268",
		dmg: "79",
		att: "+10",
		act: "4",
		highProf: 11,
		lowProf: 3,
		dc: 18
	},
	{
		cr: 14,
		ac: "17",
		hp: "288",
		dmg: "85",
		att: "+11",
		act: "4",
		highProf: 11,
		lowProf: 3,
		dc: 18
	},
	{
		cr: 15,
		ac: "17",
		hp: "308",
		dmg: "91",
		att: "+11",
		act: "4",
		highProf: 11,
		lowProf: 4,
		dc: 18
	},
	{
		cr: 16,
		ac: "18",
		hp: "328",
		dmg: "97",
		att: "+12",
		act: "4",
		highProf: 11,
		lowProf: 4,
		dc: 18
	},
	{
		cr: 17,
		ac: "18",
		hp: "348",
		dmg: "103",
		att: "+13",
		act: "4",
		highProf: 13,
		lowProf: 4,
		dc: 19
	},
	{
		cr: 18,
		ac: "18",
		hp: "368",
		dmg: "109",
		att: "+13",
		act: "5",
		highProf: 13,
		lowProf: 4,
		dc: 19
	},
	{
		cr: 19,
		ac: "19",
		hp: "388",
		dmg: "115",
		att: "+14",
		act: "5",
		highProf: 13,
		lowProf: 5,
		dc: 19
	},
	{
		cr: 20,
		ac: "19",
		hp: "408",
		dmg: "121",
		att: "+14",
		act: "5",
		highProf: 13,
		lowProf: 5,
		dc: 19
	},
	{
		cr: 21,
		ac: "19",
		hp: "428",
		dmg: "127",
		att: "+15",
		act: "5",
		highProf: 15,
		lowProf: 5,
		dc: 20
	},
	{
		cr: 22,
		ac: "20",
		hp: "448",
		dmg: "133",
		att: "+15",
		act: "5",
		highProf: 15,
		lowProf: 5,
		dc: 20
	},
	{
		cr: 23,
		ac: "20",
		hp: "468",
		dmg: "139",
		att: "+16",
		act: "5",
		highProf: 15,
		lowProf: 6,
		dc: 20
	},
	{
		cr: 24,
		ac: "20",
		hp: "488",
		dmg: "145",
		att: "+16",
		act: "6",
		highProf: 15,
		lowProf: 6,
		dc: 21
	},
	{
		cr: 25,
		ac: "21",
		hp: "508",
		dmg: "151",
		att: "+17",
		act: "6",
		highProf: 17,
		lowProf: 6,
		dc: 21
	},
	{
		cr: 26,
		ac: "21",
		hp: "528",
		dmg: "157",
		att: "+17",
		act: "6",
		highProf: 17,
		lowProf: 6,
		dc: 21
	},
	{
		cr: 27,
		ac: "21",
		hp: "548",
		dmg: "163",
		att: "+18",
		act: "6",
		highProf: 17,
		lowProf: 7,
		dc: 22
	},
	{
		cr: 28,
		ac: "21",
		hp: "568",
		dmg: "169",
		att: "+18",
		act: "6",
		highProf: 17,
		lowProf: 7,
		dc: 22
	},
	{
		cr: 29,
		ac: "22",
		hp: "588",
		dmg: "175",
		att: "+19",
		act: "6",
		highProf: 19,
		lowProf: 7,
		dc: 22
	},
	{
		cr: 30,
		ac: "22",
		hp: "608",
		dmg: "181",
		att: "+19",
		act: "7",
		highProf: 19,
		lowProf: 7,
		dc: 23
	}
];

export default stats;
