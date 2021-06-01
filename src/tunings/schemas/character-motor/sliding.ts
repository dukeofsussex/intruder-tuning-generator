import { TuningGroup } from '@/tunings/types';

const Sliding: TuningGroup = {
    id: 'sliding',
    name: 'Sliding',
    description: '',
    properties: [
        {
            name: 'Can slide?',
            description: 'Does the character slide on too steep surfaces?',
            id: 'enabled',
            default: true,
        },
        {
            decimals: 1,
            name: 'Sliding speed',
            description: ' How fast does the character slide on steep surfaces?',
            id: 'slidingSpeed',
            step: 0.1,
            default: 15.0,
        },
        {
            decimals: 1,
            description: 'How much can the player control the sliding direction?'
                + ' (0.5 = the player slides sideways with half the speed of the downwards sliding speed) ',
            name: 'Sideways Control',
            id: 'sidewaysControl',
            step: 0.1,
            default: 1.0,
        },
        {
            description: 'How much can the player influence the sliding speed?'
                + ' (0.5 = the player speeds the sliding up to 150 % or slows it down to 50 %)',
            decimals: 1,
            name: 'Speed Control',
            id: 'speedControl',
            step: 0.1,
            default: 0.4,
        },
    ],
};

export default Sliding;
