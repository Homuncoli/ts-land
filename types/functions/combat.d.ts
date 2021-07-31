function get_target(): Entity;
function get_target_of(entity: Entity): Entity;
function get_target_monster(): Entity;
function change_target(entity: Entity): void;

function get_nearest_hostile(): Entity;
function get_nearest_hostile(args: any): Entity;
function get_nearest_monster(): Entity;
function get_nearest_monster(args: any): Entity;

function attack(entity: Entity) : Promise<any>;
function can_attack(entity: Entity | undefined) : boolean;

function respawn();