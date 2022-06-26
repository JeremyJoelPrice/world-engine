const { getCommunityTags } = require("../backend/location tags");

// Communuty Tags
// Court Tags
// Ruin Tags
// Wilderness Tags

// one function returns a tag - returns an object where the tag has a name, blurb, efctp
// one function returns a second tag that is not the same as the first

// getCommunityTag
describe.only("Community", () => {
  describe("Tags", () => {
    describe("getCommunityTags()", () => {
      /*
      when we call this, we get back 2 elements
      each element matches a certain object
      */
      test("Function returns 2 community tags with correct keys", () => {
        const functionCall = getCommunityTags();
        expect(functionCall).toHaveLength(2);
        functionCall.forEach((tag) => {
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
    });
    test("Rolled tags are not duplicated.", () => {
      for (let i = 0; i < 500; i++) {
        let functionCall = getCommunityTags();
        expect(functionCall[0].name).not.toEqual(functionCall[1].name);
      }
    });
  });
  describe("Overview", () => {});
});
