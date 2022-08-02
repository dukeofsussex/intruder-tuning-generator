export interface CharacterMotorGroup extends TuningItem {
    jumping: TuningGroup;
    movement: TuningGroup;
    sliding: TuningGroup;
}

export interface TuningFaction {
    Banana: TuningGroup;
    BananaRifle: TuningGroup;
    CharacterMotor: CharacterMotorGroup;
    Cutout: TuningGroup;
    GasGrenade: TuningGroup;
    Grenade: TuningGroup;
    Pistol: TuningGroup;
    PlayerLife: TuningGroup;
    PlayerMovement: TuningGroup;
    PlayerView: TuningGroup;
    RemoteCharge: TuningGroup;
    SecondPistol: TuningGroup;
    Sensor: TuningGroup;
    Shotgun: TuningGroup;
    SMG: TuningGroup;
    SmokeGrenade: TuningGroup;
    SniperRifle: TuningGroup;
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
