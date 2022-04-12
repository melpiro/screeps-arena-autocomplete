import {OwnedStructure} from './owned-structure';
/**
 * A small container that can be used to store resources. This is a walkable structure. All dropped resources automatically goes to the container at the same tile.capacity2000cost100hits300
 */
export class StructureContainer extends OwnedStructure{
    /**
    * @type {Store}
    * A Storeobject that contains cargo of this structure.
    */
    store;

}
