import {GameObject} from './prototypes/game-object';
import {ConstructionSite} from './prototypes/game-object';

/**
* Find a position with the shortest path from the given position, or null otherwise. 
* @param {object} position An object with x and y properties.
* @param {class} prototype A prototype that extends GameObject.
* @returns {ConstructionSite}
*/
export function createConstructionSite(position,prototype);
/**
* Find a position with the shortest path from the given position, or null otherwise. 
* @param {object} fromPos The position to search from. May be GameObjector any object containing x and y properties.
* @param {array} positions The positions to search among. An array with GameObjects or any objects containing x and y properties.
* @param {object} opts(optional) An object containing additional pathfinding flags supported by searchPathmethod.
* @returns {GameObject}
*/
export function findClosestByPath(fromPos,positions,[opts]);
/**
* Find a position with the shortest linear distance from the given position. 
* @param {object} fromPos The position to search from. May be GameObjector any object containing x and y properties.
* @param {array} positions The positions to search among. An array with GameObjects or any objects containing x and y properties.
* @returns {GameObject}
*/
export function findClosestByRange(fromPos,positions);
/**
* Find all positions from the given positions array within the specified linear range. 
* @param {object} fromPos The origin position. May be GameObjector any object containing x and y properties.
* @param {array} positions The positions to search. An array with GameObjects or any objects containing x and y properties.
* @param {float} range The range distance.
* @returns {Array<GameObject>}
*/
export function findInRange(fromPos,positions,range);
/**
* Find an optimal path between fromPos and toPos. Unlike searchPath, findPath avoid all obstacles by default (unless costMatrix is specified). 
* @param {object} fromPos The start position. May be GameObjector any object containing x and y properties.
* @param {object} toPos The start position. May be GameObjector any object containing x and y properties.
* @param {object} opts(optional) An object containing additional pathfinding flags: ignore: array(objects which should not be treated as obstacles during the search)Any options supported by searchPathmethod
* @returns {int}
*/
export function findPath(fromPos,toPos,[opts]);
/**
* Get CPU wall time elapsed in the current tick in nanoseconds. 
* @returns {int}
*/
export function getCpuTime();
/**
* Get linear direction by differences of x and y. 
* @param {float} dx The difference of X coordinate.
* @param {float} dy The difference of Y coordinate.
* @returns {int}
*/
export function getDirection(dx,dy);
/**
* Use this method to get heap statistics for your virtual machine. The return value is almost identical to the Node.js function v8.getHeapStatistics()[nodejs.org]. This function returns one additional property: externally_allocated_size
                                which is the total amount of currently allocated memory which is not included in the v8 heap but counts against this isolate's memory limit. ArrayBuffer instances over a certain size are externally allocated and will be
                                counted here. 
*/
export function getHeapStatistics();
/**
* Get an object with the specified unique ID. 
* @returns {GameObject}
*/
export function getObjectById(id);
/**
* Get all objects in the game with the specified prototype, for example, all creeps. 
* @returns {Array<GameObject>}
*/
export function getObjectsByPrototype(prototype);
/**
* Get linear range between two objects. 
* @param {object} a The first of two objects. May be GameObjector any object containing x and y properties.
* @param {object} b The second of two objects. May be GameObjector any object containing x and y properties.
* @returns {int}
*/
export function getRange(a,b);
/**
* Get an integer representation of the terrain at the given position. 
* @param {object} pos The position as an object containing x and y properties.
* @returns {int}
*/
export function getTerrainAt(pos);
/**
* CPU wall time limit on the first tick. 
* @returns {int}
*/
export function getTicks();