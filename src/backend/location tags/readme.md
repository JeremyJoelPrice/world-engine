# Location Tags

The `location tags/index.js` file provides a suite of functions for generating
location tags, or entire location thumbnails.

## Location Tags

```
	{
		name: 'Demihuman Community',
		blurb: 'There’s a community of demihumans living here, likely intentionally avoiding more well-controlled lands in order to maintain their autonomy. Autonomy alone is unlikely to be all the reason they’ve avoided civilized lands, however, as few human rulers find it worth the trouble to demand more than a fixed tribute from demihumans, leaving them to control their own affairs. There may be something about this group that makes it impossible for them to live comfortably near humans.',
		enemies: 'Crazed demihuman leader, Sinister demihuman cult priest, Tyrannical government viceroy',
		friends: 'Xenophilic local demihuman, Human trader with lasting ties, Human who’s “gone native”',
		complications: 'They’re apart to keep humans safe from them rather than them safe from humans, They’re remnants of a former demihuman kingdom, They’re responsible for many local wilderness dangers in order to maintain their privacy',
		things: 'Precious good created by demihumans, Inherited relic of the ancestors, Tribute owed the local ruler',
		places: 'Ceremonial structure of a former age, Village hidden cunningly, Well-guarded wall against outsiders'
	  }
```

The above object represents one location tag.

## Location Thumbnails

The get thumbnail functions return an object like the one below.

```
	{
		rationaleForTheCommunitiesExistance: 'Seers or shamans said it was ordained',
		whoRunsIt: 'Most charismatic native',
		significantLocals: 'Seer or shamon',
		aCurrentPressingProblem: 'A, fearsome beast hunts them in the wilds',
		localLikelyToInteractWithAdventurers: 'Tribal trader who wants access to outside goads',
		interestingThingsThePlaceCanOfferHeroes: "Inherited relic or treasure they've kept",
		tags: // array of two tags
	}
```

The number and names of the keys depend on the type, and subtype, of location thumbnail being created.