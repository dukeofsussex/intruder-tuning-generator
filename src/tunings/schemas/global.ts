import { TuningGroup } from '@/tunings/types';

const Global: TuningGroup = {
    id: 'Global',
    name: 'Global',
    description: 'Global settings',
    properties: [
        {
            decimals: 1,
            name: 'Stamina Drain Modifier',
            id: 'staminaDrainModifier',
            step: 0.1,
            default: 0.5,
        },
        {
            decimals: 0,
            name: 'Gun Swerve Threshold',
            id: 'gunSwerveThreshold',
            step: 1,
            default: 20,
        },
        {
            decimals: 1,
            name: 'Update Stamina Rate',
            id: 'updateStaminaRate',
            step: 0.1,
            default: 0.1,
        },
        {
            decimals: 1,
            name: 'Rigid Gravity',
            id: 'rigidGravity',
            step: 0.1,
            default: 2.2,
        },
        {
            decimals: 0,
            name: 'Energy Sway On Move',
            id: 'energyToSwayOnMove',
            step: 1,
            default: 70,
        },
        {
            default: false,
            name: 'Should Check Lives',
            id: 'shouldCheckLives',
        },
        {
            default: false,
            name: 'Give Boxing Gloves',
            id: 'BoxingGlovesDefault',
        },
    ],
};

export default Global;
