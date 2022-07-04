const { getCommunityTags } = require("../backend/location tags");

// Communuty Tags
// Court Tags
// Ruin Tags
// Wilderness Tags

// one function returns a tag - returns an object where the tag has a name, blurb, efctp
// one function returns a second tag that is not the same as the first
describe("", () => {});
// getCommunityTag
describe("locationTags", () => {
  const getTagFunctions = { getCommunityTags };
  Object.keys(getTagFunctions).forEach((key) => {
    describe(`${key}`, () => {
      /*
      when we call this, we get back 2 elements
      each element matches a certain object
      */
      test("Function returns 2 tags with correct keys", () => {
        expect(getTagFunctions[key]()).toHaveLength(2);
        getTagFunctions[key]().forEach((tag) => {
          expect(tag).toMatchObject({
            name: expect.any(String),
            blurb: expect.any(String),
            enemies: expect.any(String),
            friends: expect.any(String),
            complications: expect.any(String),
            things: expect.any(String),
            places: expect.any(String),
          });
        });
      });
      test("Rolled tags are not duplicated.", () => {
        for (let i = 0; i < 500; i++) {
          let functionCall = getTagFunctions[key]();
          expect(functionCall[0].name).not.toEqual(functionCall[1].name);
        }
      });
    });
  });
});
describe("Overview", () => {});
