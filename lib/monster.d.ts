import { Status } from "./character";

export {}

declare global {
    function is_monster(obj: any): boolean; 
    
    function get_monster(id: number): MonsterInstance;
    function get_nearest_monster(id: MonsterFilter): MonsterInstance;
    function get_targeted_monster(): MonsterInstance;
    
    type MonsterFilter = {
        max_att?: number;
        min_xp?: number;
        target?: string | any;
        no_target?: boolean;
        path_check?: boolean;
        type?: string;
    }
    
    interface MonsterInstance {
        name:        string;
        type:        string;
        mtype:       string;
        skin:        string;
        hp:          number;
        max_hp:      number;
        mp:          number;
        speed:       number;
        xp:          number;
        attack:      number;
        level:       number;
        frequency:   number;
        aggro:       number;
        rage:        number;
        damage_type: string;
        respawn:     number;
        difficulty:  number;
        range:       number;
        id:          string;
        map:         string;
        in:          string;
        s:           Status;
        target:      string;
        moving:      boolean;
        visible:     boolean;
        dead:        boolean;
        x:           number;
        y:           number;
        width:       number;
        height:      number;
        armor:       number;
        resistance:  number;
        dreturn:     number;
        lifesteal:   number;
        evasion:     number;
        reflection:  number;
        humanoid:    boolean;
        cooperative: boolean;
        immune:      boolean;
        "1hp":       boolean;
        spawns:      Array<Array<number | string>>;
        abilities:   Abilities;
        vx:          number;
        vy:          number;
        from_x:      number;
        from_y:      number;
        going_x:     number;
        going_y:     number;
    }
}