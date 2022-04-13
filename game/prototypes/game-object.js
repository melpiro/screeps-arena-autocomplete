import {Structure} from './structure';
import {GameObject} from './game-object';
/**
 * Basic prototype for game objects. All objects and classes are inherited from this class.
 */
export class ConstructionSite extends GameObject{
    /**
    * @type {boolean}
    * Whether it is your construction site.
    */
    my;

    /**
    * @type {number}
    * The current construction progress.
    */
    progress;

    /**
    * @type {number}
    * The total construction progress needed for the structure to be built.
    */
    progressTotal;

    /**
    * @type {Structure}
    * The structure that was built(when the construction site is completed)
    */
    structure;

    /**
    * Remove this construction site.
    * @returns {void}
    */
    remove();

}
/**
 * Basic prototype for game objects. All objects and classes are inherited from this class.
 */
export class GameObject {
    /**
    * @type {boolean}
    * Returns true if this object is live in the game at the moment. Check this property to verify cached or newly created object instances.
    */
    exists;

    /**
    * @type {string}
    * The unique ID of this object that you can use in game/utilsgetObjectById.
    */
    id;

    /**
    * @type {number}
    * If defined, then this object will disappear after this number of ticks.
    */
    ticksToDecay;

    /**
    * @type {number}
    * The X coordinate in the room.
    */
    x;

    /**
    * @type {number}
    * The Y coordinate in the room.
    */
    y;

    /**
    * See game/utilsfindClosestByPath.
    * @param {} positions 
    * @param {} opts 
    * @returns {GameObject}
    */
    findClosestByPath(positions,opts);

    /**
    * See game/utilsfindClosestByRange.
    * @param {} positions 
    * @returns {GameObject}
    */
    findClosestByRange(positions);

    /**
    * See game/utilsfindInRange.
    * @param {} positions 
    * @param {} range 
    * @returns {Array<GameObject>}
    */
    findInRange(positions,range);

    /**
    * Find a path from this object to the given position.
    * @param {object} pos An object containing xand y.
    * @param {object} opts(optional) An object with additional options that are passed to game/utilsfindPath.
    */
    findPathTo(pos,[opts]);

    /**
    * See game/utilsgetRange.
    * @param {object} pos An object containing xand y.
    * @returns {int}
    */
    getRangeTo(pos);

}
