import { TuningGroup } from '@/tunings/types';

const View: TuningGroup = {
    id: 'PlayerView',
    name: 'View',
    properties: [
        {
            decimals: 2,
            name: 'Aim head bob modifier',
            id: 'aimBobMod',
            step: 0.05,
            default: 0.3,
        },
        {
            decimals: 2,
            name: 'Crouch head bob modifier',
            id: 'crouchBobMod',
            step: 0.05,
            default: 0.5,
        },
        {
            decimals: 2,
            name: 'Prone head bob modifier',
            id: 'proneBobMod',
            step: 0.05,
            default: 0.5,
        },
        {
            decimals: 2,
            name: 'Walk head bob modifier',
            id: 'walkBobMod',
            step: 0.05,
            default: 0.3,
        },
        {
            decimals: 0,
            name: 'Lerp Speed',
            id: 'lerpSpeed',
            step: 1,
            default: 30,
        },
    ],
};

export default View;
