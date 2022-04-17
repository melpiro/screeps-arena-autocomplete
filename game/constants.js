
/**
* @constant
*/
export const OK = 0;

/**
* @constant
*/
export const ERR_NOT_OWNER = -1;

/**
* @constant
*/
export const ERR_NO_PATH = -2;

/**
* @constant
*/
export const ERR_NAME_EXISTS = -3;

/**
* @constant
*/
export const ERR_BUSY = -4;

/**
* @constant
*/
export const ERR_NOT_FOUND = -5;

/**
* @constant
*/
export const ERR_NOT_ENOUGH_ENERGY = -6;

/**
* @constant
*/
export const ERR_NOT_ENOUGH_RESOURCES = -6;

/**
* @constant
*/
export const ERR_INVALID_TARGET = -7;

/**
* @constant
*/
export const ERR_FULL = -8;

/**
* @constant
*/
export const ERR_NOT_IN_RANGE = -9;

/**
* @constant
*/
export const ERR_INVALID_ARGS = -10;

/**
* @constant
*/
export const ERR_TIRED = -11;

/**
* @constant
*/
export const ERR_NO_BODYPART = -12;

/**
* @constant
*/
export const ERR_NOT_ENOUGH_EXTENSIONS = -6;

/**
* @constant
*/
export const MOVE = 'move';

/**
* @constant
*/
export const RANGED_ATTACK = 'ranged_attack';

/**
* @constant
*/
export const HEAL = 'heal';

/**
* @constant
*/
export const ATTACK = 'attack';

/**
* @constant
*/
export const CARRY = 'carry';

/**
* @constant
*/
export const TOUGH = 'tough';

/**
* @constant
*/
export const WORK = 'work';

/**
* @constant
*/
export const TOP = 1;

/**
* @constant
*/
export const TOP_RIGHT = 2;

/**
* @constant
*/
export const RIGHT = 3;

/**
* @constant
*/
export const BOTTOM_RIGHT = 4;

/**
* @constant
*/
export const BOTTOM = 5;

/**
* @constant
*/
export const BOTTOM_LEFT = 6;

/**
* @constant
*/
export const LEFT = 7;

/**
* @constant
*/
export const TOP_LEFT = 8;

/**
* @constant
*/
export const TERRAIN_WALL = 1;

/**
* @constant
*/
export const TERRAIN_SWAMP = 2;

/**
* @constant
*/
export const BODYPART_HITS = 100;

/**
* @constant
*/
export const RANGED_ATTACK_POWER = 10;

/**
* @constant
*/
export const RANGED_ATTACK_DISTANCE_RATE = {0: 1, 1: 1, 2: 0.4, 3: 0.1};

/**
* @constant
*/
export const ATTACK_POWER = 30;

/**
* @constant
*/
export const HEAL_POWER = 12;

/**
* @constant
*/
export const RANGED_HEAL_POWER = 4;

/**
* @constant
*/
export const CARRY_CAPACITY = 50;

/**
* @constant
*/
export const REPAIR_POWER = 100;

/**
* @constant
*/
export const DISMANTLE_POWER = 50;

/**
* @constant
*/
export const REPAIR_COST = 0.01;

/**
* @constant
*/
export const DISMANTLE_COST = 0.005;

/**
* @constant
*/
export const HARVEST_POWER = 2;

/**
* @constant
*/
export const BUILD_POWER = 5;

/**
* @constant
*/
export const OBSTACLE_OBJECT_TYPES = ['creep','tower','constructedWall','spawn','extension','link'];

/**
* @constant
*/
export const TOWER_ENERGY_COST = 10;

/**
* @constant
*/
export const TOWER_RANGE = 50;

/**
* @constant
*/
export const TOWER_HITS = 3000;

/**
* @constant
*/
export const TOWER_CAPACITY = 50;

/**
* @constant
*/
export const TOWER_POWER_ATTACK = 150;

/**
* @constant
*/
export const TOWER_POWER_HEAL = 100;

/**
* @constant
*/
export const TOWER_POWER_REPAIR = 200;

/**
* @constant
*/
export const TOWER_OPTIMAL_RANGE = 5;

/**
* @constant
*/
export const TOWER_FALLOFF_RANGE = 20;

/**
* @constant
*/
export const TOWER_FALLOFF = 0.75;

/**
* @constant
*/
export const TOWER_COOLDOWN = 10;

/**
* @constant
*/
export const BODYPART_COST = {work:100,move:50,carry:50,attack:80,ranged_attack:150,heal:250,tough:10};

/**
* @constant
*/
export const MAX_CREEP_SIZE = 50;

/**
* @constant
*/
export const CREEP_SPAWN_TIME = 3;

/**
* @constant
*/
export const RESOURCE_ENERGY = 'energy';

/**
* @constant
*/
export const RESOURCES_ALL = [RESOURCE_ENERGY];

/**
* @constant
*/
export const SOURCE_ENERGY_REGEN = 10;

/**
* @constant
*/
export const RESOURCE_DECAY = 1000;

/**
* @constant
*/
export const MAX_CONSTRUCTION_SITES = 10;

/**
* @constant
*/
export const CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5;

/**
* @constant
*/
export const CONSTRUCTION_COST_ROAD_WALL_RATIO = 150;

/**
* @constant
*/
export const CONTAINER_HITS = 300;

/**
* @constant
*/
export const CONTAINER_CAPACITY = 2000;

/**
* @constant
*/
export const WALL_HITS = 10000;

/**
* @constant
*/
export const WALL_HITS_MAX = 10000;

/**
* @constant
*/
export const RAMPART_HITS = 10000;

/**
* @constant
*/
export const RAMPART_HITS_MAX = 10000;

/**
* @constant
*/
export const ROAD_HITS = 500;

/**
* @constant
*/
export const ROAD_WEAROUT = 1;

/**
* @constant
*/
export const EXTENSION_HITS = 100;

/**
* @constant
*/
export const EXTENSION_ENERGY_CAPACITY = 100;

/**
* @constant
*/
export const SPAWN_ENERGY_CAPACITY = 1000;

/**
* @constant
*/
export const SPAWN_HITS = 3000;
