const getTagFunctions = require("../backend/location tags");

describe("locationTags", () => {
  Object.keys(getTagFunctions).forEach((key) => {
    describe(`${key}`, () => {
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
