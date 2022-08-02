import { TuningFaction, TuningSchema } from './types';
import CharacterMotor from './schemas/character-motor';
import Global from './schemas/global';
import MatchMode from './schemas/matchmode';
import { PlayerLife, PlayerMovement, PlayerView } from './schemas/player';
import Weapons from './schemas/weapon';

const FactionTuning: TuningFaction = {
    Banana: Weapons.Banana,
    BananaRifle: Weapons.BananaRifle,
    CharacterMotor,
    Cutout: Weapons.Cutout,
    GasGrenade: Weapons.CSGrenade,
    Grenade: Weapons.Grenade,
    Pistol: Weapons.Panther,
    PlayerLife,
    PlayerMovement,
    PlayerView,
    RemoteCharge: Weapons.RemoteCharge,
    SecondPistol: Weapons.Shrike,
    Sensor: Weapons.Sensor,
    Shotgun: Weapons.Hammerhead,
    SMG: Weapons.Manta,
    SmokeGrenade: Weapons.SmokeGrenade,
    SniperRifle: Weapons.Falcon,
};

// Ensure we make deep copies of FactionTuning,
// so we don't run into pass-by-reference issues
const Schema: TuningSchema = {
    Global,
    MatchMode,
    GuardTuning: JSON.parse(JSON.stringify(FactionTuning)),
    IntruderTuning: JSON.parse(JSON.stringify(FactionTuning)),
};

export default Schema;
