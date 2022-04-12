import {GameObject} from './game-object';
/**
 * Basic prototype for game objects. All objects and classes are inherited from this class.
 */
export class ConstructionSite extends GameObject{
    /**
    * @type {bool}
    * Whether it is your construction site.
    */
    my;

    /**
    * @type {float}
    * The current construction progress.
    */
    progress;

    /**
    * @type {float}
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
    */
    remove();

}
/**
 * Basic prototype for game objects. All objects and classes are inherited from this class.
 */
export class GameObject {
    /**
    * @type {bool}
    * Returns true if this object is live in the game at the moment. Check this property to verify cached or newly created object instances.
    */
    exists;

    /**
    * @type {str}
    * The unique ID of this object that you can use in game/utilsgetObjectById.
    */
    id;

    /**
    * @type {float}
    * If defined, then this object will disappear after this number of ticks.
    */
    ticksToDecay;

    /**
    * @type {float}
    * The X coordinate in the room.
    */
    x;

    /**
    * @type {float}
    * The Y coordinate in the room.
    */
    y;

    /**
    * See game/utilsfindClosestByPath.
    * @param {} positions 
    * @param {} opts 
    */
    findClosestByPath(positions,opts);

    /**
    * See game/utilsfindClosestByRange.
    * @param {} positions 
    */
    findClosestByRange(positions);

    /**
    * See game/utilsfindInRange.
    * @param {} positions 
    * @param {} range 
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
    */
    getRangeTo(pos);

}
