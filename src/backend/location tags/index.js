const {
  communityTags,
} = require("../table roller/tables/Location Tags/WWN/tags");

const { getRandomElement } = require("../table roller/tableUtils");

exports.getCommunityTags = () => {
  return [getRandomElement(communityTags), getRandomElement(communityTags)];
};
