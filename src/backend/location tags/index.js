const {
  communityTags,
  courtTags,
  ruinTags,
  wildernessTags,
} = require("../table roller/tables/Location Tags/WWN/tags");

const { getRandomElement } = require("../table roller/tableUtils");

exports.getCommunityTags = () => getLocationTags(communityTags);

exports.getCourtTags = () => getLocationTags(courtTags);

exports.getRuinTags = () => getLocationTags(ruinTags);

exports.getWildernessTags = () => getLocationTags(wildernessTags);

const getLocationTags = (locationTagTable) => {
  const tagArray = [];
  let tag1 = getRandomElement(locationTagTable);
  let tag2 = getRandomElement(locationTagTable);

  tagArray.push(tag1);
  do {
    tag2 = getRandomElement(locationTagTable);
  } while (tag1 === tag2);

  tagArray.push(tag2);

  return tagArray;
};
