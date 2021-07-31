interface Entity {
	"name": "Goo (Modified)",
	"type": string,
	"mtype": string,
	"skin": string,
	"hp": number,
	"max_hp": number,
	"mp": number,
	"speed": number,
	"xp": number,
	"attack": number,
	"level": number, // After level 12, only hp/max_hp/xp increases
	"frequency": 0.4, // 0.4 attacks/second
	"aggro": 0.5, // 50% chance to attack on sight
	"rage": 0.5, // 50% chance to target the player on attack
	"damage_type": "physical" | "magical", // "physical" or "magical"
	"respawn": number, // Respawns in 10 seconds on average
	"difficulty": 1.25, // A multiplier for monsters' gold drops
	"range": number, // Attack range in pixels
	"id": "376", // ID of the monster
	"map": string, // Map of the monster, always your map
	"in": string, // Instance of the monster, always your instance
	"s": {
		"stunned": boolean,
		"cursed": {"ms":400},
	},
	"target": string, // Set when a monster is targeting a player
	"moving": boolean,
	"visible": boolean, // If it's false, you can't see the monster
	"dead": boolean, // true when the monster is defeated
	// "dead" can have string values too, such as "map" / "vision"
	// Indicating the reason why the monster is as good as dead to you
	"x": number,
	"y": number,
	"width": number,
	"height": number,
	// Optional Attributes
	"armor": number,
	"resistance": number,
	"dreturn": number, // 3% Damage Return
	"lifesteal": number, // 120% Lifesteal
	"evasion": 12.5, // 12.5% Evasion
	"reflection": number, // 5% Spell Reflection
	"humanoid": boolean, // Some things are more effective against humanoids
	"cooperative": boolean, // Everyone gets a %-based drop
	"immune": boolean, // Immune to most skills and conditions
	"1hp": boolean, // Attacks only deal 1hp damage
	"spawns": [
		[200,"nerfedmummy"], // Spawns a "nerfedmummy" every 200ms
	],
	"abilities": {
		"portal": {
			"cooldown": number,
		},
	},
	// Following attributes can be referenced when "moving" is true
	"vx": number, // Speed on the X-axis
	"vy": number, // Speed on the Y-axis
	"from_x": number,
	"from_y": number,
	"going_x": number,
	"going_y": number,
}