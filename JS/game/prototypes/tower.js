import {Creep} from './creep';
import {ERR_TIRED} from './../constants';
import {ERR_INVALID_TARGET} from './../constants';
import {ERR_NOT_ENOUGH_ENERGY} from './../constants';
import {ERR_NOT_OWNER} from './../constants';
import {OK} from './../constants';
import {GameObject} from './game-object';
import {Store} from './store';
import {OwnedStructure} from './owned-structure';
/**
 * Remotely attacks game objects or heals creeps within its range. Its effectiveness linearly depends on the distance. Each action consumes energy.cost5000hits3000capacity50cooldown10 ticksAction maximum range50Energy per action10Attack effectiveness600 hits at range ≤5 to 150 hits at range ≥20Heal effectiveness400 hits at range ≤5 to 100 hits at range ≥20
 */
export class StructureTower extends OwnedStructure{
    /**
    * @type {float}
    * The remaining amount of ticks while this tower cannot be used.
    */
    cooldown;

    /**
    * @type {Store}
    * A Storeobject that contains cargo of this structure.
    */
    store;

    /**
    * Remotely attack any creep or structure in range.
    * @param {GameObject} target The target object.
    * @returns {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_TIRED}
    */
    attack(target);

    /**
    * Remotely heal any creep in range.
    * @param {Creep} target The target creep.
    * @returns {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_TARGET|ERR_TIRED}
    */
    heal(target);

}
