import {GameObject} from './game-object';
/**
 * An energy source object. Can be harvested by creeps with a WORKbody part.Energy amount1000Energy regeneration10 energy per tick
 */
export class Source extends GameObject{
    /**
    * @type {float}
    * Current amount of energy in the source.
    */
    energy;

    /**
    * @type {float}
    * The maximum amount of energy in the source.
    */
    energyCapacity;

}
