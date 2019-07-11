import { TuningGroup } from '@/tunings/types';

const Sliding: TuningGroup = {
    id: 'sliding',
    name: 'Sliding',
    description: '',
    properties: [
        {
            description: 'Whether the character slides on too steep surfaces',
            name: 'Can slide?',
            id: 'enabled',
            default: true,
        },
        {
            decimals: 1,
            description: 'How fast the character slides on steep surfaces',
            name: 'Sliding speed',
            id: 'slidingSpeed',
            step: 0.1,
            default: 10.0,
        },
        {
            decimals: 1,
            description: 'How much the player controls the sliding direction'
                + ' (0.5 = the player slides sideways with half the speed of the downwards sliding speed) ',
            name: 'Sideways Control',
            id: 'sidewaysControl',
            step: 0.1,
            default: 1.0,
        },
        {
            description: 'How much the player influences the sliding speed'
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
