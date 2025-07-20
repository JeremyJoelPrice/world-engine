/* High Concepts */
const victorianProfessions = [
	{
		name: "Able Seaman",
		description:
			"a seaman who reached a standard of skill above that of OrdinarySeaman."
	},
	{
		name: "Academic",
		description: "a scholarly person, of a university, etc."
	},
	{
		name: "Academician",
		description:
			"a member of an academy, especially of the Royal Academy of Arts."
	},
	{
		name: "Acater, or Achateur",
		description: "supplied food provisions, e.g. a ships chandler"
	},
	{ name: "Accipitrary", description: "falconer" },
	{ name: "Accomptant", description: "accountant" },
	{
		name: "Accoucheur",
		description: "a man who assisted women in childbirth - Midwife"
	},
	{
		name: "Accoucheuse",
		description: "a Woman who assisted women in childbirth - Midwife"
	},
	{
		name: "Accountant",
		description:
			"a person involved in maintenance and auditing of accounts andfinancial matters"
	},
	{
		name: "Accoutre",
		description: "supplier of military clothing and accessories"
	},
	{
		name: "Accoutrement Maker",
		description: "supplier of military clothing and accessories"
	},
	{ name: "Ackerman/Acreman", description: "a ploughman, or an oxherder" },
	{
		name: "Actuary",
		description:
			"one who calculates insurance risks, and kept public accounts ofbusiness,"
	},
	{
		name: "Administrator",
		description:
			"someone who directed the affairs of another, or one who settles theestate of a deceased person who died intestate."
	},
	{ name: "Administratrix", description: "a female Administrator" },
	{
		name: "Adventurer",
		description:
			"a person who seeks adventures; a mercenary soldier; one who lives by his wits."
	},
	{ name: "Advertisement Conveyancer", description: "sandwich board man" },
	{
		name: "Advocate",
		description:
			"a Prosecutor in a court of law in Scotland, also a Solicitor, orLawyer."
	},
	{
		name: "Advocate Deputy",
		description:
			"a Scottish law officer who could act as public prosecutor."
	},
	{
		name: "Advowee",
		description:
			"one who has an Advowson, normally a nobleman, who had the right topresentation to a vacant benefice, in English ecclesiastical law."
	},
	{
		name: "Aeronaut",
		description:
			"a balloonist or a trapeze artist in the circus or music halls"
	},
	{
		name: "Affeeror",
		description:
			"(Assessor) responsible for ensuring that those fined by a ManorCourt, actually paid their fines"
	},
	{
		name: "Agent, broker, factor",
		description: "one who acts or transacts business for another"
	},
	{ name: "Agister", description: "official of the Royal Forests" },
	{
		name: "Agricultural Labourer",
		description: "a farm servant, shepherd, etc"
	},
	{
		name: "Agriculturist",
		description:
			"a person involved with land cultivation or animal husbandry."
	},
	{ name: "Alabasterer", description: "worked with alabaster" },
	{ name: "Alblastere", description: "crossbow man" },
	{
		name: "Alchemist",
		description:
			"a medieval chemist who claimed to be able to turn base metals intogold."
	},
	{
		name: "Alderman",
		description:
			"senior councillor one position down from Mayor in the local council"
	},
	{
		name: "Ale Connor/Founder",
		description:
			"official who tested quality and measure of ale served in publichouses"
	},
	{ name: "Ale Draper", description: "seller of ale" },
	{ name: "Ale Taster", description: "tested ale and beer for quality" },
	{
		name: "Ale Tunner",
		description: "brewery worker who fills ale casks (tuns) with ale"
	},
	{ name: "Ale Wife", description: "woman who keeps an alehouse or tavern" },
	{ name: "All Spice", description: "grocer" },
	{
		name: "Almoner",
		description:
			"giver of Charity to the needy - one who gave out alms to the poor onbehalf of the parish. Also the title of a hospital manager, or onein charge of an Almshouse."
	},
	{ name: "Almsman", description: "one who received alms or charity" },
	{
		name: "Alnager",
		description:
			"(Aulnager)A town official who examined the quality of woollen goodsand stamped them with a seal of approval."
	},
	{
		name: "Amanuensis",
		description:
			"a person employed to take dictation or to copy manuscripts - ASecretary or Stenographer."
	},
	{
		name: "Amber &amp; Jet Cutter",
		description: "a person who cut and polished amber for jewelry"
	},
	{ name: "Amber Cutter", description: "a person who cuts amber" },
	{
		name: "Ambler",
		description: "officer of the Royal Stable who broke in horses"
	},
	{ name: "Amen Man", description: "parish clerk" },
	{ name: "Anchor Smith", description: "a person who made anchors" },
	{ name: "Anchoress", description: "a female hermit or religious recluse" },
	{ name: "Anchorite", description: "a male hermit or religious recluse" },
	{ name: "Angle Iron Smith", description: "a person who made angle iron" },
	{ name: "Anilepman", description: "a smallholder, or tenant of the manor" },
	{
		name: "Ankle Beater",
		description: "a young person who helped to drive the cattle to market"
	},
	{
		name: "Annatto Maker",
		description: "worked in the manufacture of dyes for paint or printing"
	},
	{
		name: "Annuitant",
		description:
			"a person who received an annual income not from working e.g. apensioner."
	},
	{
		name: "Antigropelos Maker",
		description: "a person who made waterproof leggings"
	},
	{
		name: "Anvil Smith",
		description: "one who made anvils and hammers for blacksmiths"
	},
	{ name: "Apiarian", description: "beekeeper" },
	{
		name: "Apothecary (Apotheecary)",
		description: "prepared and medicines and drugs; pharmacist"
	},
	{
		name: "Apparitor",
		description:
			"official who summoned witnesses in the ecclesiastical courts"
	},
	{
		name: "Appraiser",
		description: "(Broker) A person who appraised the value of goods."
	},
	{
		name: "Apprentice",
		description:
			"one who was bound to a skilled worker for a specified time to learna trade - Apprenticeship"
	},
	{ name: "Aproneer", description: "a shopkeeper" },
	{ name: "Apronman", description: "mechanic" },
	{ name: "Aquarius", description: "(Ewar) Waterman" },
	{ name: "Aquavita Seller", description: "a person who sold alcohol" },
	{ name: "Arbiter", description: "a person who judged disputes." },
	{
		name: "Archer",
		description: "a person skilled in using a bow and arrow."
	},
	{ name: "Archiator", description: "physician" },
	{
		name: "Archil Maker",
		description:
			"made a violet dye from lichens, used in the textile industry"
	},
	{
		name: "Archivist",
		description: "a person who kept records of historical value."
	},
	{
		name: "Arkwright",
		description:
			"skilled craftsman who produced arks; wooden chests or coffers"
	},
	{
		name: "Armiger",
		description:
			"squire who carried the armour of a knight, or one entitled to bearheraldic arms."
	},
	{
		name: "Armourer",
		description:
			"made suits of armour or plates of armour for buildings or ships etc."
	},
	{ name: "Artificer", description: "a soldier mechanic who does repairs" },
	{
		name: "Artificer",
		description: "skilled or artistic worker or craftsman"
	},
	{
		name: "Artificial Flower Maker",
		description: "made and sold artificial flowers"
	},
	{ name: "Artisan", description: "a skilled tradesman." },
	{
		name: "Artist in Fireworks",
		description: "a person who prepared fireworks displays."
	},
	{
		name: "Ashman",
		description:
			"dustman, or Refuse Collector. Also someone who cleans trhe ashesfrom a boiler."
	},
	{
		name: "Ashmanshipman",
		description: "a Sailor who cleaned the ashes from a ships boiler"
	},
	{
		name: "Assay Master",
		description:
			"one who determined the amount of gold or silver to go into coins tobe minted"
	},
	{
		name: "Assayer",
		description: "one who determined the proportions of metal in ore."
	},
	{
		name: "Assessor",
		description:
			"(Affeeror)An official in the manorial courts who assessed monetarypenalties (fines). They also collected taxes and dues"
	},
	{
		name: "Assistant",
		description: "assisted someone else in their trade, often a master"
	},
	{ name: "Assurance Agent", description: "sells life assurance policies" },
	{ name: "Attendant on Sick", description: "nurse" },
	{
		name: "Aulnager",
		description:
			"(Alnager)A town official who examined the quality of woollen goodsand stamped them with a seal of approval."
	},
	{
		name: "Auger Maker",
		description: "made carpenters augers, used for boring holes in wood"
	},
	{ name: "Aurifaber", description: "goldsmith" },
	{
		name: "Avenator",
		description: "(Plantifene) A hay and forage merchant."
	},
	{ name: "Avowry", description: "the Lord of the Manor" },
	{
		name: "Axle Tree Maker / Turner",
		description: "made axles for coaches and wagons"
	},
	{
		name: "Back Washer",
		description: "cleans the wool in the worsted manufacturing industry"
	},
	{ name: "Backmaker", description: "a Cooper; made backs, vats and tubs" },
	{ name: "Backster / Baxter", description: "baker" },
	{
		name: "Backus Boy or Back'us Boy",
		description: 'kitchen servant, abreviation of: "back of the house"'
	},
	{
		name: "Badger",
		description:
			"licensed pauper who wore a badge with the letter P on it, or a cornmiller or dealer, or an itinerant food trader."
	},
	{ name: "Bag Maker, Canvas / Paper", description: "made bags" },
	{ name: "Bagman", description: "travelling salesman" },
	{ name: "Badgy Fiddler", description: "a boy trumpeter in the military." },
	{
		name: "Bagniokeeper",
		description: "a person in charge of a bath house or brothel."
	},
	{ name: "Bailie, Baillee or Baillie", description: "bailiff" },
	{
		name: "Bailiff",
		description:
			"officer of the sheriff, a land steward acting on behalf of thelandowner"
	},
	{ name: "Bairman / Bareman", description: "a pauper or beggar" },
	{ name: "Baker", description: "baked bread and pastries" },
	{
		name: "Bal Maiden",
		description:
			"female mine worker who worked on the surface; Pit Brow Lass"
	},
	{
		name: "Balancer",
		description:
			'one who operates the "balance" in a coal mine, which is a slope witha pulley at the top where empty coal tubs pulled full tubs up theslope.'
	},
	{
		name: "Baler",
		description:
			"a person who bales hay, and in the mills one who baled wool orcotton goods"
	},
	{ name: "Balister", description: "archer, or crossbowman" },
	{
		name: "Ballad Monger",
		description:
			"a person who sold printed ballads(song lyrics) on the street."
	},
	{
		name: "Ballast Heaver",
		description: "loaded ballast into the hold of empty ships"
	},
	{
		name: "Ballast Master",
		description:
			"a person in charge of loading the ballast into the holds of emptyships."
	},
	{
		name: "Baller, or Baller Up",
		description: "measured out the balls of clay for a potter"
	},
	{
		name: "Band Filer",
		description: "metal worker in the gun making industry"
	},
	{ name: "Bandster", description: "bound the wheat sheaves after harvest" },
	{
		name: "Bang Beggar",
		description:
			"an officer of the parish who controlled the length of stay of anystranger to the parish."
	},
	{
		name: "Banker",
		description:
			"dug ditches to allow drainage, placing the surplus earth in banks"
	},
	{
		name: "Banksman or Browman",
		description: "in charge of the cages at the pit head; aka bank manager"
	},
	{ name: "Bar Manager, Inn", description: "managed an inn" },
	{
		name: "Barber or Barber Surgeon",
		description: "a men's hairdresser, also a surgeon"
	},
	{ name: "Bard", description: "a poet or minstrel" },
	{ name: "Bareman or Bairman", description: "beggar or pauper" },
	{ name: "Barge Mate", description: "naval officer" },
	{
		name: "Bargee or Bargeman",
		description: "worked on or owned and operated a barge"
	},
	{
		name: "Barilla Manufacturer",
		description:
			"made barilla; a sodium salt used in the glass and ceramics trade"
	},
	{ name: "Barkeeper", description: "tollkeeper" },
	{ name: "Barker", description: "tanner" },
	{
		name: "Barleyman or Bylawman",
		description:
			"an official of the manorial courts who enforced the courts orders."
	},
	{
		name: "Barmaid",
		description: "serves drinks in an inn, public house or tavern"
	},
	{
		name: "Barman",
		description: "serves drinks in an inn, public house or tavern"
	},
	{
		name: "Barmaster",
		description:
			"the arbiter of disputes in the lead mining industry. They were alsoin charge of the standard measure for the ore."
	},
	{ name: "Barm Brewer", description: "a person who made yeast." },
	{
		name: "Barrel Filer",
		description: "a person employed in the gun manufacturing industry."
	},
	{
		name: "Barrowman",
		description:
			"a person employed in the coal mines to push the barrow from the pitface to the shaft."
	},
	{
		name: "Bartoner or Barton",
		description: "in charge of a monastic farm."
	},
	{ name: "Basil Worker", description: "worked with sheep and goat skins" },
	{ name: "Basket Maker", description: "made baskets" },
	{
		name: "Basketman",
		description:
			"made wicker products, also emptied the baskets<br />of coal from colliers into barges"
	},
	{
		name: "Bass / Bast Dresser",
		description: "employed in dressing fibre or matting"
	},
	{
		name: "Bathing Machine Proprietor",
		description:
			"one who owned and hired the changing huts used by bathers at theseaside in the 18th century."
	},
	{ name: "Batman", description: "an officer's servant in the army" },
	{
		name: "Batt Maker",
		description:
			"a person who made the wadding used in quilt and mattress making."
	},
	{
		name: "Battledore Maker",
		description:
			"made the beaters used on clothes and carpets etc, to remove dust"
	},
	{ name: "Bauer", description: "farmer" },
	{
		name: "Baven Maker",
		description:
			"a maker of kindling. A baven (or bavin) is a thin piece of wood orsplint, with the end wittled and curled with a knife and used forkindling."
	},
	{ name: "Baxter", description: "baker" },
	{
		name: "Bayweaver",
		description:
			"one who wove bay (a fine woollen fabric also known as baize)"
	},
	{ name: "Bead Maker", description: "made beads" },
	{ name: "Bead Piercer", description: "one who drilled the holes in beads" },
	{
		name: "Beadle or Beadel",
		description:
			"officer of a church or synagogue whose principle duty was to keeporder. Also a town cryer"
	},
	{
		name: "Beadman, Beadsman or Bedesman",
		description:
			"a person employed to pray for his employer, or the inhabitant of analmshouse, poorhouse or hospital. also, a tenant employed by themanor for a specific service."
	},
	{
		name: "Beamer",
		description:
			"winds the warp on the roller before putting it on the loom in thetextile industry"
	},
	{
		name: "Bearer",
		description:
			"worked undergrpound carrying the coal to the bottom of the pit shaft"
	},
	{
		name: "Beater or Fuller",
		description:
			"washed and thickened the cloth by treading it underwater withfullers earth"
	},
	{ name: "Beaver", description: "made felt used in hat making" },
	{ name: "Bed Maker", description: "made beds" },
	{ name: "Bedman", description: "sexton" },
	{
		name: "Bedwevere",
		description:
			"made the webbing for bed frames and also one who wove quilts"
	},
	{ name: "Beekeeper or Beemaster", description: "a person who kept bees." },
	{
		name: "Beer or Wine House Keeper",
		description: "usually unlicensed drinking establishments"
	},
	{
		name: "Beerseller",
		description: "same as above, but more like an off-license"
	},
	{
		name: "Beershop Keeper",
		description: "one who sells beer, not usually licensed"
	},
	{ name: "Beeskep Maker", description: "a person who made beehives." },
	{
		name: "Beetler",
		description:
			"a person who operated a beetling machine, used in the textile tradefor embossing fabric."
	},
	{ name: "Beggar", description: "obvious really!" },
	{ name: "Belhoste", description: "tavern keeper." },
	{ name: "Bell Hanger", description: "installed bells in churches" },
	{ name: "Belleyetere", description: "bellfounder" },
	{ name: "Bellfounder", description: "(Billiter) bell maker" },
	{
		name: "Bellman",
		description:
			"a person employed as a watchman or town crier, or a person whoworked for the post office and collected letters for the mail coachby walking the streets and ringing a bell."
	},
	{
		name: "Bellowfarmer",
		description:
			"a person who was responsible for the care and maintenance of thechurch organ."
	},
	{
		name: "Bellows Maker",
		description: "made bellows used for organs or blacksmiths fires"
	},
	{
		name: "Belly Builder",
		description: "built and fitted the interiors of pianos"
	},
	{ name: "Bender", description: "a person who cut leather" },
	{
		name: "Besom Maker",
		description:
			"made brooms made of a bundle of birch twigs bound onto a handle"
	},
	{ name: "Besomer", description: "a person who sweeps with a besom." },
	{
		name: "Besswarden",
		description:
			"a person appointed by the parish to look after its animals."
	},
	{ name: "Bicycle Repairer", description: "repaired bicycles" },
	{ name: "Biddy", description: "female servant, usually Irish" },
	{ name: "Bill Poster", description: "put up notices and signs" },
	{
		name: "Billiard Marker",
		description:
			"a person who attends on players at billiards and records theprogress of the game."
	},
	{
		name: "Billier or Billyman",
		description:
			"a person who operated a Billy Roller, a machine used in the cottonindustry to prepare the cotton for spinning."
	},
	{ name: "Binder", description: "bound items, e.g., books, hats etc." },
	{
		name: "Bird Boy",
		description: "employed to scare away birds from crops"
	},
	{ name: "Bird Catcher", description: "caught birds for selling" },
	{
		name: "Birds Nest Seller",
		description:
			"sold birds nests collected from the wild complete with eggs whichwere then hatched by domestic birds and sold as pets"
	},
	{
		name: "Black Borderer",
		description: "made black edged stationery for funerals"
	},
	{ name: "Blacking Maker", description: "made polish for shoes" },
	{ name: "Blacksmith", description: "one who shoes horses" },
	{ name: "Black Tray Maker", description: "made Japanned trays" },
	{ name: "Bladesmith", description: "swordmaker or knife maker" },
	{
		name: "Blaxter or Bleacher",
		description: "bleached cloth or paper pulp"
	},
	{ name: "Blemmere", description: "a Plumber" },
	{ name: "Blentonist", description: "a water diviner" },
	{
		name: "Blindsman",
		description:
			"a person employed by the Post Office to deal with incorrectlyaddressed letters and parcels."
	},
	{
		name: "Block Maker",
		description: "engraved the blocks used in the printing industry."
	},
	{
		name: "Block Printer",
		description: "printer who used wooden blocks for printing"
	},
	{
		name: "Blockcutter, or Blocker",
		description:
			"a person who made wooden blocks used in the hat trade, or a personwho laid down the blocks on which a ships keel was laid."
	},
	{
		name: "Bloodletter, or Bloodman",
		description:
			"used leeches for letting blood, thought to be a cure for manyailments"
	},
	{
		name: "Bloomer or Bloom Smithy",
		description: "a person who produced iron from iron ore."
	},
	{
		name: "Blower",
		description:
			'a glass blower, or a person who operated a "blowing machine" used toclean and separate fibres in the textile trade, or a person whooperated the bellows at a blacksmiths.'
	},
	{
		name: "Blowfeeder",
		description: 'a person who fed the fibres into a "blowing machine".'
	},
	{
		name: "Blue Dyer or Maker",
		description:
			"a person who worked with blue dye used by calico printers andlaundries to stop the white materials from discolouring."
	},
	{ name: "Bluestocking", description: "a nickname for a female writer" },
	{ name: "Bluffer", description: "an innkeeper or landlord of a pub" },
	{
		name: "Boarder or Lodger",
		description: "a person who was provided with accommodation and meals."
	},
	{
		name: "Boarding Officer",
		description: "inspected ships before entering port"
	},
	{
		name: "Board Liner",
		description:
			"one who covers cardboard with plain or ornamental paper by hand,using paste and brush, or one who passes cardboard into a pastingmachine."
	},
	{
		name: "Boardman",
		description:
			"truant officer who checked school attendance, or a tenant ofmanorial land who paid rent by maintaining the manor's table."
	},
	{
		name: "Boardwright, or Carpenter",
		description: "made tables and chairs."
	},
	{
		name: "Boatman",
		description:
			"worked on a boat, predominately on rivers and canals, also a boatrepairer"
	},
	{
		name: "Boatswain",
		description:
			"ship's officer in charge of riggings &amp; ground tackle and lookedafter the ships stores."
	},
	{
		name: "Bobber",
		description:
			"one who polished metals, or who helped to unload fishing boats"
	},
	{
		name: "Bobbin Carrier",
		description: "worked in spinning and weaving sections of the mills"
	},
	{
		name: "Bobbin Turner",
		description:
			"made the bobbins used in the spinning and weaving industry"
	},
	{ name: "Bobby", description: "policeman usually of constable rank" },
	{
		name: "Bodeys or Bodice Maker",
		description: "made bodices for women's garments"
	},
	{ name: "Bodger", description: "craftsman who made wooden chair legs" },
	{ name: "Boiler Engineer", description: "designed boilers" },
	{
		name: "Boiler Maker, or Boilermaker",
		description: "made boilers, or general metalworker"
	},
	{
		name: "Boiler Plater",
		description:
			"made rolled iron plate used to make boilers for steam engines etc"
	},
	{ name: "Boiler Smith", description: "made or repaired boilers" },
	{
		name: "Boll",
		description:
			"a person who looked after power looms in the weaving industry."
	},
	{ name: "Bolter", description: "a person who sifted meal." },
	{ name: "Bondager", description: "female worker on a farm who was bonded" },
	{
		name: "Bondman, or Apprentice",
		description:
			"bonded to a master for the purpose of learning a skill or trade."
	},
	{
		name: "Bondsman",
		description:
			"stood bond or surety for another where a bond was required by law"
	},
	{ name: "Bone Button Turner", description: "made buttons using a lathe" },
	{ name: "Bone Lace Maker", description: "made pillow lace" },
	{
		name: "Bone Mould Turner",
		description: "made the moulds for button manufacturers"
	},
	{
		name: "Bone Picker",
		description: "collected rags and bones aka Rag and Bone Man"
	},
	{ name: "Bonesetter", description: "set broken bones" },
	{ name: "Boniface", description: "keeper of an inn" },
	{ name: "Bonnet Maker", description: "made bonnets" },
	{
		name: "Bonnet Shape Maker or Wirer",
		description: "made the wire base which formed the shape of the bonnet"
	},
	{ name: "Book Binder", description: "bound books" },
	{
		name: "Book Finisher",
		description: "put the finishing touches to books"
	},
	{ name: "Book Folder", description: "folded paper to make books" },
	{ name: "Book Gilder", description: "decorated books with gold leaf" },
	{ name: "Bookholder", description: "the prompter in the theatre." },
	{
		name: "Book Keeper",
		description: "looked after the accounts for businesses"
	},
	{ name: "Bookman", description: "a student." },
	{ name: "Book Seller", description: "sold books" },
	{
		name: "Boonmaster",
		description:
			"a surveyor of roads with the responsibilities of maintaining andrepairing the road."
	},
	{
		name: "Bootbinder",
		description:
			"a person employed to operate the machines which bound footwear."
	},
	{ name: "Boot Black", description: "polisher of shoes" },
	{
		name: "Boot Clicker",
		description: "punched eylet holes using a machine that clicked"
	},
	{
		name: "Boot Closer",
		description:
			"worked in the shoe trade stitching together all the parts of a shoeupper"
	},
	{
		name: "Boot Finisher",
		description: "put the finishing touches to boots"
	},
	{ name: "Boot Fitter", description: "fitted boots" },
	{ name: "Boot Heeler", description: "put the heels on boots" },
	{ name: "Boothman", description: "a corn merchant" },
	{ name: "Boot Knifer", description: "cut up parts for boots" },
	{ name: "Boot Laster", description: "&nbsp;" },
	{ name: "Boot Machiner or Machinist", description: "&nbsp;" },
	{ name: "Boot Maker", description: "made boots" },
	{ name: "Boot Maker Paste Fitter", description: "&nbsp;" },
	{ name: "Boot Repairer", description: "repaired boots" },
	{ name: "Boot Rivetter", description: "rivetted boots" },
	{ name: "Boot Seller", description: "sold boots" },
	{ name: "Boot Sewer", description: "sewed boots" },
	{ name: "Borler", description: "a person who made cheap coarse clothing." },
	{ name: "Borer", description: "travelling salesman or peddler" },
	{
		name: "Borsholder",
		description:
			"officer appointed by the manor or parish, constable. (in Kent)"
	},
	{ name: "Boss Maker, Wood", description: "made wooden bosses" },
	{ name: "Botcher", description: "tailor or cobbler" },
	{
		name: "Bottiler or Bottler",
		description:
			"made leather containers for holding liquids eg wine flasks or waterbottles"
	},
	{ name: "Bottle Boy", description: "pharmacists assistant" },
	{ name: "Bottle Machinist", description: "&nbsp;" },
	{ name: "Bottle Washer", description: "&nbsp;" },
	{
		name: "Bottler, Cellar",
		description: "worked in a cellar, bottling drinks"
	},
	{
		name: "Bottom Knocker",
		description: "a sagger makers assistant in the pottery industry."
	},
	{
		name: "Bottom Maker",
		description:
			"a person who moulded the bottoms for saggers in the potteryindustry."
	},
	{
		name: "Bottomer",
		description:
			"a person who worked down the pits moving the ore etc to the bottomof the shaft for removal."
	},
	{ name: "Bowdler", description: "worked with iron ore" },
	{ name: "Bower or Bowyer", description: "made bows used in archery" },
	{
		name: "Bowker",
		description:
			"a person who bleached yarn. Also a local term in some parts ofLancashire for a butcher."
	},
	{
		name: "Bowler",
		description:
			"a person who made bowls and dishes. Also a term used for people whomade the rounded part of spoons before casting."
	},
	{ name: "Bowlman or Bowlwoman", description: "a dealer in crockery." },
	{
		name: "Bowlminder",
		description:
			"a person in charge of the vats used for washing raw wool beforeprocessing."
	},
	{ name: "Box and packing case maker", description: "&nbsp;" },
	{ name: "Box Maker", description: "&nbsp;" },
	{ name: "Bozzler", description: "a parish constable." },
	{ name: "Brabener", description: "a Weaver." },
	{ name: "Brachygrapher", description: "a shorthand writer" },
	{
		name: "Braider",
		description: "made cord by twisting threads or strips of leather"
	},
	{ name: "Brailler", description: "made girdles" },
	{
		name: "Brakeman or Brakesman",
		description:
			"operated the brakes on the winch at the pit head or on trains ortrams"
	},
	{ name: "Brasiator", description: "a brewer of ale" },
	{ name: "Brasiler", description: "a dyer" },
	{
		name: "Brass Cutter",
		description: "a person who made copperplate engravings."
	},
	{
		name: "Brass Finisher",
		description: "a person who polished brass goods."
	},
	{ name: "Brass Founder", description: "a person who cast brass." },
	{ name: "Bratman", description: "a rough garment maker." },
	{
		name: "Brayer",
		description: "a person who ground things up in a mortar."
	},
	{
		name: "Brazier",
		description:
			"a person who made or repaired household items made from brass."
	},
	{
		name: "Breach Maker",
		description: "a person who made breaches for guns."
	},
	{ name: "Breakman", description: "a bricklayer" },
	{ name: "Brewer", description: "brewed alcoholic beverages" },
	{ name: "Brewer's Labourer", description: "assisted - obvious really" },
	{ name: "Brewster", description: "brewer, or female brewer" },
	{
		name: "Brickburner",
		description: "a brickmaker who used a kiln to make bricks."
	},
	{ name: "Brick maker, dealer", description: "made and sold bricks" },
	{ name: "Bricklayer or Brickman", description: "laid bricks" },
	{ name: "Bricklayer's Labourer", description: "assisted - obvious really" },
	{
		name: "Bridewell Keeper",
		description: "the person in charge of a lock-up or jail."
	},
	{ name: "Bridgeman or Bridger", description: "a toll keeper at bridges." },
	{ name: "Brightsmith", description: "tin metal worker" },
	{
		name: "Broad Cloth Weaver",
		description: "a person who operated a wide loom."
	},
	{
		name: "Broad Cooper",
		description:
			"a person employed as a go between for the brewery and theinnkeepers."
	},
	{ name: "Broderer, Brotherer or Broiderer", description: "an Embroiderer" },
	{ name: "Brogger", description: "a wool merchant" },
	{ name: "Broom Dasher", description: "a dealer in brooms" },
	{ name: "Broom Squire", description: "broom maker" },
	{ name: "Brotherer", description: "embroiderer" },
	{ name: "Brouge Maker", description: "a shoe maker" },
	{
		name: "Brow Girl",
		description: "female employed at the pit head, Pit Brow Girl"
	},
	{ name: "Brownsmith", description: "worked with copper or brass" },
	{ name: "Brush Dresser", description: "&nbsp;" },
	{ name: "Brush, broom maker, seller", description: "&nbsp;" },
	{ name: "Brushmaker", description: "&nbsp;" },
	{ name: "Buck Washer", description: "a laundress" },
	{
		name: "Buckle Tongue Maker",
		description: "made the metal points that go in the holes of a belt"
	},
	{ name: "Buckler or Bucklesmith", description: "made buckles" },
	{
		name: "Buckram Maker",
		description:
			"a person who worked with buckram (used for stiffening cloth etc)e.g. belts, lapels and collars."
	},
	{
		name: "Buddleboy",
		description:
			"maintained the vats used in the lead and tin mines for washing theore"
	},
	{ name: "Builder", description: "built houses and other buildings" },
	{ name: "Builder's Labourer", description: "assisted - obvious really" },
	{ name: "Bullwhacker", description: "oxen driver" },
	{
		name: "Bumboat Man",
		description:
			"a person who met ships at anchor, with goods for passengers and crewto purchase."
	},
	{
		name: "Bummaree",
		description:
			"middle man between the wholesaler and the retailer at the fishmarkets"
	},
	{ name: "Bummer", description: "army deserter" },
	{ name: "Bunter", description: "female rag &amp; bone collector" },
	{
		name: "Bureler or Boreler",
		description:
			"a person who made borel, a woollen cloth with a coarse feel."
	},
	{
		name: "Burgess",
		description: "a person who represented a borough at official levels."
	},
	{ name: "Burgomaster", description: "a Town Mayor" },
	{ name: "Burl", description: "cup Bearer" },
	{ name: "Burler", description: "quality inspector for clothing" },
	{
		name: "Burler Mender",
		description: "a skilled finisher of woven fabrics."
	},
	{ name: "Burmaiden", description: "chambermaid or lady-in-waiting" },
	{ name: "Burneman", description: "carrier of barm or water for brewers" },
	{ name: "Burnisher", description: "metal polisher" },
	{ name: "Burye Man", description: "grave digger" },
	{ name: "Bushel Maker", description: "a Cooper, one who makes barrels" },
	{ name: "Busheler", description: "tailor's helper" },
	{ name: "Busker", description: "hair dresser or a street entertainer" },
	{ name: "Buss Maker", description: "maker of guns" },
	{
		name: "Butcher, meat salesman",
		description: "prepared and sold meat for cooking"
	},
	{ name: "Butcher's Assistant", description: "assisted - obvious really" },
	{ name: "Butner", description: "button maker" },
	{
		name: "Butter Carver",
		description: "a person who made imprints in butter pats."
	},
	{ name: "Button Burnisher", description: "button polisher" },
	{ name: "Button Clothing", description: "&nbsp;" },
	{ name: "Button Hole Hand", description: "cut and stitched button holes" },
	{
		name: "Button Hole Hand Stitcher",
		description: "cut and stitched button holes"
	},
	{
		name: "Button Holer or Hole Maker",
		description: "cut and stitched button holes"
	},
	{
		name: "Butty",
		description:
			"the person who negotiated mining contracts and supplied the labour."
	},
	{
		name: "Bylawman",
		description:
			"an official of the manorial courts who enforced the courts orders."
	},
	{
		name: "Cab Driver",
		description: "drove a cab. Also Cab Man, Cabman, Cabbie or Carman"
	},
	{ name: "Cab Man, Cab Nasher, or Groom", description: "drove a cab" },
	{
		name: "Cabinet Maker",
		description: "a highly skilled maker of quality furniture"
	},
	{ name: "Cabinet Maker Apprentice", description: "apprentice to above" },
	{
		name: "Cabinet maker, upholsterer",
		description: "one who specialised in seating"
	},
	{
		name: "Cabinet Maker's Labourer",
		description: "assisted - obvious really"
	},
	{ name: "Cabinet Polisher", description: "often a french polisher" },
	{ name: "Cable Jointer", description: "joined cables" },
	{
		name: "Cad",
		description:
			"a person employed to feed and water horses at coach stops."
	},
	{
		name: "Caddie",
		description: "a boy who carried messages or who ran errands."
	},
	{ name: "Caddy Butcher", description: "butcher that dealt in horse meat" },
	{ name: "Cadger", description: "a beggar" },
	{ name: "Cafender", description: "a carpenter" },
	{ name: "Caffler", description: "rag and bone collector" },
	{ name: "Cainer", description: "made walking sticks" },
	{ name: "Caird", description: "a tinker" },
	{ name: "Calciner", description: "burnt bones to make powdered lime" },
	{ name: "Calender", description: "one who listed documents" },
	{
		name: "Calender Worker, Calenderer or Calenderman",
		description:
			"a person who operated a machine which pressed cloth and paper usingtwo large rollers (calenders)."
	},
	{ name: "Calico Printer", description: "dyed and colored calico" },
	{
		name: "Cambist",
		description:
			"an expert in financial exchange, a dealer in bills of exchange."
	},
	{
		name: "Cambric Maker",
		description:
			"a person who made a fine linen or cotton fabric called cambric."
	},
	{ name: "Camerist", description: "a lady's maid." },
	{ name: "Camister", description: "a minister of the cloth" },
	{
		name: "Camlet Merchant",
		description:
			"a seller of camlet, cloth used to make cloaks &amp; petticoats."
	},
	{ name: "Campaner", description: "bell Maker" },
	{ name: "Cancellarius", description: "chancellor." },
	{ name: "Candle Maker or Candler", description: "one who made candles" },
	{
		name: "Candy Man",
		description:
			"a travelling candy salesman, or a slang name for a bailiff."
	},
	{
		name: "Caner or Chair Bottomer",
		description: "made the seats for chairs out of woven cane"
	},
	{ name: "Cannaller", description: "canal boat worker" },
	{
		name: "Canter",
		description:
			"a religious speaker who uses cant, or a beggar or vagrant."
	},
	{ name: "Canting Caller", description: "an auctioneer" },
	{ name: "Canvaser or Canvasser", description: "one who made canvas" },
	{ name: "Cap Cutter", description: "cut cloth to make caps" },
	{ name: "Cap Machinist", description: "machined caps" },
	{ name: "Cap Maker", description: "made caps" },
	{ name: "Cap Makers Apprentice", description: "apprentice to above" },
	{
		name: "Cap Manufacturer",
		description: "owner of a cap making factory or establishment"
	},
	{ name: "Caper or Capper", description: "cap maker" },
	{
		name: "Capillaire Maker",
		description: "a person who made orange flavoured syrup."
	},
	{
		name: "Capitalist",
		description:
			"a person who provided private capital or wealth for the productionand distribution of goods."
	},
	{
		name: "Captain",
		description:
			"in charge of a ship or a group of soldiers and also a term for anoverseer or boss"
	},
	{
		name: "Card Nailer",
		description:
			"a person who maintained the teeth (nails) on the carding machineused for preparing wool and cotton for weaving."
	},
	{
		name: "Carder",
		description:
			"a person who operated a carding machine used to prepare wool andcotton for weaving by removing the knots and tangles."
	},
	{
		name: "Cardmaker",
		description:
			"a person who made the handheld implement used for carding wool andcotton, or a maker of playing cards."
	},
	{
		name: "Cardroomer",
		description:
			"a person who worked in the carding room of the cotton mills."
	},
	{ name: "Caretaker", description: "takes care of another's property" },
	{
		name: "Carman, Carrier or Carter",
		description: "drove a vehicle used to transport goods"
	},
	{
		name: "Carman Contractor",
		description: "carman contracted to a company"
	},
	{
		name: "Carman with Mineral Waters",
		description: "carman delivering water"
	},
	{ name: "Carman, Railway", description: "carman working for the railway" },
	{ name: "Carman's Assistant", description: "assisted - obvious really" },
	{ name: "Carner", description: "a granary keeper" },
	{ name: "Carnifex", description: "a Butcher" },
	{ name: "Carpentarius", description: "a Carpenter" },
	{ name: "Carpenter &amp; Joiner", description: "skilled woodworker" },
	{ name: "Carpenter's Labourer", description: "assisted - obvious really" },
	{
		name: "Carpet and rug manufacture",
		description: "made carpets and rugs"
	},
	{ name: "Carpet Weaver", description: "wove carpets" },
	{ name: "Carriage Painter", description: "painted carriages" },
	{
		name: "Carrier",
		description: "a person who drove a vehicle used to transport goods."
	},
	{ name: "Cart Boy", description: "junior version of a carman I'd guess" },
	{
		name: "Cart Minder in Market",
		description: "a boy who looked after a stall in a market"
	},
	{ name: "Cart Wheeler", description: "made cart wheels" },
	{ name: "Carter", description: "a carman, carrier, drayman or wagoner." },
	{ name: "Cartographer", description: "map maker" },
	{ name: "Cartomancer", description: "a fortune teller who used cards." },
	{
		name: "Cartridge Maker",
		description: "made cartridges for the firearms industry"
	},
	{ name: "Cartwright", description: "maker of carts &amp; wagons" },
	{ name: "Case Maker", description: "made cases (often packing cases)" },
	{
		name: "Cashmarie",
		description: "a person who sold fish usually at inland markets."
	},
	{
		name: "Caster or Castor",
		description:
			"a person who made small bottles used for sprinkling salt, pepper,sugar etc."
	},
	{
		name: "Castrator",
		description: "a person who castrated farm animals aka a Gelder."
	},
	{ name: "Catagman", description: "a cottager" },
	{
		name: "Catchpole or Catchpoll",
		description: "a bailiff or sheriffs officer."
	},
	{ name: "Catechist", description: "a teacher of religion." },
	{ name: "Cattle Drover", description: "drove cattle" },
	{
		name: "Cattle Jobber",
		description: "a person who bought and sold cattle."
	},
	{
		name: "Caulker",
		description:
			"filled up cracks and seams in ships or barrels to make themwatertight using tar or oakum-hemp fibre"
	},
	{
		name: "Causewayer",
		description: "a person who was involved in road repairs."
	},
	{
		name: "Cautioner",
		description: "guarantor, one who acts as security for another."
	},
	{ name: "Ceiler", description: "puts up the ceilings in buildings" },
	{ name: "Cellar Boy", description: "boy who worked in a cellar" },
	{
		name: "Cellarman",
		description:
			"looked after the beer, wines and spirits in public<br />houses and warehouses"
	},
	{
		name: "Cellarman Winestores",
		description: "looked after the beer, wines and spirits in wine stores"
	},
	{
		name: "Cemmer",
		description: "a person who hand combed the yarn before weaving."
	},
	{ name: "Chaff Cutter", description: "made chaff by cutting straw" },
	{ name: "Chafferer", description: "dealer in chaff" },
	{ name: "Chain Maker", description: "made chains" },
	{ name: "Chair Bodger", description: "traveling chair repairman" },
	{ name: "Chair Maker", description: "made chairs" },
	{
		name: "Chaise Driver",
		description:
			"the driver of a two wheeled, one or two person, light open carriagewith a hood that may be let down."
	},
	{ name: "Chaisemaker", description: "carriage maker" },
	{
		name: "Chaloner",
		description:
			"a dealer in shalloon, a material made in Chalons, or a person whomade blankets."
	},
	{
		name: "Chamberlain",
		description:
			"steward to either royalty or nobility, in charge of the household"
	},
	{
		name: "Chambermaid",
		description: "female servant attending to bedrooms in houses or inns"
	},
	{
		name: "Chamber Master",
		description:
			"a shoemaker that worked from home as an outworker or selling direct."
	},
	{
		name: "Chandler",
		description: "grocer, dealer or trader; one who makes or sells candles"
	},
	{ name: "Chandler Shop Asst", description: "assisted - obvious really" },
	{
		name: "Chanty Man or Shanty Man",
		description: "sailor that led the singing of shanties on board ship"
	},
	{ name: "Chapeler", description: "made and sold hats" },
	{
		name: "Chapman or Copeman",
		description:
			"itinerant dealer or peddler of goods, or a keeper of a booth orstall in a market"
	},
	{ name: "Char", description: "cleaner" },
	{
		name: "Charcoal Burner",
		description:
			"made charcoal usually in the woods where the trees were cut"
	},
	{
		name: "Chartmaster",
		description:
			"a middleman that negotiated mining contracts and supplied thelabour."
	},
	{ name: "Charwoman / Char", description: "cleaning woman" },
	{ name: "Chaser", description: "an engraver" },
	{ name: "Chatelaine", description: "the mistress of a castle or house." },
	{ name: "Chaunter", description: "street entertainer who sung ballads" },
	{
		name: "Cheese Factor or Monger, or Cheeseman",
		description: "dealer in cheeses"
	},
	{ name: "Chesterman", description: "a guard." },
	{ name: "Chest Maker", description: "made chests" },
	{
		name: "Chiffonier or Chiffonnier",
		description: "wig maker or ragpicker"
	},
	{
		name: "Childbed Linen Warehouse Keeper or Dealer",
		description:
			"a person who hired bedlinen for use at child-birth as most childrenwere born at home in the 19th century."
	},
	{ name: "Children's Boot Maker", description: "made boots for children" },
	{
		name: "Chimney Sweep or Sweep",
		description: "swept the soot out of chimneys"
	},
	{
		name: "China &amp; Glass Dealer",
		description: "sold china and glassware"
	},
	{ name: "Chinglor", description: "a rooftiler who used wooden shingles." },
	{ name: "Chip or Chippy", description: "shipwright or carpenter" },
	{
		name: "Chipper's Labourer",
		description: "an assistant to a shipwright or ships carpenter."
	},
	{
		name: "Chiropodist",
		description: "a person who treats diseases of the feet &amp; hands."
	},
	{
		name: "Chirugion or Chirurgeon",
		description: "an apothecary or surgeon."
	},
	{ name: "Chowder", description: "fish monger" },
	{
		name: "Chronologist",
		description:
			"a person who recorded official events of historical importance."
	},
	{ name: "Cigar Box Maker Cutter", description: "cut and made cigar boxes" },
	{ name: "Cigar Box Paperer", description: "lined cigar boxes with paper" },
	{ name: "Cigar Maker", description: "made cigars" },
	{ name: "Cigar Maker's Apprentice", description: "apprentice to above" },
	{
		name: "Cigar Sorter &amp; Bundler",
		description: "sorted and bundled cigars"
	},
	{
		name: "Cigar Stripper",
		description: "tobacco stripper, part of the cigar making process"
	},
	{ name: "Cigarette Cutter", description: "cut cigarettes" },
	{ name: "Cigarette Maker", description: "made cigarettes" },
	{
		name: "Cinder Wench",
		description:
			"female who collected cinders from gas works and sold them door todoor"
	},
	{ name: "Circuit Rider", description: "traveling Preacher" },
	{ name: "Cissor", description: "a tailor." },
	{ name: "Claker", description: "a magician or astrologer." },
	{ name: "Clapman", description: "a man who took a person to prison." },
	{ name: "Clark, Clarke or Clericus", description: "clerk" },
	{ name: "Classman", description: "an unemployed labourer." },
	{ name: "Claviger", description: "a Servant" },
	{
		name: "Clay Carrier",
		description: "an assistant to the shot firer in the pits."
	},
	{
		name: "Clayman",
		description:
			"one who worked in the clay pits, preparing the clay for makingbricks, or a person who coated the outside of buildings with clay tomake them water proof."
	},
	{ name: "Cleaner, Char", description: "domestic cleaner" },
	{
		name: "Clerk",
		description: "general clerical work, also can mean clergyman, cleric"
	},
	{ name: "Clerk (C.C.)", description: "commercial clerk" },
	{
		name: "Clerk in Holy Orders",
		description: "a Clergyman, cleric or priest."
	},
	{ name: "Clerk (Junior)", description: "obvious really" },
	{ name: "Clerk Secretary", description: "secretarial clerk" },
	{
		name: "Clicker",
		description:
			"one who made eyelet holes or uppers in boots using a machine whichclicked, or a person in charge of the final stage of layout beforeprinting in the print industry, or the servant of a salesman whostood at the door to invite customers in."
	},
	{
		name: "Clipper, Clipper on, or Clipper Off",
		description:
			"one who attached the coal carts to the rope which was used to dragthe carts to and from the coal face in the mines."
	},
	{ name: "Clock Maker", description: "made clocks" },
	{ name: "Clod Hopper", description: "plowman or ploughman" },
	{ name: "Clog Dancer", description: "street entertainers - Actors" },
	{ name: "Clogger", description: "a clog maker (wooden shoes)." },
	{ name: "Cloth Cutter", description: "cut cloth" },
	{
		name: "Clothesman or Clothier",
		description: "a person who made or sold clothes."
	},
	{
		name: "Cloth Lapper",
		description:
			"a person who took the cloth from the carding machine and made itready for the next process."
	},
	{
		name: "Cloth Linter or Picker",
		description:
			"a person who removed unwanted threads and lint from the finishedmaterial."
	},
	{ name: "Cloth Presser", description: "pressed cloth" },
	{ name: "Clothes Cutter", description: "cut clothes" },
	{ name: "Clothier", description: "who made or sold clothes" },
	{ name: "Clothier's Cutter", description: "cut clothes" },
	{
		name: "Clouter",
		description:
			"a person who made nails. Also another term for a shoemaker."
	},
	{ name: "Clower", description: "a person who made nails." },
	{ name: "Club Proprietor", description: "manager of a club" },
	{ name: "Coach Maker", description: "made coaches" },
	{ name: "Coach Painter", description: "painted coaches" },
	{
		name: "Coachman",
		description:
			"drove a coach, or acted as a guard, or looked after the horses"
	},
	{
		name: "Coal Backer",
		description:
			"a person employed to carry the sacks of coal from the coal barge tothe coal wagons."
	},
	{ name: "Coal Burner", description: "a person who made charcoal." },
	{
		name: "Coal Dealer &amp; Greengrocer",
		description: "sold fruit and vegetables as well as coal"
	},
	{
		name: "Coal Drawer",
		description:
			"worked in the mines pushing or dragging the coal carts to the bottomof the pit"
	},
	{
		name: "Coal Heaver",
		description:
			"a person employed to move coal e.g. from boat to shore or from shoreto boat."
	},
	{
		name: "Coal Higgler or Coalman",
		description:
			"a person who sold coal usually from a horse and cart, house tohouse."
	},
	{ name: "Coal merchant/dealer", description: "sold coal" },
	{ name: "Coalmeter", description: "a person who measured the coal." },
	{ name: "Coal mine service", description: "worked in a coal mine" },
	{ name: "Coal Miner", description: "worked in a coal mine" },
	{
		name: "Coal Porter or Coal Bearer",
		description: "carried and delivered coal"
	},
	{ name: "Coalheaver, Coal labourer", description: "similar" },
	{
		name: "Coal Runner",
		description: "a person who attended the coal carts underground."
	},
	{
		name: "Coal Whipper",
		description:
			"one employed to unload coal from ships using baskets attached to asimple form of crane."
	},
	{
		name: "Coast Surveyor or Waiter",
		description:
			"a customs officer who watched over the off-loading of goods on thecoast."
	},
	{ name: "Cobbler", description: "one who mended shoes and boots." },
	{
		name: "Cobleman",
		description: "a person who used a flat bottomed boat for fishing."
	},
	{
		name: "Cockfeeder",
		description: "a person who looked after fighting cocks."
	},
	{ name: "Cocoa Nut Opener", description: "opened cocoa nuts" },
	{ name: "Cocus", description: "a cook" },
	{
		name: "Cod Placer",
		description:
			"a person who put the fire proof containers which held the potteryfor firing into the kiln."
	},
	{ name: "Coffee House Manager", description: "managed a coffee house" },
	{
		name: "Coffee House/Shop Keeper",
		description: "kept a coffee house or coffee shop"
	},
	{ name: "Coffin Maker", description: "made coffins" },
	{
		name: "Coffin Maker, Undertaker",
		description: "made coffins and took care of funeral arrangements"
	},
	{ name: "Cohen", description: "a priest" },
	{
		name: "Coiner",
		description: "a person who worked at the Mint stamping out coins."
	},
	{ name: "Collar Cutter, Shirt", description: "cut collars for shirts" },
	{ name: "Collar Dresser Shirt", description: "fitted collars onto shirts" },
	{ name: "Collar Ironer", description: "ironed collars on shirts" },
	{
		name: "Collar Maker",
		description: "made horse collars or shirt collars"
	},
	{
		name: "Collier",
		description:
			"coal miner, a coal merchant or one who worked on the coal barges"
	},
	{
		name: "Colour Man",
		description:
			"mixed the dyes in the textile trade and also assistant to a housepainter"
	},
	{
		name: "Colourator or Colorator",
		description: "a person who worked with dyes."
	},
	{
		name: "Colporteur",
		description: "peddler of books, sometimes religious books."
	},
	{
		name: "Colt",
		description:
			"a name for unskilled workers. Used to describe women and childrenworking in the framework knitting trade."
	},
	{
		name: "Comb Maker",
		description:
			"a person who made combs either for the textile industry for combingwool etc. or the maker of hair combs."
	},
	{
		name: "Comber",
		description: "one who operated a combing machine in the mills."
	},
	{ name: "Combere", description: "a person who combs wool." },
	{ name: "Commercial Agent", description: "another name for an agent" },
	{ name: "Commercial Clerk", description: "another name for a clerk" },
	{
		name: "Commercial Traveller",
		description: "another name for a travelling salesman"
	},
	{
		name: "Compositor, Printer",
		description: "set the type ready for printing"
	},
	{
		name: "Conder",
		description:
			"a person on shore who gave directions to fisherman as to themovements of the shoals of fish (usually from the top of cliffs)."
	},
	{ name: "Coney Catcher", description: "rabbit catcher" },
	{ name: "Confectioner", description: "maker of sweets" },
	{ name: "Conner", description: "an inspector or tester." },
	{ name: "Contriver", description: "an inventor, or a schemer or plotter." },
	{ name: "Conveyor", description: "a grantor or seller." },
	{ name: "Cook", description: "someone who cooks food" },
	{
		name: "Cook, Domestic",
		description: "someone who cooks food domestically"
	},
	{
		name: "Cooper or Cuper",
		description:
			"makes or repairs barrels or other vessels made of staves &amp;hoops, such as casks, tubs, vats, etc"
	},
	{
		name: "Copeman",
		description: "dealer in goods, or a dishonest dealer in horses."
	},
	{
		name: "Coper",
		description: "a horse dealer. Sometimes a dishonest horse dealer."
	},
	{
		name: "Copperbeater or Copperbeter",
		description: "a coppersmith, someone who worked with copper or brass."
	},
	{ name: "Copper miner", description: "mined copper ore" },
	{
		name: "Coppersmith's Labourer",
		description: "assisted - obvious really"
	},
	{
		name: "Coppice Keeper",
		description: "a person who looks after a small wood."
	},
	{
		name: "Coracle Maker",
		description:
			"a person who made coracles, small round boats used for inland waterfishing."
	},
	{
		name: "Cordiner or Cordwainer",
		description:
			"a shoemaker. Also a person who worked with Cordovan, a special softleather from Spain."
	},
	{ name: "Cork Cutter", description: "a person who worked with cork." },
	{ name: "Cork Porter", description: "one who carried cork" },
	{ name: "Corn Chandler", description: "sold corn" },
	{ name: "Corn Cutter", description: "a podiatrist." },
	{
		name: "Cornet",
		description: "the lowest commissioned rank in a cavalry regiment."
	},
	{ name: "Corn Factor", description: "a middleman in corn deals." },
	{
		name: "Corn Meter",
		description: "an official who measured and weighed the corn at market."
	},
	{ name: "Corn Porter", description: "carried corn" },
	{ name: "Correspondent", description: "journalist or writer" },
	{ name: "Corset Maker, Bone", description: "made corsets" },
	{
		name: "Corver",
		description:
			"a person who made baskets used in coal mining known as corves."
	},
	{
		name: "Coster",
		description:
			"peddlar, hawker, seller of goods on the street, sometimes fruit, butnot always"
	},
	{
		name: "Coster Monger or Costermonger",
		description:
			"fruit seller, or peddler, hawker, seller of goods on the street"
	},
	{ name: "Coster Wife", description: "female fruit seller" },
	{
		name: "Coteler or Cotyler",
		description: "a person who made and repaired knives."
	},
	{ name: "Cotiler", description: "a cutler" },
	{
		name: "Cottager, Cottar, Cotter or cottier",
		description:
			"an agricultural labourer who lived in a cottage on the landownersfarm."
	},
	{
		name: "Cotton Feeder",
		description:
			"a person employed in the cotton mills to feed the cotton into theloom."
	},
	{ name: "Cotton Winder", description: "wound cotton" },
	{
		name: "Coucher",
		description: "a person employed in the paper making trade."
	},
	{ name: "Countour", description: "a person who collected rates." },
	{
		name: "Couper",
		description: "a dealer, Buys and sells, usually cattle and horses."
	},
	{
		name: "Couple Beggar",
		description:
			"an itinerant priest who performed marriages without licence orbanns."
	},
	{
		name: "Coupler",
		description:
			"a person employed in the coal mines coupling the coal tubs together."
	},
	{ name: "Couranteer", description: "a journalist." },
	{
		name: "Court Factor",
		description: "a person who bought and sold courts (small carts)."
	},
	{
		name: "Court Roller",
		description: "a person in charge of the court rolls and records."
	},
	{
		name: "Court Toolmaker",
		description:
			"a manufacturer of tools used to produce carts known as courts."
	},
	{
		name: "Courtier",
		description:
			"the owner and driver of a horse and cart known as a court."
	},
	{ name: "Cow Boy, Milk", description: "milked cows" },
	{ name: "Cowherd", description: "a person who looked after cows." },
	{
		name: "Cowkeeper, Cowman or milkseller",
		description:
			"kept one or more cows and sold the milk from the front door, or fromdoor to door"
	},
	{ name: "Cow Leech", description: "an animal doctor." },
	{
		name: "Coxwain",
		description:
			"ship or boat helmsman, or a member of the crew that gave thesteering instructions to the helmsman"
	},
	{ name: "Crayman", description: "driver of a cart carrying heavy loads." },
	{
		name: "Crier",
		description: "law court officer, auctioneer, town announcer"
	},
	{ name: "Crimper", description: "a member of navy press gang." },
	{ name: "Crocker", description: "potter" },
	{ name: "Crofter", description: "tenant of a small piece of land" },
	{
		name: "Cropper",
		description:
			"tenant who is paid with a share of the crop, or a skilled worker inthe Yorkshire weaving trade who sheared the nap from cloth."
	},
	{ name: "Crowner", description: "a Coroner" },
	{ name: "Cuhreur or Cunreur", description: "a currier." },
	{ name: "Culler", description: "a gelder of male animals." },
	{ name: "Curer", description: "cures tobacco or pork" },
	{ name: "Curretter", description: "a Broker." },
	{
		name: "Currier",
		description:
			"one who dresses the coat of a horse with a curry comb, or one whocures or tans hides"
	},
	{
		name: "Customer or Customs Officer",
		description: "a customs tax collector."
	},
	{ name: "Cutler", description: "knife seller or sharpener" },
	{ name: "Cutter", description: "one who cuts things" },
	{
		name: "Daguerreotype Artist",
		description:
			"an early name for a photographer (from the Daguerreotype method)."
	},
	{
		name: "Dairyman",
		description:
			"worker or owner of a dairy farm or seller of dairy products"
	},
	{ name: "Damster", description: "a builder of dams for logging purposes." },
	{
		name: "Danter",
		description: "female overseer in the winding rooms of a silk mill"
	},
	{ name: "Dareman", description: "a Dairyman" },
	{ name: "Daunsel", description: "a gentleman in waiting; groom; squire" },
	{
		name: "Day Man",
		description:
			"a casual worker, usually employed and paid by the day, the term wasused in many different industries and trades."
	},
	{ name: "Dealer in Building Material", description: "obvious really" },
	{ name: "Dealer in Books", description: "ditto" },
	{ name: "Dealer in Dogs", description: "ditto" },
	{ name: "Dealer in Handcarts", description: "ditto" },
	{ name: "Dealer in second hand clothes", description: "ditto" },
	{ name: "Dealer, Shop", description: "shopkeeper, all kinds" },
	{ name: "Deathsman", description: "an Executioner." },
	{
		name: "Decimer",
		description:
			"a person elected by the householders in a street to act as theirrepresentative at the borough's Court Leet."
	},
	{ name: "Decorator", description: "decorates houses" },
	{
		name: "Decoyman",
		description:
			"a person employed to decoy the wild fowl, animals, etc, into a trapor within shooting range."
	},
	{
		name: "Decretist",
		description: "a person knowledgeable in decrees, decretals."
	},
	{
		name: "Deemer, Deemster, Demster or Dempster",
		description: "a judge, often in the Channel Isles or Isle of Man."
	},
	{ name: "Delivery Clerk", description: "clerk in charge of delivery" },
	{ name: "Delver", description: "dug ditches" },
	{ name: "Dentist", description: "fixed teeth" },
	{ name: "Departer", description: "a refiner of precious metals." },
	{
		name: "Deputy",
		description: "safety officer for the pit crew in the mining industry."
	},
	{
		name: "Deputy, Lodging House",
		description: "made sure that everyone paid for their bed"
	},
	{
		name: "Derrickman",
		description:
			"a person who worked on an oil well handling the tubes and rods usedin drilling."
	},
	{ name: "Devil", description: "printer's errand boy" },
	{
		name: "Deviller",
		description:
			"operated the devil, a machine that tore rags used in the textileindustry"
	},
	{ name: "Dexter", description: "a dyer" },
	{ name: "Dey Wife", description: "female dairy worker" },
	{ name: "Diamond Polisher", description: "polished diamonds" },
	{
		name: "Digger",
		description:
			"a person who worked at the coal face in a mine, or a day labourer ina stone or slate quarry."
	},
	{ name: "Dikeman", description: "a hedger or ditcher." },
	{
		name: "Dipper",
		description:
			"worked in the pottery trade and was responsible for the glazing ofitems"
	},
	{
		name: "Dish Thrower, or Disher",
		description: "a person who made bowls and dishes from clay."
	},
	{
		name: "Dish Turner",
		description: "a person who made wooden bowls or dishes."
	},
	{
		name: "Distiller",
		description:
			"a person who made alcoholic beverages by distillation - spirits.Also called a Rectifier."
	},
	{
		name: "Distributor",
		description:
			"a parish official attached to the workhouse or poorhouse who lookedafter the secular needs of the poor."
	},
	{ name: "Dock Cooper", description: "a cooper who worked on the dock" },
	{
		name: "Docker",
		description: "stevedore, dock worker who loads &amp; unloads cargo"
	},
	{
		name: "Dock Laborer",
		description:
			"american spelling of general labourer who worked on the dock"
	},
	{
		name: "Dock Labourer",
		description: "general labourer who worked on the dock"
	},
	{ name: "Dock Master", description: "in charge of a dockyard" },
	{ name: "Dock Porter", description: "a porter who worked on the dock" },
	{ name: "Dock Walloper", description: "a dock worker, or Longshoreman." },
	{ name: "Doctor's Lad, Porter", description: "doctor's assistant" },
	{ name: "Dog Breaker", description: "a person who trained dogs." },
	{
		name: "Dog Killer",
		description:
			"a person employed by the parish to kill any dogs found wanderingaround loose."
	},
	{ name: "Dog Leech", description: "a veterinarian." },
	{ name: "Dog Muzzle Maker", description: "made dog muzzles" },
	{
		name: "Dog Whipper",
		description:
			"when foxes were hunted for bounty the tail of the fox was nailed tothe church door as proof of capture. The Dog Whipper was employed todeal with the dogs which disrupted the church service, attracted bythe tails."
	},
	{ name: "Domesman", description: "nickname for a judge." },
	{
		name: "Domestic, Dom or Domestic Servant",
		description: "household servant"
	},
	{
		name: "Donkey Boy or Man",
		description: "the driver of a carriage for passengers."
	},
	{ name: "Door Keeper", description: "guard, janitor, or porter" },
	{ name: "Dorcas", description: "a seamstress." },
	{
		name: "Doubler",
		description:
			"a person who operated a machine used to twist together strands ofcotton, wool or other fibre."
	},
	{
		name: "Dowser or Diviner",
		description:
			"someone who claims to be able to find water underground, using aforked rod or witching stick made of hazel."
	},
	{
		name: "Dragman",
		description:
			"a fisherman who fished by dragging a net along the bottom of thewater."
	},
	{ name: "Dragoman", description: "a Turkish or Arabic interpreter." },
	{ name: "Dragoon", description: "a cavalryman." },
	{ name: "Drainer", description: "a person who made drains." },
	{
		name: "Draper",
		description:
			"dealer in fabrics and sewing needs, cotton, linen and woollen, or adealer in dry goods"
	},
	{ name: "Draper Come Traveller", description: "travelling draper" },
	{ name: "Draper's Assistant", description: "assisted - obvious really" },
	{ name: "Draper's Porter", description: "carried stuff for a draper" },
	{
		name: "Drapery Painter",
		description:
			"one whose painting skills were not that good, they usually finishedpaintings for the artists by painting on the clothes of the subject,hence Drapery Painter."
	},
	{ name: "Draughtsman", description: "drew technical drawings" },
	{
		name: "Draughtsman Engineer",
		description: "got a degree and drew technical drawings"
	},
	{
		name: "Drawboy",
		description:
			"a weavers assistant in the shawl making mills. They sat atop thelooms and lifted the heavy warps."
	},
	{
		name: "Drawer",
		description:
			"a person who made wire by drawing the metal through a die, or aperson who raised the coal up the shaft to the surface in a mine."
	},
	{
		name: "Dray Man or Drayman",
		description:
			"one who drives a long strong 4 wheeled cart called a dray, withoutfixed sides for carrying loads, usually beer kegs"
	},
	{
		name: "Dredgerman",
		description:
			"a person who went on the River Thames in a boat to collect thedebris that had fallen overboard from other vessels which they wouldthen sell. Also an Oyster Fishermen."
	},
	{ name: "Dress Fitter", description: "fitted dresses" },
	{ name: "Dress Maker", description: "made dresses" },
	{
		name: "Dresser",
		description:
			"a surgeon's assistant in a hospital, or a person who preparedthings, e.g. clothing for a noble person, food, etc. Also a personwho operated a machine that prepared threads in the textileindustry."
	},
	{ name: "Dressing Gown Maker", description: "made dressing gowns" },
	{
		name: "Dressing Machine Maker",
		description: "a person who made sewing machines."
	},
	{
		name: "Dressmaker",
		description: "a person who made clothing, particularly dresses."
	},
	{
		name: "Drift Maker",
		description:
			"a person who made drift nets, used in the fishing industry."
	},
	{
		name: "Dripping Man",
		description:
			"dealer in dripping (the fat collected during the cooking of meats)"
	},
	{ name: "Driver", description: "a slave overseer." },
	{
		name: "Drover",
		description:
			"one who drove cattle, sheep to market, also a dealer in cattle."
	},
	{ name: "Drugger", description: "a Chemist or Pharmacist." },
	{ name: "Druggist", description: "prepared drugs for sale" },
	{ name: "Drug Grinder", description: "ground drugs to a powder" },
	{
		name: "Drum Battledore Maker",
		description:
			"a person who made galvanised metal drums fitted with paddles used asmechanical agitators in washing machines (battledore is the name ofthe bat shaped paddles)."
	},
	{ name: "Drum Maker", description: "made drums" },
	{ name: "Drummer", description: "traveling salesman" },
	{
		name: "Dry Salter",
		description:
			"a dealer in pickles, dried meats, salted meats, and sauces. A dealerin dyes and colours used in the dying trade. Also a person who madeor dealt in salt."
	},
	{
		name: "Dry Stone Waller",
		description:
			"a person who built stone walls usually using the stones removed fromthe fields as building materials. The art was in not using anycement or mortar. Dry Stane Dyker - Scottish term for the samething."
	},
	{
		name: "Dubbere",
		description: "a cloth dubber, someone who raises the nap of the cloth."
	},
	{ name: "Dudder", description: "a maker of coarse cloaks." },
	{ name: "Duffer", description: "peddler of cheap goods" },
	{
		name: "Dustman or Dustbin Man",
		description: "collected domestic refuse, a garbage collector"
	},
	{
		name: "Dyer",
		description:
			"employed in the textile mills to color fabric prior to weaving"
	},
	{ name: "Dykeman or Dysshere", description: "a hedger or ditcher." },
	{ name: "Dyker", description: "scottish term for a stonemason." },
	{
		name: "Ealdorman",
		description:
			"an official of the shire courts who acted as the King's deputytaking payment from the profits of the court."
	},
	{ name: "Earer", description: "a ploughman." },
	{
		name: "Earthenware manufacture",
		description: "made earthenware products; plantpots etc"
	},
	{
		name: "Earth Stopper",
		description:
			"a person employed to close up the entrances of a fox's earth beforethe hunt began."
	},
	{
		name: "East India Man",
		description:
			"a person employed by the East India Company, on a commercial ormilitary basis."
	},
	{
		name: "Ebonite Turner",
		description:
			"a person who worked with ebonite or vulcanite, making combs orornaments."
	},
	{
		name: "Edge Tool Maker",
		description:
			"blacksmith who made knives and agricultural implements such asscythes."
	},
	{
		name: "Egg Dealer, Egg Factor or Eggler",
		description: "egg or poultry dealer"
	},
	{
		name: "Elephants Teeth Dealer",
		description: "a person who dealt in ivory ornaments etc."
	},
	{ name: "Electrician", description: "did electical work" },
	{ name: "Electro typer", description: "type setter for a printer" },
	{
		name: "Ellerman, Elliman or Oilman",
		description: "one who sold oil used for lamps"
	},
	{ name: "Elymaker", description: "an oilmaker" },
	{
		name: "Embosser",
		description:
			"moulded or carved designs that were raised above the surface of thematerial"
	},
	{ name: "Embroider", description: "makes embroidery" },
	{
		name: "Empresario",
		description: "a land broker, settlement scheme promoter, showman."
	},
	{ name: "Endholdernn", description: "an inn keeper" },
	{
		name: "Engine and machine maker",
		description: "makes engines and machines"
	},
	{
		name: "Engine driver, stoker",
		description: "drives an engine and stokes the boiler"
	},
	{
		name: "Engineer",
		description:
			"a person who designed roads, bridges, or machinery. Also a personwho drove or serviced any machinery e.g. engine drivers."
	},
	{ name: "Engineer's Apprentice", description: "apprentice to above" },
	{ name: "Engine Fitter", description: "fitted engines" },
	{
		name: "Engineman",
		description:
			"employed at a mine to be in charge of the machinery in the enginehouse used to crush and transport the ore."
	},
	{
		name: "Engine Tenter",
		description:
			"a person who operated the machine which stretched the cloth whilstdrying in a woollen mill."
	},
	{
		name: "Engine Turner",
		description:
			"an engraver who produced overlaping geometric patterns on fancygoods. Engine turning was commonly seen on ladies powder compactsand other such items."
	},
	{
		name: "Engraver",
		description:
			"one who cuts or carves designs or lettering in metal or stone etc."
	},
	{
		name: "Enumerator",
		description:
			"collected and recorded the information for the census from thehouseholder"
	},
	{ name: "Envelope Cutter", description: "cut envelopes" },
	{ name: "Envelope Folder", description: "folded envelopes" },
	{ name: "Envelope Stamper", description: "stamped envelopes." },
	{
		name: "Equerry",
		description:
			"an officer of the Royal household usually responsible for the royalhorses."
	},
	{ name: "Eremite", description: "a Hermit." },
	{ name: "Erite", description: "an heretic." },
	{ name: "Errand Boy", description: "obvious really" },
	{ name: "Errand Girl", description: "ditto" },
	{
		name: "Esquire",
		description:
			"attended a knight, carried his shield among other things. Later itbecame a title for a man of standing in society, by birth, positionor education."
	},
	{ name: "Estafette", description: "a mounted courier." },
	{
		name: "Etcher",
		description:
			"a person who cuts or carves designs or lettering in metal or stoneetc. A person who made the plates for printing patterns on cloth orbanknotes. An Engraver."
	},
	{ name: "Ewe Herd", description: "a shepherd." },
	{ name: "Exchequer", description: "revenue collector" },
	{ name: "Exciseman", description: "excise tax collector" },
	{ name: "Executrix", description: "a female Executor." },
	{ name: "Export Clothier", description: "&nbsp;" },
	{ name: "Expressman", description: "one who delivered mail" },
	{
		name: "Eyer or Holer",
		description: "one who made eyes in needles used for sewing"
	},
	{ name: "Faber", description: "artisan or workman, a smith." },
	{ name: "Fabricator", description: "a maker" },
	{
		name: "Factor",
		description:
			"an agent employed by merchants to transact business of buying andselling"
	},
	{
		name: "Factor Agent",
		description:
			"merchant for commission or factor, one who transacts business foranother (usually absent)."
	},
	{ name: "Factory Girl", description: "&nbsp;" },
	{ name: "Factory Labourer", description: "&nbsp;" },
	{ name: "Factory Lad", description: "&nbsp;" },
	{
		name: "Fagetter",
		description: "made up faggots into bundles, seller of firewood"
	},
	{
		name: "Faker",
		description:
			"photographic assistant who added colour to photographs by handbefore colour film was available."
	},
	{
		name: "Falconer or Falkner",
		description: "breeds, trains, or hunts with hawks"
	},
	{ name: "Fancy Basket Liner", description: "&nbsp;" },
	{ name: "Fancy Box Maker", description: "&nbsp;" },
	{ name: "Fancy Man", description: "pimp" },
	{
		name: "Fancy Pearl Worker",
		description: "worked in mother-of-pearl making buttons or fancy goods"
	},
	{ name: "Fancy Salesman", description: "&nbsp;" },
	{ name: "Fancy Trimmer", description: "&nbsp;" },
	{ name: "Fancy Woman", description: "prostitute" },
	{ name: "Fanner", description: "a grain winnower." },
	{
		name: "Fanwright",
		description: "a maker and repairer of fans or winnowing baskets."
	},
	{
		name: "Farandman&lt;.td&gt;",
		description:
			"a stranger or traveller, especially a travelling merchant."
	},
	{
		name: "Farmer",
		description:
			"often descendant of the gentry; usually having servants and farmworkers, or a tax-collector or bailiff."
	},
	{
		name: "Farmer, grazier",
		description: "a farmer who pastures and raises cattle."
	},
	{
		name: "Farrier",
		description: "a horse doctor, or a blacksmith, one who shoes horses"
	},
	{ name: "Farrier's Assistant", description: "obvious really/td&gt;" },
	{ name: "Faulkner", description: "a Falconer." },
	{ name: "Fawkner", description: "trainer of falcons" },
	{
		name: "Fear Nothing Maker",
		description:
			"a weaver of a special kind of thick woollen cloth known asfear-nought, used for protective clothing and lining portholes,walls, and doors of powder magazines on board ships."
	},
	{ name: "Feather Beater", description: "cleanser of feathers" },
	{
		name: "Feather Curler",
		description: "curled feathers to prepare them for use in hat making etc"
	},
	{
		name: "Feather Dresser",
		description: "cleaned and prepared feathers for sale"
	},
	{ name: "Feather Man", description: "dealer in feathers and plumes" },
	{
		name: "Feather Wife",
		description: "woman who prepared feathers for use"
	},
	{ name: "Feeder", description: "a herdsman." },
	{
		name: "Fell monger",
		description:
			"one who removes hair or wool from hides in preparation for leathermaking, or a dealer in hides &amp; sheepskins."
	},
	{
		name: "Feller",
		description:
			"a woodcutter, or a person who laid or felled seams in textiles."
	},
	{ name: "Felter", description: "worker in the hatting industry" },
	{
		name: "Fence Viewer",
		description: "a person who inspects farmer's fences."
	},
	{ name: "Feroner", description: "an ironmonger." },
	{
		name: "Ferreter",
		description: "dealer in or manufacturer of ferret, or silk tape."
	},
	{ name: "Ferur or Ferator", description: "a farrier or blacksmith." },
	{ name: "Festitian", description: "doctor or Physician" },
	{
		name: "Fettler",
		description:
			"cleaned the machinery in woollen mills, removing accumulated fibres, grease, etc, or one who sharpened the fustian cutters knives, or aneedlemaker who filed the needle to a point."
	},
	{ name: "Feuar", description: "a holder of lands granted for services" },
	{ name: "Fever", description: "a blacksmith." },
	{ name: "Fewster", description: "a maker of saddletrees." },
	{
		name: "Fewterer",
		description:
			"the keeper of hounds, for hunting or coursing. A keeper of greyhounds."
	},
	{ name: "Feydur Beater", description: "a feather beater." },
	{
		name: "File Cutter - Maker",
		description:
			"a maker of files, involved the cutting of grooves on the filesurface"
	},
	{ name: "Filler", description: "a person who filled bobbins in mills." },
	{
		name: "Fine Drawer",
		description:
			"one who is employed in tailoring to repair tears in the cloth. Invisible mending."
	},
	{
		name: "Finisher",
		description:
			"operated machine giving final touches to a manufactured article invarious trades"
	},
	{ name: "Finisher's Assistant", description: "assisted - obvious really" },
	{
		name: "Firebeater",
		description:
			"a person who tended the boilers that powered the machinery in acotton mill."
	},
	{
		name: "First Hand",
		description: "silk weaver who had his own loom (an outworker)"
	},
	{ name: "Fiscere", description: "a fisherman." },
	{ name: "Fish Curer", description: "cured fish" },
	{ name: "Fisher or Fishdryver", description: "a victualler" },
	{ name: "Fish Fag", description: "female fish monger" },
	{ name: "Fish Hawker", description: "sold fish on the street" },
	{ name: "Fish Monger", description: "sold fish from a shop" },
	{
		name: "Fish Porter",
		description: "carried and delivered boxes of fish in the fish market"
	},
	{ name: "Fisherman/woman", description: "caught fish" },
	{
		name: "Fitter",
		description:
			"a common term for a person who assembled several portions ofmachinery together, or a coal broker."
	},
	{
		name: "Flasher",
		description: "a specialist process worker in the glass industry."
	},
	{
		name: "Flatman",
		description:
			"navigated a broad flat-bottomed boat used for transport, especiallyin shallow waters. Common in the salt trade."
	},
	{ name: "Flauner", description: "a confectioner." },
	{ name: "Flaxdresser", description: "prepared flax prior to spinning" },
	{
		name: "Flesher",
		description:
			"a butcher or a person who worked in a tannery, or a nickname for apimp."
	},
	{ name: "Fleshewer", description: "a butcher." },
	{
		name: "Fleshmonger",
		description: "butcher or one who worked in a tannery"
	},
	{
		name: "Fletcher",
		description: "one who made bows and arrows; arrowsmith"
	},
	{ name: "Floater", description: "a vagrant." },
	{ name: "Florist", description: "sold flowers from a shop" },
	{ name: "Flower", description: "an archer (Flo-arrow)." },
	{
		name: "Flower Hawker/Seller/Coster",
		description: "sold flowers on the street"
	},
	{ name: "Flower Maker", description: "made flowers (artificial)" },
	{
		name: "Flower Worker",
		description: "worked in the flower trade; looking after growing flowers"
	},
	{ name: "Flusherman", description: "cleaned out water mains" },
	{
		name: "Flycoachman or Flyman",
		description: "driver of one-horse carriage hired by the day"
	},
	{ name: "Flying Stationer", description: "street broadsheet seller" },
	{
		name: "Flyman",
		description:
			"driver of a light vehicle hired out for carriage of passengers, or atheatre stage hand."
	},
	{
		name: "Fogger",
		description:
			"petty chapman, carrying wares from village to village, or amiddleman in the nail and chain trade, or an agricultural workerresponsible for feeding the cattle, or a low class lawyer(Pettifogger)."
	},
	{ name: "Foister or Foisterer", description: "a joiner." },
	{ name: "Foot Boy", description: "a servant or attendant in livery." },
	{ name: "Foot Maiden", description: "female servant" },
	{
		name: "Foot Man",
		description:
			"servant who ran errands, or one who opened the doors for passengers"
	},
	{ name: "Foot Pad", description: "thief or robber" },
	{
		name: "Foot Post",
		description: "letter carrier or messenger who travelled on foot"
	},
	{
		name: "Foot Straightener",
		description:
			"in watchmaking, a person who assembled watch and clock dials."
	},
	{
		name: "Foreman",
		description: "a person in charge in almost any industry"
	},
	{ name: "Forestarius", description: "a forester." },
	{ name: "Forester", description: "a game warden or forest ranger." },
	{
		name: "Forgeman, Smith or Forger",
		description: "blacksmith, worker at a forge"
	},
	{ name: "Forkner", description: "a falconer." },
	{ name: "Fossetmaker", description: "who made faucets for ale-casks, etc" },
	{ name: "Fower", description: "a street cleaner, sweeper." },
	{ name: "Fowler or Fugler", description: "keeper or catcher of birds" },
	{ name: "Framar", description: "a farmer" },
	{ name: "Frame Mounter", description: "mounted frames" },
	{ name: "Frame Spinner", description: "a worker on a loom." },
	{ name: "Framer", description: "a person who made frames for houses." },
	{
		name: "Framework Knitter",
		description:
			"an operator of a machine which made hosiery. Originally a hand loomwas used. Often abbreviated to FWK."
	},
	{ name: "Freedman", description: "one released from slavery" },
	{
		name: "Freeholder",
		description:
			"one who holds land by fee simple. In colonial times, a freeholderhad the right to vote and hold public office."
	},
	{
		name: "Freeman",
		description:
			"one who held the full rights of citizenship, such as voting andengaging in business, and a man who had served his apprenticeshipand who could then work at his trade in his own right."
	},
	{ name: "Freemason", description: "stonecutter" },
	{
		name: "French Polisher",
		description:
			"polished quality wooden furniture using French polish, wax orspecial lacquer"
	},
	{ name: "Frereman", description: "servant of the Friars." },
	{ name: "Freser", description: "a maker of frieze, a rough plaster." },
	{
		name: "Freshwater Man",
		description:
			"a sailor who sailed boat on fresh water only or in the coastaltrade."
	},
	{
		name: "Fringemaker",
		description: "a person who made fringes, ornamental borders of cloth."
	},
	{ name: "Fripperer", description: "a buyer &amp; seller of old clothes." },
	{ name: "Friseur", description: "a hairdresser." },
	{
		name: "Frobisher or Furbisher",
		description: "remover of rust, a polisher of metal, eg. armour"
	},
	{
		name: "Fruiterer or Fruit Salesman",
		description: "sold fruit from a shop"
	},
	{ name: "Fruitestere", description: "a female fruit seller." },
	{ name: "Fruit Hawker", description: "sold fruit on the street" },
	{ name: "Fruit Sorter", description: "sorted fruit" },
	{ name: "Fulker", description: "a pawnbroker" },
	{
		name: "Fuller",
		description:
			"fulls cloth; shrinks and thickens woollen cloth using fullers earthby moistening, heating, and pressing; one who cleans and finishescloth"
	},
	{ name: "Funambulist", description: "a tightrope walker." },
	{
		name: "Funeral Coachman",
		description: "drove a funeral coach or hearse."
	},
	{ name: "Funeral Wreath Maker", description: "made wreaths for funerals" },
	{ name: "Fur Cape Maker", description: "made fur capes" },
	{ name: "Fur Cutter", description: "cut fur" },
	{
		name: "Fur Dealer",
		description: "bought and sold fur and articles made from fur."
	},
	{ name: "Fur Dresser", description: "dressed fur" },
	{ name: "Fur Machinist", description: "machined fur" },
	{ name: "Fur Puller", description: "pulled fur" },
	{ name: "Fur Sewer", description: "sewed fur" },
	{ name: "Fur Trimmer", description: "trimmed fur" },
	{
		name: "Furbisher, Furber or Furbour",
		description: "armor polisher, see Frobisher"
	},
	{ name: "Furner", description: "baker" },
	{ name: "Furnisher", description: "dealt in furniture" },
	{
		name: "Furniture Labourer",
		description: "a labourer in the furniture industry"
	},
	{ name: "Furrier", description: "seller, dresser or maker of furs" },
	{ name: "Fustian Weaver", description: "a maker of corduroy." },
	{ name: "Gabeler", description: "a tax collector." },
	{
		name: "Gaffer",
		description: "foreman of a work crew, or an elderly rustic, an old man."
	},
	{ name: "Gaffman", description: "a bailiff" },
	{ name: "Gager", description: "a tax collector of liquor taxes." },
	{
		name: "Galvaniser",
		description: "iron worker who coated metal with zinc, to inhibit rust"
	},
	{
		name: "Gamekeeper",
		description:
			"looked after the grounds and protected the game against poachers ona country estate"
	},
	{ name: "Gamester", description: "gambler or prostitute" },
	{ name: "Ganger or Gangsman", description: "an overseer or foreman" },
	{ name: "Ganneker", description: "a tavern keeper." },
	{ name: "Gaoler", description: "a keeper of the gaol, a jailer" },
	{ name: "Garcifer or Garcio", description: "a groom, or attendant." },
	{ name: "Gardener", description: "looked after gardens" },
	{
		name: "Garlekmonger or Garlicmonger",
		description: "a dealer in garlic."
	},
	{
		name: "Garthman",
		description:
			"a yardman or herdsman, or one responsible for the upkeep of a garth,a dam built in a river to catch fish."
	},
	{
		name: "Gas Fitter &amp; Plumber",
		description:
			"fitted gas appliances; gas lamps initially, and lead piping"
	},
	{ name: "Gas Stoker", description: "stoked the fire in a gas works" },
	{ name: "Gater", description: "a watchman." },
	{
		name: "Gatherer",
		description:
			"a glassworker who inserted the blow iron into the molten glass readyfor the glass blower."
	},
	{
		name: "Gatherer's Boy",
		description:
			"a person who held a shovel to shield the gatherer's face from theheat of a fire or furnace."
	},
	{ name: "Gatward", description: "a goat keeper." },
	{
		name: "Gauger",
		description:
			"a customs official who measured the capacity of imported barrels ofliquor in order to calculate the customs duty."
	},
	{ name: "Gaunter", description: "a glover" },
	{
		name: "Gaveller",
		description:
			"a Usurer, or in the Forest of Dean, an officer of the Crown whogranted gales or the right to work a mine, or in Suffolk a harvestworker, usually female."
	},
	{ name: "Gelder", description: "a castrator of animals, usually horses." },
	{
		name: "General Dealer, Shop",
		description:
			"a shop that sold almost everything. General was often abreviated toGen, or Gen'l."
	},
	{
		name: "General Laborer",
		description: "american spelling of general labourer"
	},
	{
		name: "General Labourer",
		description: "general labourer, usually lifting and carrying etc"
	},
	{
		name: "General Servant",
		description: "general servant, usually domestic"
	},
	{
		name: "Gentleman",
		description:
			"a member of the gentry, a descendant from an aristocratic familywhose income came from the rental of his land."
	},
	{ name: "Geometer", description: "a person skilled in geometry." },
	{
		name: "Gerund Grinder",
		description: "a nickname for a latin instructor."
	},
	{ name: "Gilder", description: "applies gold leaf" },
	{
		name: "Gimler",
		description: "a machinist involved in making a gimp, a kind of card."
	},
	{ name: "Ginerr", description: "a joiner." },
	{ name: "Ginour or Gynour", description: "an engineer." },
	{
		name: "Girdler",
		description:
			"a leather worker who made girdles and belts, mainly in the army."
	},
	{ name: "Glass Blower", description: "maker of glass items" },
	{
		name: "Glass Coachman",
		description: "a driver of a two-horse carriage hired out for the day."
	},
	{ name: "Glassman", description: "a seller of glassware." },
	{
		name: "Glassewryght, or Glasswright",
		description: "maker and mender of glassware."
	},
	{ name: "Glazier", description: "glass cutter or window glassman" },
	{ name: "Glove Finisher", description: "finished gloves" },
	{ name: "Glover", description: "one that makes or sells gloves" },
	{
		name: "Goat Carriage Man",
		description: "a driver of small passenger carriage."
	},
	{ name: "Gobar", description: "a jobber." },
	{
		name: "Gold Beater",
		description: "someone who beats gold to shape it into something."
	},
	{
		name: "Gold Embroider",
		description: "someone who embroiders in gold thread."
	},
	{
		name: "Goldsmith",
		description: "maker of gold articles. Also a nickname for a banker."
	},
	{
		name: "Goldsmith, silversmith",
		description: "maker of gold and silver articles."
	},
	{
		name: "Goodman",
		description:
			"a solid member of the community who ranked above a free-man butbelow a gentleman on the social scale."
	},
	{ name: "Goose Herd", description: "a person who keeps or tends geese." },
	{ name: "Gorzeman", description: "a person who sells gorse or broom." },
	{ name: "Grace Wife", description: "a midwife." },
	{ name: "Graffer", description: "a notary or scrivener." },
	{ name: "Granger", description: "farmer" },
	{
		name: "Graver",
		description:
			"an engraver, a carver or sculptor, or a dockside worker who cleanedships bottoms by burning and tarring."
	},
	{ name: "Grazier", description: "pastures and raises cattle" },
	{ name: "Greave or Grieve", description: "a bailiff, foreman or sheriff." },
	{ name: "Grecher", description: "a grocer." },
	{
		name: "Green Grocer",
		description: "someone who sells fruit and vegetables."
	},
	{
		name: "Green Smith",
		description: "someone who works with copper &amp; latten"
	},
	{
		name: "Greenwich Barber",
		description: "a retailer of sand collected from the Greenwich pits."
	},
	{
		name: "Griffin",
		description:
			"a European newly arrived in India, and unaccustomed to Indian ways;a novice, a newcomer, a greenhorn."
	},
	{ name: "Grimbribber", description: "a lawyer." },
	{
		name: "Grinder",
		description:
			"one who operated a grinding machine in various trades, or a workerwho maintained a carding machine in the textile industry, or aprivate tutor (slang)."
	},
	{
		name: "Grindery Dealer",
		description: "dealer in ground stuff; spices etc"
	},
	{ name: "Grocer", description: "short for green groce" },
	{
		name: "Grocer's Manager",
		description: "manager of a green grocer's shop"
	},
	{
		name: "Grocery &amp; General Dealer",
		description: "sold almost everything including fruit and veg"
	},
	{ name: "Groom", description: "looked after horses" },
	{ name: "Groover", description: "a miner." },
	{
		name: "Groundsel &amp; Chickweed Seller",
		description:
			"a street seller of common weeds, used to feed pet song-birds."
	},
	{
		name: "Guardian",
		description:
			"appointed by the court, someone who cares for the property andrights of a minor or someone incapable of handling his or her ownaffairs."
	},
	{ name: "Guilderer", description: "a maker of gold or silver coins" },
	{
		name: "Guinea Pig",
		description:
			"an unattached or roving person whose fee was usually a guinea(slang)."
	},
	{
		name: "Gummer",
		description: "a person who improved old saws by deepening the cuts."
	},
	{ name: "Gunsmith, Gun manfacturer", description: "made guns" },
	{ name: "Gynour or Ginour", description: "an engineer." },
	{
		name: "Gyp",
		description: "college servant especially one attending undergraduates"
	},
	{
		name: "Haberdasher",
		description:
			"dealer in ribbons, needles, pins, or a dealer in men's clothing;hats, shirts, ties, collars, etc."
	},
	{
		name: "Hacker",
		description:
			"maker of hoes, axes, and other cutting tools. or a woodcutter."
	},
	{
		name: "Hackler",
		description:
			"a person in the linen trade, who separated the coarse part of flaxor hemp with a hackle, an instrument with teeth."
	},
	{ name: "Hackman or Hackmann", description: "one who drove a carriage" },
	{ name: "Hackney Man", description: "renter of horses &amp; carriages" },
	{ name: "Hair Dresser", description: "cut and styled hair" },
	{
		name: "Hair Dresser &amp; Wig Maker",
		description: "ditto &amp; made wigs"
	},
	{ name: "Hair Dresser's Apprentice", description: "apprentice to above" },
	{ name: "Hairman", description: "hairweaver." },
	{
		name: "Hair Seating &amp; Curled Hair Merchant",
		description: "a dealer in horse-hair stuffing used in upholstery."
	},
	{
		name: "Hairweaver",
		description: "a weaver of cloth composed wholly or partly of horsehair."
	},
	{
		name: "Halbert Carrier",
		description:
			"a soldier or halberdier, armed with a halberd, a combination spearand battleaxe. A ceremonial officer."
	},
	{ name: "Halter", description: "made halters for horses" },
	{ name: "Hamberghmaker or Hamberow", description: "a horse collar maker." },
	{ name: "Hammerman (Smith)", description: "hammerer, a smith" },
	{ name: "Hanchman", description: "horseman or groom" },
	{ name: "Hand", description: "assistant" },
	{ name: "Handseller", description: "street vendor" },
	{ name: "Handwoman", description: "midwife or female attendant" },
	{
		name: "Handy Man",
		description: "odd job man - very handy, lives just around the corner"
	},
	{ name: "Hansard", description: "weapon maker or seller" },
	{
		name: "Harlot",
		description: "a Vagabond, beggar, rogue, or a loose woman"
	},
	{ name: "Harmer Beck", description: "a Constable." },
	{ name: "Harness Maker", description: "made horses harnesses" },
	{ name: "Harper", description: "a person who plays the harp; a musician." },
	{ name: "Hat &amp; Cap Hand", description: "assistant cap and hat maker" },
	{
		name: "Hat &amp; Cap Manufacturer",
		description: "owner of a hat and cap factory"
	},
	{ name: "Hat Furrer", description: "added fur to hats" },
	{
		name: "Hatcheler",
		description: "one who cleaned, combed or carded flax"
	},
	{ name: "Hatter", description: "maker of or dealer in hats" },
	{
		name: "Hawker, Huckster or Coster",
		description: "peddler - sells things on the streets, matches,laces etc"
	},
	{ name: "Haymonger", description: "dealer in hay" },
	{
		name: "Hayward",
		description: "keeper of fences, or one tending a hayfield"
	},
	{ name: "Headborough", description: "a constable." },
	{ name: "Headsman", description: "a nickname for an executioner." },
	{ name: "Headswoman", description: "a midwife." },
	{
		name: "Heald Knitter",
		description:
			"an operator of a textile machine which produced a jersey type offabric as opposed to woven fabric."
	},
	{ name: "Hebrew Book seller", description: "obvious really" },
	{
		name: "Hebrew Reader Master",
		description: "taught students to read hebrew"
	},
	{ name: "Hebrew Teacher", description: "ditto" },
	{ name: "Hebrew Writer", description: "wrote hebrew" },
	{
		name: "Heck Maker",
		description:
			"a maker of a part of a spinning machine by which the yarn is guidedto the reels."
	},
	{
		name: "Hedge Looker",
		description: "supervised repair of fences and hedges. See Hayward"
	},
	{ name: "Hedger", description: "hedge trimmer" },
	{
		name: "Heel Maker or Heelmaker",
		description: "made boot and shoe heels"
	},
	{ name: "Hellier", description: "a slater or tiler of roofs." },
	{
		name: "Helper-Up",
		description: "a young boy employed in pits to help other workers."
	},
	{ name: "Hemp Heckler", description: "a flax dresser. See hackler." },
	{
		name: "Henchman",
		description: "a horseman or groom, or a Squire, or page of honour."
	},
	{ name: "Hensman", description: "a horseman or groom." },
	{ name: "Henter", description: "a thief." },
	{ name: "Herd", description: "a shepherd or herdsman" },
	{ name: "Hetheleder", description: "one who provided heather for fuel." },
	{
		name: "Hewer",
		description:
			"a miner, or face worker, who cut coal, stone, etc, in a mine"
	},
	{
		name: "Higgler",
		description: "a person who haggles or bargains, an itinerant peddler"
	},
	{
		name: "High Sheriff",
		description:
			"the highest-ranking sheriff, as opposed to deputy sheriffs."
	},
	{ name: "Highwayman", description: "a robber who preys on public roads." },
	{ name: "Hillier", description: "a roof tiler, or slater." },
	{
		name: "Hind",
		description:
			"a skilled farm labourer, or a household or domestic servant."
	},
	{ name: "Hired Man", description: "a gardener, farmhand, or stableman." },
	{
		name: "Hobbler",
		description:
			"a person who was employed to tow a boat on the rivers or canals."
	},
	{ name: "Hod", description: "a bricklayer's labourer." },
	{ name: "Hodsman", description: "mason's assistant" },
	{ name: "Hoggard", description: "a pig drover." },
	{
		name: "Hog Reeve",
		description: "one who rounded up the stray hogs on city streets"
	},
	{
		name: "Holloware Worker",
		description:
			"pottery worker who made ornaments, teapots, etc, or one involved inthe production of tin trunks, boxes, etc."
	},
	{ name: "Holster", description: "a groomer of horses" },
	{ name: "Hoofer", description: "a dancer." },
	{
		name: "Hooker",
		description:
			"a reaper, or a worker in textile industry who operated a machinewhich laid fabric flat in uniform folds"
	},
	{ name: "Hooper", description: "one who made hoops for casks and barrels" },
	{
		name: "Horner",
		description: "a worker in horn making spoons, combs, or musical horns."
	},
	{ name: "Horse Capper", description: "dealer in worthless horses" },
	{ name: "Horse Coper", description: "a horse dealer." },
	{ name: "Horse Courser", description: "owner of race horses" },
	{ name: "Horse Driver", description: "drove horses." },
	{
		name: "Horse Hair Comber Brush",
		description: "one who made horse brushes and curry combs"
	},
	{
		name: "Horse Hair Curler",
		description:
			"dressed horse hair which was used extensively in the upholsterytrade"
	},
	{ name: "Horse Hair Dealer", description: "dealer in horse hair" },
	{ name: "Horse Hair Dresser", description: "dresses horse hair" },
	{ name: "Horse Keeper", description: "kept horses" },
	{ name: "Horse Knave", description: "a groom." },
	{
		name: "Horse Leech",
		description: "a horse-doctor, Farrier, or Veterinarian."
	},
	{
		name: "Horse Marine",
		description:
			"man-handled barges on canals when horses could not be used."
	},
	{
		name: "Horsler or Horstler",
		description: "a groom, or a horse servant at an inn."
	},
	{
		name: "Hose (stocking) manufacturer",
		description: "manufacturer of stockings"
	},
	{
		name: "Hosier",
		description: "retailer of stockings, socks, gloves, nightcaps"
	},
	{ name: "Hosteller", description: "an innkeeper." },
	{ name: "Hostler or Ostler", description: "horse groomer. See Horsler" },
	{
		name: "Hotpresser",
		description:
			"a worker who operated a machine to press the material between glazedboards and hot metal plates to obtain a smooth and shiny surface inpaper or textile industries."
	},
	{ name: "House Joiner", description: "house framer" },
	{ name: "House Keeper or Housekeeper", description: "a domestic servant" },
	{ name: "House Wright", description: "house builder" },
	{ name: "Howdy Wife", description: "a midwife." },
	{
		name: "Hoyman",
		description:
			"a person who carried goods and passengers by water in a hoy, a smallcoastal vessel."
	},
	{
		name: "Huckster",
		description: "sells small wares, or a street seller of ale."
	},
	{ name: "Huissher", description: "an usher, or door attendant." },
	{
		name: "Hurdleman or Hurdler",
		description: "someone who made hedges, of wattled framework fencing."
	},
	{
		name: "Hurriers",
		description:
			"girls aged 5-18 who were employed as coal-drawers in the coal miningindustry."
	},
	{
		name: "Husbandman",
		description: "a farmer who cultivated the land, tenant farmer"
	},
	{
		name: "Hush Shop Keeper",
		description:
			"brewed beer and sold it without a license (usually as a side line)"
	},
	{ name: "Ice Cream Vendor", description: "one who sells ice cream" },
	{ name: "Iceman", description: "a seller or deliverer of ice" },
	{ name: "Idleman", description: "a gentleman of leisure" },
	{
		name: "Indentured Servant",
		description:
			"someone who has committed to working for someone for a fixed numberof years."
	},
	{ name: "Infirmarian", description: "someone in charge of an infirmary" },
	{ name: "Innkeeper", description: "one who runs an inn" },
	{
		name: "Insurance Collector",
		description: "collected insurance premiums from customers"
	},
	{ name: "Intelligencer", description: "a spy." },
	{
		name: "Intendent",
		description: "a director of a public or government business."
	},
	{ name: "Interfactor", description: "a murderer." },
	{ name: "Ironer", description: "ironed clothing" },
	{
		name: "Iron Founder",
		description:
			"someone who works in an iron foundry, one who casts, or founds iron."
	},
	{ name: "Iron Master", description: "the owner or manager of a foundry" },
	{ name: "Iron miner", description: "one who mined iron ore" },
	{
		name: "Iron Monger or Ironmonger",
		description: "dealer in hardware made of iron"
	},
	{
		name: "Ironmonger, hardware dealer",
		description: "dealer in hardware made of iron and other products"
	},
	{ name: "Iron Smith", description: "a blacksmith, a worker in iron." },
	{
		name: "Ivory Worker",
		description:
			"a person who makes combs, boxes, billard balls, buttons, and pianokeys"
	},
	{
		name: "Jack",
		description: "young male assistant, sailor, or lumberjack"
	},
	{
		name: "Jack-Frame Tenter",
		description:
			"a worker who operated a jack-frame, used for giving a twist to thethread in the Cotton industry."
	},
	{ name: "Jack Smith", description: "maker of lifting machinery, etc." },
	{ name: "Jagger", description: "fish peddler, carrier, or carter." },
	{ name: "Jakes Farmer", description: "a person who emptied cesspools." },
	{ name: "Jam Maker", description: "someone who makes jam." },
	{
		name: "Japanner",
		description:
			"someone who varnishes wooden furniture with a hard brilliant coat ofhard lacquer. Invented in Japan."
	},
	{
		name: "Jerquer",
		description: "custom house officer who searched ships."
	},
	{
		name: "Jersey Comber",
		description:
			"a worker in woollen manufacture. (wool which has been combed but notspun into yarn is called Jersey)."
	},
	{ name: "Jeweller", description: "made jewelry" },
	{
		name: "Jeweller &amp; Watchmaker",
		description: "someone who made jewelry and watches"
	},
	{
		name: "Jobber",
		description: "a buyer in quantity to sell to others, a pieceworker"
	},
	{
		name: "Jobbing Gardener",
		description: "one employed on a casual basis."
	},
	{
		name: "Job Coachman",
		description:
			"the driver of coach hired out for long periods to nobility orgentry."
	},
	{
		name: "Jobling Gardener",
		description:
			"one employed on a casual basis. May be a misspelling, see JobbingGardener."
	},
	{
		name: "Jobmaster",
		description:
			"a person who supplied carriages, horses and drivers for hire."
	},
	{
		name: "Joiner",
		description: "a skilled carpenter. One who works with wood."
	},
	{ name: "Jongleur", description: "a travelling minstrel." },
	{ name: "Jorman", description: "a journeyman." },
	{
		name: "Journeyman",
		description:
			"one who served his apprenticeship and mastered his craft - timeserved, and no longer had to work for someone else (though theyoften still did)."
	},
	{
		name: "Journeyman Baker",
		description: "time served baker - in other words, fully qualified"
	},
	{ name: "Journeyman Shoemaker", description: "ditto, shoemaker" },
	{ name: "Journeyman Sweep", description: "ditto, sweep" },
	{
		name: "Jouster",
		description:
			"a fish monger, usually a female hawker of fish, travelling from townto town."
	},
	{
		name: "Junior Clerk",
		description: "a junior anything is usually one learning the job"
	},
	{
		name: "Justiciar",
		description:
			"the head of the royal judicial system and the king's viceroy whenabsent from the country."
	},
	{ name: "Kedger", description: "a fisherman" },
	{
		name: "Keeker",
		description:
			"colliery official who checked quantity and quality of coal output. Aweighman."
	},
	{
		name: "Keeler",
		description:
			"a bargeman who sailed a flat bottomed boat known as a keel."
	},
	{ name: "Keelman", description: "a Keeler" },
	{ name: "Keller", description: "a keeper of salt." },
	{ name: "Kellogg", description: "a slaughterman." },
	{ name: "Kempster", description: "a Wool comber" },
	{ name: "Kepegest", description: "an innkeeper." },
	{ name: "Kiddier", description: "a skinner or dealer in young goats" },
	{ name: "Kilner", description: "limeburner, in charge of a kiln" },
	{
		name: "Kisser",
		description: "someone who made cuishes and high armour."
	},
	{ name: "Kitchen Assistant", description: "assisted - obvious really" },
	{
		name: "Knacker",
		description:
			"harness maker or saddler, also the buyer of old horses and deadanimals"
	},
	{
		name: "Knappers",
		description:
			"someone who shaped and dressed flints into the size shape requiredfor use in flintlock guns for the British Army."
	},
	{
		name: "Kneller",
		description:
			"a chimney sweep who went from door to door looking for business."
	},
	{
		name: "Knight",
		description:
			"this is the English term for a European social position. It is nolonger the pricipal duty to fight as and lead heavy cavalry as wasthe case in the late middle ages. But the ideals to which a knightmay aspire are still largely prowess, loyalty, generosity andcourtesy."
	},
	{
		name: "Knocker-Up",
		description:
			"a person employed to wake up workers in northern mills and factoryson early shifts, going from house to house using a long pole toknock on bedroom windows."
	},
	{ name: "Knockknobbler", description: "a dog catcher." },
	{ name: "Knoller", description: "the toller of bells" },
	{
		name: "Knuller",
		description:
			"a chimney sweep who went from door to door looking for business."
	},
	{
		name: "Lace Drawer",
		description: "a child employed in lace work, drawing out threads."
	},
	{ name: "Laceman", description: "a dealer in lace." },
	{
		name: "Lace Master or Mistress",
		description:
			"someone who employed workers in factories or in their homes for theproduction of lace"
	},
	{
		name: "Lace Runner",
		description: "someone who embroidered patterns on lace."
	},
	{ name: "Lace Warehouseman", description: "employed in a lace warehouse" },
	{ name: "Lacewoman", description: "a lady's maid." },
	{
		name: "Ladies Jacket Maker",
		description: "someone who made lady's jackets."
	},
	{
		name: "Lady's Tailor",
		description: "someone who specialised in tailoring for ladies."
	},
	{ name: "Lagger", description: "a sailor." },
	{ name: "Lagraetman", description: "a constable." },
	{ name: "Land proprietor", description: "manages land." },
	{ name: "Landsman", description: "a seaman on his first voyage." },
	{
		name: "Land Waiter",
		description:
			"a customs officer whose job was to wait or attend on landed goods."
	},
	{
		name: "Lapidary",
		description:
			"someone who cuts, polishes or engraves precious or semi-preciousstones."
	},
	{
		name: "Lardner",
		description:
			"the keeper of the cupboard, or an official in charge of pig food."
	},
	{
		name: "Laster",
		description: "a shoe maker, one who uses a last, a cobbler."
	},
	{
		name: "Lath Render or Renderer",
		description:
			"a plasterer's assistant, someone who puts the first coat of plasteronto laths on walls and ceiling."
	},
	{
		name: "Latouner",
		description: "someone who works with latten, a brass-like metal alloy."
	},
	{ name: "Lattener", description: "a brass worker. See Latouner." },
	{ name: "Launderer", description: "washer" },
	{ name: "Launderess or Laundress", description: "a washer woman." },
	{ name: "Laundry Woman", description: "a washer woman" },
	{
		name: "Lavender",
		description: "a washer woman (from French laver - to wash)."
	},
	{
		name: "Law clerk",
		description: "a clerk who works for a court or a solicitor"
	},
	{ name: "Layer", description: "someone who works in a paper mill." },
	{
		name: "Leaf Stripper",
		description: "someone who strips leaves from tobacco plants"
	},
	{
		name: "Learner or Learning",
		description: "anyone learning a trade which is not an apprenticeship"
	},
	{ name: "Leather Cutter", description: "cuts leather" },
	{ name: "Leather Drawer", description: "draws leather" },
	{ name: "Leather Dresser", description: "dresses leather" },
	{ name: "Leather Seller", description: "sells leather" },
	{ name: "Leather Sewer", description: "sews leather" },
	{
		name: "Leavelooker",
		description: "someone who examined food on sale at market."
	},
	{ name: "Lederer", description: "a leather maker" },
	{ name: "Leech", description: "a physician. Also known as a Sawbones." },
	{ name: "Legerdemainist", description: "a magician." },
	{
		name: "Legger",
		description:
			"a canal boatman who had to leg the barges through tunnels as theywere not big enough for horses to get through. See Horse Marine."
	},
	{ name: "Leightonward", description: "a gardener." },
	{ name: "Letter Carrier", description: "a postman" },
	{
		name: "Letterpress Printer",
		description: "a printer using the letterpress printing method."
	},
	{ name: "Licensed Messenger", description: "a messenger" },
	{ name: "Licensed Reader, Preach", description: "a preacher" },
	{
		name: "Licensed Victualler",
		description: "one who is licensed to sell alcoholic beverages"
	},
	{
		name: "Lighterman",
		description: "a worker on a flat-bottomed boat, a lighter."
	},
	{ name: "Limeburner", description: "a maker of lime." },
	{
		name: "Limner",
		description: "a draughtsman or artist. An illustrator or painter."
	},
	{
		name: "Linen, flax manufacturer",
		description: "a manufacturer of linen."
	},
	{ name: "Linener", description: "a shirtmaker, or linen draper." },
	{ name: "Liner or Lyner", description: "a flax dresser." },
	{
		name: "Linkerboy or Man",
		description:
			"someone who carried a link or torch to guide people through thestreets at night for a small fee, or a general manservant."
	},
	{ name: "Lint Maker", description: "someone who made lint." },
	{ name: "Lister or Litster", description: "someone who dyed textiles." },
	{
		name: "Litho Printer",
		description: "a printer who used the litho method."
	},
	{ name: "Litterman", description: "a horse groom." },
	{ name: "Liveryman", description: "cared for horses for a fee" },
	{ name: "Loadsman", description: "a ship's pilot." },
	{
		name: "Loblolly Boy",
		description: "an errand boy, or a surgeon's assistant on a ship."
	},
	{
		name: "Lock Keeper",
		description: "someone who oversees the operation of canal locks."
	},
	{
		name: "Lodge Porter",
		description: "someone who looks after a lodging house."
	},
	{
		name: "Lodging House Keeper",
		description: "someone in charge of a lodging house."
	},
	{
		name: "Lodging House Manager",
		description: "someone in charge of or owner of a lodging house."
	},
	{
		name: "Lodger",
		description: "someone who sleeps in a lodging house. See Boarder."
	},
	{
		name: "Log Wood Grinder",
		description:
			"someone who prepared a dye made from logwood, used in the textileindustry."
	},
	{ name: "Lokeer", description: "a locksmith" },
	{ name: "Longshoreman", description: "a stevedore" },
	{
		name: "Long Song Seller",
		description:
			"a street seller who sold songsheets of popular music printed onpaper about a yard long."
	},
	{ name: "Looking Glass Fitter", description: "someone who fits mirrors." },
	{
		name: "Looking Glass Gilder",
		description: "someone who gilds the frames of mirrors."
	},
	{ name: "Looking Glass Maker", description: "someone who makes mirrors." },
	{
		name: "Lorimer, Loriner or Lormer",
		description:
			"a maker of bridles, spits, and other metal parts for the harnessesof horses. Also a maker of small ironware, or a worker in wroughtiron. See Spurrier"
	},
	{ name: "Lorner", description: "maker of horse gear" },
	{ name: "Lotseller", description: "a street seller." },
	{ name: "Lum Swooper", description: "a chimney sweep." },
	{
		name: "Lumper",
		description:
			"a dock labourer who loaded and unloaded timber from ships, who wasemployed by a Master Lumper. Also a fine grained saltmaker, from thepractice of moulding salt into lumps."
	},
	{
		name: "Lungs",
		description: "an alchemist's servant whose duty was to fan the fire."
	},
	{ name: "Machine Boy", description: "a boy who operated a machine." },
	{
		name: "Machine Breaker",
		description:
			"english labourers who in the early 19th century revolted and brokethreshing machines, spinning machines, and other forms ofmechanisation."
	},
	{ name: "Machine Girl", description: "a girl who operated a machine." },
	{ name: "Machine Ruler or Machiner", description: "a machine operator" },
	{ name: "Machinist", description: "a machine operator" },
	{ name: "Macon", description: "a mason." },
	{ name: "Macun", description: "a mason." },
	{ name: "Maderer", description: "a person who gathered and sold garlic." },
	{
		name: "Maid",
		description:
			"a female domestic servant. They included Scullery, Kitchen, House,General, Parlour, Nurse, Laundry, Lady's etc."
	},
	{
		name: "Mail Guard",
		description:
			"an armed guard employed to protect the mail coach service."
	},
	{
		name: "Maise Maker",
		description: "a person who made measures for weighing herring catch."
	},
	{
		name: "Maker-Up",
		description:
			"a person who prepared or 'made up' material to customers clothingrequirements, or chemist or druggist, or an agent for paraffin."
	},
	{
		name: "Malemaker",
		description:
			'a maker of "Males" or travelling bags. A Royal Mail term for thebags in which the letters were carried.'
	},
	{ name: "Malender", description: "a farmer" },
	{
		name: "Malster or Maltster",
		description:
			"a brewer, maker or seller of malt beverages; beer and ale."
	},
	{ name: "Manager", description: "in charge of; any industry" },
	{ name: "Manageress", description: "in charge of; any industry." },
	{
		name: "Manageress do",
		description: "a woman in charge of; any industry."
	},
	{
		name: "Manchester Man",
		description:
			"a wholesale travelling salsman trading between factory and shopswith goods on packhorses."
	},
	{ name: "Manciple", description: "a steward" },
	{
		name: "Mangle Keeper",
		description: "woman who offered use of a mangle for a fee"
	},
	{
		name: "Mangle Worker or Mangler",
		description: "someone who works a mangle"
	},
	{ name: "Mango", description: "a slave dealer." },
	{
		name: "Mantle Cutter",
		description: "someone who cut mantles for gas lamps."
	},
	{
		name: "Mantle Finisher",
		description: "someone who finished mantles for gas lamps."
	},
	{ name: "Mantle Forewoman", description: "a highly skilled dressmaker." },
	{
		name: "Mantle Machinist",
		description: "someone who machined mantles for gas lamps."
	},
	{
		name: "Mantle Maker",
		description: "someone who made mantles for gas lamps."
	},
	{
		name: "Mantle Trimming Maker",
		description: "someone who made the trimming for gas mantles"
	},
	{
		name: "Mantua Maker",
		description: "a Dressmaker. Mantua is a woman's loose gown."
	},
	{
		name: "Marbler",
		description:
			"one who stained paper or other material, veined to imitate marble"
	},
	{ name: "Marescallus", description: "a marshall." },
	{
		name: "Marine Store Dealer",
		description:
			"a person who buys and sells used cordage, bunting, rags, timber,metal, etc, sorts waste, repairs and mends sacks."
	},
	{ name: "Mariner", description: "a sailor, or seaman." },
	{ name: "Market Carrier", description: "a porter." },
	{ name: "Market Labourer", description: "a labourer in the market." },
	{ name: "Market Porter", description: "a porter" },
	{ name: "Market Regulator", description: "regulates trade in the market." },
	{ name: "Market Salesman", description: "sells item in a market." },
	{ name: "Market Warehouseman", description: "a labourer." },
	{
		name: "Marshall",
		description:
			"a horse doctor or shoesmith. Alternative definition, a horse servantor groom."
	},
	{
		name: "Marshman",
		description:
			"someone employed by landowners to look after marshlands and tend theanimals put to graze there for the season."
	},
	{
		name: "Mashmaker",
		description:
			"someone who makes the mash-vats or mashels used for mixing malt."
	},
	{ name: "Marson", description: "a mason." },
	{ name: "Mason", description: "a stone dresser or cutter." },
	{ name: "Mason, or Paviour", description: "lays paving stones" },
	{
		name: "Master",
		description:
			"the holder of one of three grades of skill recognised by the Guildof Crafts. A skilled workman or one in business on his own."
	},
	{ name: "Master Baker", description: "a highly skilled baker." },
	{
		name: "Master Carman",
		description:
			"a cab driver who works for himself or employs others to drive."
	},
	{
		name: "Master Lumper",
		description: "a contractor of labourers at cheap rate of pay."
	},
	{
		name: "Master Mariner",
		description: "the Captain of a sea going vessel."
	},
	{ name: "Master Tailor", description: "a highly skilled tailor" },
	{ name: "Match Box Maker", description: "someone who makes matchboxes." },
	{ name: "Match Maker", description: "someone who makes matches." },
	{ name: "Match Seller, Coster", description: "someone who sells matches." },
	{ name: "Matchbox Maker", description: "someone who makes matchboxes." },
	{
		name: "Matchet or Machete Forger",
		description:
			"a knifemaker, or machetemaker; a heavy axe-like knife used as achopping tool."
	},
	{
		name: "Matchgirl",
		description: "sold matches on the street (Six for a fip)"
	},
	{
		name: "Matron - Institute",
		description: "head nurse in charge of a ward in an institution."
	},
	{ name: "Mawer", description: "a mower." },
	{ name: "Mayer", description: "a physician." },
	{ name: "Mealman", description: "dealer in meal or flour" },
	{
		name: "Meat Porter",
		description:
			"a person who carried meat from place to place in a meat market."
	},
	{
		name: "Mechanic",
		description:
			"a manual labourer, working in a trade, or the operator of a machine,or a person who uses machinery to produce things."
	},
	{ name: "Medical Assistant", description: "assistant to a Doctor." },
	{ name: "Medicus", description: "a leech doctor." },
	{ name: "Melder", description: "a corn miller." },
	{ name: "Mercator", description: "a merchant" },
	{
		name: "Mercer",
		description:
			"someone who sells cloth, mainly silks and velvets. A Draper."
	},
	{ name: "Merchant", description: "someone who sells things" },
	{ name: "Messenger", description: "someone who carries messages." },
	{ name: "Metalman", description: "a worker in metal" },
	{ name: "Meterer", description: "a poet." },
	{ name: "Met Policeman", description: "metropolitan police officer" },
	{
		name: "Midwife",
		description: "experienced woman who assists in child birth"
	},
	{ name: "Milk Carrier", description: "someone who carries milk." },
	{
		name: "Milk Dairyman",
		description: "someone who keeps dairy cattle and produces milk."
	},
	{
		name: "Miller",
		description: "one who operated a mill; grain, cloth, timber etc."
	},
	{ name: "Milleress", description: "a female miller, or the miller's wife" },
	{
		name: "Milliner",
		description:
			"someone who sells fancy wares and articles of apparel, or the makerof ladies hats, bonnets, etc."
	},
	{ name: "Millow", description: "a miller." },
	{ name: "Millpeck", description: "someone who sharpens mill stones." },
	{
		name: "Millstone Inspector",
		description: "a vagrant, a gentleman of the road."
	},
	{
		name: "Millwright",
		description: "designer &amp; builder of mills or mill machinery"
	},
	{
		name: "Miner",
		description:
			"someone who works in a mine, digging for coal, iron, lead, tin ore,etc."
	},
	{
		name: "Mintmaker, Mintmaster or Mintner",
		description: "one who issued local currency."
	},
	{ name: "Mixer", description: "a barman or barwoman." },
	{
		name: "Mocado Weaver",
		description:
			"a weaver of woollen cloth called mock velvet, used for makingclothes."
	},
	{ name: "Molendinarius or Muner", description: "a miller." },
	{ name: "Molitor", description: "a miller" },
	{
		name: "Mondayman",
		description:
			"a person who worked for the landowner on Mondays in lieu of rent."
	},
	{ name: "Monger", description: "a dealer or seller of goods (ale, fish)" },
	{
		name: "Monthly Nurse",
		description:
			"someone who assisted women during the first month after giving birth"
	},
	{ name: "Moulder", description: "maker of molds or castings, brickmaker" },
	{ name: "Moulder Runner", description: "a pottery moulder's assistant." },
	{
		name: "Mountebank",
		description:
			'a seller of ineffectual patent medicines. A "Snake Oil Salesman".'
	},
	{ name: "Mudlark", description: "a sewer cleaner or riverbank scavenger" },
	{
		name: "Muffin Maker",
		description:
			"a baker who made muffins, or a pottery worker who made a specifictype of plate called a muffin, a seven inch tea plate."
	},
	{ name: "Muffin Man", description: "an itinerant seller of muffins." },
	{ name: "Mugseller", description: "someone who sells mugs and cups." },
	{ name: "Muleteer", description: "a mule driver." },
	{ name: "Multurer", description: "a miller." },
	{ name: "Musicker", description: "a musician." },
	{ name: "Musician, Music master", description: "someone who made music." },
	{ name: "Muslin manufacture", description: "someone who made muslin." },
	{ name: "Mustard Maker", description: "made and sold mustard." },
	{ name: "Mustardman", description: "a dealer in mustard." },
	{
		name: "Nail manufacturer",
		description: "the owner of a nail making shop or factory."
	},
	{
		name: "Naperer",
		description: "a royal servant in charge of table linen."
	},
	{
		name: "Napier",
		description:
			"a person in charge of the table linen in a Manor House. See Naperer"
	},
	{
		name: "Narrow Weaver",
		description: "a weaver of ribbons and tapes, etc."
	},
	{
		name: "Navigator",
		description:
			"a sailor in charge of navigating, a pilot, or a labourer who dugcanals and later worked on the railways. The origin of navvy."
	},
	{ name: "Navvy", description: "labourer" },
	{ name: "Neatherd or Neatherder", description: "herds cows" },
	{
		name: "Necessary Woman",
		description:
			"a servant responsible for emptying and cleaning chamber pots"
	},
	{
		name: "Necker",
		description:
			"someone who fed cardboard into the machine that makes cardboardboxes."
	},
	{ name: "Nedder or Nedeller", description: "a needle maker." },
	{
		name: "Needle Pointer",
		description:
			"a filer or fettler in needlemaking, or a person engaged in the craftof needlepoint."
	},
	{ name: "Needle Woman or Worker", description: "one who sews" },
	{ name: "Netter", description: "someone who made nets." },
	{ name: "Nettir", description: "a knitter." },
	{
		name: "News Vendor, Coster",
		description: "someone who sold newspapers in the streets."
	},
	{ name: "Newsagent", description: "ashop that sold newspapers." },
	{
		name: "Night Soilman",
		description: "one who emptied cesspits, ashpits and backyard toilets"
	},
	{ name: "Nightwalker", description: "a watchman or bellman." },
	{ name: "Night Watchman", description: "a caretaker, or watchman." },
	{ name: "Nimgimmer", description: "a doctor." },
	{
		name: "Nipper",
		description:
			"a lorry boy, or young person employed by the carter or wagoner toassist with the collection and delivery of goods."
	},
	{ name: "Nob Thatcher", description: "a maker of wigs." },
	{
		name: "Noon Tender",
		description:
			"someone who guarded goods on the quay while the customs officers ordockers were at lunch."
	},
	{
		name: "Notary",
		description:
			"someone authorised to draw up or witness contracts, wills, deeds, orsimilar documents."
	},
	{ name: "Noterer", description: "a Notary." },
	{ name: "Nudel Sorter", description: "someone who sorts Nudels." },
	{
		name: "Nudel Sorter, Apprentice",
		description: "an apprentice to a qualified Nudel Sorter."
	},
	{ name: "Nurse", description: "tended the sick." },
	{ name: "Nurse Girl", description: "a trainee nurse." },
	{ name: "Nurse, Dom", description: "a domestic nurse." },
	{ name: "Nurse, Sick", description: "nurse." },
	{ name: "Nursemaid", description: "nurses children" },
	{ name: "Nursery Boot Maker", description: "made boots." },
	{ name: "Occupier", description: "a tradesman." },
	{ name: "Office Boy", description: "an office junior" },
	{
		name: "Office Cleaner, Char",
		description: "someone who cleans an office."
	},
	{ name: "Oilman", description: "one who sold oil for lamps." },
	{
		name: "Olitor",
		description: "a kitchen gardener, from Olitory; a kitchen garden."
	},
	{
		name: "Omnibus Conductor",
		description: "collects fares in an omnibus (bus)."
	},
	{ name: "Omnibus Driver", description: "drives an omnibus." },
	{
		name: "Optician",
		description: "someone who examines eyes and precribes glasses."
	},
	{ name: "Orange Peeler", description: "someone who peels oranges." },
	{
		name: "Orange Porter",
		description: "someone who carries crates of oranges in a fruit market."
	},
	{
		name: "Orderly",
		description: "a soldier who acted as a servant for an officer."
	},
	{
		name: "Ordinary, or Ordinary Keeper",
		description: "an innkeeper with fixed prices"
	},
	{
		name: "Orrery Maker",
		description:
			"someone who made a mechanical device for showing the movements ofthe planets. Named after the inventor; the Earl of Orrery."
	},
	{
		name: "Orrice Weaver",
		description: "a weaver of lace patterns in silk thread and silk."
	},
	{
		name: "Osier or Withy Peeler",
		description:
			"someone who removed bark from willow rods or osiers which were usedin basket weaving"
	},
	{ name: "Osler", description: "a bird catcher." },
	{ name: "Osnard", description: "an oxen herder." },
	{ name: "Ostiary", description: "a monastery door keeper." },
	{
		name: "Ostler",
		description: "one who looks after horses; stableboy. See Hostler."
	},
	{
		name: "Ostrich Feather Dealer",
		description: "someone who deals in ostrich feathers."
	},
	{ name: "Out Crier", description: "an auctioneer." },
	{
		name: "Outrider",
		description: "an attendant riding a horse before or behind a carriage."
	},
	{ name: "Outworker", description: "someone who worked from home." },
	{
		name: "Overlooker",
		description:
			"a superintendent or overseer, especially in the textile mills.sometimes an hereditary position."
	},
	{
		name: "Overman",
		description:
			"a foreman in a mine who checked the miners work and the quality ofthe mined coal."
	},
	{ name: "Owler", description: "sheep or wool smuggler" },
	{
		name: "Oyster Dredger",
		description: "member of the crew on board an oyster fishing boat"
	},
	{
		name: "Packer",
		description: "packs goods such as tobacco, pickles or herring"
	},
	{
		name: "Packing Case Maker",
		description: "someone who makes packing cases."
	},
	{
		name: "Packman",
		description:
			"a peddler, someone who travelled around carrying goods for sale in apack."
	},
	{
		name: "Pack Thread Spinner",
		description: "the operator of the machine which made thread or twine."
	},
	{
		name: "Pad Maker",
		description:
			"a person who made small baskets used for measuring things."
	},
	{ name: "Painter", description: "someone who paints things." },
	{
		name: "Painter &amp; Grainer",
		description:
			"someone who paints and applies a grain to imitate a different typeof wood."
	},
	{ name: "Painter (Sign)", description: "someone who paints signs." },
	{
		name: "Paintress",
		description:
			"a woman employed in the pottery industry to hand paint the finishedarticles."
	},
	{
		name: "Paling Man",
		description: "someone who sells eels, or a fishmonger."
	},
	{
		name: "Palister",
		description:
			"a Park Keeper, someone who ensured the parks were safe and wellkept."
	},
	{
		name: "Palmer",
		description:
			"a pilgrim, someone who had been, or pretended to have been, to theHoly Land"
	},
	{ name: "Paneler", description: "a saddler." },
	{ name: "Pannarius", description: "a clothier or draper." },
	{ name: "Pannebeter", description: "a pan-hammerer, or a clothdriver." },
	{ name: "Pannier Man", description: "a fish monger" },
	{
		name: "Pannifex",
		description: "a person who worked in the cloth trade."
	},
	{ name: "Pansmith", description: "someone who made pans; a metal worker." },
	{ name: "Panter", description: "keeper of the pantry." },
	{ name: "Pantler", description: "a butler." },
	{
		name: "Papaya Man",
		description: "someone who was involved in trade with Papua New Guinea."
	},
	{ name: "Paper Bag Maker", description: "made paper bags." },
	{ name: "Paper Colorer", description: "coloured paper." },
	{ name: "Paper Cutter", description: "someone who Cut paper." },
	{ name: "Paper Dealer", description: "someone who dealt in paper." },
	{ name: "Paper Embosser", description: "someone who embossed paper." },
	{
		name: "Paperer",
		description:
			"someone employed in the needlemaking industry to insert the needlesinto the paper ready for sale."
	},
	{
		name: "Paper Hanger",
		description: "a decorator, one who hung wallpaper."
	},
	{
		name: "Paper Hanger, Plasterer",
		description: "an interior decorator who hung paper and plastered."
	},
	{
		name: "Paper Maker",
		description:
			"someone who worked in the paper making industry. See Vatman,Coucher, Layer, Sizer."
	},
	{
		name: "Paper manufacture",
		description: "the owner of a paper making factory."
	},
	{
		name: "Paper Presser",
		description: "someone who worked a paper pressing machine."
	},
	{ name: "Paper Sorter", description: "someone who sorted paper." },
	{
		name: "Paper Stainer",
		description: "a person who coloured paper by hand or machine."
	},
	{ name: "Parcheminer", description: "someone who makes parchment." },
	{
		name: "Pardoner",
		description: "someone who is licensed to sell papal indulgences."
	},
	{
		name: "Pargeter",
		description: "someone who applied ornamental plaster to buildings."
	},
	{
		name: "Paritor",
		description:
			"an officer who attended the magistrates and judges at court toexecute their orders."
	},
	{
		name: "Parker",
		description:
			"a park caretaker, or type of game warden in a hunting or game park."
	},
	{ name: "Parochus", description: "a pastor or rector." },
	{ name: "Passage Keeper", description: "kept passages and alleys clean." },
	{ name: "Pasteler", description: "a pastry chef." },
	{ name: "Pastor", description: "a shepherd." },
	{ name: "Pastry Cook", description: "a cook who bakes pastry." },
	{ name: "Patler", description: "a groom." },
	{
		name: "Patten or Patton Maker",
		description:
			"a clog maker, one who made wooden soles or pattens, to fit undershoes to protect them from wet and muddy ground"
	},
	{
		name: "Pattern Maker",
		description:
			"a maker of a clog shod with an iron ring. A clog was a wooden polewith a pattern cut into the end"
	},
	{
		name: "Paver",
		description:
			"someone who laid paving stones or paved roads. See Paviour"
	},
	{
		name: "Paviour or Road Paver",
		description: "someone who laid paving stones or paved roads."
	},
	{
		name: "Pavyler",
		description: "someone who put up marquees, pavilions or tents etc."
	},
	{
		name: "Pawnbroker",
		description:
			"someone who lent money with interest against an item of value, andwho would later sell the item to recoup their investment unless thelender expressed the wish to buy it back themselves when funds wereavailable."
	},
	{ name: "Pedascule", description: "a school master." },
	{
		name: "Pedlar",
		description: "a street seller who bought and sold goods for cash."
	},
	{
		name: "Peeler",
		description:
			"a policeman, constable or bobby, named after Sir Robert Peel, thefounder of the police force."
	},
	{ name: "Peever", description: "someone who sold pepper." },
	{
		name: "Pelliparius or Peltarius",
		description: "a skinner, one who worked with animal skins."
	},
	{
		name: "Pelterer",
		description: "a skinner, one who worked with animal skins."
	},
	{ name: "Perambulator", description: "a surveyor." },
	{ name: "Pensioner", description: "someone who draws a pension" },
	{ name: "Perchemear", description: "someone who made parchment." },
	{ name: "Peregrinator", description: "an itinerant worker or wanderer." },
	{ name: "Perfumer", description: "someone who makes or sells perfume." },
	{ name: "Periwig Maker", description: "someone who made wigs." },
	{ name: "Peruke Maker", description: "someone who made wigs." },
	{ name: "Peruker", description: "someone who made wigs." },
	{ name: "Pessoner", description: "a fishmonger." },
	{ name: "Peter Man", description: "a fisherman." },
	{ name: "Pettifogger", description: "a shyster lawyer." },
	{
		name: "Petty Chapman",
		description:
			"a pedlar. or an itinerant dealer in small goods. See Chapman."
	},
	{
		name: "Pew Opener",
		description:
			"someone who was paid to open the doors to private pews in a church."
	},
	{
		name: "Philosophical Instrument Maker",
		description: "a skilled craftsman who made scientific instruments."
	},
	{
		name: "Phrenologist",
		description:
			"someone who claimed to be able to assess a person's character basedon the bumps on their head."
	},
	{ name: "Pianist", description: "someone who played the piano." },
	{
		name: "Pianoforte Maker",
		description: "someone who made piano's (pianoforte's)."
	},
	{ name: "Picker", description: "someone who cast the shuttle on a loom." },
	{
		name: "Pickler",
		description: "someone who pickled things, eggs, onions beetroot etc."
	},
	{ name: "Pictor", description: "a painter." },
	{
		name: "Picture Dealer",
		description: "someone who buys and sells pictures"
	},
	{
		name: "Picture Frame Gilder",
		description: "someone who gilds picture frames."
	},
	{
		name: "Picture Frame Maker",
		description: "someone who makes picture frames."
	},
	{
		name: "Piece Broker",
		description: "a person who sold material off-cuts or remnants."
	},
	{
		name: "Piece Worker",
		description:
			"someone who was paid for the number of pieces produced rather thanby the hour. This applied to many industries. People who worked fromhome were usually pieceworkers."
	},
	{
		name: "Piece Master",
		description:
			"someone who acted as a middleman between employer and employee, andwho passed out the piecework."
	},
	{
		name: "Piecer",
		description:
			"someone who worked in a spinning mill, piecing together any threadswhich broke. Often a child."
	},
	{
		name: "Pigmaker",
		description: "someone who made pig or cast iron, also a pottery worker."
	},
	{
		name: "Pigman",
		description:
			"a crockery dealer, or someone who bred or looked after pigs on thefarm."
	},
	{
		name: "Pikelet Maker",
		description:
			"a baker who specialised in making pikelets; small pancakes orcrumpets."
	},
	{
		name: "Pikeman",
		description:
			"a millers assistant, or someone who worked at the turnpike."
	},
	{
		name: "Piker",
		description: "a vagrant or tramp, someone with no fixed abode."
	},
	{ name: "Pilcher", description: "someone who made pilches." },
	{
		name: "Pill Box Bottomer",
		description:
			"someone who made the bottoms of pill boxes in the pottery industry."
	},
	{
		name: "Pill Box Lidder",
		description:
			"someone who made the lids of pill boxes in the pottery industry."
	},
	{ name: "Piller", description: "a thief, or robber." },
	{ name: "Pilot", description: "a ship steersman or navigator." },
	{
		name: "Pinder",
		description:
			"a dog catcher and pound keeper, or someone in charge of the pinfold."
	},
	{ name: "Piner", description: "a labourer." },
	{ name: "Pinner", description: "a pin maker." },
	{
		name: "Pinner Up",
		description:
			"a dressmakers assistant, or someone who sold broadsheets or balladsin the streets."
	},
	{ name: "Pipe Case Maker", description: "someone who made pipe cases." },
	{ name: "Piper", description: "an innkeeper." },
	{ name: "Pipe Maker", description: "someone who made pipes." },
	{ name: "Piscarius", description: "a fishmonger." },
	{ name: "Piscator", description: "a fisherman." },
	{ name: "Pistor", description: "a baker or miller." },
	{
		name: "Pit Brow Lass",
		description: "a female worker who worked at the pit head of a mine."
	},
	{ name: "Pitman", description: "a coal miner" },
	{ name: "Plaicher", description: "a hedge layer." },
	{
		name: "Plain Worker",
		description:
			"someone who performed plain sewing or needlework as opposed to anembroiderer."
	},
	{ name: "Plaisterer", description: "a plasterer." },
	{
		name: "Plaiter",
		description: "someone who made straw plaits used in making hats etc."
	},
	{
		name: "Planker",
		description:
			"someone who planks, or kneads the body of the hat during felting."
	},
	{
		name: "Plantifene",
		description: "a hay and forage merchant. See Avernator."
	},
	{ name: "Plasher", description: "a hedge layer." },
	{
		name: "Plasterer",
		description:
			"someone who plasters walls and ceilings, or someone who worked withroman cement used in stuccoing."
	},
	{ name: "Platcher", description: "a hedge layer." },
	{ name: "Platelayer", description: "laid and maintained railway tracks." },
	{ name: "Playderer", description: "someone who made plaid." },
	{ name: "Pleacher", description: "a hedge layer." },
	{ name: "Plomer", description: "a plumber." },
	{ name: "Plowman", description: "farmer" },
	{
		name: "Plowwright or Ploughwright",
		description: "maker or repairer of plows"
	},
	{
		name: "Plumassier",
		description: "someone who made or sold plumes, or ornamental feathers."
	},
	{
		name: "Plumber",
		description:
			"someone who worked with lead, for gas and water pipes etc. One whoapplied sheet lead for roofing and set lead frames for plain orstained glass windows"
	},
	{
		name: "Plumber &amp; Gas Fitter",
		description: "one who worked with lead piping for gas fittings"
	},
	{
		name: "Plumbum Worker",
		description: "plumber; literally, worker in lead"
	},
	{
		name: "Pocket Book Maker",
		description: "someone who made pocket books."
	},
	{ name: "Podiatrist", description: "another name for a chiropodist." },
	{
		name: "Pointer",
		description: "someone who sharpened needles or pins, etc."
	},
	{ name: "Pointmaker", description: "someone who made the tips of laces." },
	{ name: "Pointman", description: "someone who made the tips of laces." },
	{
		name: "Pointsman",
		description:
			"a person who operated the points to change the railway track onwhich a train was travelling."
	},
	{
		name: "Poldave Worker",
		description: "someone who made poldave, a coarse fabric."
	},
	{ name: "Pole Lathe Turner", description: "a skilled craftsman in wood." },
	{ name: "Poleman", description: "a surveyor's assistant." },
	{ name: "Polentier", description: "a poulterer." },
	{
		name: "Police Sergeant",
		description: "a police officer who had achieved the rank of Sergeant."
	},
	{
		name: "Policeman, Railway",
		description:
			"a person employed by the railway as a policeman to guard the railwayassets."
	},
	{ name: "Poller", description: "a barber, or men's hairdresser." },
	{
		name: "Ponderator",
		description: "an inspector of weights and measures."
	},
	{
		name: "Pony Driver",
		description:
			"someone, often a child, in charge of the pit pony which pulled thecoal tubs underground."
	},
	{ name: "Porcher", description: "a pig keeper." },
	{
		name: "Pork Butcher",
		description: "a butcher who specialised in Pork meat."
	},
	{
		name: "Portable Soup Maker",
		description:
			"someone who converted soup into a dry form for transporting fromplace to place."
	},
	{
		name: "Porter",
		description: "door or gatekeeper, or one who carried things"
	},
	{
		name: "Porter on Railway",
		description: "a porter who worked for the railways."
	},
	{
		name: "Portmanteau Maker",
		description:
			"someone who made leather trunks for clothes, etc., which opened intotwo equal parts."
	},
	{
		name: "Post Boy",
		description:
			"someone who carried mail from town to town. A guard who travelled onthe mail coach. An outrider who travelled with the stagecoach as apostillion."
	},
	{
		name: "Poster",
		description: "someone who worked in the quarries breaking rocks."
	},
	{
		name: "Postillion",
		description:
			"someone who attached extra horses to wagons &amp; coaches to helppull them up hills, or one who worked on long distance coaches andwho's duty it was to change the horses at the stops."
	},
	{
		name: "Postman",
		description: "someone who carried letters for the Post Office."
	},
	{
		name: "Pot Boy or Man",
		description:
			"worked in public houses collecting and washing dirty pots andglasses"
	},
	{
		name: "Pot Burner",
		description: "someone who placed pots in a furnace to be fired."
	},
	{ name: "Potato Badger", description: "someone who sold potatoes." },
	{ name: "Potato Salesman", description: "someone who sold potatoes." },
	{ name: "Potter", description: "someone who made or sold pottery." },
	{ name: "Potter Carrier", description: "a pharmacist or chemist." },
	{ name: "Potter Presser", description: "a potter who used a mould." },
	{
		name: "Potter Thrower",
		description:
			'a potter who used a wheel had to "throw" the clay onto the spinningwheel.'
	},
	{
		name: "Potman &amp; Barman",
		description:
			"worked in public houses collecting and washing dirty pots andglasses and serving drinks"
	},
	{ name: "Pouch Maker", description: "someone who made pouches or purses." },
	{
		name: "Poulter or Poulterer",
		description: "a buyer and seller of poultry."
	},
	{
		name: "Power Loom Tuner",
		description: "someone who maintained the loom in a weaving mill."
	},
	{ name: "Powler", description: "a barber, or men's hairdresser." },
	{ name: "Poynter", description: "someone who makes lace." },
	{ name: "Practical Brewer", description: "someone who brews ale or beer." },
	{ name: "Preceptress", description: "a school mistress." },
	{ name: "Prentis", description: "another name for an apprentice" },
	{
		name: "Presser",
		description: "someone who presses, clothes for example."
	},
	{ name: "Pressmaker", description: "someone who makes presses." },
	{ name: "Prick Louise", description: "a tailor." },
	{
		name: "Pricker",
		description: "a pattern maker, or a horseman, or a witch hunter."
	},
	{ name: "Prig Napper", description: "a horse thief." },
	{
		name: "Printer",
		description: "someone who works at or owns a printing press"
	},
	{
		name: "Printer's Apprentice",
		description: "someone who is training to be a printer."
	},
	{ name: "Printer's Boy", description: "an assistant to a printer." },
	{
		name: "Printer's Compositor",
		description: "someone who sets print type."
	},
	{
		name: "Printer's Cutter",
		description: "someone who cuts paper that has been printed."
	},
	{ name: "Printer's Devil", description: "a printer's assistant." },
	{
		name: "Printer's Factory Lad",
		description: "an assistant to a printer."
	},
	{
		name: "Printer's Foreman",
		description: "someone in charge in a printing shop."
	},
	{
		name: "Printer's Labourer",
		description: "someone who labours for a printer"
	},
	{
		name: "Printer's Machine Boy",
		description: "an assistant to a printer."
	},
	{ name: "Proctor", description: "an official of a university." },
	{
		name: "Prop Bobby",
		description: "someone who worked in mines checking the pit props."
	},
	{ name: "Prothonary", description: "a law clerk." },
	{ name: "Provision Curer", description: "someone who cures meat." },
	{
		name: "Provision Dealer",
		description: "someone who supplies provisions."
	},
	{
		name: "Provision Warehouseman",
		description: "someone who works in a provisions warehouse."
	},
	{
		name: "Publican",
		description: "innkeeper, one who runs a public house, usually licensed"
	},
	{
		name: "Puddler",
		description:
			"someone who worked clay into puddle, or one who worked with puddleto make things watertight e.g. canal walls, or one who worked withpuddling iron or wrought iron."
	},
	{ name: "Puggard", description: "a thief or robber." },
	{
		name: "Pugger",
		description:
			"someone employed by brick manufacturers to produce clay paste bytreading like grapes, often women and children."
	},
	{ name: "Pugilist", description: "a prize fighter." },
	{ name: "Pulley Maker", description: "someone who made pulleys." },
	{ name: "Pump Maker", description: "someone who made mechanical pumps." },
	{ name: "Punky", description: "a chimney sweep." },
	{ name: "Pupil Teacher", description: "a schoolteacher." },
	{
		name: "Pure Gatherer or Picker",
		description:
			"someone who roamed the streets, especially in London, gathering dogfaeces, often an old woman or child. These were used in the tanningindustry for processing hides."
	},
	{
		name: "Purser",
		description: "a ship's officer in charge of provisions &amp; accounts"
	},
	{
		name: "Purveyor of Horse Flesh",
		description: "someone who sold horse meat."
	},
	{
		name: "Putter",
		description:
			"someone who worked in the coal mine hauling the mine tubs."
	},
	{
		name: "Putter In",
		description:
			"someone who was employed to put things in to some type of mechanisedprocess."
	},
	{ name: "Pynner", description: "a pin maker." },
	{
		name: "Quarantine",
		description:
			"officers of customs and quarantine, they were responsible forensuring that anyone arriving on a vessel with a foul bill (i.e.coming from a country where plague existed), did not come ashoreuntil they had spent a period of quarantine to make sure thatsymptoms of plague did not develop. This practice started in Englandwith an act of parliament in 1710, although the origins of the wordquarantine dates from 1377 in Dubrovnik. The last vestige of theBritish quarantine law was removed by the Public Health Act of 1896,which repealed the Quarantine Act of 1825."
	},
	{ name: "Quarrel Picker", description: "a glazier" },
	{ name: "Quarrier", description: "a quarry worker" },
	{ name: "Quarry Man or Quarryman", description: "a stone cutter" },
	{
		name: "Quay Clerk",
		description: "a clerk who worked at a quay or wharf."
	},
	{
		name: "Quiller",
		description:
			"someone who operated a machine that wound yarn onto spools."
	},
	{ name: "Quilter", description: "someone who quilted material." },
	{ name: "Quiltress", description: "a female who quilted material." },
	{ name: "Quister", description: "someone who bleached things." },
	{ name: "Qwylwryghte", description: "a wheelwright." },
	{
		name: "Rack Maiden",
		description:
			"someone employed in the tin mines of Corwall to dress the ore, oftena girl."
	},
	{
		name: "Raff Merchant",
		description: "someone who sold fibre used to make raffia bags etc."
	},
	{
		name: "Raffman",
		description: "someone who dealt in raff (saleable rubbish)."
	},
	{
		name: "Rag and Bone Man",
		description:
			"went from street to street with a cart and collected any old rubbish"
	},
	{
		name: "Rag Cutter",
		description:
			"cut up rags into small pieces to be used for making paper etc"
	},
	{
		name: "Rag Gatherer",
		description:
			"cleared the rags from the machinery in the mills; often children"
	},
	{
		name: "Rag Man",
		description:
			"one who went from street to street collecting and selling oldclothes and rags"
	},
	{ name: "Rag Merchant", description: "someone who bought and sold rags." },
	{
		name: "Rag Picker",
		description:
			"someone who sorted through the left over rags to find reusable ones."
	},
	{
		name: "Railway Shunter",
		description:
			"someone who shunts carriages and wagons in a railway yard."
	},
	{ name: "Raker", description: "a street sanitation worker." },
	{ name: "Ratoner", description: "a rat catcher." },
	{ name: "Rattlewatch", description: "a town watchman." },
	{ name: "Redar", description: "someone who interprets dreams." },
	{ name: "Redsmith", description: "a goldsmith." },
	{
		name: "Reeder",
		description: "someone who worked with reeds for hedging or thatching."
	},
	{
		name: "Reedmaker",
		description:
			"someone who made the pipe for a musical instrument, or a person whomade a weavers implement (a reed) or reed cloth or the comb used intapestry."
	},
	{
		name: "Reeler",
		description:
			"someone employed to operate the machine that wound the yarn onto thebobbin."
	},
	{
		name: "Reeve",
		description:
			"a royal or manor official, appointed by the lord or elected by thepeasants. A church warden."
	},
	{ name: "Reever", description: "a shriever." },
	{
		name: "Refuge Attendant SA",
		description: "a refuge attendant with the Salvation Army"
	},
	{ name: "Regd Shoeing Smith", description: "registered shoeing smith" },
	{
		name: "Registrar",
		description:
			"an official who registers events such as land purchases or births,marriages or deaths."
	},
	{
		name: "Relieving Officer",
		description:
			"an official who took charge of poor or insane persons not otherwisecared for."
	},
	{ name: "Renovator", description: "someone who repaired clothing." },
	{
		name: "Rent Collector",
		description:
			"a landlord or someone who works for them who collects rent fromtenants."
	},
	{
		name: "Rescue Worker",
		description: "someone who rescues people in trouble."
	},
	{
		name: "Restaurant Keeper",
		description: "a proprietor or owner of a restaurant."
	},
	{
		name: "Restaurant Proprietor",
		description: "a manager or owner of a restaurant."
	},
	{
		name: "Revenuer",
		description: "a taxman who enforces tax laws on liquor."
	},
	{ name: "Ribbon manufacturer", description: "someone who makes ribbons." },
	{ name: "Rickmaster", description: "a horse Captain." },
	{ name: "Riddler", description: "a wool stapler." },
	{ name: "Riftere", description: "a reaper." },
	{
		name: "Rigger",
		description: "hoist tackle worker; works on a ship's rigging"
	},
	{
		name: "Ripper or Rippier",
		description:
			"sold fresh water fish at the markets or maker and seller of baskets"
	},
	{ name: "Riverman", description: "someone who works on a river boat." },
	{
		name: "Rivetter",
		description: "someone who rivets, i.e. metal plates on a ship."
	},
	{ name: "Road labourer", description: "someone who repairs roads" },
	{ name: "Road Sweeper", description: "someone who sweeps the streets." },
	{ name: "Rockgetter", description: "a salt miner (rock salt)." },
	{
		name: "Rockman",
		description:
			"someone who worked in a quarry, often the one who placed the chargeson the rockface."
	},
	{ name: "Rodman", description: "a surveyor's assistant. See Poleman." },
	{
		name: "Roll Turner",
		description:
			"a carder of wool, cotton etc into rolls prior to spinning."
	},
	{
		name: "Roll Coverer",
		description: "someone who covered the rollers for the spinning process."
	},
	{
		name: "Rolleyway Man",
		description: "someone who maintained the underground road in the mines."
	},
	{
		name: "Roman Cementer",
		description: "someone who worked with roman cement used in stuccoing."
	},
	{ name: "Rope Maker", description: "someone who makes rope." },
	{ name: "Roper", description: "maker of rope or nets" },
	{ name: "Rotarius", description: "a wheelwright." },
	{
		name: "Rough Packing Case Maker",
		description: "someone who made rough packing cases."
	},
	{
		name: "Rover",
		description:
			"an archer, or the operator of a machine used in the cotton mills,which prepared the carded fibre into rolls."
	},
	{ name: "Rower", description: "someone who builds small wagon wheels." },
	{
		name: "Rubbisher",
		description: "someone who sorted the small stones in the quarries."
	},
	{
		name: "Rubbler",
		description: "someone who sorted the small stones in the quarries."
	},
	{ name: "Rugman", description: "a dealer in rugs and carpets." },
	{ name: "Rule Maker, tape", description: "someone who made tape rules." },
	{
		name: "Runner",
		description: "one who solicited business for a hotel, steamship, etc"
	},
	{
		name: "Runner",
		description:
			"a smuggler, or a messenger or one who worked for the magistrate; BowSt Runners"
	},
	{ name: "Rustler", description: "a cattle thief." },
	{ name: "Sack Maker", description: "someone who made sacks." },
	{
		name: "Saddler or Harness Maker",
		description:
			"one who makes, repairs or sells saddles or other furnishings forhorses"
	},
	{
		name: "Saddle Tree Maker",
		description:
			"someone who made the frames for saddles that the saddler used."
	},
	{ name: "Safernman", description: "a grower of saffron." },
	{
		name: "Sagger Maker",
		description:
			"someone who made the fireclay containers in which the stoneware wasplaced ready for firing."
	},
	{ name: "Sail Mantle Maker", description: "a sailmaker." },
	{ name: "Sailor", description: "someone who worked on a ship at sea." },
	{ name: "Salesman", description: "someone who sold things." },
	{ name: "Saleswoman", description: "a woman who sold things." },
	{ name: "Saloonist", description: "a saloon keeper." },
	{
		name: "Salt Boiler",
		description: "someone who obtained salt by boiling water."
	},
	{ name: "Salter", description: "someone who made or dealt in salt." },
	{
		name: "Samitere or Samite",
		description: "someone who makes a kind of heavy silk."
	},
	{ name: "Sandesman", description: "a messenger or ambassador." },
	{
		name: "Sandwichman",
		description: "someone who wears a sandwich billboard for advertising."
	},
	{ name: "Sarcinet Weaver", description: "a silk weaver." },
	{ name: "Saucer", description: "someone who made or dealt in salt." },
	{ name: "Sauntere", description: "someone who made or dealt in salt." },
	{ name: "Sausere", description: "a salter." },
	{ name: "Savant", description: "a servant." },
	{ name: "Sawbones", description: "a surgeon or physician." },
	{ name: "Saw Maker", description: "someone who made saws." },
	{
		name: "Sawdust Dealer",
		description: "someone who bought and sold sawdust."
	},
	{ name: "Sawyer", description: "carpenter, one who saws timber to boards" },
	{
		name: "Say Weaver",
		description:
			"someone who made Say, a material used for table cloths or bedding."
	},
	{
		name: "Scaffolder",
		description: "someone who erected scaffolding for building work."
	},
	{
		name: "Scabbler",
		description:
			"someone who uses a scabbler (pick) to trim the sides of a tunnel."
	},
	{
		name: "Scagiola Maker",
		description: "someone who made imitation marble."
	},
	{
		name: "Scaleraker or Scavenger",
		description: "employed by the parish to clean the streets"
	},
	{
		name: "Scappler",
		description:
			"someone who roughly shaped the stone prior to being finished by thestonemason."
	},
	{
		name: "Scavelman",
		description: "employed to keep the waterways and ditches clear"
	},
	{ name: "School Master", description: "a schoolteacher." },
	{ name: "School Mistress", description: "a schoolteacher." },
	{ name: "School Teacher", description: "a schoolteacher." },
	{
		name: "Schrimpschonger",
		description: "an artisan who carves in bone, ivory, or wood."
	},
	{ name: "Schumacker", description: "a shoemaker." },
	{
		name: "Scotch Draper",
		description:
			"someone who sold goods door to door with payment to be made byinstalments."
	},
	{
		name: "Scotchman",
		description:
			"someone who sold goods door to door with payment to be made byinstalments."
	},
	{
		name: "Screener",
		description: "someone who screened the ore at the mines surface."
	},
	{
		name: "Scribbler",
		description:
			"someone employed in a scribbling mill where the wool was roughlycarded before spinning, or a minor or worthless author."
	},
	{ name: "Scribe", description: "clerk" },
	{
		name: "Scriber",
		description:
			"someone who worked at the docks marking the cotton bales with theapproximate weight ready for selling by the brokers."
	},
	{ name: "Scribler", description: "a minor or worthless author" },
	{ name: "Scrimer", description: "a fencing master." },
	{
		name: "Scripture Reader",
		description:
			"someone employed by the clergy to go from house to house readingparts of the bible to try and encourage people to attend church."
	},
	{
		name: "Scrivener",
		description: "professional or public copyist or writer; notary public"
	},
	{ name: "Scrutineer", description: "an election judge" },
	{
		name: "Scullery Maid",
		description: "female servant who performed all the menial tasks"
	},
	{
		name: "Scullion",
		description: "male servant who performed all the menial tasks"
	},
	{
		name: "Scutcher",
		description: "someone who beat the flax to soften the straw."
	},
	{ name: "Sculptor", description: "someone who made sculptures." },
	{ name: "Seal Mantle Maker", description: "someone who made gas mantles." },
	{
		name: "Seal Presser",
		description: "someone who worked in the glass industry."
	},
	{ name: "Seaman", description: "a sailor." },
	{ name: "Seamstress", description: "someone who sewed seams." },
	{ name: "Searcher", description: "a customs officer." },
	{ name: "Seedsman", description: "a dealer of seeds, or a sower of seeds" },
	{ name: "Seed Warehousewoman", description: "a seed warehouse worker." },
	{ name: "Seinter", description: "a girdle maker." },
	{ name: "Seler or Sellarius", description: "a saddler." },
	{
		name: "Self Acting Minder",
		description:
			"someone in charge of the automatic spinning mule in a mill."
	},
	{ name: "Seller of Cats Meat", description: "someone who sold cats meat." },
	{ name: "Semi Lorer", description: "someone who made leather thongs." },
	{ name: "Sempster", description: "a seamstress." },
	{ name: "Sempstress", description: "a seamstress." },
	{ name: "Seneschal", description: "a senior steward at the Manor." },
	{ name: "Servant, General, Domestic", description: "a domestic servant." },
	{ name: "Serviens", description: "a sergeant." },
	{ name: "Servus", description: "a servant." },
	{ name: "Sevier", description: "a sieve maker." },
	{ name: "Sewer", description: "a tailor or shoemaker." },
	{
		name: "Sewer Hunter",
		description:
			"a scavenger who concentrated on the sewers looking for valuableobjects."
	},
	{
		name: "Sewer Rat",
		description:
			"bricklayer who specialised in making and repairing sewers andtunnels"
	},
	{ name: "Sewer, Shirt", description: "someone who sews shirts." },
	{
		name: "Sewing Clerk",
		description: "the collector of piecework clothing."
	},
	{ name: "Sewster", description: "seamstress" },
	{ name: "Sewsward of Boots", description: "a man who sewed boots." },
	{
		name: "Sexton",
		description:
			"employee or officer of a church who cared and upkept church property"
	},
	{
		name: "Shagreen Case Maker",
		description: "someone who worked with shagreen leather."
	},
	{ name: "Shanty Man", description: "a lumber man." },
	{
		name: "Sharecropper",
		description: "a tenant farmer who would be paid with part of the crop."
	},
	{
		name: "Sharman",
		description:
			"someone who raised the surface of wollen cloth and then sheared itto a smooth surface; cutter of woolen cloth."
	},
	{ name: "Shearer", description: "someone who cut the fleece from sheep." },
	{
		name: "Sheargrinder",
		description: "someone who sharpened shears, scissors, etc."
	},
	{
		name: "Shearman",
		description:
			"someone who sheared cloth or metal, or skilled worker who shearedthe nap from cloth."
	},
	{
		name: "Sheath Maker",
		description: "someone who made scabbards for swords."
	},
	{ name: "Sheepman", description: "a sheep herder." },
	{ name: "Shepster", description: "a sheep shearer or a dressmaker." },
	{
		name: "Sherman",
		description:
			"someone who raised the surface of wollen cloth and then sheared itto a smooth surface; cutter of woolen cloth."
	},
	{
		name: "Shingler",
		description: "a roof tiler who used wooden tiles; shingles."
	},
	{ name: "Ship Engineer", description: "the engineer on a ship." },
	{ name: "Ship Husband", description: "repairer of ships while in harbour" },
	{ name: "Ship Master", description: "owner or captain of a ship" },
	{
		name: "Ships Chandler",
		description:
			"grocer, provisioner, usually associated with provisioning ships"
	},
	{
		name: "Shipwright",
		description: "constructor or repairer or ships; a shipbuilder."
	},
	{
		name: "Shoe Finder",
		description: "someone who sells shoe maker's tools."
	},
	{
		name: "Shoe Smith",
		description: "a cobbler, or someone who shoed horses."
	},
	{ name: "Shoe Wiper", description: "a servant who polished shoes." },
	{ name: "Shoesmith", description: "cobbler, one who shoed horses" },
	{
		name: "Shot Firer",
		description: "someone in charge of blasting in mines or quarries."
	},
	{ name: "Shrager", description: "someone who trimmed and pruned trees." },
	{ name: "Shrieve", description: "a sheriff" },
	{ name: "Shrievet", description: "a sheriff" },
	{ name: "Shuffler", description: "a yardman on a farm." },
	{
		name: "Shunter",
		description: "one who moved rolling stock around the railway yards"
	},
	{
		name: "Shuttle Maker",
		description: "someone who made the shuttles for the weaving mills."
	},
	{ name: "Sickleman", description: "a reaper." },
	{ name: "Sidesman", description: "someone who assisted the churchwarden." },
	{ name: "Sifker", description: "a sieve maker." },
	{
		name: "Sign Painter or Writer",
		description: "someone who paints or writes signs."
	},
	{
		name: "Silk Dresser",
		description: "someone who prepared the silk for weaving."
	},
	{ name: "Silk Dyer", description: "someone who dyed silk." },
	{
		name: "Silk Engine Turner",
		description:
			"someone who turned the wheel on the automatic silk weaving looms."
	},
	{
		name: "Silker",
		description:
			"someone who sewed the ends of the fabric to prevent the layers fromseparating."
	},
	{
		name: "Silk manufacturer",
		description: "the owner of a silk making factory"
	},
	{
		name: "Silk Mercer",
		description: "someone who sold silk cloth and items made from silk."
	},
	{
		name: "Silk Thrower or Throwster",
		description: "someone who twisted silk into thread or yarn."
	},
	{ name: "Silk Twister", description: "someone who spins silk." },
	{ name: "Silk Weaver", description: "someone who wove silk." },
	{ name: "Silk Weaveress", description: "a woman who wove silk." },
	{ name: "Silk Winder", description: "someone who wound silk." },
	{ name: "Silversmith", description: "someone who worked with silver." },
	{
		name: "Sinker",
		description:
			"someone skilled who contracted to sink new shafts for coal mining."
	},
	{ name: "Sissor", description: "a tailor." },
	{ name: "Sizer", description: "someone who applies size to textiles." },
	{
		name: "Skepper",
		description: "someone who made or sold wicker or straw beehives."
	},
	{ name: "Skin Dresser", description: "someone who dresses animal skins." },
	{
		name: "Skin Dresser, Fur",
		description: "someone who dresses animal fur."
	},
	{ name: "Skinker", description: "a tapster in an alehouse." },
	{ name: "Skinner", description: "a dealer in hides, or a mule driver." },
	{
		name: "Skipmaker",
		description:
			"someone who made the skips used in mining and quarrying for movingmen or materials to the surface."
	},
	{ name: "Skipper", description: "master of a ship" },
	{
		name: "Slaper or Slapper",
		description:
			"someone who worked in a pottery preparing the clay for the potter."
	},
	{
		name: "Slater or Slatter",
		description: "a roofer or roof tiler who used slate tiles."
	},
	{
		name: "Slaymaker",
		description:
			"someone who makes reeds or slays; instruments to part threads inweaving, for looms."
	},
	{
		name: "Slopseller or Slop Seller",
		description:
			"seller of ready-made clothes in a slop shop or a seller of baskets."
	},
	{
		name: "Slubber",
		description:
			"someone who operated the machine used to prepare cotton forspinning."
	},
	{
		name: "Slubber Doffer",
		description:
			"someone who removed the bobbins from the spindles in a mill."
	},
	{
		name: "Smallware Maker",
		description: "someone who made smallware e.g. tapes, braids etc."
	},
	{
		name: "Smelter",
		description: "someone who works in a metal smelter, or smelt fishermen."
	},
	{ name: "Smiddy", description: "a smith." },
	{ name: "Smith", description: "a metal worker" },
	{ name: "Smugsmith", description: "a smuggler." },
	{
		name: "Snobscat or Snob",
		description: "one who repaired shoes, a cobbler."
	},
	{ name: "Snow Warden", description: "someone who kept the snow flat" },
	{ name: "Snuffer Maker", description: "someone who made candle snuffers." },
	{ name: "Soap Boiler", description: "a soap maker." },
	{ name: "Soap Licker (Boiler)", description: "a soap maker." },
	{
		name: "Sojourner",
		description:
			"someone who was staying somewhere temporarily, i.e. just passingthrough."
	},
	{
		name: "Sojourner Clothier",
		description: "a travelling salesman in clothing."
	},
	{ name: "Soldier", description: "served in the army." },
	{
		name: "Sole Cutter (Boot)",
		description: "someone who cut the soles for shoes and boots."
	},
	{
		name: "Solicitor",
		description: "a lawyer, a person qualified to carry out legal duties."
	},
	{ name: "Soper", description: "a soap maker." },
	{ name: "Sorter", description: "tailor" },
	{ name: "Sortor", description: "tailor" },
	{ name: "Souter", description: "a shoemaker." },
	{ name: "Soyor", description: "a sawyer." },
	{
		name: "Spallier",
		description:
			"someone who worked in a tin works performing the menial tasks."
	},
	{ name: "Sperviter", description: "someone who keeps sparrows." },
	{ name: "Spicer", description: "someone who deals in spices, a grocer." },
	{ name: "Spinner", description: "someone who spins yarn or fabric." },
	{
		name: "Spinster",
		description: "a woman who spins or an unmarried woman."
	},
	{ name: "Spittleman", description: "a hospital attendant." },
	{
		name: "Splitter",
		description:
			"someone who operated a splitting machine or a person who splitthings by hand e.g. stone, timber etc."
	},
	{ name: "Splint Cutter", description: "someone who cut splints." },
	{ name: "Splint Setter", description: "someone who set splints." },
	{ name: "Spooner", description: "someone who made spoons." },
	{
		name: "Spragger",
		description:
			"someone who inserts a piece of wood (sprag) between the wheels of alorry (truck) to bring it to a standstill."
	},
	{ name: "Spurrer", description: "someone who made spurs" },
	{ name: "Spurrier", description: "someone who made spurs" },
	{ name: "Squarewright", description: "a cabinet maker." },
	{
		name: "Squire",
		description:
			"country gentleman; farm owner; justice of peace; knight's attendant.Esquire"
	},
	{ name: "Stable Foreman", description: "someone in charge of stables." },
	{ name: "Stableman", description: "a groom." },
	{ name: "Stabler", description: "an ostler" },
	{ name: "Stainer", description: "someone who coloured glass or wood." },
	{ name: "Stall Keeper", description: "keeper of a market stall." },
	{ name: "Stallman", description: "keeper of a market stall." },
	{
		name: "Stamper",
		description: "someone who operated a stamping machine."
	},
	{
		name: "Stampman",
		description: "someone who operates an ore crushing machine."
	},
	{ name: "Stasyon or Stawsun", description: "a stationer." },
	{
		name: "Stationary Engine Driver",
		description:
			"someone who operated a steam engine which was used for pumping wateror sewage, etc."
	},
	{
		name: "Stationary Engineer",
		description:
			"someone who looks after machinery such as pumping engines orlifts/hoists."
	},
	{
		name: "Stationary Engine Stoker",
		description: "someone who stoked a stationary engine."
	},
	{
		name: "Stationer",
		description: "a bookseller, seller of paper &amp; writing implements."
	},
	{ name: "Statist", description: "a politician." },
	{ name: "Stay Maker, Dress", description: "a corset maker." },
	{ name: "Steersman", description: "a ship's helmsman." },
	{
		name: "Stenterer",
		description: "someone who operated the cloth finishing machine."
	},
	{
		name: "Step Boy",
		description:
			"someone employed to help passengers to enter or leave the coach."
	},
	{
		name: "Stevedore",
		description: "labourer who unloads and loads ships' cargoes"
	},
	{ name: "Sticher", description: "someone who does decorative stitching." },
	{
		name: "Stick Dresser",
		description: "someone who dresses walking sticks."
	},
	{
		name: "Stick Finisher",
		description: "someone who finishes walking sticks."
	},
	{
		name: "Stick Maker or Stickmaker",
		description: "someone who made walking sticks."
	},
	{
		name: "Stick Manufacturer",
		description: "the owner of a walking stick making factory."
	},
	{
		name: "Stick Polisher",
		description: "someone who polished walking sticks."
	},
	{ name: "Stitcher", description: "someone who does decorative stitching." },
	{
		name: "Stock &amp; Share Broker",
		description: "someone who dealt in stocks and shares."
	},
	{ name: "Stockinger", description: "someone who made stockings." },
	{ name: "Stoker", description: "someone who stoked the fire of a boiler." },
	{ name: "Stokiner", description: "a weaver of stockings." },
	{ name: "Stone Dresser", description: "someone who dressed stone." },
	{ name: "Stoneman", description: "a surveyor of highways." },
	{ name: "Stone Mason", description: "a skilled craftsman who cut stone." },
	{
		name: "Stone Picker",
		description:
			"someone employed to remove the stones from the farmers fields beforeplanting."
	},
	{
		name: "Stone quarrier",
		description: "someone who worked in a stone quarry"
	},
	{ name: "Stonewarden", description: "a surveyor of highways." },
	{
		name: "Stone Workers",
		description: "someone who worked with stone e.g. masons, quarries etc."
	},
	{
		name: "Store Dresser",
		description: "someone who dressed a shop window."
	},
	{
		name: "Stowyer",
		description: "someone who stowed the nets away on fishing boats."
	},
	{ name: "Stravaiger", description: "a vagrant." },
	{
		name: "Straw hat and bonnet maker",
		description: "someone who made straw hats and bonnets."
	},
	{ name: "Straw Joiner", description: "someone who thatched roofs." },
	{
		name: "Straw Plaiter",
		description: "someone who made straw braids for the hat industry."
	},
	{
		name: "Straw-plait manufacturer",
		description: "someone who owned a straw plait making factory."
	},
	{
		name: "Streaker",
		description: "someone who prepared the body for burial."
	},
	{ name: "Street Minstrel, Actor", description: "a busker basically." },
	{ name: "Street Orderly", description: "a street cleaner." },
	{ name: "Street Singer (Actor)", description: "a busker basically." },
	{ name: "Street Sweeper", description: "swept the streets." },
	{
		name: "Stretcher",
		description:
			"someone who stretched fabrics in the textile trade, sometimes calleda tenter."
	},
	{
		name: "Striker",
		description:
			"a blacksmith's assistant. Also in whaling, the one who harpooned thewhale."
	},
	{ name: "Stringer", description: "someone who made the strings for bows." },
	{
		name: "String Seller, Rope",
		description: "someone who sold string and rope."
	},
	{
		name: "Stripper",
		description:
			"someone employed in the woollen trade to remove the rubbish from thecarding machines."
	},
	{
		name: "Stripper in Tobacco Factory",
		description: "stripped tobacco leaves."
	},
	{
		name: "Stuff gown or Stuffed Gown.",
		description: "junior barrister. Stuff Gowsman is probably a misspelling"
	},
	{ name: "Stuff gownsman", description: "junior barrister" },
	{
		name: "Stuff Weaver",
		description: "someone who wove stuff, the coarse part of flax."
	},
	{ name: "Sucksmith", description: "someone who made ploughshares." },
	{ name: "Sugar Boiler", description: "someone who boiled sugar." },
	{ name: "Sugarer", description: "a sugar dealer." },
	{ name: "Sugar Finer", description: "someone who refined sugar." },
	{ name: "Sugar Grocer", description: "someone who sold sugar." },
	{ name: "Sumner", description: "a summoner or apparitor." },
	{ name: "Sumpter", description: "a porter." },
	{
		name: "Superintendant or Super",
		description: "a boss, someone in charge."
	},
	{
		name: "Supercargo",
		description:
			"officer on merchant ship who is in charge of cargo and thecommercial concerns of the ship"
	},
	{
		name: "Surface Man",
		description: "someone who worked at the surface of a mine."
	},
	{ name: "Surgeon Gen Pract: Regd", description: "g.P. - a doctor" },
	{
		name: "Surgeon, apothecary",
		description:
			"someone who was qualified to carry out surgical operations."
	},
	{
		name: "Sutler",
		description:
			"a peddler or merchant in an army camp, one who supplies them withprovisions."
	},
	{
		name: "Swailer",
		description: "a corn miller; a miller or a dealer in grain."
	},
	{ name: "Sweep", description: "a chimney sweep" },
	{
		name: "Sweeper Out",
		description:
			"someone employed in the mills, and other industries, to keep thefloor clean."
	},
	{
		name: "Sweet Stuff Vendor",
		description: "a confectioner, or a sweet shop."
	},
	{ name: "Swell Maker", description: "someone who made shallow baskets." },
	{
		name: "Swineyard or Swineherder",
		description: "someone who keeps pigs."
	},
	{ name: "Sword Cutler", description: "a sword maker." },
	{ name: "Tabernarius", description: "a taverner, or innkeeper." },
	{ name: "Table Maker", description: "someone who made tables." },
	{ name: "Tabler", description: "a boarding house proprietor." },
	{ name: "Tackler", description: "an overlooker of power loom weavers." },
	{ name: "Tailor", description: "someone who made or repaired clothes." },
	{
		name: "Tailor &amp; Clothier",
		description: "someone who made or repaired clothes."
	},
	{ name: "Tailor Coat Hand", description: "a tailor's assistant." },
	{ name: "Tailor Hand", description: "a tailor's assistant." },
	{ name: "Tailoress", description: "a female tailor" },
	{
		name: "Tailor's Apprentice",
		description: "someone learning the tailor's trade."
	},
	{ name: "Tailor's Assistant", description: "a tailor's assistant." },
	{
		name: "Tailor's Cutter",
		description: "a tailor's assistant - cuts cloth."
	},
	{ name: "Tailor's Labourer", description: "a tailor's assistant." },
	{
		name: "Tailor's Machiner",
		description: "a tailor's assistant - machines cloth."
	},
	{
		name: "Tailor's Machinist",
		description: "a tailor's assistant - machines cloth."
	},
	{
		name: "Tailor's Presser",
		description: "a tailor's assistant - presses cloth."
	},
	{
		name: "Taker Off or Taker In",
		description:
			"someone, often a child, employed to unhitch the coal tubs from theendless rope system."
	},
	{
		name: "Tallow Chandler",
		description: "someone who made or sold candles"
	},
	{
		name: "Tally Clerk",
		description:
			"someone who kept count of goods arriving or departing fromwarehouses, docks etc."
	},
	{
		name: "Tallyman or Tally Fellow",
		description: "someone who sold goods that were paid for in instalments."
	},
	{
		name: "Tan Bark Stripper",
		description:
			"someone who collected the bark that was used in the tanning process."
	},
	{ name: "Tannator", description: "a tanner." },
	{
		name: "Tanner",
		description: "one who tans (cures) animal hides into leather"
	},
	{ name: "Taper", description: "a candlewick maker or seller." },
	{
		name: "Taper Weaver",
		description: "someone who made the wicks for candles."
	},
	{
		name: "Tapicer or Tapiter",
		description: "someone who wove worsted cloth."
	},
	{ name: "Tapley", description: "one who puts the tap in an ale cask" },
	{
		name: "Tapster",
		description:
			"someone employed to serve the beer in public houses, a barman."
	},
	{ name: "Tarpaulin Maker", description: "someone who made tarpaulins." },
	{
		name: "Tarrier",
		description: "someone in charge of a pack of terriers used for hunting."
	},
	{ name: "Tasker", description: "a reaper or thresher." },
	{
		name: "Tasseler",
		description:
			"someone who made tassels used in furnishings. Also a nobleman."
	},
	{ name: "Taverner", description: "an inn keeper." },
	{ name: "Tawer", description: "someone who made white leather." },
	{ name: "Tawyer", description: "someone who made white leather." },
	{
		name: "Tea Cooper",
		description:
			"tea chests were fastened with metal bands.&nbsp; Any containerfastened with metal bands was considered a cooper's trade"
	},
	{ name: "Tea Packer", description: "someone who packs tea into boxes." },
	{ name: "Teacher", description: "someone who teaches." },
	{ name: "Teacher, School", description: "someone who teaches." },
	{
		name: "Teamer or Teamer man",
		description: "someone in charge of a team of horses."
	},
	{ name: "Teamster", description: "someone in charge of a team of horses." },
	{
		name: "Teemer",
		description:
			"someone who emptied grain from the cart, or someone who poured themolten steel into the moulds."
	},
	{ name: "Teinter", description: "a dyer." },
	{
		name: "Telegraph Messenger",
		description: "someone who delivers messages sent by telegraph."
	},
	{
		name: "Telegraphist &amp; Clerk",
		description: "someone who sends and receives telegraph messages."
	},
	{
		name: "Tenter",
		description:
			"someone who stretched the cloth on a machine whilst it was drying,or who looked after and maintained the machine used in the process.Also a term for someone who looked after something e.g. a doortenter or pony tenter in the mining industry."
	},
	{
		name: "Terrier",
		description: "someone in charge of a pack of terriers used for hunting."
	},
	{ name: "Textor", description: "a weaver." },
	{ name: "Thacker", description: "a roof thatcher." },
	{
		name: "Thatcher",
		description: "roofer, one who covered roofs with straw or reeds."
	},
	{
		name: "Thirdborough",
		description: "an under, or deputy constable. Also a tithing man."
	},
	{
		name: "Thresher",
		description: "someone who separated the grain from the husks and straw."
	},
	{
		name: "Throwster",
		description:
			"someone in the textile trade who twisted the strands of fibretogether into yarn."
	},
	{ name: "Ticket Writer", description: "someone who writes tickets." },
	{
		name: "Tickney Man or Woman",
		description: "someone who sold earthenware from town to town."
	},
	{
		name: "Tide Gauger",
		description: "someone who monitored the state of the tide."
	},
	{
		name: "Tide Surveyor",
		description: "someone who monitored the state of the tide."
	},
	{ name: "Tide waiter", description: "customs inspector" },
	{
		name: "Tidesman",
		description:
			"a customs officer who checked the goods being unloaded from ships toascertain the amount of duty due."
	},
	{
		name: "Tiemaker or Tie Maker",
		description: "someone who made wooden railway ties."
	},
	{ name: "Tiger", description: "a small groom or pageboy in livery." },
	{
		name: "Tiler",
		description: "someone who lays tiles on roofs or floors."
	},
	{ name: "Tiller", description: "a farmer." },
	{ name: "Tillman", description: "a ploughman." },
	{
		name: "Tiltmaker",
		description: "someone who made canvas awnings or canopies."
	},
	{ name: "Timber Dealer", description: "someone who dealt in timber." },
	{
		name: "Timber Porter",
		description: "someone who carried or moved timber."
	},
	{
		name: "Timekeeper",
		description:
			"someone responsible for making sure things happened on time e.g.worker arriving or departing, trains, coaches, buses, etc."
	},
	{
		name: "Times Ironer",
		description: "someone responsible for ironing the daily newspaper."
	},
	{ name: "Tinctor", description: "a dyer." },
	{
		name: "Tinker",
		description: "an itinerant tin pot and pan seller and repairman"
	},
	{ name: "Tinman", description: "a tinsmith or tinker" },
	{ name: "Tin miner", description: "someone who mined tin ore." },
	{
		name: "Tinner",
		description: "someone who worked in the tin mines or a tinsmith."
	},
	{
		name: "Tin Plate Worker",
		description: "someone who worked with tin plate."
	},
	{
		name: "Tinsmith or Tin Smith",
		description: "someone who worked with tin."
	},
	{
		name: "Tinter or Teinter",
		description: "an artist who performs tinting."
	},
	{
		name: "Tipper",
		description: "someone who put the metal tips on arrows, etc."
	},
	{ name: "Tippler", description: "someone who ran an alehouse." },
	{ name: "Tipstaff", description: "a policeman or court official." },
	{
		name: "Tirewoman",
		description:
			"a milliner, a hairdresser, or a female dresser, often in thetheatre."
	},
	{ name: "Tixtor", description: "a weaver." },
	{ name: "Tobacco Spinner", description: "maker of cigars" },
	{ name: "Tobacconist", description: "shop selling tobacco products" },
	{
		name: "Todd or Todhunter",
		description: "someone employed by the parish to hunt foxes."
	},
	{ name: "Toe Rag", description: "worked at the docks as a corn porter" },
	{
		name: "Toilinet Manufacturer",
		description: "someone who made toilinet (a kind of quilting)."
	},
	{ name: "Toller", description: "someone who collected tolls." },
	{
		name: "Tollgate Keeper",
		description:
			"someone who worked at the toll gate to collect fees for the use ofthe road."
	},
	{ name: "Tollman", description: "someone who collected tolls." },
	{ name: "Tonsor", description: "a barber, or men's hairdresser. (Latin)" },
	{ name: "Tool Helver", description: "someone who made tool handles." },
	{
		name: "Topman",
		description: "a sailor who works in the ship's rigging."
	},
	{ name: "Top Sawyer", description: "the upper man in a saw pit." },
	{ name: "Topsman", description: "the head cattle drover." },
	{
		name: "Touch Holer",
		description: "someone who worked in the gun manufacturing industry."
	},
	{
		name: "Tow Card Maker",
		description: "someone who made tow cards, used in the textile industry."
	},
	{
		name: "Town Chamberlain",
		description: "someone who looked after the towns affairs."
	},
	{
		name: "Town Crier",
		description: "one who made public announcments in the streets"
	},
	{
		name: "Town Husband",
		description:
			"someone employed by the parish to collect money from the fathers ofillegitimate children for their upkeep."
	},
	{ name: "Townswaiter", description: "a customs official." },
	{ name: "Toy Maker", description: "someone who made toys." },
	{
		name: "Toyman or Toy Dealer",
		description: "someone who sold children's toys."
	},
	{
		name: "Tozer",
		description:
			"someone who worked in the wool mills employed to tose or tease thecloth."
	},
	{ name: "Tradesman", description: "a shopkeeper or a skilled craftsman." },
	{ name: "Trammer", description: "a young person who worked in the mines." },
	{ name: "Trampler", description: "a lawyer." },
	{ name: "Tranqueter", description: "someone who made hoops." },
	{ name: "Tranter", description: "a peddler" },
	{
		name: "Trapper",
		description:
			"a young person employed in the mines to open and shut the doors forthe miners."
	},
	{ name: "Traveller", description: "a travelling salesman." },
	{
		name: "Travelling Bag Maker",
		description: "someone who made travelling bags."
	},
	{
		name: "Travelling Glazier",
		description: "someone who replaced broken windows."
	},
	{ name: "Travers", description: "toll bridge collector" },
	{
		name: "Treen Maker",
		description: "someone who made domestic articles from wood."
	},
	{
		name: "Treenail Maker",
		description:
			"someone who made the long wooden pins used in shipbuilding."
	},
	{
		name: "Trenchermaker",
		description:
			"someone who made wooden boards or platters for serving food from orcutting and slicing food on."
	},
	{ name: "Trencherman", description: "a cook." },
	{
		name: "Trepanger",
		description: "one who used a circular saw to cut timber"
	},
	{ name: "Trimmer", description: "trims a ship by re-arranging its cargo" },
	{
		name: "Trimmer in Braid",
		description: "someone who sews braid onto the edges of clothing."
	},
	{ name: "Trimming Maker", description: "someone who made trimming." },
	{ name: "Trimming Seller", description: "someone who sold trimming." },
	{ name: "Tripper", description: "a dancer." },
	{ name: "Troacher", description: "a peddler." },
	{
		name: "Trolley Carter",
		description: "someone who operated the tubs in the mines."
	},
	{ name: "Troner", description: "a weighing official at the markets." },
	{ name: "Trouchman", description: "an interpreter." },
	{
		name: "Trousers Finisher",
		description: "someone who finished trousers."
	},
	{ name: "Trover", description: "a smuggler." },
	{ name: "Truchman", description: "an interpreter." },
	{ name: "Trugger", description: "someone who made long shallow baskets." },
	{ name: "Trunk Maker", description: "someone who made trunks." },
	{ name: "Trusser", description: "someone who bundled and tied hay." },
	{ name: "Tubber", description: "made tubs and barrels ie a cooper" },
	{ name: "Tubedrawer", description: "someone who made tubes." },
	{
		name: "Tubman",
		description:
			"someone who worked in the mines filling the tubs, or a courtofficial, or an English barrister."
	},
	{ name: "Tucker", description: "cleaner of cloth goods" },
	{
		name: "Tucker In",
		description:
			'a maid who attended the bedroom and "tucked in the bedclothes".'
	},
	{ name: "Tunist", description: "someone who tuned musical instruments." },
	{
		name: "Turner",
		description:
			"a person who turns wood on a lathe into spindles, or a gymnast,particularly street performers or beggars."
	},
	{
		name: "Turning Boy",
		description:
			"someone who assisted the weaver by turning the bar on the loom."
	},
	{ name: "Turnkey", description: "prison warder or jail keeper" },
	{ name: "Turnspit", description: "someone who operated the spit handle." },
	{
		name: "Tweenie or Tweeny",
		description:
			'a maid who worked "between the stairs" she assisted the cooks andthe housemaids.'
	},
	{
		name: "Twister or Twisterer",
		description:
			"someone who operated the machine used for twisting yarns and threadstogether."
	},
	{ name: "Twist Hand", description: "someone who operated a lace machine." },
	{
		name: "Ulnager",
		description: "examined the quality of woollen goods to be sold"
	},
	{ name: "Unfortunate", description: "prostitute" },
	{
		name: "Upholder",
		description:
			"an upholsterer, or someone who made quilts or mattresses. Also acheapjack and seller of secondhand goods. Also someone who assistedan auctioneer."
	},
	{ name: "Upholsteress", description: "a female upholsterer." },
	{ name: "Upright Worker", description: "a chimney sweep." },
	{ name: "Vaginarius", description: "a sheather, or scabbard maker." },
	{
		name: "Valet",
		description: "male servant that attended a nobleman or gentleman."
	},
	{
		name: "Valuator",
		description: "someone who assessed the value of objects."
	},
	{ name: "Van Guard", description: "a guard on a train." },
	{
		name: "Varnisher (Furniture)",
		description: "someone who applied varnish to furniture."
	},
	{ name: "Vassal", description: "servant of the lowest order" },
	{
		name: "Vatman",
		description:
			"someone employed in the paper making industry to put the paper pulpinto the moulds. Also someone who worked with vats in a brewery."
	},
	{ name: "Vegetable Salesman", description: "someone who sold vegetables." },
	{ name: "Vellum Binder", description: "someone who bound vellum." },
	{ name: "Vellum Sewer", description: "someone who sewed vellum." },
	{ name: "Venator", description: "a huntsman." },
	{
		name: "Vendor of Sweets",
		description: "someone who sold sweets, a confectioner."
	},
	{ name: "Venur", description: "a huntsman." },
	{
		name: "Verderer",
		description:
			"an official in charge of the royal forest, they are the watchdogs ofthe Forest landscape."
	},
	{
		name: "Verge Maker",
		description: "someone who made the spindles used in clocks and watches."
	},
	{
		name: "Verger",
		description: "one who worked with the priest in the running the church"
	},
	{ name: "Verrier", description: "a glazier." },
	{
		name: "Vestment Maker",
		description: "someone who made the gowns worn by priests."
	},
	{
		name: "Victualler or Victualer",
		description:
			"a tavern keeper, or one who provides an army, navy, or ship withfood supplies. A seller of food and drink."
	},
	{
		name: "Viewer",
		description: "one who worked at the mines in a managerial capacity"
	},
	{
		name: "Villein",
		description:
			"someone who paid dues to the lord of the manor in return for use ofthe land."
	},
	{ name: "Vintager", description: "grape farmer, wine maker" },
	{ name: "Vintner", description: "wine merchant" },
	{
		name: "Virginal Player",
		description:
			"someone who played a musical instrument similar to a harpsichord."
	},
	{
		name: "Visitor of Sick",
		description: "a volunteer who visits sick people to cheer them up."
	},
	{ name: "Vulcan", description: "blacksmith" },
	{ name: "Wabster", description: "a weaver." },
	{ name: "Waggoner", description: "someone who drove a wagon, a carrier." },
	{ name: "Wagoner", description: "wagon or cart driver" },
	{
		name: "Wailer",
		description:
			"someone employed in the mines to remove the impurities from thecoal."
	},
	{ name: "Wainwright", description: "a builder or repairer of wagons" },
	{
		name: "Waiter",
		description:
			"customs officer or tide waiter; one who waited on the tide tocollect duty on goods brought in"
	},
	{
		name: "Waiter, Inn",
		description: "someone who waited on tables at an inn."
	},
	{ name: "Waitman", description: "a night watchman." },
	{
		name: "Waitress, Inn",
		description: "a female who waited on tables at an inn."
	},
	{ name: "Wakeman", description: "a night watchman." },
	{
		name: "Walker",
		description:
			"a cloth worker who cleaned and thickened the cloth by wetting itthen walking over it."
	},
	{
		name: "Walking Stick Dresser",
		description: "someone who dressed walking sticks."
	},
	{
		name: "Walking Stick Maker",
		description: "someone who made walking sticks."
	},
	{
		name: "Waller",
		description:
			"someone who built walls either with bricks or dry stone, alsosomeone who worked making coarse salt."
	},
	{ name: "Wantcatcher", description: "someone employed to catch moles." },
	{ name: "Wanter", description: "a mole catcher" },
	{ name: "Warder", description: "someone in charge of prisoners." },
	{ name: "Wardrobe Dealer", description: "someone who dealt in wardrobes." },
	{
		name: "Wardrobe Shop Keeper",
		description: "keeper of a shop which sold wardrobes."
	},
	{ name: "Warehouse Boy", description: "an assistant in a warehouse." },
	{ name: "Warehouse Lad", description: "an assistant in a warehouse." },
	{
		name: "Warehouse Man",
		description: "someone in charge of or employee in a warehouse."
	},
	{ name: "Warehouse Porter", description: "an employee in a warehouse." },
	{
		name: "Warper",
		description:
			"someone who set the warp thread on the looms, also someone employedto move boats by hauling on the warps (the ropes attached to theboats)."
	},
	{
		name: "Warrener",
		description:
			"someone in charge of a portion of land used for breeding rabbits andother small game."
	},
	{ name: "Washman", description: "a tin coater." },
	{
		name: "Wasteman",
		description:
			"someone employed in the mines to check the old workings for gas andmaintain them in good order. A person employed to remove waste."
	},
	{
		name: "Waste Paper Dealer",
		description: "someone who dealt in waste paper."
	},
	{
		name: "Watch &amp; Clock Maker",
		description: "someone who makes watches and clocks."
	},
	{ name: "Watch Finisher", description: "assembled watches and clocks" },
	{
		name: "Watchman",
		description: "a town official who guarded the streets at night."
	},
	{
		name: "Water Bailiff",
		description:
			"official in charge of the fishing rights on a stretch of water"
	},
	{
		name: "Water Carrier",
		description: "someone who carried and sold fresh water"
	},
	{
		name: "Water Cress Woman",
		description: "a woman who grew and sold water cress."
	},
	{ name: "Water Gilder", description: "someone who trapped water fowl." },
	{
		name: "Water Leader, Leder or Loder",
		description: "someone who transported and sold fresh drinking water."
	},
	{
		name: "Waterman",
		description: "someone who worked with or on boats usually on rivers."
	},
	{
		name: "Waterproof Cab Maker",
		description: "someone who waterproofed cabs."
	},
	{
		name: "Waterproof Garment Maker",
		description: "someone who made waterproof clothing."
	},
	{
		name: "Waterside Labourer",
		description: "a dock labourer who worked on the ships in harbour."
	},
	{
		name: "Wattle Hurdle Maker",
		description:
			"someone who made a type of fence from wattle to keep the sheep in."
	},
	{ name: "Waver", description: "a weaver" },
	{ name: "Way Maker", description: "employed to make roads" },
	{ name: "Way Man", description: "surveyor of roads" },
	{ name: "Weatherspy", description: "an astrologer" },
	{ name: "Weaver", description: "someone who weaves." },
	{ name: "Webber", description: "a weaver." },
	{
		name: "Webster",
		description:
			"a weaver operating weaving looms (originally a female weaver)."
	},
	{
		name: "Weeder",
		description:
			"someone employed to remove the weeds from the gardens of the rich."
	},
	{
		name: "Weigher",
		description:
			"someone employed on the docks to weigh the cargo as it was unloaded."
	},
	{
		name: "Wellmaster",
		description:
			"someone in charge of the local well with the responsibility ofensuring clean water for the village."
	},
	{ name: "Well Sinker", description: "someone who dug wells." },
	{
		name: "Well Wright",
		description:
			"someone who made the winding equipment used to raise the bucket inthe well."
	},
	{ name: "Wet Glover", description: "someone who made leather gloves." },
	{
		name: "Wet Nurse",
		description:
			"woman employed to suckle the child of another (common practice withthe rich)"
	},
	{
		name: "Wetter",
		description:
			"someone employed to dampen paper during the printing process. Alsosomeone in the glass industry who detached the glass by wetting."
	},
	{ name: "Whacker", description: "a horse or oxen team driver." },
	{ name: "Wharfanger", description: "the owner of a wharf." },
	{
		name: "Wharfinger",
		description: "the owner of a wharf, or one who is in charge."
	},
	{ name: "Wharf Labourer", description: "a labourer who works on a wharf." },
	{
		name: "Wheeler",
		description:
			"wheel maker, attended to the spinning wheel in the textile industry"
	},
	{
		name: "Wheelwright",
		description: "maker or repairer of wagon wheels, carriages"
	},
	{
		name: "Wheeryman",
		description: "someone in charge of a wheery, a small light rowing boat."
	},
	{ name: "Whig", description: "a horse driver." },
	{ name: "Whipcord Maker", description: "someone who made whips." },
	{ name: "Whipmaker", description: "someone who made whips." },
	{
		name: "Whipperin",
		description: "someone who managed the hounds in a hunt."
	},
	{ name: "Whitcher", description: "someone who makes chests." },
	{
		name: "Whit Cooper",
		description: "someone who made barrels etc from tin."
	},
	{ name: "Whitear", description: "someone who cleaned hides." },
	{
		name: "White Limer",
		description: "someone who plastered walls using lime and water plaster."
	},
	{ name: "Whitener", description: "someone who bleached cloth." },
	{
		name: "Whitening Roll Maker",
		description:
			"someone who made the whitening used in whitening walls of cottages."
	},
	{
		name: "Whitesmith",
		description:
			"tinsmith; worker of iron who finishes or polishes the work"
	},
	{ name: "Whitester", description: "someone who bleached cloth." },
	{ name: "Whitewing", description: "a street sweeper." },
	{ name: "Whitster", description: "someone who bleached cloth." },
	{
		name: "Whittawer",
		description:
			"someone who made saddles and harnesses. Also someone who preparedwhite leather."
	},
	{
		name: "Wholesale Butcher",
		description:
			"a butcher who supplied other shops rather than the general public."
	},
	{
		name: "Wholesale Oilman",
		description: "someone who supplied oil to oil dealers."
	},
	{
		name: "Willeyer",
		description:
			"someone who throws handfulls of wool or hair, hemp or flax tow,etc., on to the feed apparatus of a willeying machine. A textileprocess."
	},
	{
		name: "Willow Plaiter or Weaver",
		description: "someone who made baskets, etc."
	},
	{
		name: "Winder",
		description:
			"someone who transferred the yarn from bobbins onto cheeses or intoballs ready for weaving. Also, in the mines someone who operated thepulley or winch."
	},
	{ name: "Window Cleaner", description: "someone who cleaned windows." },
	{ name: "Windster", description: "a silk winder." },
	{
		name: "Wine and spirit merchant",
		description: "a dealer in wine and spirits."
	},
	{
		name: "Wire Drawer",
		description:
			"someone who made wire from metal by drawing the metal throughvarious size holes in a template."
	},
	{ name: "Wire Worker", description: "someone who works with wire." },
	{
		name: "Wonkey-Scoop",
		description: "a driver who operates a one horse scoop."
	},
	{ name: "Wood Box Maker", description: "someone who makes wooden boxes." },
	{
		name: "Woodbreaker",
		description: "someone who made wooden water casks."
	},
	{ name: "Wood Carver", description: "someone who carves in wood." },
	{ name: "Wood Chopper", description: "someone who chops wood." },
	{ name: "Wood Cutter", description: "someone who cuts wood." },
	{
		name: "Woodranger",
		description: "someone in charge of the forest or woods."
	},
	{
		name: "Woodreeve",
		description: "someone in charge of the forest or woods."
	},
	{ name: "Wood Sawyer", description: "someone who saws wood." },
	{
		name: "Wood, Timber Merchant",
		description: "someone who dealt in wood."
	},
	{ name: "Wood Turner", description: "someone who turns wood on a lathe." },
	{
		name: "Woodward",
		description: "someone in charge of the forest or woods."
	},
	{ name: "Woodworker", description: "someone who works with wood." },
	{
		name: "Wool Comber",
		description:
			"someone employed in the woollen mills to operate the machines thatseparate the fibres ready for spinning."
	},
	{
		name: "Wool Driver",
		description: "someone who brought the wool to market."
	},
	{ name: "Wool Factor", description: "wool merchants agent." },
	{ name: "Wool Grower", description: "a sheep farmer." },
	{ name: "Wool Knitter", description: "someone who knits wool." },
	{
		name: "Wool Labourer",
		description: "a general labourer who works in the woollen industry."
	},
	{
		name: "Wool Man",
		description: "someone who sorted the wool into different grades."
	},
	{
		name: "Wool Sorter or Woolsorter",
		description: "someone who sorted the wool into different grades."
	},
	{
		name: "Wool Stapler",
		description: "someone who sorted the wool into different grades."
	},
	{
		name: "Woolsted Man",
		description: "a seller of woollen cloth; from worsted man."
	},
	{
		name: "Wool Winder",
		description: "someone who made up balls of wool for selling."
	},
	{
		name: "Woolen or Woollen Billy Piecer",
		description:
			"someone employed in the woollen mills to piece together the brokenyarns."
	},
	{
		name: "Woollen cloth manufacture",
		description: "the owner of a woollen cloth factory."
	},
	{ name: "Working Builder", description: "a builder." },
	{ name: "Working in Fur", description: "someone who works with fur." },
	{
		name: "Works in Soap Factory",
		description: "someone who works in a soap factory."
	},
	{
		name: "Worsted Manufacturer",
		description: "someone who made worsted cloth."
	},
	{
		name: "Worsted Shearman",
		description: "someone who made worsted cloth."
	},
	{ name: "Worsted Winder", description: "someone who winds wool." },
	{
		name: "Wright",
		description:
			"a skilled workman; builder or repairer, many different trades."
	},
	{ name: "Writer", description: "someone who writes, a scribe or a clerk." },
	{ name: "Wyrtha", description: "a labourer." },
	{
		name: "Xylographer",
		description:
			"someone who used and made wooden blocks used in printingillustrations."
	},
	{ name: "Yard Labourer", description: "someone who works in a yard." },
	{
		name: "Yardman",
		description: "rail road yard worker, or a farm worker."
	},
	{ name: "Yatman", description: "a gate keeper." },
	{ name: "Yearman", description: "someone contracted to work for a year." },
	{
		name: "Yeoman",
		description:
			"a farmer who owns his own land; a freeholder, the next class downfrom gentry, or an assistant to an official, or a ships officer incharge of stores."
	},
	{
		name: "Zincographer",
		description:
			"designer who etched in relief a pattern on zinc plates used forprinting"
	},
	{ name: "Zinc Worker", description: "someone who worked with zinc." },
	{
		name: "Zitherist",
		description: "a player of a simple, flat many-stringed instrument."
	},
	{
		name: "Zoetrope Maker",
		description:
			"a craftsman who made zoetropes, an optical toy in the form of acylinder with a series of pictures painted on the inner surfacewhich gave the impression of continuous motion when viewed throughslits in the rotating cylinder."
	},
	{ name: "Zoographer", description: "one who classifies species of animals" }
];

const highConcepts = [
	{ name: "Black sheep of a gentry family" },
	{ name: "Cast-off former gentry mistress" },
	{ name: "Coldly professional criminal" },
	{ name: "Corrupt petty clerk or guard" },
	{ name: "Cynical dancing girl or boy" },
	{ name: "Downfallen former gentry" },
	{ name: "Foreigner struggling to survive" },
	{ name: "Gap-toothed local thug" },
	{ name: "Hardscrabble orphaned urchin" },
	{ name: "Missionary of an unpopular god" },
	{ name: "Penniless country boy or girl" },
	{ name: "Popular actor or actress" },
	{ name: "Prostitute with a heart of gold" },
	{ name: "Salt-worn common sailor" },
	{ name: "Scabby beggar" },
	{ name: "Shabby boarding-house owner" },
	{ name: "Shaky-handed slum physician" },
	{ name: "Slanderous poet or playwright" },
	{ name: "Thieving drunkard or junkie" },
	{ name: "Tippling bargeman or boatman" },
	{ name: "Unpopular but zealous artist" },
	{ name: "Unpopular demihuman" },
	{ name: "Weary ragpicker or scavenger" },
	{ name: "Widely-despised moneylender" },
	{ name: "Worn-down day laborer" },
	{ name: "Ambitious young entrepreneur" },
	{ name: "Artisan of some local fame" },
	{ name: "Butler or servant to a major ﬁgure" },
	{ name: "Fearfully respected local gossip" },
	{ name: "Foreigner with enough money" },
	{ name: "Harried landlord" },
	{ name: "Herbalist or local healer" },
	{ name: "Local innkeeper or taverner" },
	{ name: "Merchant in grain or bulk goods" },
	{ name: "Merchant on his way down" },
	{ name: "Military ofﬁcer or guard ofﬁcial" },
	{ name: "Minor government functionary" },
	{ name: "Modestly prosperous farmer" },
	{ name: "Neighborhood shopkeeper" },
	{ name: "Obsessed local scholar" },
	{ name: "Peasant like all their neighbors are" },
	{ name: "Priest of a local faith" },
	{ name: "Respected local ascetic or hermit" },
	{ name: "Retired adventurer" },
	{ name: "Scuffed but respectable laborer" },
	{ name: "Ship's captain or ofﬁcer" },
	{ name: "Someone important's mistress" },
	{ name: "Venerable family elder" },
	{ name: "Veteran soldier or guardsman" },
	{ name: "Wandering peddler or trader" },
	{ name: "Abbot or head of a monastery" },
	{ name: "Court wizard or gentry mage" },
	{ name: "Demihuman leader or high priest" },
	{ name: "Diplomat from a foreign land" },
	{ name: "Discreet kingmaker or spymaster" },
	{ name: "Ethnarch of a local minority" },
	{ name: "Feared semi-legit criminal boss" },
	{ name: "Genteelly-kept noble hostage" },
	{ name: "Kept pretender to a foreign title" },
	{ name: "Local temple's high priest" },
	{ name: "Magistrate or judge" },
	{ name: "Major local ofﬁcial or minister" },
	{ name: "Mayor or chief city ofﬁcial" },
	{ name: "Merchant-prince of wide affairs" },
	{ name: "Military general or high ofﬁcer" },
	{ name: "Most popular courtesan in town" },
	{ name: "Paid-off noble family disgrace" },
	{ name: "Revered artistic genius" },
	{ name: "Rusticating loser of a court feud" },
	{ name: "Ruthless noble clan patriarch" },
	{ name: "Sorcerer of fearsome name" },
	{ name: "Spare prince or major noble scion" },
	{ name: "Traditional cultural ofﬁce-holder" },
	{ name: "Wealthy but hated usurer" },
	{ name: "Wealthy scholar-noble" }
];

exports.highConcepts = [...victorianProfessions, ...highConcepts];

/* Characterisation */
const nonphysicalCharacterisation = [
	// clothing
	"Dressed in bright colors",
	"Dressed in religious or ceremonial items",
	"Dressed suggestively",
	"Dressed modestly",
	"Dressed in old, battle-torn clothes",
	"Dressed in neat, clean clothes",
	"Dressed more/less stylish than their status suggests",
	"Dressed with a noticeable piece of jewelry",
	"Dressed with a brand new armring",
	"Dressed in simple woollen clothes",
	"Dressed with a wolf pelt on their shoulders",
	"Dressed with a bear pelt on their shoulders",
	"Dressed with a fox pelt on their shoulders",
	"Dressed with an ornate belt",
	"Wears a necklace of animal bones",
	"Wears many rings",
	"Dressed in a foreign fashion",

	// wear & tear
	"Appear dirty & dishevelled",
	"Appear sunburned & weather-worn",
	"Dirty or marked from working",

	// smell
	"Smell very unpleasant",
	"Smell very pleasant",
	"Smell of alcohol",
	"Smell earthy but not unpleasant",
	"Smell unnaturally of death",
	"Smell of flowers",
	"Smell of smoke & firewood",
	"Smell of blood & fear",
	"Smell of iron",

	// mannerisms
	"Accent stands out as foreign",
	"Accent is a little hard to decipher",
	"Speech is broken, still learning the language",
	"Speech is broken by a stutter or tic",
	"Dislikes sunlight",
	"Fidgets, always moving",
	"Remains eerily still",
	"Audibly growls before speaking",
	"Subtly whimpers after each sentence",
	"Indirect and avoidant in speech",
	"Toying with beads or trinkets",
	"Clumsy, unaware of surroundings",
	"Moves slowly and deliberately",
	"Talks loudly, filling the room",
	"Spreads limbs, taking up space",
	"Movements are weary and heavy",
	"Moves in a smooth, relaxed way",

	// gaze
	"Eyes are sunken and dark",
	"Eyes are soft, almost unfocused",
	"Eyes are blank like still water",
	"Eyes are sharp and judging",
	"Eyes glint with something unsaid",
	"Gaze flickers like fire",
	"Eyes look through you, searching",
	"Eyes are glassy and unblinking",
	"Gaze is wide and alerting",
	"Gaze is narrow and shrewd",
	"Eyes are bright and quick",
	"Gaze is cold and mechanical",
	"Gaze drifts around lazily",
	"Gaze locks firmly onto whatever it sees",

	// vibes
	"Subtly expresses grief and loss",
	"Shrunken within skin and clothing",
	"Tired of something",
	"Hopeful for something",
	"Noticeably greedy for something",
	"Confident and purposeful",
	"Something sinister about them",
	"Elegant and graceful",
	"Lithe, with a feline grace",
	"Air of refinement",
	"Disciplined poise",
	"Grounded presence",
	"Otherworldly, elf-like aura",
	"Regal bearing",
	"Awkward charm",
	"Mysterious allure",
	"No-nonsense demeanor",
	"Predator's grace",
	"Jolly demeanor",
	"Mischievous charm",
	"Commanding presence",
	"Enigmatic air",
	"Warmly charming",
	"Comforting presence",
	"Captivating grace",
	"Quirky charm",
	"Determined spirit",
	"Ethereal beauty",
	"Weathered resilience",
	"Dignified air",
	"Gentle demeanor"
];

const physicalCharacterisation = [
	// injured/disabled
	"Facially disfigured",
	"Battle-scarred face & hands",
	"Mushrooms grow through their cracked skin",
	"Blind in one eye",
	"Missin an ear",
	"Extremely hairy limbs",
	"Missing an arm",
	"Walks with crutches",
	"Slight tremble in one arm",
	"Peppered with blisters & open wounds",
	"Breath rattles faintly",
	"Eyes are constantly wet",
	"Skin has a yellow tinge",
	"Almost sickly pale",
	"Steady twitch in one eye",
	"Skin has red blotches",
	"Ears and fingertips show signs of decay",

	// build
	"Tall or slender",
	"Plump and stout",
	"Voluptuously curved",
	"Large & bulky",
	"Massively built",
	"Lean & wiry",
	"Athletic and toned",
	"Frail and delicate",
	"Stocky and solid",
	"Compact and muscular",
	"Lanky and gangly",
	"Slouched and hunched",
	"Squat and sturdy",
	"Toned and sinewy",
	"Delicately built, like an elf",
	"Powerfully built, like a fortress",
	"Angular and sharp-featured",
	"Spry and agile",
	"Solidly built",
	"Stalwart and robust",
	"Graceful and poised",
	"Graceless & lumbering",
	"Brawny and imposing",
	"Lean & athletic like a sprinter",
	"Delicate, almost fragile",
	"Tall and statuesque",
	"Slight and unassuming",
	"Burly and broad-shouldered"
];

const hairCharacterisation = [
	"Hair is dark blonde and short",
	"Hair is dark blonde and braided",
	"Hair is dark blonde and windswept",
	"Hair is dark blonde and excessively combed",
	"Hair is dark blonde and adorned with braids & beads",
	"Hair is dark blonde and neatly arranged",
	"Hair is dark blonde and flows down past their shoulder",
	"Hair is dark blonde and tussled",
	"Hair is dark blonde and unkempt",
	"Hair is dark blonde and braided",
	"Hair is light blonde and short",
	"Hair is light blonde and braided",
	"Hair is light blonde and windswept",
	"Hair is light blonde and excessively combed",
	"Hair is light blonde and adorned with braids & beads",
	"Hair is light blonde and neatly arranged",
	"Hair is light blonde and flows down past their shoulder",
	"Hair is light blonde and tussled",
	"Hair is light blonde and unkempt",
	"Hair is light blonde and braided",
	"Hair is dark red and short",
	"Hair is dark red and braided",
	"Hair is dark red and windswept",
	"Hair is dark red and excessively combed",
	"Hair is dark red and adorned with braids & beads",
	"Hair is dark red and neatly arranged",
	"Hair is dark red and flows down past their shoulder",
	"Hair is dark red and tussled",
	"Hair is dark red and unkempt",
	"Hair is dark red and braided",
	"Hair is light red and short",
	"Hair is light red and braided",
	"Hair is light red and windswept",
	"Hair is light red and excessively combed",
	"Hair is light red and adorned with braids & beads",
	"Hair is light red and neatly arranged",
	"Hair is light red and flows down past their shoulder",
	"Hair is light red and tussled",
	"Hair is light red and unkempt",
	"Hair is light red and braided",
	"Hair is dark brown and short",
	"Hair is dark brown and braided",
	"Hair is dark brown and windswept",
	"Hair is dark brown and excessively combed",
	"Hair is dark brown and adorned with braids & beads",
	"Hair is dark brown and neatly arranged",
	"Hair is dark brown and flows down past their shoulder",
	"Hair is dark brown and tussled",
	"Hair is dark brown and unkempt",
	"Hair is dark brown and braided",
	"Hair is grey and short",
	"Hair is grey and braided",
	"Hair is grey and windswept",
	"Hair is grey and excessively combed",
	"Hair is grey and adorned with braids & beads",
	"Hair is grey and neatly arranged",
	"Hair is grey and flows down past their shoulder",
	"Hair is grey and tussled",
	"Hair is grey and unkempt",
	"Hair is grey and braided",
	"Hair is white and short",
	"Hair is white and braided",
	"Hair is white and windswept",
	"Hair is white and excessively combed",
	"Hair is white and adorned with braids & beads",
	"Hair is white and neatly arranged",
	"Hair is white and flows down past their shoulder",
	"Hair is white and tussled",
	"Hair is white and unkempt",
	"Hair is white and braided",
	"Hair is black and short",
	"Hair is black and braided",
	"Hair is black and windswept",
	"Hair is black and excessively combed",
	"Hair is black and adorned with braids & beads",
	"Hair is black and neatly arranged",
	"Hair is black and flows down past their shoulder",
	"Hair is black and tussled",
	"Hair is black and unkempt",
	"Hair is black and braided"
];

exports.characterisation = {
	nonphysicalCharacterisation,
	physicalCharacterisation,
	hairCharacterisation
};

exports.approach = [
	"bargain & negotiate",
	"bribe & buy off",
	"negotiate & compromise",
	"brute force",
	"await opportunity, then hit & run",
	"cause a distraction elsewhere",
	"use stealth & secrecy",
	"lie & manipulate",
	"beg & plead",
	"threaten & blackmail",
	"seek help from an ally",
	"refuse to acknowledge the problem",
	"avoid by focusing on something trivial",
	"intimidate & dominate",
	"blame others & avoid responsibility",
	"disengage now, scheme & plot for later",
	"use their social influence",
	"sacrifice & trust in the gods",
	"panic and act rashly"
];

/* Seeds */

exports.expertise = {
	common: [
		"Animal husbandry",
		"Beauty grooming and styling",
		"Blacksmithing",
		"Brewing",
		"Building fires & pyres",
		"Construction & carptentry",
		"Farming",
		"Fishing",
		"Fletching",
		"Foresting",
		"Healing & herbalism",
		"Hunting & trapping",
		"Foraging & extracting samples",
		"Local wilderness",
		"Sailing",
		"Shepherding",
		"Tanning & leatherwork"
	],
	uncommon: [
		"Asculum & The Light",
		"Curses & mutations",
		"Delving & caving",
		"Distant lands",
		"Dwarven relics",
		"Elves & woodlanders",
		"Galder magic",
		"Music and poetry",
		"Outdoor survival",
		"Politics of Norðland",
		"Raiding & battle",
		"Seiðr and witchcraft",
		"Skaldic poetry",
		"Tactics and strategy",
		"The gods and fate",
		"Trade & mercantile",
		"Weapon techniques"
	]
};
