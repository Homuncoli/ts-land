import { Result } from "./internal/promise";

export {}

declare global {
    function is_own_cooldown(skill: string): boolean;
    function is_in_range(target: any): boolean;
    function can_attack(target: any): boolean;
    
    function use_skill(skill: string, arg: any): Promise<Result> | Promise<Result>[];
    function attack(target: any): Promise<Result>;

    interface Ablities {
        healing?:        Healing;
        weakness_aura?:  AbilitiesDampeningAura;
        mlight?:         Mlight;
        dampening_aura?: AbilitiesDampeningAura;
        putrid?:         Putrid;
        multi_freeze?:   Multi;
        portal?:         Mlight;
        self_healing?:   Healing;
        anger?:          AngerClass;
        multi_burn?:     Multi;
        deepfreeze?:     AngerClass;
        mtangle?:        Mlight;
        degen?:          Degen;
        zap?:            Zap;
        burn?:           Burn;
        tangle?:         Mlight;
        stone?:          Mlight;
        heal?:           Healing;
        warpstomp?:      Warpstomp;
        curse_aura:      AbilitiesDampeningAura;
    }
    
    export interface AngerClass {
        cooldown: number;
        radius:   number;
    }
    
    export interface AbilitiesDampeningAura {
        cooldown:  number;
        radius:    number;
        aura:      boolean;
        condition: string;
    }
    
    export interface Degen {
        amount:   number;
        cooldown: number;
    }
    
    export interface Healing {
        heal:     number;
        cooldown: number;
    }
    
    export interface Mlight {
        cooldown: number;
    }
    
    export interface Multi {
        cooldown: number;
        damage:   number;
    }
    
    export interface Putrid {
        curse:  boolean;
        poison: boolean;
    }
    
    export interface Zap {
        amount:   number;
        cooldown: number;
        radius:   number;
        pure:     boolean;
    }

    export interface Burn {
        unlimited: boolean;
        attr0:     number;
    }
    
    export interface Warpstomp {
        stun:     number;
        cooldown: number;
        radius:   number;
    }
    
}