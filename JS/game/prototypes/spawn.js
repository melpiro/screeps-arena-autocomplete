import {ERR_INVALID_ARGS} from './../constants';
import {ERR_NOT_ENOUGH_ENERGY} from './../constants';
import {Store} from './store';
import {OwnedStructure} from './owned-structure';
/**
 * cost3000hits3000capacity1000Spawn time3 ticks per each body part
 */
export class StructureSpawn extends OwnedStructure{
    /**
    * @type {Store}
    * A Storeobject that contains cargo of this structure.
    */
    store;

    /**
    * Start the creep spawning process. The required energy amount can be withdrawn from all your spawns and extensions in the game.
    * @param {array<str>} body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORKMOVECARRYATTACKRANGED_ATTACKHEALTOUGH
    * @returns {{object:Creep, error:ERR_NOT_OWNER|ERR_NOT_ENOUGH_ENERGY|ERR_INVALID_ARGS}}
    */
    spawnCreep(body);

}
