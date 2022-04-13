import {GameObject} from './game-object';
/**
 * An energy source object. Can be harvested by creeps with a WORKbody part.Energy amount1000Energy regeneration10 energy per tick
 */
export class Source extends GameObject{
    /**
    * @type {number}
    * Current amount of energy in the source.
    */
    energy;

    /**
    * @type {number}
    * The maximum amount of energy in the source.
    */
    energyCapacity;

}
