const {
	getCommunityTags,
	getCourtTags,
	getRuinTags,
	getWildernessTags,
	getRuralVillageThumbnail,
	getMajorCityThumbnail,
	getTribesAndExilesThumbnail,
	getAristocracticCourtThumbnail,
	getBusinessCourtThumbnail,
	getCriminalCourtThumbnail,
	getFamilialClanCourtThumbnail,
	getRuinsThumbnail,
	getWildernessThumbnail
} = require("../backend/location tags");

describe("locationTags", () => {
	const getTagFunctions = {
		getCommunityTags,
		getCourtTags,
		getRuinTags,
		getWildernessTags
	};
	Object.keys(getTagFunctions).forEach((key) => {
		describe(`${key}`, () => {
			test("Function returns 2 tags with correct keys", () => {
				const result = getTagFunctions[key]();
				expect(result).toHaveLength(2);
				result.forEach((tag) => {
					expect(tag).toMatchObject({
						name: expect.any(String),
						blurb: expect.any(String),
						enemies: expect.any(String),
						friends: expect.any(String),
						complications: expect.any(String),
						things: expect.any(String),
						places: expect.any(String)
					});
				});
			});
			test("Rolled tags are not duplicated.", () => {
				for (let i = 0; i < 500; i++) {
					let functionCall = getTagFunctions[key]();
					expect(functionCall[0].name).not.toEqual(
						functionCall[1].name
					);
				}
			});
		});
	});
});
describe("location thumbnails", () => {
	describe("Communities", () => {
		describe("for each subtype, returns thumbnail object", () => {
			const communitiesThumbnailFunctions = {
				getRuralVillageThumbnail,
				getMajorCityThumbnail,
				getTribesAndExilesThumbnail
			};
			Object.keys(communitiesThumbnailFunctions).forEach((key) => {
				test(`${key} returns thumbnail`, () => {
					const thumbnail = communitiesThumbnailFunctions[key]();
					expect(thumbnail).toMatchObject({
						rationaleForTheCommunitiesExistance: expect.any(String),
						whoRunsIt: expect.any(String),
						significantLocals: expect.any(String),
						aCurrentPressingProblem: expect.any(String),
						localLikelyToInteractWithAdventurers:
							expect.any(String),
						interestingThingsThePlaceCanOfferHeroes:
							expect.any(String),
						tags: [
							{
								name: expect.any(String),
								blurb: expect.any(String),
								enemies: expect.any(String),
								friends: expect.any(String),
								complications: expect.any(String),
								things: expect.any(String),
								places: expect.any(String)
							},
							{
								name: expect.any(String),
								blurb: expect.any(String),
								enemies: expect.any(String),
								friends: expect.any(String),
								complications: expect.any(String),
								things: expect.any(String),
								places: expect.any(String)
							}
						]
					});
				});
			});
		});
	});
	describe("Courts", () => {
		describe("for each subtype, returns thumbnail object", () => {
			test("getAristocraticCourtThumbnail() returns thumbnail", () => {
				const thumbnail = getAristocracticCourtThumbnail();
				expect(thumbnail).toMatchObject({
					mainTheme: expect.any(String),
					majorFigure: expect.any(String),
					minorFigure: expect.any(String),
					sourceOfPower: expect.any(String),
					internalConflicts: expect.any(String),
					externalConflicts: expect.any(String),
					tags: [
						{
							name: expect.any(String),
							blurb: expect.any(String),
							enemies: expect.any(String),
							friends: expect.any(String),
							complications: expect.any(String),
							things: expect.any(String),
							places: expect.any(String)
						},
						{
							name: expect.any(String),
							blurb: expect.any(String),
							enemies: expect.any(String),
							friends: expect.any(String),
							complications: expect.any(String),
							things: expect.any(String),
							places: expect.any(String)
						}
					]
				});
			});
			test("getBusinessCourtThumbnail() returns thumbnail", () => {
				const thumbnail = getBusinessCourtThumbnail();
				expect(thumbnail).toMatchObject({
					relationsWithTheLocalMarket: expect.any(String),
					majorFigure: expect.any(String),
					minorFigure: expect.any(String),
					sourceOfPower: expect.any(String),
					internalConflicts: expect.any(String),
					externalConflicts: expect.any(String),
					tags: [
						{
							name: expect.any(String),
							blurb: expect.any(String),
							enemies: expect.any(String),
							friends: expect.any(String),
							complications: expect.any(String),
							things: expect.any(String),
							places: expect.any(String)
						},
						{
							name: expect.any(String),
							blurb: expect.any(String),
							enemies: expect.any(String),
							friends: expect.any(String),
							complications: expect.any(String),
							things: expect.any(String),
							places: expect.any(String)
						}
					]
				});
			});
			test("getCriminalCourtThumbnail() returns thumbnail", () => {
				const thumbnail = getCriminalCourtThumbnail();
				expect(thumbnail).toMatchObject({
					primaryModeOfCrime: expect.any(String),
					majorFigure: expect.any(String),
					minorFigure: expect.any(String),
					sourceOfPower: expect.any(String),
					internalConflicts: expect.any(String),
					externalConflicts: expect.any(String),
					tags: [
						{
							name: expect.any(String),
							blurb: expect.any(String),
							enemies: expect.any(String),
							friends: expect.any(String),
							complications: expect.any(String),
							things: expect.any(String),
							places: expect.any(String)
						},
						{
							name: expect.any(String),
							blurb: expect.any(String),
							enemies: expect.any(String),
							friends: expect.any(String),
							complications: expect.any(String),
							things: expect.any(String),
							places: expect.any(String)
						}
					]
				});
			});
			test("getFamilialClanCourtThumbnail() returns thumbnail", () => {
				const thumbnail = getFamilialClanCourtThumbnail();
				expect(thumbnail).toMatchObject({
					relationsWithTheirNeighbors: expect.any(String),
					majorFigure: expect.any(String),
					minorFigure: expect.any(String),
					sourceOfPower: expect.any(String),
					internalConflicts: expect.any(String),
					externalConflicts: expect.any(String),
					tags: [
						{
							name: expect.any(String),
							blurb: expect.any(String),
							enemies: expect.any(String),
							friends: expect.any(String),
							complications: expect.any(String),
							things: expect.any(String),
							places: expect.any(String)
						},
						{
							name: expect.any(String),
							blurb: expect.any(String),
							enemies: expect.any(String),
							friends: expect.any(String),
							complications: expect.any(String),
							things: expect.any(String),
							places: expect.any(String)
						}
					]
				});
			});
			test("getReligiousCourtThumbnail() returns thumbnail", () => {
				const thumbnail = getFamilialClanCourtThumbnail();
				expect(thumbnail).toMatchObject({
					relationsWithTheirNeighbors: expect.any(String),
					majorFigure: expect.any(String),
					minorFigure: expect.any(String),
					sourceOfPower: expect.any(String),
					internalConflicts: expect.any(String),
					externalConflicts: expect.any(String),
					tags: [
						{
							name: expect.any(String),
							blurb: expect.any(String),
							enemies: expect.any(String),
							friends: expect.any(String),
							complications: expect.any(String),
							things: expect.any(String),
							places: expect.any(String)
						},
						{
							name: expect.any(String),
							blurb: expect.any(String),
							enemies: expect.any(String),
							friends: expect.any(String),
							complications: expect.any(String),
							things: expect.any(String),
							places: expect.any(String)
						}
					]
				});
			});
		});
	});
	describe("Ruins", () => {
		test("getRuinsThumbnail() returns thumbnail", () => {
			const thumbnail = getRuinsThumbnail();
			expect(thumbnail).toMatchObject({
				howOldIsTheRuin: expect.any(String),
				whatBasicKindOfRuinIsIt: expect.any(String),
				whosUsedTheRuinBefore: expect.any(String),
				whatDoTheLocalsThinkOfIt: expect.any(String),
				howDidItBecomeRuined: expect.any(String),
				whyHasntItBeenPlunderedBareYet: expect.any(String),
				tags: [
					{
						name: expect.any(String),
						blurb: expect.any(String),
						enemies: expect.any(String),
						friends: expect.any(String),
						complications: expect.any(String),
						things: expect.any(String),
						places: expect.any(String)
					},
					{
						name: expect.any(String),
						blurb: expect.any(String),
						enemies: expect.any(String),
						friends: expect.any(String),
						complications: expect.any(String),
						things: expect.any(String),
						places: expect.any(String)
					}
				]
			});
		});
	});
	describe("Wilderness", () => {
		test("getWildernessThumbnail() returns thumbnail", () => {
			const thumbnail = getWildernessThumbnail();
			expect(thumbnail).toMatchObject({
				humanEncounters: expect.any(String),
				nonhumanSapientEncounters: expect.any(String),
				beastsAndMonsters: expect.any(String),
				whatsHappeningWithTheSapients: expect.any(String),
				whatsHappeningWithTheBeasts: expect.any(String),
				tags: [
					{
						name: expect.any(String),
						blurb: expect.any(String),
						enemies: expect.any(String),
						friends: expect.any(String),
						complications: expect.any(String),
						things: expect.any(String),
						places: expect.any(String)
					},
					{
						name: expect.any(String),
						blurb: expect.any(String),
						enemies: expect.any(String),
						friends: expect.any(String),
						complications: expect.any(String),
						things: expect.any(String),
						places: expect.any(String)
					}
				]
			});
		});
	});
});
