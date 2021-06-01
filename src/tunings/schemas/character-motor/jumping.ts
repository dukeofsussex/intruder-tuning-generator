import { TuningGroup } from '@/tunings/types';

const Jumping: TuningGroup = {
    id: 'jumping',
    name: 'Jumping',
    description: '',
    properties: [
        {
            name: 'Can jump?',
            description: 'Can the character jump?',
            id: 'enabled',
            default: true,
        },
        {
            decimals: 1,
            description: 'How high do we jump when pressing jump and letting go immediately',
            name: 'Base Height',
            id: 'baseHeight',
            step: 0.1,
            default: 1.0,
        },
        {
            decimals: 1,
            description: 'We add extraHeight units (meters) on top when holding the button down longer while jumping',
            name: 'Extra Height',
            id: 'extraHeight',
            step: 0.1,
            default: 4.1,
        },
        {
            decimals: 1,
            description: 'How much does the character jump out perpendicular to the surface on walkable surfaces?'
                + ' (0 = fully vertical jump, 1 = fully perpendicular)',
            name: 'Perpendicular Amount',
            id: 'perpAmount',
            step: 0.1,
            default: 0.0,
        },
        {
            decimals: 1,
            description: 'How much does the character jump out perpendicular to the surface on too steep surfaces?'
                + ' (0 = fully vertical jump, 1 = fully perpendicular)',
            name: 'Steep Perpendicular Amount',
            id: 'steepPerpAmount',
            step: 0.1,
            default: 0.5,
        },
    ],
};

export default Jumping;
