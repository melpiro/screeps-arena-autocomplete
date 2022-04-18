import {Structure} from './structure';
/**
 * The base prototype for a structure that has an owner.
 */
export class OwnedStructure extends Structure{
    /**
    * @type {bool}
    * Returns true for your structure, false for a hostile structure, undefined for a neutral structure.
    */
    my;

}
