import { Result } from "./internal/promise";

export {};

declare global {
    type Destination = {
        x?: number;
        y?: number;
        to: string;
        map: string;
    } | string;

    function can_move_to(x: number, y: number): boolean;
    function can_walk(entity: any): boolean;

    function move(x: number, y: number): Promise<Result>;
    function smart_move(destination: Destination, on_done?: number): Promise<Result>;
    function xmove(x: number, y: number): Promise<Result>;
}