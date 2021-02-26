export interface CharacterMotorGroup extends TuningItem {
    jumping: TuningGroup;
    movement: TuningGroup;
    sliding: TuningGroup;
}

export interface TuningFaction {
    CharacterMotor: CharacterMotorGroup;
    PlayerLife: TuningGroup;
    PlayerMovement: TuningGroup;
    Panther: TuningGroup;
    Shotgun: TuningGroup;
    Shrike: TuningGroup;
    SMG: TuningGroup;
    Sniper: TuningGroup;
}

export interface TuningGroup extends TuningItem {
    properties: TuningProperty[];
}

export interface TuningItem {
    id: string;
    name: string;
    description?: string;
}

export type TuningNavList = TuningNavItem[];

export interface TuningNavItem extends TuningItem {
    children?: TuningNavList;
}

export interface TuningProperty extends TuningItem {
    decimals?: number;
    step?: number;
    default: boolean | number | number[] | string;
    value?: boolean | number | number[] | string;
}

export interface TuningRaw extends Object {
    tuningMessage?: string;
}

export interface TuningSchema {
    Global: TuningGroup;
    MatchMode: TuningGroup;
    GuardTuning: TuningFaction;
    IntruderTuning: TuningFaction;
}
