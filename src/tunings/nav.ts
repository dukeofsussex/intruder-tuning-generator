import { TuningNavList } from './types';
import CharacterMotor from './schemas/character-motor';
import Global from './schemas/global';
import MatchMode from './schemas/matchmode';
import { PlayerLife, PlayerMovement } from './schemas/player';
import Weapons from './schemas/weapon';

const Nav: TuningNavList = [
    {
        id: Global.id,
        name: Global.name,
        description: Global.description,
    },
    {
        id: MatchMode.id,
        name: MatchMode.name,
        description: MatchMode.description,
    },
    {
        id: 'Player',
        name: 'Player',
        description: '',
        children: [
            {
                id: '.PlayerLife',
                name: PlayerLife.name,
                description: PlayerLife.description,
            },
            {
                id: '.PlayerMovement',
                name: PlayerMovement.name,
                description: PlayerMovement.description,
            },
        ],
    },
    {
        id: 'CharacterMotor',
        name: 'Character Motor',
        description: '',
        children: [
            {
                id: 'CharacterMotor.jumping',
                name: CharacterMotor.jumping.name,
                description: CharacterMotor.jumping.description,
            },
            {
                id: 'CharacterMotor.movement',
                name: CharacterMotor.movement.name,
                description: CharacterMotor.movement.description,
            },
            {
                id: 'CharacterMotor.sliding',
                name: CharacterMotor.sliding.name,
                description: CharacterMotor.sliding.description,
            },
        ],
    },
    {
        id: 'Weapons',
        name: 'Weapons',
        description: '',
        children: [
            {
                id: '.Panther',
                name: Weapons.Panther.name,
                description: Weapons.Panther.description,
            },
            {
                id: '.Shotgun',
                name: Weapons.Shotgun.name,
                description: Weapons.Shotgun.description,
            },
            {
                id: '.Shrike',
                name: Weapons.Shrike.name,
                description: Weapons.Shrike.description,
            },
            {
                id: '.SMG',
                name: Weapons.SMG.name,
                description: Weapons.SMG.description,
            },
            {
                id: '.Sniper',
                name: Weapons.Sniper.name,
                description: Weapons.Sniper.description,
            },
        ],
    },
];

export default Nav;
