const {
  communityTags,
} = require("../table roller/tables/Location Tags/WWN/tags");

const { getRandomElement } = require("../table roller/tableUtils");

exports.getCommunityTags = () => {
  const tagArray = [];
  let tag1 = getRandomElement(communityTags);
  let tag2 = getRandomElement(communityTags);

  tagArray.push(tag1);
  do {
    tag2 = getRandomElement(communityTags);
  } while (tag1 === tag2);

  tagArray.push(tag2);

  return tagArray;
};
