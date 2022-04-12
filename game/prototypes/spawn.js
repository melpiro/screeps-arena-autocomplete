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
    */
    spawnCreep(body);

}
