import {Resource} from './resource';
import {Creep} from './creep';
import {Source} from './source';
import {ConstructionSite} from './game-object';
import {GameObject} from './game-object';
/**
 * Creeps are your units. Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions. Each creep consists of up to 50 body parts with the following possible types:body partcostEffect per one body partMOVE50Decreases fatigue by 2 points per tick.WORK100Harvests 2 energy units from a source per tick.Builds a structure for 5 energy units per tick.Dismantles a structure for 50 hits per tick.CARRY50Can contain up to 50 resource units.ATTACK80Attacks another creep/structure with 30 hits per tick in a short-ranged attack.RANGED_ATTACK150Attacks another single creep/structure with 10 hits per tick in a long-range attack up to 3 squares long.Attacks all hostile creeps/structures within 3 squares range with 1-4-10 hits(depending on the range).HEAL250Heals self or another creep restoring 12 hits per tick in short range or 4 hits per tick at a distance.TOUGH10No effect, just additional hit points to the creep's body.
 */
export class Creep extends GameObject{
    /**
    * @type {array}
    * An array describing the creep’s body. Each element contains the following properties: type: string(One of the body part types constants.)hits: number(The remaining amount of hit points of this body part.)
    */
    body;

    /**
    * @type {float}
    * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
    */
    fatigue;

    /**
    * @type {float}
    * The current amount of hit points of the creep.
    */
    hits;

    /**
    * @type {float}
    * The maximum amount of hit points of the creep.
    */
    hitsMax;

    /**
    * @type {bool}
    * Whether it is your creep.
    */
    my;

    /**
    * @type {Store}
    * A Storeobject that contains cargo of this creep.
    */
    store;

    /**
    * Attack another creep or structure in a short-ranged attack. Requires the ATTACKbody part. If the target is inside a rampart, then the rampart is attacked instead.
                                    The target has to be at adjacent square to the creep.
    * @param {GameObject} target The target object.
    */
    attack(target);

    /**
    * Build a structure at the target construction site using carried energy. Requires WORKand CARRYbody parts.
                                    The target has to be within 3 squares range of the creep.
    * @param {ConstructionSite} target The target construction site to be built.
    */
    build(target);

    /**
    * Drop this resource on the ground.
    * @param {str} resourceType One of the RESOURCE_* constants.
    * @param {float} amount(optional) The amount of resource units to be dropped. If omitted, all the available carried amount is used.
    */
    drop(resourceType,[amount]);

    /**
    * Harvest energy from the source. Requires the WORKbody part. If the creep has an empty CARRYbody part,
                                    the harvested resource is put into it; otherwise it is dropped on the ground. The target has to be at an adjacent square to the creep.
    * @param {Source} target The object to be harvested.
    */
    harvest(target);

    /**
    * Heal self or another creep. It will restore the target creep’s damaged body parts function and increase the hits counter. Requires the HEALbody part. The target
                                    has to be at adjacent square to the creep.
    * @param {Creep} target The target creep object.
    */
    heal(target);

    /**
    * Move the creep one square in the specified direction. Requires the MOVEbody part.
    * @param {float} direction one of the following constants: TOPTOP_RIGHTRIGHTBOTTOM_RIGHTBOTTOMBOTTOM_LEFTLEFTTOP_LEFT
    */
    move(direction);

    /**
    * Find the optimal path to the target and move to it. Requires the MOVEbody part.
    * @param {object} target Can be a GameObjector any object containing x and y properties.
    * @param {object} opts An object with additional options that are passed to game/utilsfindPath.
    */
    moveTo(target,opts);

    /**
    * Find the optimal path to the target and move to it. Requires the MOVEbody part.
    * @param {Resource} target The target object to be picked up.
    */
    pickup(target);

    /**
    * Help another creep to follow this creep. The fatigue generated for the target's move will be added to the creep instead of the target. Requires the MOVEbody part.
                                    The target has to be at adjacent square to the creep. The creep must move elsewhere, and the target must move towards the creep.
    * @param {Creep} target The target creep.
    */
    pull(target);

    /**
    * A ranged attack against another creep or structure. Requires the RANGED_ATTACKbody part. If the target is inside a rampart, the rampart is attacked instead.
                                    The target has to be within 3 squares range of the creep.
    * @param {GameObject} target The target object to be attacked up.
    */
    rangedAttack(target);

    /**
    * Heal another creep at a distance. It will restore the target creep’s damaged body parts function and increase the hits counter. Requires the HEALbody part. The
                                    target has to be within 3 squares range of the creep.
    * @param {Creep} target The target creep object.
    */
    rangedHeal(target);

    /**
    * A ranged attack against all hostile creeps or structures within 3 squares range. Requires the RANGED_ATTACKbody part. The attack power depends on the range
                                    to each target. Friendly units are not affected.
    */
    rangedMassAttack();

    /**
    * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
    * @param {GameObject} target The target object.
    * @param {str} resourceType One of the RESOURCE_* constants.
    * @param {float} amount(optional) The amount of resources to be transferred. If omitted, all the available carried amount is used.
    */
    transfer(target,resourceType,[amount]);

    /**
    * Withdraw resources from a structure. The target has to be at adjacent square to the creep. Multiple creeps can withdraw from the same object in the same tick. Your creeps can withdraw resources from hostile structures as
                                    well, in case if there is no hostile rampart on top of it.
    * @param {GameObject} target The target object.
    * @param {str} resourceType One of the RESOURCE_* constants.
    * @param {float} amount(optional) The amount of resources to be transferred. If omitted, all the available carried amount is used.
    */
    withdraw(target,resourceType,[amount]);

}
