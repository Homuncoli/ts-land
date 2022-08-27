import { Achievement, AchievementNames } from "./gamedata/achievement";
import { MapNames } from "./gamedata/map";
import { Monster, MonsterNames } from "./gamedata/monster";
import { Position, PositionNames } from "./gamedata/position";
import { Title, TitleNames } from "./gamedata/title";
import { Image } from "./gamedata/image";
import * as quick_and_dirty from "./parsed/G.quick";
import { ClassMapped } from "./gamedata/class";
import { ConditionMapped } from "./gamedata/conditions";

export {};

declare global {
    const G : Gamedata;

    interface Gamedata {
        positions:    { [key in keyof PositionNames]: Position };
        titles:       { [key in keyof TitleNames]: Title };
        tilesets:     quick_and_dirty.Tilesets;
        images:       { [key: string]: Image };
        imagesets:    quick_and_dirty.Imagesets;
        dimensions:   { [key: string]: number[] };
        emotions:     quick_and_dirty.Emotions;
        multipliers:  quick_and_dirty.Multipliers;
        maps:         quick_and_dirty.GMaps;
        version:      number;
        cosmetics:    quick_and_dirty.Cosmetics;
        conditions:   ConditionMapped;
        monsters:     { [key in keyof MonsterNames]: Monster };
        achievements: { [key in keyof AchievementNames]: Achievement };
        docs:         quick_and_dirty.Docs;
        dismantle:    { [key: string]: quick_and_dirty.SantiagoDeCaliRaven };
        projectiles:  quick_and_dirty.Projectiles;
        tokens:       quick_and_dirty.TokensClass;
        craft:        quick_and_dirty.Craft;
        npcs:         quick_and_dirty.Npcs;
        geometry:     unknown;
        items:        { [key: string]: ItemStats };
        levels:       { [key: string]: number };
        events:       quick_and_dirty.Events;
        skills:       quick_and_dirty.Skills;
        classes:      ClassMapped;
        games:        quick_and_dirty.Games;
        sets:         quick_and_dirty.Sets;
        drops:        quick_and_dirty.Drops;
        sprites:      { [key: string]: quick_and_dirty.Custom };
        quests:       unknown;
        base_gold:    { [key in keyof MonsterNames]: { [key in keyof MapNames]: number } };
    }
}