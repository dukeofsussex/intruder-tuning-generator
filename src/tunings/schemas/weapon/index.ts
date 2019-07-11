import { TuningGroup } from '@/tunings/types';
import WeaponProperties from './properties';

const Pistol: TuningGroup = {
    id: 'Pistol',
    name: 'Pistol',
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
    Pistol,
    SMG,
    Sniper,
};

export default Weapons;
