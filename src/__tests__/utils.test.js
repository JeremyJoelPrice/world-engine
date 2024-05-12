const { rollOnTable, expect_or } = require("../utils/common");

const table = [
	"Unusually short or slender",
	"Unremarkably average",
	"Plump, voluptuous, or soft",
	"Bulky, built, or more massive than usual"
];
const nestedTables = [
	[
		"Unusually short or slender",
		"Unremarkably average",
		"Plump, voluptuous, or soft",
		"Bulky, built, or more massive than usual"
	],
	[
		[
			"Hesitant, ﬂuttery, or delicately precise",
			"Clumsy, with broad, careless motions",
			"Slow and measured actions",
			"Sharp, brisk, vigorous movements",
			"Laborious or weary motions",
			"Smooth, relaxed, efﬁcient movement"
		],
		[
			"A fondness for very bright or dull colors",
			"Emblem of a faith or social group",
			"Ill-kept, whether worn, dirty, or rumpled",
			"Wears another group’s style of clothing",
			"Abnormally risqué or modest for the society",
			"Shows regular dirt and marks of their trade",
			"Fastidiously neat or tastefully adorned",
			"Wears a very noticeable piece of jewelry"
		]
	]
];
describe("rollOnTable()", () => {
	describe("single result", () => {
		test("returns single element from the given table", () => {
			const result = rollOnTable(table);
			expect(table.includes(result)).toBe(true);
		});
		test("returns single element from nested tables", () => {
			const result = rollOnTable(nestedTables);
			expect_or(
				() => expect(nestedTables[0]).toContain(result),
				() => expect(nestedTables[1][0]).toContain(result),
				() => expect(nestedTables[1][1]).toContain(result)
			);
		});
	});
	describe("multiple results", () => {
		for (let n = 2; n <= 3; n++) {
			test(`returns array of ${n} elements`, () => {
				const results = rollOnTable(table, n);
				expect(results.length).toBe(n);
				expect(Array.isArray(results)).toBe(true);
				results.forEach((str) =>
					expect(table.includes(str)).toBe(true)
				);
			});
			test(`returns array of ${n} elements from a nested table`, () => {
				const results = rollOnTable(nestedTables, n);
				expect(results.length).toBe(n);
				expect(Array.isArray(results)).toBe(true);
				results.forEach((str) => {
					expect_or(
						() => expect(nestedTables[0]).toContain(str),
						() => expect(nestedTables[1][0]).toContain(str),
						() => expect(nestedTables[1][1]).toContain(str)
					);
				});
			});
		}
		describe("returned array has no duplicates, where possible", () => {
			const tableOfLength5 = [1, 2, 3, 4, 5];
			test("5 elements from a table of 5 contains no duplicates", () => {
				for (let i = 0; i < 100; i++) {
					const array = rollOnTable(tableOfLength5, 5);
					expect(array.length).toBe(5);
					expect(new Set(array).size).toBe(array.length);
				}
			});
			test("6 elements form a table of 5 allows 1 duplicate", () => {
				for (let i = 0; i < 100; i++) {
					const array = rollOnTable(tableOfLength5, 6);
					expect(new Set(array).size).toBe(array.length - 1);
				}
			});
		});
	});
});

describe("roll()", () => {});

expect_or(
	() => expect("something").toBe("something"),
	() => expect("something").toBe("something"),
	() => expect("something").toBe("something")
);
