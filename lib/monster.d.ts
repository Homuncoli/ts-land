import { DamageType } from "./gamedata";

export {}

declare global {
    function is_monster(obj: any): boolean; 

    function get_monster(id: number): MonsterInstance;
    function get_nearest_monster(id: MonsterFilter): MonsterInstance;
    function get_targeted_monster(): MonsterInstance;

    type MonsterInstance = MonsterData;

    type MonsterFilter = {
        max_att: number;
	    min_xp: number;
	    target: string | any;
	    no_target: boolean;
	    path_check: boolean;
	    type: string;
    }

    interface MonsterData {
        "1hp"?:         boolean;
        aa?:            number;
        abilities?:     Ablities;
        achievements?:  Array<Array<number | string>>;
        aggro:          number;
        announce?:      boolean | string;
        armor?:         number;
        article?:       string;
        attack:         number;
        avoidance?:     number;
        cbuff?:         Array<Array<number | string>>;
        charge:         number;
        cooperative?:   boolean;
        cute?:          boolean;
        damage_type:    DamageType;
        difficulty?:    number;
        dreturn?:       number;
        escapist?:      boolean;
        evasion?:       number;
        explanation?:   string;
        frequency:      number;
        hide?:          boolean;
        hit?:           string;
        hp:             number;
        humanoid?:      boolean;
        immune?:        boolean;
        lifesteal?:     number;
        lucrativeness?: number;
        max_hp?:        number;
        mp:             number;
        name:           string;
        operator?:      boolean;
        pet?:           Pet;
        poisonous?:     boolean;
        prefix?:        string;
        rage:           number;
        range:          number;
        rbuff?:         string;
        reflection?:    number;
        resistance?:    number;
        respawn_as?:    string;
        respawn:        number;
        roam?:          boolean;
        rpiercing?:     number;
        size?:          number;
        skin:           string;
        slots?:         Slots;
        spawns?:        Array<Array<number | string>>;
        special?:       boolean;
        speed:          number;
        supporter?:     boolean;
        trap?:          boolean;
        xp:             number;
        apiercing?:     number;
        balance?:       string;
        crit?:          number;
        orientation?:   number;
        projectile?:    string;
        stationary?:    boolean;
        unlist?:        boolean;
        peaceful?:       boolean;
        drop_on_hit?:    boolean;
        global?:       boolean;
        passive?:      boolean;
        goldsteal?:    number;
        explosion?:    number;
    }

    enum MonsterNames {
        "snowman",
        "cutebee",
        "wolfie",
        "gredpro",
        "fireroamer",
        "greenfairy",
        "icegolem",
        "skeletor",
        "nerfedmummy",
        "prat",
        "mrpumpkin",
        "bscorpion",
        "scorpion",
        "jrat",
        "porcupine",
        "target_ar900",
        "bbpompom",
        "slenderman",
        "snake",
        "target_a750",
        "bat",
        "crabx",
        "xscorpion",
        "target_ar500red",
        "felemental",
        "nelemental",
        "puppy4",
        "spider",
        "chestm",
        "puppy3",
        "vbat",
        "croc",
        "gscorpion",
        "goo",
        "mummy",
        "dknight2",
        "crabxx",
        "pinkgoo",
        "squigtoad",
        "pppompom",
        "mvampire",
        "jr",
        "stompy",
        "d_wiz",
        "osnake",
        "target_r750",
        "dragold",
        "tortoise",
        "wolf",
        "mrgreen",
        "ligerx",
        "fieldgen0",
        "kitty3",
        "eelemental",
        "boar",
        "franky",
        "poisio",
        "kitty4",
        "kitty1",
        "frog",
        "kitty2",
        "crab",
        "plantoid",
        "hen",
        "redfairy",
        "wabbit",
        "target_r500",
        "xmagen",
        "oneeye",
        "tiger",
        "armadillo",
        "puppy2",
        "xmagex",
        "bluefairy",
        "goblin",
        "fvampire",
        "puppy1",
        "welemental",
        "target",
        "iceroamer",
        "grinch",
        "bee",
        "zapper0",
        "pinkgoblin",
        "minimush",
        "squig",
        "tinyp",
        "rooster",
        "rat",
        "a7",
        "mole",
        "rudolph",
        "xmagefi",
        "bgoo",
        "ent",
        "target_a500",
        "xmagefz",
        "mechagnome",
        "stoneworm",
        "phoenix",
        "gbluepro",
        "arcticbee",
        "ggreenpro",
        "a1",
        "a3",
        "a2",
        "a5",
        "a4",
        "booboo",
        "a6",
        "a8",
        "greenjr",
        "rgoo",
        "ghost",
        "cgoo",
        "bigbird",
        "goldenbat",
        "gpurplepro",
    }
}