import { Gamedata } from './parsed/G.quick';

export * from './parsed/G.quick';

declare global {
    const G : Gamedata;
}