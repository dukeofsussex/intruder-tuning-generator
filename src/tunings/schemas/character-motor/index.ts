import { CharacterMotorGroup } from '@/tunings/types';
import Jumping from './jumping';
import Movement from './movement';
import Sliding from './sliding';

const CharacterMotor: CharacterMotorGroup = {
    id: 'CharacterMotor',
    name: 'Character Motor',
    description: 'Who knows',
    jumping: Jumping,
    movement: Movement,
    sliding: Sliding,
};

export default CharacterMotor;
