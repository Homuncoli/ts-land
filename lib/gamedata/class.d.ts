export enum DamageType {
    Heal = "heal",
    Magical = "magical",
    Physical = "physical",
}

export enum ClassNames {
    "merchant",
    "warrior",
    "paladin",
    "priest",
    "ranger",
    "rogue",
    "mage",
}

export interface ClassMapped {
    merchant: Merchant;
    warrior:  Warrior;
    paladin:  Paladin;
    priest:   Priest;
    ranger:   Ranger;
    rogue:    Rogue;
    mage:     Mage;
}

export interface Class {
    armor:       number;
    attack:      number;
    base_slots:  BaseSlots;
    courage:     number;
    description: string;
    frequency:   number;
    hp:          number;
    looks:       Array<Array<Looks | string>>;
    lstats:      Stats;
    main_stat:   string;
    mcourage:    number;
    mp_cost:     number;
    mp:          number;
    pcourage:    number;
    projectile:  string;
    range:       number;
    resistance:  number;
    speed:       number;
    stats:       Stats;
    xcx:         string[];
}

export interface Mage extends Class {
    damage_type: DamageType;
    doublehand:  MageDoublehand;
    offhand:     MageOffhand;
    mainhand:    MageMainhand;
}

export interface Merchant extends Class {
    damage_type: string;
    doublehand:  MerchantDoublehand;
    mainhand:    MerchantMainhand;
    offhand:     MerchantOffhand;
}

export interface Paladin extends Class {
    damage_type: DamageType;
    doublehand:  unknown;
    mainhand:    PaladinMainhand;
    offhand:     PaladinOffhand;
    side_stat:   string;
}

export interface Priest extends Class {
    damage_type: DamageType;
    doublehand:  PriestDoublehand;
    mainhand:    PriestMainhand;
    offhand:     MerchantOffhand;
}

export interface Ranger extends Class {
    doublehand:  RangerDoublehand;
    offhand:     RangerOffhand;
    mainhand:    RangerMainhand;
}

export interface Rogue extends Class {
    doublehand:  RogueDoublehand;
    offhand:     RogueOffhand;
    mainhand:    RogueMainhand;
}

export interface Warrior extends Class {
    brave:       boolean;
    doublehand:  WarriorDoublehand;
    offhand:     WarriorOffhand;
    mainhand:    WarriorMainhand;
}

export interface BaseSlots extends Class {
    mainhand: BaseSlotsMainhand;
}

export interface BaseSlotsMainhand {
    name:  string;
    gift:  number;
    level: number;
}

export interface MageDoublehand {
    great_staff: GreatStaff;
}

export interface GreatStaff {
    mp_cost:   number;
    frequency: number;
    speed:     number;
}

export interface Looks {
    hair?: string;
    head?: HeadNames;
    hat?:  string;
    face?: string;
}

export enum HeadNames {
    "bwhead",
    "fmakeup01",
    "fmakeup03",
    "makeup105",
    "makeup107",
    "makeup117",
}

export interface MageMainhand {
    wblade: unknown;
    wand:   MainhandWand;
    staff:  unknown;
}

export interface MainhandWand {
    mp_cost:   number;
    frequency: number;
}

export interface MageOffhand {
    source:       unknown;
    misc_offhand: unknown;
}

export interface MerchantDoublehand {
    pickaxe: unknown;
    rod:     unknown;
    basher:  unknown;
    axe:     unknown;
}

export interface MerchantMainhand {
    mace:        unknown;
    dagger:      unknown;
    fist:        unknown;
    spear:       unknown;
    short_sword: unknown;
    bow:         unknown;
    dartgun:     unknown;
    staff:       unknown;
}

export interface MerchantOffhand {
    source:       unknown;
    quiver?:      unknown;
    shield:       unknown;
    misc_offhand: unknown;
}

export interface PaladinMainhand {
    mace:        unknown;
    sword:       SwordMainhand;
    short_sword: ShortSwordMainhand;
}

export interface ShortSwordMainhand {
    output: number;
    speed:  number;
}

export interface SwordMainhand {
    output:    number;
    frequency: number;
    speed:     number;
}

export interface PaladinOffhand {
    source:       unknown;
    shield:       unknown;
    misc_offhand: unknown;
}

export interface PriestDoublehand {
    wand: RapierClass;
}

export interface RapierClass {
    frequency: number;
}


export interface PriestMainhand {
    pmace: unknown;
    staff: unknown;
}

export interface RangerDoublehand {
    dagger: unknown;
    fist:   unknown;
}

export interface TentacledLook {
    hair:    string;
    head:    HeadNames;
    makeup?: string;
}

export interface RangerMainhand {
    crossbow: Crossbow;
    bow:      unknown;
}

export interface Crossbow {
    frequency: number;
    apiercing: number;
}

export interface RangerOffhand {
    quiver: unknown;
}

export interface RogueDoublehand {
    rapier:      RapierClass;
    short_sword: unknown;
    spear:       Spear;
    bow:         Bow;
}

export interface Bow {
    speed:     number;
    frequency: number;
    miss:      number;
}

export interface Spear {
    frequency: number;
    speed:     number;
}

export interface StickyLook {
    hair:  string;
    head:  HeadNames;
    chin?: string;
}

export interface RogueMainhand {
    dagger: unknown;
    stars:  RapierClass;
    fist:   unknown;
}

export interface RogueOffhand {
    misc_offhand: unknown;
    dagger:       unknown;
    stars:        unknown;
    fist:         unknown;
}

export interface WarriorDoublehand {
    rapier:      Rapier;
    great_sword: GreatStaff;
    bow:         Bow;
    scythe:      GreatStaff;
    basher:      GreatStaff;
    axe:         GreatStaff;
}

export interface Rapier {
    mp_cost:   number;
    frequency: number;
    miss:      number;
}

export interface WarriorMainhand {
    mace:        Spear;
    fist:        RapierClass;
    sword:       unknown;
    spear:       unknown;
    short_sword: unknown;
}

export interface WarriorOffhand {
    shield:       unknown;
    sword:        unknown;
    misc_offhand: Spear;
    short_sword:  unknown;
    mace:         Spear;
    fist:         RapierClass;
}