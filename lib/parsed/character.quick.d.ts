// Generated by https://quicktype.io
//
// To change quicktype's target language, run command:
//
//   "Set quicktype target language"

export type Character = {
    x:               number;
    y:               number;
    note:            string;
    properties:      string[];
    read_only:       string[];
    proxy_character: boolean;
    alpha:           number;
    visible:         boolean;
    cskin:           string;
    i:               number;
    j:               number;
    skin:            string;
    stype:           string;
    updates:         number;
    cscale:          number;
    in:              string;
    map:             string;
    hp:              number;
    max_hp:          number;
    mp:              number;
    max_mp:          number;
    xp:              number;
    attack:          number;
    frequency:       number;
    speed:           number;
    range:           number;
    armor:           number;
    resistance:      number;
    level:           number;
    rip:             boolean;
    afk:             boolean;
    s:               Status;
    c:               ChannelingActions;
    q:               ProgressedActions;
    age:             number;
    pdps:            number;
    id:              string;
    cid:             number;
    cx:              Cx;
    slots:           Slots;
    ctype:           string;
    owner:           string;
    int:             number;
    str:             number;
    dex:             number;
    vit:             number;
    for:             number;
    mp_cost:         number;
    mp_reduction:    number;
    max_xp:          number;
    goldm:           number;
    xpm:             number;
    luckm:           number;
    isize:           number;
    esize:           number;
    gold:            number;
    cash:            number;
    targets:         number;
    m:               number;
    evasion:         number;
    miss:            number;
    reflection:      number;
    lifesteal:       number;
    manasteal:       number;
    rpiercing:       number;
    apiercing:       number;
    crit:            number;
    critdamage:      number;
    dreturn:         number;
    tax:             number;
    xrange:          number;
    pnresistance:    number;
    firesistance:    number;
    fzresistance:    number;
    stun:            number;
    blast:           number;
    explosion:       number;
    courage:         number;
    mcourage:        number;
    pcourage:        number;
    fear:            number;
    items:           Array<OwnedItem | null>;
    cc:              number;
    ipass:           string;
    home:            string;
    friends:         any[];
    xcx:             string[];
    pzazz:           number;
    last_ms:         string;
    name:            string;
    walking?:        boolean;
    real_alpha:      number;
    real_x:          number;
    real_y:          number;
    type:            string;
    me:              number;
    base:            Base;
    awidth:          number;
    aheight:         number;
    explanation:     string;
    ping:            number;
    vision:          number[];
    ntag_cache:      string;
    name_tag:        NameTag;
    last_fear:       number;
    stats:           Stats;
    listeners:       Listener[];
    bot:             string;
}

export type OwnedItem = {
    name: string;
    level?: number;
    q?: number;
}

export type Channel = {
    ms: number;
    f?: string;
}

export type ChannelingActions = {
    town?: Channel;
    revival?: Channel;
}

export type ProgressAction = {
    ms: number;
    num: number;
    len?: number;
    name?: string;
}

export type ProgressedActions = {
    upgrade?: ProgressAction;
    compound?: ProgressAction;
    exchange?: ProgressAction;
}


export type Base = {
    h:  number;
    v:  number;
    vn: number;
}

export type Cx = {
    hair:   string;
    head:   string;
    makeup: string;
}

export type Listener = {
    id:    string;
    event: string;
    one?:  boolean;
}

export type NameTag = {
    x:       number;
    y:       number;
    width:   number;
    height:  number;
    alpha:   number;
    visible: boolean;
    zy:      number;
    name:    string | null;
}

export type Slots = {
    ring1:    Equipment | null;
    ring2:    Equipment | null;
    earring1: Equipment | null;
    earring2: Equipment | null;
    belt:     Equipment | null;
    mainhand: Equipment | null;
    offhand:  Equipment | null;
    helmet:   Equipment | null;
    chest:    Equipment | null;
    pants:    Equipment | null;
    shoes:    Equipment | null;
    gloves:   Equipment | null;
    amulet:   Equipment | null;
    orb:      Equipment | null;
    elixir:   Equipment | null;
    cape:     Equipment | null;
}

export type Equipment = {
    name: string;
    gift?: number;
    level?: number;
};

export type Stats = {
    str: number;
    dex: number;
    int: number;
    vit: number;
    for: number;
}

export type Buff = {
    ms: number;
    f?: string;
    name?: string;
    skin?: string;
    luck?: number;
}

export type Status = {
    cursed: Buff;
    mluck: Buff;
    citizen0aura: Buff;
    invis: boolean;
    invincible: boolean;
    poisoned: boolean;
    poisonous: boolean;
    stunned: boolean;
}