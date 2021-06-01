import { TuningFaction, TuningSchema } from './types';
import CharacterMotor from './schemas/character-motor';
import Global from './schemas/global';
import MatchMode from './schemas/matchmode';
import { PlayerLife, PlayerMovement, PlayerView } from './schemas/player';
import Weapons from './schemas/weapon';

const FactionTuning: TuningFaction = {
    CharacterMotor,
    PlayerLife,
    PlayerMovement,
    PlayerView,
    Panther: Weapons.Panther,
    Shotgun: Weapons.Shotgun,
    Shrike: Weapons.Shrike,
    SMG: Weapons.SMG,
    Sniper: Weapons.Sniper,
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
