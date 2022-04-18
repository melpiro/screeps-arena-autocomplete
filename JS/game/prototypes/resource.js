import {GameObject} from './game-object';
/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per tick.
 */
export class Resource extends GameObject{
    /**
    * @type {float}
    * The amount of dropped resource.
    */
    amount;

    /**
    * @type {str}
    * One of the RESOURCE_* constants.
    */
    resourceType;

}
