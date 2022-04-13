import {GameObject} from './game-object';
/**
 * 
 */
export class Structure extends GameObject{
    /**
    * @type {number}
    * The current amount of hit points of the structure.
    */
    hits;

    /**
    * @type {number}
    * The maximum amount of hit points of the structure.
    */
    hitsMax;

}
