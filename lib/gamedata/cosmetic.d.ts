export interface Cosmetics {
    default_beard_position:  number;
    map:                     { old: string; };
    head:                    { [key in keyof HeadCosmeticNames]: Array<string | number>};
    default_face_position:   number;
    default_hair_place:      number;
    bundle:                  Bundle;
    default_hat_place:       number;
    default_head_place:      number;
    hair:                    { [key: string]: number[] };
    no_upper:                any[];
    default_makeup_position: number;
    gravestone:              { [key in keyof GravestoneNames]: number };
    prop:                    { [key: string]: string[] };
    hat:                     Hat;
}

export interface Bundle {
    blackw: string[];
    pinkb:  string[];
    rogueb: string[];
}

export interface Hat {
    hat100: number;
}

export enum GravestoneNames {
    "gravestone",
    "gravestonea",
    "xgravestone2",
    "xgravestone3",
    "xgravestone0",
    "xgravestone1",
    "xgravestone4",
}

export enum HeadCosmeticNames {
    "makeup122",
    "makeup132",
    "makeup125",
    "makeup124",
    "makeup133",
    "mmakeup09",
    "makeup127",
    "makeup126",
    "makeup123",
    "makeup110",
    "makeup111",
    "makeup112",
    "makeup113",
    "makeup114",
    "makeup115",
    "makeup116",
    "makeup117",
    "makeup118",
    "makeup119",
    "makeup130",
    "makeup131",
    "makeup136",
    "makeup137",
    "makeup134",
    "makeup135",
    "fmakeup11",
    "fmakeup10",
    "fmakeup12",
    "mmakeup12",
    "mmakeup13",
    "blackhead",
    "mmakeup11",
    "smakeup00",
    "makeup128",
    "mmakeup08",
    "makeup138",
    "mmakeup07",
    "makeup139",
    "bwhead",
    "makeup140",
    "mmakeup06",
    "mmakeup10",
    "makeup129",
    "makeup121",
    "makeup109",
    "makeup108",
    "makeup107",
    "makeup106",
    "makeup105",
    "makeup104",
    "makeup103",
    "makeup102",
    "makeup101",
    "makeup100",
    "fmakeup06",
    "fmakeup07",
    "fmakeup05",
    "fmakeup02",
    "fmakeup03",
    "makeup120",
    "mmakeup01",
    "mmakeup02",
    "mmakeup05",
    "mmakeup04",
    "fmakeup08",
    "fmakeup09",
}