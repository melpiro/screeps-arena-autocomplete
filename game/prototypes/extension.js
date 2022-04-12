import {OwnedStructure} from './owned-structure';
/**
 * Contains energy that can be spent on spawning bigger creeps. Extensions can be placed anywhere, any spawns will be able to use them regardless of distance.cost200hits100capacity100
 */
export class StructureExtension extends OwnedStructure{
    /**
    * @type {Store}
    * A Storeobject that contains cargo of this structure.
    */
    store;

}
