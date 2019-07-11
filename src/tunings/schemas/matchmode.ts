import { TuningGroup } from '@/tunings/types';

const MatchMode: TuningGroup = {
    id: 'MatchMode',
    name: 'MatchMode',
    description: '',
    properties: [
        {
            name: 'Team A Custom Name',
            id: 'element1Name',
            default: '',
        },
        {
            name: 'Team B Custom Name',
            id: 'element2Name',
            default: '',
        },
        {
            decimals: 0,
            description: 'Best of 3',
            name: 'Rounds To Win',
            id: 'roundsToWin',
            step: 1,
            default: 2,
        },
        {
            decimals: 0,
            description: 'Best of 3',
            name: 'Sets To Win',
            id: 'setsToWin',
            step: 1,
            default: 2,
        },
        {
            name: 'Swap teams every set?',
            id: 'swapTeamsEverySet',
            default: true,
        },
        {
            name: 'Can arrest teammates?',
            id: 'canArrestTeammates',
            default: false,
        },
        {
            decimals: 0,
            description: '0 = off, 1 = round start, 2 = full round',
            name: 'Reflective Damage Type',
            id: 'reflectiveDamageType',
            step: 1,
            default: 0,
        },
    ],
};

export default MatchMode;
