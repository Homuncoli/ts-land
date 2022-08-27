import { Character } from './parsed/character.quick';

export * from './parsed/character.quick';

declare global {
    const character : Character;
}