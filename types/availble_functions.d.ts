function accept_magiport(name: string);

function accept_party_invite(name: string);
function accept_party_request(name: string);

function activate(num: number) // activates an item, likely a booster, in the num-th inventory slot
function consume(num: number); // consumes or uses an inventory item

function attack(entity: Entity): Promise<any>;
function can_attack(target: Entity): boolean;
function can_heal(target: Entity): boolean;
function change_target(target: Entity);

function auto_craft(name: string);
function compound(item0: number ,item1: number ,item2: number, scroll_num: number, offering_num?: number = undefined, only_calculate: boolean): Promise<any>;
function craft(i0?: number, i1?: number, i2?: number, i3?: number, i4?: number, i5?: number, i6?: number, i7?: number, i8?: number): Promise<any>;
function destroy(num: number);
function equip(num: number, slot?: number = undefined) // slot is optional
function exchange(item_num: number);

function bank_deposit(gold: string);
function bank_retrieve(pack: string, pack_num: number, num?: number = undefined);
function bank_store(num: number, pack?: string = undefined, pack_num?: number = undefined);
function bank_withdraw(gold: number);

function buy(name: string, quantity: number = 1): Promise<any>; //item names can be spotted from show_json(character.items) - they can be bought only if an NPC sells them
function buy_with_gold(name: string, quantity: number = 1);
function buy_with_shells(name: string, quantity: number = 1);
function close_stand();

function can_move_to(x: number, y: number): boolean;
function can_transport(entity: Entity): boolean;
function can_walk(entity: Entity): boolean;
function cruise(speed: number); // sets the maximum speed of character
function distance(a,b,in_check);
function find_npc(npc_id: string): any;

function change_server(region: string, name: string) // change_server("EU","I") or change_server("ASIA","PVP") or change_server("US","III")

function clear_drawings();
function draw_circle(x: number, y: number, radius: number, size: number, color: string);
function draw_line(x: number, y: number, x2: number, y2: number, size: number, color: string);

function command_character(name: string, code_snippet: string);

function disconnect();

function game_log(message: string, color: string = "cyan", x: any = null);
function log(message: string, color: string = "cyan");

function get(name: string): any;

function get_active_characters(): any[];

function get_map(): Map;