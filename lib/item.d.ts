import { ArakGroundhog, DamageType, OldRole } from "./gamedata";
import { Result } from "./internal/promise";

export {}

declare global {
    interface Stats {
        dex: number;
        int: number;
        vit: number;
        str: number;
        for: number;
    }

    type Slots = {
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
    
    type Equipment = {
        name: string;
        gift?: number;
        level?: number;
    };

    export type ItemReference = {
        name: string;
        level?: number;
        q?: number;
    }

    export interface ItemCx {
        scale?:       number;
        accent?:      string;
        extension?:   boolean;
        large?:       boolean;
        lightborder?: boolean;
        border?:      number;
    }

    export interface ItemLegacy {
        gold?:  number;
        set?:   null;
        class?: null;
        luck?:  number;
    }

    export interface ItemStats {
        skin_r?:          string;
        explanation?:     string;
        grades?:          number[];
        damage_type?:     DamageType;
        skin:             string;
        tier?:            number;
        name:             string;
        a?:               boolean | number;
        upgrade?:         { [key: string]: number };
        rpiercing?:       number;
        g:                number;
        wtype?:           string;
        attack?:          number;
        trex?:            string;
        range?:           number;
        projectile?:      string;
        type:             string;
        id:               string;
        dex?:             number;
        compound?:        { [key: string]: number };
        stat?:            number | string;
        set?:             string;
        resistance?:      number;
        rogue?:           {
            crit:    number;
            upgrade: UpgradeClass;
        };
        crit?:            number;
        speed?:           number;
        extra_stat?:      number;
        armor?:           number;
        protection?:      boolean;
        scroll?:          boolean;
        ignore?:          boolean;
        s?:               boolean | number;
        e?:               number;
        skin_a?:          string;
        str?:             number;
        miss?:            number;
        duration?:        number;
        buy?:             boolean;
        breaks?:          number;
        fzresistance?:    number;
        lifesteal?:       number;
        withdrawal?:      string;
        event?:           boolean;
        firesistance?:    number;
        cx?:              ItemCx;
        ability?:         string;
        reflection?:      number;
        mp?:              number;
        class?:           OldRole[];
        int?:             number;
        vit?:             number;
        evasion?:         number;
        gold?:            number;
        legacy?:          ItemLegacy;
        days?:            number;
        gain?:            string;
        blast?:           number;
        cuteness?:        number;
        frequency?:       number;
        credit?:          string;
        stand?:           string;
        special?:         boolean;
        edge?:            number;
        multiplier?:      number;
        hp?:              number;
        onclick?:         string;
        action?:          string;
        grade?:           number;
        monster?:         string;
        apiercing?:       number;
        dreturn?:         number;
        attr0?:           number;
        quest?:           string;
        eat?:             boolean;
        attr1?:           number;
        skin_c?:          string;
        charisma?:        number;
        exclusive?:       boolean;
        markup?:          number;
        pnresistance?:    number;
        mcourage?:        number;
        pcourage?:        number;
        critdamage?:      number;
        output?:          number;
        luck?:            number;
        reward?:          number;
        xp?:              number;
        delia?:           string;
        stun?:            number;
        opens?:           string;
        winterland?:      ItemWinterland;
        for?:             number;
        bling?:           number;
        charge?:          number;
        cooldown?:        number;
        gives?:           Array<Array<number | string>>;
        unlocks?:         string;
        spawn?:           string;
        note?:            string;
        mp_cost?:         number;
        mp_reduction?:    number;
        offering?:        number;
        manasteal?:       number;
        aura?:            string;
        explosion?:       number;
        npc?:             string;
        nopo?:            string;
        projectile_test?: string;
        hat?:             string;
        xscroll?:         boolean;
        acolor?:          string;
        debuff?:          boolean;
        rare?:            boolean;
        awesomeness?:     number;
        cash?:            number;
        buy_with_cash?:   boolean;
        xcx?:             string[];
        courage?:         number;
    }

    type UpgradeClass = {
        crit: number;
    }

    type ItemWinterland = {
        upgrade: ArakGroundhog;
        speed:   number;
    }

    function use_hp_or_mp(): Promise<Result>;
    function loot(id?: number | boolean): Promise<Result>;
}