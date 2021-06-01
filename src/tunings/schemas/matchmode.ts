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
            description: 'X out of 5',
            name: 'Rounds To Win',
            id: 'roundsToWin',
            step: 1,
            default: 3,
        },
        {
            decimals: 0,
            description: 'X out of 3',
            name: 'Sets To Win',
            id: 'setsToWin',
            step: 1,
            default: 2,
        },
        {
            decimals: 0,
            name: 'Scramble after X matches',
            id: 'scrambleAfterXMatches',
            step: 1,
            default: 1,
        },
        {
            decimals: 0,
            name: 'Next map after X matches',
            id: 'nextMapAfterXMatches',
            step: 1,
            default: -1,
        },
        {
            name: 'Random map change?',
            id: 'randomMapChange',
            default: false,
        },
        {
            name: 'Timer enabled?',
            id: 'timerEnabled',
            default: true,
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
            description: 'Max allowed ping before getting kicked out of the room',
            name: 'Ping Limit',
            id: 'pingLimit',
            step: 50,
            default: 1200,
        },
        {
            decimals: 0,
            description: 'How often the ping limit can be exceeded before getting kicked out of the room',
            name: 'Ping Limit Check Times',
            id: 'pingLimitCheckTimes',
            step: 1,
            default: 10,
        },
    ],
};

export default MatchMode;
