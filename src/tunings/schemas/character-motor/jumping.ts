import { TuningGroup } from '@/tunings/types';

const Jumping: TuningGroup = {
    id: 'jumping',
    name: 'Jumping',
    description: '',
    properties: [
        {
            name: 'Can jump?',
            id: 'enabled',
            default: true,
        },
        {
            decimals: 1,
            description: 'How high the character jumps when pressing jump and letting go immediately',
            name: 'Base Height',
            id: 'baseHeight',
            step: 0.1,
            default: 1.0,
        },
        {
            decimals: 1,
            description: 'ExtraHeight units (metres) are added on top when holding the jump button down longer',
            name: 'Extra Height',
            id: 'extraHeight',
            step: 0.1,
            default: 1.0,
        },
        {
            decimals: 1,
            description: 'How much the character jumps out perpendicular to the walkable surface'
                + ' (0 = fully vertical jump, 1 = fully perpendicular)',
            name: 'Perpendicular Amount',
            id: 'perpAmount',
            step: 0.1,
            default: 0.0,
        },
        {
            decimals: 1,
            description: 'How much the character jumps out perpendicular to the too steep surface'
                + ' (0 = fully vertical jump, 1 = fully perpendicular)',
            name: 'Steep Perpendicular Amount',
            id: 'steepPerpAmount',
            step: 0.1,
            default: 0.5,
        },
    ],
};

export default Jumping;
