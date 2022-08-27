export type Title = {
    type:          string;
    for?:          number;
    achievement?:  string;
    title:         string;
    luck?:         number;
    critdamage?:   number;
    pnresistance?: number;
    str?:          number;
    source?:       string;
    frequency?:    number;
    misc?:         boolean;
    random_stat?:  number;
    improve?:      boolean;
    manual?:       boolean;
    consecutive_200p_range_last_hits?: number;
    attack?:                           number;
}

export enum TitleNames {
    "abtesting", 
    "firehazard",
    "festive",   
    "critmonger",
    "glitched",  
    "lucky",     
    "legacy",    
    "fast",      
    "gooped",    
    "stomped",   
    "shiny",     
    "superfast", 
    "sniper",    
}