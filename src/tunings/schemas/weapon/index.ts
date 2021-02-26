import { TuningGroup } from '@/tunings/types';
import WeaponProperties from './properties';

const Panther: TuningGroup = {
    id: 'Panther',
    name: 'Panther',
    description: '',
    properties: WeaponProperties,
};

const Shrike: TuningGroup = {
    id: 'Shrike',
    name: 'Shrike',
    description: '',
    properties: WeaponProperties,
};

const Shotgun: TuningGroup = {
    id: 'Shotgun',
    name: 'Shotgun',
    description: '',
    properties: WeaponProperties,
};

const SMG: TuningGroup = {
    id: 'SMG',
    name: 'SMG',
    description: '',
    properties: WeaponProperties,
};

const Sniper: TuningGroup = {
    id: 'Sniper',
    name: 'Sniper Rifle',
    description: '',
    properties: WeaponProperties,
};

const Weapons = {
    Panther,
    Shotgun,
    Shrike,
    SMG,
    Sniper,
};

export default Weapons;
