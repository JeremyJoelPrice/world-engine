import { getNpcs, npcTemplates } from "../backend/npc generator/index.js";

let params = {};
beforeEach(() => {
	params = {};
});

describe("returned keys have appropriate values", () => {
	describe("simple string keys", () => {
		const npc = getNpcs(npcTemplates.main)[0];
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
					const npc = getNpcs(npcTemplates.main)[0];
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
					const npc = getNpcs(params)[0];
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
					const npc = getNpcs(params)[0];
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
			const npc = getNpcs(npcTemplates.main)[0];
			expect(Array.isArray(npc.assets)).toBe(true);
			expect(npc.assets.length).toBe(3);
			expect(typeof npc.assets[0]).toBe("object");
			expect(typeof npc.assets[1]).toBe("string");
			expect(typeof npc.assets[1]).not.toBe("random");
			expect(typeof npc.assets[2]).toBe("string");
			expect(typeof npc.assets[2]).not.toBe("random");
		});
	});
});
describe("precision tests", () => {
	describe("returns only the specified keys", () => {
		test("name", () => {
			const npc = getNpcs({ name: "random" })[0];
			expect(Object.keys(npc).length).toBe(1);
			expect(typeof npc.name).toBe("string");
		});
		test("descent", () => {
			const npc = getNpcs({ descent: "random" })[0];
			expect(Object.keys(npc).length).toBe(1);
			expect(typeof npc.descent).toBe("string");
		});
	});
});
describe("returns correct default keys for each NPC type", () => {
	const types = Object.keys(npcTemplates);
	types.forEach((npcType) => {
		test(`${npcType}`, () => {
			const params = npcTemplates[npcType];
			const npc = getNpcs(params)[0];
			Object.keys(params).forEach((key) => {
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
