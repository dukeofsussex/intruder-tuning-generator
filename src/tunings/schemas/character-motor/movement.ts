import { TuningGroup } from '@/tunings/types';

const Movement: TuningGroup = {
    id: 'movement',
    name: 'Movement',
    description: '',
    properties: [
        {
            decimals: 1,
            name: 'Maximum Forwards Speed',
            id: 'maxForwardSpeed',
            step: 0.1,
            default: 10.0,
        },
        {
            decimals: 1,
            name: 'Maximum Sideways Speed',
            id: 'maxSidewaysSpeed',
            step: 0.1,
            default: 10.0,
        },
        {
            decimals: 1,
            name: 'Maximum Backwards Speed',
            id: 'maxBackwardsSpeed',
            step: 0.1,
            default: 10.0,
        },
        {
            decimals: 1,
            name: 'Maximum Ground Acceleration',
            description: 'How fast does the character change speeds?  Higher is faster.',
            id: 'maxGroundAcceleration',
            step: 0.1,
            default: 30.0,
        },
        {
            decimals: 1,
            name: 'Maximum Air Acceleration',
            description: 'How fast does the character change speeds?  Higher is faster.',
            id: 'maxAirAcceleration',
            step: 0.1,
            default: 20.0,
        },
        {
            decimals: 1,
            name: 'Gravity',
            id: 'gravity',
            step: 0.1,
            default: 9.8,
        },
        {
            decimals: 1,
            name: 'Maximum Fall Speed',
            id: 'maxFallSpeed',
            step: 0.1,
            default: 20.0,
        },
    ],
};

export default Movement;
