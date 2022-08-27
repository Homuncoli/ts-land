export {};

declare global {
    /**
    * renders the object as json inside the game
    * @param obj 
    */
    function show_json(obj: any): void;

    function is_object(obj: any): boolean;

    function mssince(data: Date): number;

    function set_message(text: string, color?: string): void;
}