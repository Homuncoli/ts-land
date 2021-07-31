interface Character {
	"name": string,
	"type": string,
	"ctype": 'mage' | 'merchant' | 'paladin' | 'priest' | 'ranger' | 'rogue' | 'warrior', // One of G.classes
	"hp": number,
	"max_hp": number,
	"mp": number,
	"max_mp": number,
	"level": number,
	"xp": number, // Your current XP
	"max_xp": number, // max_xp is G.levels[character.level]
	"str": number,
	"int": number,
	"dex": number,
	"vit": number,
	"for": number, // number Fortitude, number% PVP Damage Reduction
	"attack": number,
	"frequency": number, // attacks/second
	"speed": number, // run speed, pixels/second
	"range": number, // attack range in pixels
	"xrange": number, // extra range allowance - increases number/second - max number
	"armor": number,
	"resistance": number,
	"mp_cost": number,
	"evasion": number, // number%
	"miss": number, // % of attacks you miss
	"reflection": number, // magical attack reflection
	"lifesteal": number, // number%
	"manasteal": number, // number%
	"rpiercing": number, // resistance piercing
	"apiercing": number, // armor piercing
	"crit": number, // % chance to hit numberX
	"dreturn": number, // damage return
	"courage": number, // max amount of physical targets before getting scared
	"mcourage": number, // max amount of magical targets before getting scared
	"pcourage": number, // max amount of pure targets before getting scared
	"fear": number, // courage excess
	"tax": number, // number%
	"gold": number,
	"cash": number, // Shells
	"xpm": number, // XP multiplier
	"luckm": number, // Luck multiplier
	"goldm": number, // +number% Gold
	"targets": number, // Number of monsters who target you
	"rip": boolean, // If true, you are dead
	"afk": boolean, // When you move your mouse, becomes true
	"visible": boolean, // Indicates whether a character is visible or not
	"code": boolean, // true when a character is running Code
	"citizen": boolean, // true for moving NPC's
	"ping": number, // average round-trip between character and server in milliseconds
	"cc": number, // Call Code Cost
	"moving": boolean,
	"target": string, // ID of the monster you are targeting or the name of the character you are targeting
	"focus": string, // Secondary, manual focus/target
	"in": string, // Which instance your character is in If you are in a dungeon, it's a unique ID, otherwise it's the map you are in
	"map": string, // The map your character is in
	"x": number, // Your actual parent.character has "real_x", "real_y" values
	"y": number,   // character object in Code mimics these values into "x" and "y
	"vision": [number], // Your vision, it's a number rectangle
	"owner": string, // Owner ID - Available If a character isn't private, "" otherwise
	"me": number, // Set for your character
	"guild": string,
	"stand": boolean, // Merchant stand type
	"age": number, // age in days
	"skin": string, // Your base skin
	"cx": ["santahat"], // Cosmetics
	"slots": {
		"mainhand": {"name": string,"level":number},
		"offhand": any,
		"helmet": any,
		"chest": {"name": string,"level":number,"stat_type":"str"},
		"pants": any,
		"shoes": any,
		"gloves": any,
		"cape": any,
		"belt": {"name": string,"level":number},
		"ringnumber": any,
		"ringnumber": any,
		"earringnumber": any,
		"earringnumber": any,
		"amulet": any,
		"orb": any,
		"elixir": {"name": string,"expires": string}
	},
	"isize": number, // Inventory size
	"esize": number, // Empty slots
	"items": [
		// character.items.length is usually number, but could be lower, empty spaces are null
		{"name": string,"level":number},
		any,
		{"name": string,"q":number}, // "q" is for the quantity of the item
	],
	"party": string,
	"pdps": number, // Approximated dps used for the party share % 
	"s": {
		// Conditions or Buffs
		// G.conditions has stat information on most conditions
		// If a condition isn't present, it will likely not be in "s"
		// "ms" is milliseconds left
		"cursed": {"ms":number},
		"mluck": {"ms":number,"f":"MerchantName"},
		"citizennumberaura": {"ms":number,"name": string,"luck":number},
		// ^ an example of a dynamically generated status that's not on G.conditions
		"invis": boolean,
		"invincible": boolean,
		// you are invincible when you first enter a PVP area
		"poisoned": boolean,
		"poisonous": boolean,
		"stunned": boolean,
	},
	"c": {
		// Channeling actions
		// stop("town"), stop("revival") can be used to stop them
		"town": {"ms":number}, // Set when "town" portal is in progress
		"revival": {ms:number,f:"PriestName"}, // Set when revival is in progress
	},
	"q": {
		// Progressed actions
		"upgrade": {"ms":number,"len":number,"num":number}, // Item at inventory position #number is being upgraded
		"compound": {"ms":number,"len":number,"num":number}, // Item at inventory position #number is being compounded
		"exchange": {"ms":number, "name": string,"num":number}, // A "gemnumber" exchange is in progress
	},
	"friends": [ // Owner ID's of your friends
		"number",
		"number"
	],
	// Following attributes can be referenced when "moving" is true
	"vx": number, // Speed on the X-axis
	"vy": number, // Speed on the Y-axis
	"from_x": number,
	"from_y": number,
	"going_x": number,
	"going_y": number,
}