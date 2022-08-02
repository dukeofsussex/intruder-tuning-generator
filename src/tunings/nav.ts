import { TuningNavList } from './types';
import CharacterMotor from './schemas/character-motor';
import Global from './schemas/global';
import MatchMode from './schemas/matchmode';
import { PlayerLife, PlayerMovement, PlayerView } from './schemas/player';
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
            {
                id: '.PlayerView',
                name: PlayerView.name,
                description: PlayerView.description,
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
                id: `.${Weapons.Banana.id}`,
                name: Weapons.Banana.name,
                description: Weapons.Banana.description,
            },
            {
                id: `.${Weapons.BananaRifle.id}`,
                name: Weapons.BananaRifle.name,
                description: Weapons.BananaRifle.description,
            },
            {
                id: `.${Weapons.CSGrenade.id}`,
                name: Weapons.CSGrenade.name,
                description: Weapons.CSGrenade.description,
            },
            {
                id: `.${Weapons.Cutout.id}`,
                name: Weapons.Cutout.name,
                description: Weapons.Cutout.description,
            },
            {
                id: `.${Weapons.Falcon.id}`,
                name: Weapons.Falcon.name,
                description: Weapons.Falcon.description,
            },
            {
                id: `.${Weapons.Grenade.id}`,
                name: Weapons.Grenade.name,
                description: Weapons.Grenade.description,
            },
            {
                id: `.${Weapons.Hammerhead.id}`,
                name: Weapons.Hammerhead.name,
                description: Weapons.Hammerhead.description,
            },
            {
                id: `.${Weapons.Manta.id}`,
                name: Weapons.Manta.name,
                description: Weapons.Manta.description,
            },
            {
                id: `.${Weapons.Panther.id}`,
                name: Weapons.Panther.name,
                description: Weapons.Panther.description,
            },
            {
                id: `.${Weapons.RemoteCharge.id}`,
                name: Weapons.RemoteCharge.name,
                description: Weapons.RemoteCharge.description,
            },
            {
                id: `.${Weapons.Sensor.id}`,
                name: Weapons.Sensor.name,
                description: Weapons.Sensor.description,
            },
            {
                id: `.${Weapons.Shrike.id}`,
                name: Weapons.Shrike.name,
                description: Weapons.Shrike.description,
            },
            {
                id: `.${Weapons.SmokeGrenade.id}`,
                name: Weapons.SmokeGrenade.name,
                description: Weapons.SmokeGrenade.description,
            },
        ],
    },
];

export default Nav;
