import getNpcs from "../backend/npcGenerator/npc generator/index.js";
const mandatoryKeys = {
	background: ["descent", "sex", "name", "highConcept"],
	minor: [
		"descent",
		"sex",
		"name",
		"highConcept",
		"characterisation",
		"relationships"
	],
	significant: [
		"descent",
		"sex",
		"name",
		"highConcept",
		"characterisation",
		"relationships",
		"assets",
		"limits",
		"approach"
	],
	main: [
		"descent",
		"sex",
		"name",
		"highConcept",
		"characterisation",
		"relationships",
		"assets",
		"limits",
		"approach",
		"agenda"
	]
};

let params = {};
beforeEach(() => {
	params = {};
});

describe("getNpc function", () => {
	describe("returned keys have appropriate values", () => {
		describe("simple string keys", () => {
			const npc = getNpcs("main", 1)[0];
			const stringKeys = [
				"descent",
				"sex",
				"name",
				"highConcept",
				"agenda"
			];
			for (let i = 0; i < stringKeys.length; i++) {
				const key = stringKeys[i];
				test(`${key}`, () => {
					expect(typeof npc[key]).toBe("string");
					expect(npc[key].length).toBeGreaterThan(0);
				});
			}
		});
		describe("array keys", () => {
			const arrayKeys = [
				"characterisation",
				"relationships",
				"limits",
				"approach"
			];
			for (let key of arrayKeys) {
				describe(`${key}`, () => {
					test("default value is array of strings", () => {
						const npc = getNpcs("main", 1)[0];
						expect(Array.isArray(npc[key])).toBe(true);
						expect(npc[key].length).toBeGreaterThan(0);
						npc[key].forEach((value) => {
							expect(typeof value).toBe("string");
							expect(npc[key].length).toBeGreaterThan(0);
						});
					});
					test("'random' values are replaced", () => {
						params[key] = [
							"random",
							"random",
							"random",
							"random",
							"random"
						];
						const npc = getNpcs(params, 1)[0];
						expect(Array.isArray(npc[key])).toBe(true);
						expect(npc[key].length).toBeGreaterThan(0);
						npc[key].forEach((value) => {
							expect(typeof value).toBe("string");
							expect(npc[key].length).toBeGreaterThan(0);
							expect(npc[key]).not.toBe("random");
						});
					});
					test("given values are preserved in arrays", () => {
						params[key] = ["hello", "random", "random"];
						const npc = getNpcs(params, 1)[0];
						expect(Array.isArray(npc[key])).toBe(true);
						expect(npc[key].length).toBeGreaterThan(0);
						expect(npc[key][0]).toBe("hello");
						expect(npc[key][1]).not.toBe("random");
						expect(npc[key][2]).not.toBe("random");
					});
				});
			}
		});
		describe("assets", () => {
			test("returns a stats object as well as an array of two more assets", () => {
				const npc = getNpcs("main", 1)[0];
				expect(Array.isArray(npc.assets)).toBe(true);
				expect(npc.assets.length).toBe(3);
				expect(typeof npc.assets[0]).toBe("object");
				expect(typeof npc.assets[1]).toBe("string");
				expect(typeof npc.assets[2]).toBe("string");
			});
		});
	});
	describe("returns correct default keys for each NPC type", () => {
		const types = ["background", "minor", "significant", "main"];
		types.forEach((npcType) => {
			test(`${npcType}`, () => {
				const npc = getNpcs(npcType, 1)[0];
				mandatoryKeys[npcType].forEach((key) => {
					expect(npc).toHaveProperty(key);
				});
			});
		});
	});
	describe("returns the number of NPCs requested", () => {
		const valuesToTest = [1, 2, 10];
		for (let i = 0; i < valuesToTest.length; i++) {
			const value = valuesToTest[i];
			test(`${value}`, () => {
				expect(getNpcs(params, value).length).toBe(value);
			});
		}
		test("defaults to 1", () => {
			expect(getNpcs(params).length).toBe(1);
		});
	});
	describe("returned object includes unusual keys added in params", () => {
		test("test key: banana", () => {
			const npc = getNpcs({ banana: true }, 1)[0];
			expect(npc.banana).toBe(true);
		});
	});
});
