export type Achievement = {
    explanation: string;
    name:        string;
    title?:      string;
    rr?:         number;
    count?:      number;
    item?:        string;
    shells?:      number;
}

export enum AchievementNames {
    "abtesting",   
    "gooped",      
    "festive",     
    "1000boss",    
    "discoverlair",
    "upgrade10",   
    "lucky",       
    "reach60",     
    "reach90",     
    "reach70",     
    "firehazard",  
    "monsterhunter",
    "100boss",     
    "reach40",     
    "stomped",     
    "reach50",     
    "reach80",     
}