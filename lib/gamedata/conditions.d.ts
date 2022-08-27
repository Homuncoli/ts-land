import { DamageType } from "./class";

export interface ConditionMapped {
    newcomersblessing: LuckBuff;
    stunned:           CrowdControlCondition;
    massproductionpp:  Charmed;
    stoned:            CrowdControlCondition;
    purifier:          Darkblessing;
    mining:            Fishing;
    marked:            Charmed;
    blink:             MiscCondition;
    cursed:            CrowdControlCondition;
    mluck:             LuckBuff;
    warcry:            Darkblessing;
    hopsickness:       LuckBuff;
    mcourage:          Mcourage;
    darkblessing:      Darkblessing;
    sugarrush:         Darkblessing;
    monsterhunt:       Block;
    eburn:             Eburn;
    poisonous:         MiscCondition;
    sanguine:          Darkblessing;
    mlifesteal:        Darkblessing;
    shocked:           CrowdControlCondition;
    stack:             Block;
    authfail:          Authfail;
    eheal:             Eheal;
    penalty_cd:        Block;
    phasedout:         Darkblessing;
    halloween1:        LuckBuff;
    burned:            Burned;
    licenced:          MiscCondition;
    fullguardx:        ConditionsFullguard;
    charging:          Charging;
    invis:             MiscCondition;
    dash:              Dash;
    rspeed:            Darkblessing;
    power:             Darkblessing;
    dampened:          CrowdControlCondition;
    weakness:          Weakness;
    town:              Fishing;
    halloween2:        LuckBuff;
    easterluck:        LuckBuff;
    notverified:       Authfail;
    fingered:          Fingered;
    deepfreezed:       Deepfreezed;
    sleeping:          Sleeping;
    xpower:            Darkblessing;
    reflection:        Reflection;
    energized:         Darkblessing;
    charmed:           Charmed;
    holidayspirit:     LuckBuff;
    mshield:           MiscCondition;
    massproduction:    Charmed;
    frozen:            Burned;
    invincible:        Block;
    fishing:           Fishing;
    fullguard:         ConditionsFullguard;
    tangled:           CrowdControlCondition;
    halloween0:        LuckBuff;
    slowness:          CrowdControlCondition;
    withdrawal:        Weakness;
    hardshell:         Hardshell;
    poisoned:          Poisoned;
    woven:             CrowdControlCondition;
    block:             Block;
    xshotted:          Deepfreezed;
}

export enum ConditionNames {
    "newcomersblessing",
    "stunned",
    "massproductionpp",
    "stoned",
    "purifier",
    "mining",
    "marked",
    "blink",
    "cursed",
    "mluck",
    "warcry",
    "hopsickness",
    "mcourage",
    "darkblessing",
    "sugarrush",
    "monsterhunt",
    "eburn",
    "poisonous",
    "sanguine",
    "mlifesteal",
    "shocked",
    "stack",
    "authfail",
    "eheal",
    "penalty_cd",
    "phasedout",
    "halloween1",
    "burned",
    "licenced",
    "fullguardx",
    "charging",
    "invis",
    "dash",
    "rspeed",
    "power",
    "dampened",
    "weakness",
    "town",
    "halloween2",
    "easterluck",
    "notverified",
    "fingered",
    "deepfreezed",
    "sleeping",
    "xpower",
    "reflection",
    "energized",
    "charmed",
    "holidayspirit",
    "mshield",
    "massproduction",
    "frozen",
    "invincible",
    "fishing",
    "fullguard",
    "tangled",
    "halloween0",
    "slowness",
    "withdrawal",
    "hardshell",
    "poisoned",
    "woven",
    "block",
    "xshotted",
}

export interface Authfail {
    debuff:      boolean;
    name:        string;
    gold:        number;
    skin:        string;
    technical:   boolean;
    ui:          boolean;
    explanation: string;
    persistent:  boolean;
    xp?:         number;
    luck:        number;
}

export interface MiscCondition {
    explanation?: string;
    name:         string;
    skin:         string;
    buff?:        boolean;
    ui?:          boolean;
    duration?:    number;
    type?:        PurpleType;
    hostile?:     boolean;
    damage_type?: DamageType;
}

export enum PurpleType {
    Gm = "gm",
    Monster = "monster",
    Utility = "utility",
}

export interface Block {
    explanation?: string;
    persistent?:  boolean;
    debuff?:      boolean;
    name:         string;
    skin?:        string;
    duration?:    number;
    ui?:          boolean;
    bad?:         boolean;
    type?:        string;
    cooldown?:    number;
}

export interface Burned {
    name:         string;
    interval?:    number;
    bad:          boolean;
    debuff:       boolean;
    skin:         string;
    ui:           boolean;
    duration?:    number;
}

export interface Charging {
    duration:     number;
    speed:        number;
    name:         string;
    skin:         string;
}

export interface Charmed {
    name:         string;
    explanation:  string;
    debuff?:      boolean;
    skin:         string;
    duration:     number;
    ui:           boolean;
    buff?:        boolean;
}

export interface CrowdControlCondition {
    duration?:    number;
    bad:          boolean;
    debuff:       boolean;
    name:         string;
    skin:         string;
    explanation?: string;
    ui?:          boolean;
    speed?:       number;
    blocked?:     boolean;
    set_speed?:   number;
}

export interface Darkblessing {
    name:         string;
    ui:           boolean;
    skin:         string;
    duration:     number;
    output?:      number;
    buff:         boolean;
    frequency?:   number;
    lifesteal?:   number;
    evasion?:     number;
    speed?:       number;
    mp_cost?:     number;
    str?:         number;
    aura?:        boolean;
    attr0?:       string;
    armor?:       number;
    resistance?:  number;
}

export interface Dash {
    set_speed:    number;
    persistent:   boolean;
    name:         string;
    skin:         string;
}

export interface Deepfreezed {
    name:         string;
    bad:          boolean;
    ui:           boolean;
    skin:         string;
    duration:     number;
    debuff:       boolean;
    blocked?:     boolean;
    explanation?: string;
    persistent?:  boolean;
}

export interface LuckBuff {
    name:         string;
    persistent:   boolean;
    ui:           boolean;
    skin:         string;
    duration:     number;
    buff?:        boolean;
    luck:         number;
    gold?:        number;
    xp?:          number;
    output?:      number;
    explanation?: string;
    debuff?:      boolean;
    special?:     string;
    aura?:        boolean;
}

export interface Eburn {
    intensity:    string;
    ui:           boolean;
    name:         string;
    skin:         string;
    duration:     number;
    debuff:       boolean;
    bad:          boolean;
    interval:     number;
    speed:        number;
    damage:       number;
}

export interface Eheal {
    name:         string;
    heal:         number;
    interval:     number;
    ui:           boolean;
    skin:         string;
    duration:     number;
    buff:         boolean;
}

export interface Fingered {
    name:         string;
    evasion:      number;
    resistance:   number;
    bad:          boolean;
    debuff:       boolean;
    skin:         string;
    blocked:      boolean;
}

export interface Fishing {
    name:         string;
    explanation:  string;
    skin:         string;
    duration:     number;
    duration_min?:number;
    channel:      boolean;
    can_move?:    boolean;
}

export interface ConditionsFullguard {
    name:         string;
    armor:        number;
    resistance:   number;
    persistent:   boolean;
    ui:           boolean;
    skin:         string;
    buff:         boolean;
    miss?:        number;
}

export interface Hardshell {
    set_speed:    number;
    name:         string;
    armor:        number;
    skin:         string;
    duration:     number;
    buff:         boolean;
}

export interface Mcourage {
    courage:      number;
    ui:           boolean;
    name:         string;
    evasion:      number;
    skin:         string;
    duration:     number;
    pcourage:     number;
    mcourage:     number;
    speed:        number;
    buff:         boolean;
}

export interface Poisoned {
    potionsm:     number;
    healm:        number;
    debuff:       boolean;
    name:         string;
    skin:         string;
    duration:     number;
    frequencym:   number;
    bad:          boolean;
}

export interface Reflection {
  cap_reflection: number;
    reflection:   number;
    ui:           boolean;
    skin:         string;
    duration:     number;
    buff:         boolean;
    name:         string;
}

export interface Sleeping {
    duration:     number;
    duration_min: number;
    debuff:       boolean;
    name:         string;
}

export interface Weakness {
    dex:          number;
    bad:          boolean;
    debuff:       boolean;
    name:         string;
    str:          number;
    skin:         string;
    duration:     number;
    ui:           boolean;
    speed:        number;
    frequency?:   number;
    persistent?:  boolean;
    mp?:          number;
}