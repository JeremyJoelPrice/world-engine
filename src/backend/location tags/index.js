const {
	ruralVillages,
	majorCities,
	tribesAndExiles,
	aristocraticCourts,
	businessCourts,
	criminalCourts,
	familialClanCourts,
	religiousCourts,
	ruins,
	wilderness
} = require("../table roller/tables/Location Tags");
const {
	communityTags,
	courtTags,
	ruinTags,
	wildernessTags
} = require("../table roller/tables/Location Tags/WWN/tags");

const { rollOnTable } = require("../table roller/tableUtils");

exports.getCommunityTags = () => getLocationTags(communityTags);

exports.getCourtTags = () => getLocationTags(courtTags);

exports.getRuinTags = () => getLocationTags(ruinTags);

exports.getWildernessTags = () => getLocationTags(wildernessTags);

// Communities
exports.getRuralVillageThumbnail = () =>
	getThumbnail(ruralVillages, communityTags);

exports.getMajorCityThumbnail = () => getThumbnail(majorCities, communityTags);

exports.getTribesAndExilesThumbnail = () =>
	getThumbnail(tribesAndExiles, communityTags);

// Courts
exports.getAristocracticCourtThumbnail = () =>
	getThumbnail(aristocraticCourts, courtTags);

exports.getBusinessCourtThumbnail = () =>
	getThumbnail(businessCourts, courtTags);

exports.getCriminalCourtThumbnail = () =>
	getThumbnail(criminalCourts, courtTags);

exports.getFamilialClanCourtThumbnail = () =>
	getThumbnail(familialClanCourts, courtTags);

exports.getReligiousCourtThumbnail = () =>
	getThumbnail(religiousCourts, courtTags);

// Ruins
exports.getRuinsThumbnail = () => getThumbnail(ruins, ruinTags);

exports.getWildernessThumbnail = () => getThumbnail(wilderness, wildernessTags);

function getThumbnail(tablesObj, tagsTable) {
	const thumbnail = {};

	Object.keys(tablesObj).forEach((k) => {
		thumbnail[k] = rollOnTable(tablesObj[k]);
	});
	thumbnail.tags = rollOnTable(tagsTable, 2);
	return thumbnail;
}

const getLocationTags = (locationTagTable) => {
	const tagArray = [];
	let tag1 = rollOnTable(locationTagTable);
	let tag2 = rollOnTable(locationTagTable);

	tagArray.push(tag1);
	do {
		tag2 = rollOnTable(locationTagTable);
	} while (tag1 === tag2);

	tagArray.push(tag2);

	return tagArray;
};
