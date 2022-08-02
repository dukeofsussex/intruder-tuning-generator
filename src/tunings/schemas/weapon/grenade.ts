import { TuningGroup } from '@/tunings/types';

const Grenade: TuningGroup = {
    id: 'Grenade',
    name: 'Grenade',
    description: 'Grenade',
    properties: [
        {
            default: false,
            id: 'canUseOnLadder',
            name: 'Can use on ladder?',
        },
        {
            default: false,
            id: 'canUseInWater',
            name: 'Can use in water?',
        },
        {
            default: false,
            id: 'canUseUnderWater',
            name: 'Can use under water?',
        },
        {
            default: false,
            id: 'canUseOnZipline',
            name: 'Can use on zipline?',
        },
        {
            default: false,
            id: 'dropWhenRagged',
            name: 'Drop when ragdolled?',
        },
        {
            default: false,
            id: 'hideOnRagdoll',
            name: 'Hide when ragdolled?',
        },
        {
            decimals: 2,
            default: 0.1,
            description: 'Lower = Faster, Higher = Slower',
            id: 'fireRate',
            name: 'Fire rate',
            step: 0.01,
        },
        {
            decimals: 2,
            default: -1,
            id: 'fireRecoverRate',
            name: 'Fire Recover Rate',
            step: 0.1,
        },
        {
            decimals: 2,
            default: 1,
            id: 'fireDelayTime',
            name: 'Fire Delay Time',
            step: 0.1,
        },
        {
            default: true,
            id: 'hasSemiAuto',
            name: 'Has semi auto?',
        },
        {
            default: false,
            id: 'hasFullAuto',
            name: 'Has full auto?',
        },
        {
            default: false,
            id: 'hasBurstShot',
            name: 'Has burst shot?',
        },
        {
            decimals: 0,
            default: 1,
            id: 'maxClipAmmo',
            name: 'Maximum Rounds Per Clip',
            step: 1,
        },
        {
            decimals: 1,
            default: 1.1,
            id: 'reloadTime',
            name: 'Reload Time',
            step: 0.1,
        },
        {
            default: true,
            id: 'autoReload',
            name: 'Auto reload?',
        },
        {
            default: true,
            id: 'reloadOnEquip',
            name: 'Reload on equip?',
        },
        {
            default: false,
            description: 'Affects weapon sway',
            name: 'Has scope?',
            id: 'hasScope',
        },
        {
            default: true,
            id: 'canJumpFire',
            name: 'Can jump fire?',
        },
        {
            default: true,
            id: 'unequipOnEmpty',
            name: 'Unequip on empty?',
        },
        {
            decimals: 2,
            default: 0.6,
            name: 'Unequip delay',
            id: 'unequipDelay',
            step: 0.1,
        },
        {
            default: true,
            id: 'removeFromInventoryOnEmpty',
            name: 'Remove from inventory on empty?',
        },
        {
            decimals: 2,
            default: 0.6,
            id: 'equipTime',
            name: 'Equip time',
            step: 0.01,
        },
        {
            default: false,
            id: 'advancedRecoil',
            name: 'Advanced recoil?',
        },
        {
            default: false,
            id: 'hasStockRecoil',
            name: 'Has stock recoil?',
        },
        {
            decimals: 1,
            default: 5,
            id: 'stockRecoilRecoverySpeed',
            name: 'Stock Recoil Recovery Speed',
            step: 0.1,
        },
        {
            decimals: 1,
            default: 3,
            id: 'recoilBalance',
            name: 'Recoil Balance',
            step: 1,
        },
        {
            decimals: 1,
            default: 0,
            id: 'precoilBalance',
            name: 'Precoil Balance',
            step: 1,
        },
        {
            default: false,
            id: 'canFocusShot',
            name: 'Can focus shot?',
        },
        {
            default: true,
            id: 'noPrecoilZoomed',
            name: 'No precoil zoomed?',
        },
        {
            decimals: 0,
            default: 60,
            id: 'medHighEnergy',
            name: 'Medium to high energy threshold',
            step: 1,
        },
        {
            decimals: 0,
            default: 30,
            id: 'lowMedEnergy',
            name: 'Low to medium energy threshold',
            step: 1,
        },
        {
            decimals: 0,
            default: 50,
            id: 'aimDownSightsFov',
            name: 'Aim Down Sights Field Of View',
            step: 1,
        },
        {
            decimals: 0,
            default: 35,
            id: 'extraZoomingFov',
            name: 'Extra Zooming Field Of View',
            step: 1,
        },
    ],
};

export default Grenade;
