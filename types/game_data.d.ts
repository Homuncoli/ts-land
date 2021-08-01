interface Achivement {
    name: string,
    explanation?: string,
    shells?: number,
    count?: number,
	rr?: number,
	title?: string,
}

interface Title {
	title: string,
}

type Entity = Monster | Character

interface Monster {
    aa: number,
	resistance: number,
	humanoid: boolean,
	frequency: number,
	damage_type: magical | physical,
	skin: string,
	xp: number,
	speed: number,
	slots: {
		mainhand: {
			name: string,
			level: number,
		}
	},
	armor: number,
	charge: number,
	attack: number,
	lucrativeness: number,
	spawns: [
		[
			number,
			string,
		]
	],
	hp: number,
	name: string,
	rage: number,
	respawn: number,
	range: number,
	aggro: number,
	mp: number,
	roam: boolean
}

interface Character {
	name: string,
	type: string,
	ctype: string, // One of G.classes
	hp: number,
	max_hp: number,
	mp: number,
	max_mp: number,
	level: number,
	xp: number, // Your current XP
	max_xp: number, // max_xp is G.levels[character.level]
	str: number,
	int: number,
	dex: number,
	vit: number,
	for: number, // 10 Fortitude, 10% PVP Damage Reduction
	attack: number,
	frequency: number, // attacks/second
	speed: number, // run speed, pixels/second
	range: number, // attack range in pixels
	xrange: number, // extra range allowance - increases 5/second - max 25
	armor: number,
	resistance: number,
	mp_cost: number,
	evasion: number, // 2.5%
	miss: number, // % of attacks you miss
	reflection: number, // magical attack reflection
	lifesteal: number, // 10%
	manasteal: number, // 0.25%
	rpiercing: number, // resistance piercing
	apiercing: number, // armor piercing
	crit: number, // % chance to hit 2X
	dreturn: number, // damage return
	courage: number, // max amount of physical targets before getting scared
	mcourage: number, // max amount of magical targets before getting scared
	pcourage: number, // max amount of pure targets before getting scared
	fear: number, // courage excess
	tax: number, // 2%
	gold: number,
	cash: number, // Shells
	xpm: number, // XP multiplier
	luckm: number, // Luck multiplier
	goldm: number, // +25% Gold
	targets: number, // Number of monsters who target you
	rip: boolean, // If boolean, you are dead
	afk: boolean, // When you move your mouse, becomes boolean
	visible: boolean, // Indicates whether a character is visible or not
	code: boolean, // boolean when a character is running Code
	citizen: boolean, // boolean for moving NPC's
	ping: number, // average round-trip between character and server in milliseconds
	cc: number, // Call Code Cost
	moving: boolean,
	target: 1233, // ID of the monster you are targeting or the name of the character you are targeting
	focus: string, // Secondary, manual focus/target
	in: string, // Which instance your character is in If you are in a dungeon, it's a unique ID, otherwise it's the map you are in
	map: string, // The map your character is in
	x: number, // Your actual parent.character has real_x, real_y values
	y: number,   // character object in Code mimics these values into x and y
	vision: [700,500], // Your vision, it's a 1400X1000 rectangle
	owner: 5818821692620800, // Owner ID - Available If a character isn't private,  otherwise
	me: number, // Set for your character
	guild: string,
	stand: boolean, // Merchant stand type
	age: number, // age in days
	skin: string, // Your base skin
	cx: [santahat], // Cosmetics
	slots: {
		mainhand: {name: string,level: number,},
		offhand: any,
		helmet: any,
		chest: {name: string,level: number,stat_type: string},
		pants: any,
		shoes: any,
		gloves: any,
		cape: any,
		belt: {name: string,level: number,},
		ring1: any,
		ring2: any,
		earring1: any,
		earring2: any,
		amulet: any,
		orb: any,
		elixir: {name: string,expires: string}
	},
	isize: number, // Inventory size
	esize: number, // Empty slots
	items: [
		// character.items.length is usually 42, but could be lower, empty spaces are any
		{name: string,level: number,},
		any,
		{name: string,q: number,}, // q is for the quantity of the item
	],
	party: string,
	pdps: number, // Approximated dps used for the party share % 
	s: {
		// Conditions or Buffs
		// G.conditions has stat information on most conditions
		// If a condition isn't present, it will likely not be in s
		// ms is milliseconds left
		cursed: {ms: number,},
		mluck: {ms: number,f: string},
		citizen0aura: {ms: number,name: string,skin: string,luck: number,},
		// ^ an example of a dynamically generated status that's not on G.conditions
		invis: boolean,
		invincible: boolean,
		// you are invincible when you first enter a PVP area
		poisoned: boolean,
		poisonous: boolean,
		stunned: boolean,
	},
	c: {
		// Channeling actions
		// stop(town), stop(revival) can be used to stop them
		town: {ms: number,}, // Set when town portal is in progress
		revival: {ms: number,f: string}, // Set when revival is in progress
	},
	q: {
		// Progressed actions
		upgrade: {ms: number,len: number,num: number,}, // Item at inventory position #5 is being upgraded
		compound: {ms: number,len: number,num: number,}, // Item at inventory position #0 is being compounded
		exchange: {ms: number,name:gem0,num: number,}, // A gem0 exchange is in progress
	},
	friends: [ // Owner ID's of your friends
		6237651870941184,
		5605361818009600
	],
	// Following attributes can be referenced when moving is boolean
	vx: number, // Speed on the X-axis
	vy: number, // Speed on the Y-axis
	from_x: number,
	from_y: number,
	going_x: number,
	going_y: number,
}

type Position = [number, number];

interface NPC {
    position?: Position,
    positions?: Position[],
    id: string,
    name?: string,
    loop: boolean,
}

interface Trap {
    postion: Position,
    type: string,
}

interface Zone {
    drop?: string,
    type?: string,
    polygon?: Position[],
}

interface MonsterSpawn {
    count?: number,
    boundary?: [number, number, number, number],
    boundaries?: [number, number, number, number][],
    type?: string,
    grow?: boolean,
    stype?: string,
}

interface Map {
	on_death?: any,
	npcs?: NPC[],
	key?: string,
	animatables?: any,
	traps?: Trap[],
	zones?: Zone[],
	name?: string,
	drop_norm?: number,
	quirks?: [number, number, number, number, string, string?][],
	doors?: [number, number, number, number, string, number, number][],
	on_exit?: any,
	spawns?: [number, number, number, number][] | [number, number][],
	ref?: any,
	monsters?: MonsterSpawn[],
}