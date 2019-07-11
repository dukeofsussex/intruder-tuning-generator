import Jumping from './jumping';
import Movement from './movement';
import Sliding from './sliding';
import { CharacterMotorGroup } from '@/tunings/types';

const CharacterMotor: CharacterMotorGroup = {
    id: 'CharacterMotor',
    name: 'Character Motor',
    description: 'Who knows',
    jumping: Jumping,
    movement: Movement,
    sliding: Sliding,
};

export default CharacterMotor;
