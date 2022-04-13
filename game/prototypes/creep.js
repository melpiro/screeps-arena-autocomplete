import {ERR_FULL} from './../constants';
import {Resource} from './resource';
import {ERR_TIRED} from './../constants';
import {ERR_INVALID_ARGS} from './../constants';
import {Creep} from './creep';
import {Source} from './source';
import {ERR_NOT_ENOUGH_RESOURCES} from './../constants';
import {ConstructionSite} from './game-object';
import {ERR_NO_BODYPART} from './../constants';
import {ERR_NOT_IN_RANGE} from './../constants';
import {ERR_INVALID_TARGET} from './../constants';
import {ERR_NOT_OWNER} from './../constants';
import {OK} from './../constants';
import {Store} from './store';
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
    * @type {number}
    * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
    */
    fatigue;

    /**
    * @type {number}
    * The current amount of hit points of the creep.
    */
    hits;

    /**
    * @type {number}
    * The maximum amount of hit points of the creep.
    */
    hitsMax;

    /**
    * @type {boolean}
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
    * @returns {OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
    */
    attack(target);

    /**
    * Build a structure at the target construction site using carried energy. Requires WORKand CARRYbody parts.
                                    The target has to be within 3 squares range of the creep.
    * @param {ConstructionSite} target The target construction site to be built.
    * @returns {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
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
    * @returns {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
    */
    harvest(target);

    /**
    * Heal self or another creep. It will restore the target creep’s damaged body parts function and increase the hits counter. Requires the HEALbody part. The target
                                    has to be at adjacent square to the creep.
    * @param {Creep} target The target creep object.
    * @returns {OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
    */
    heal(target);

    /**
    * Move the creep one square in the specified direction. Requires the MOVEbody part.
    * @param {float} direction one of the following constants: TOPTOP_RIGHTRIGHTBOTTOM_RIGHTBOTTOMBOTTOM_LEFTLEFTTOP_LEFT
    * @returns {OK|ERR_NOT_OWNER|ERR_INVALID_ARGS|ERR_TIRED|ERR_NO_BODYPART}
    */
    move(direction);

    /**
    * Find the optimal path to the target and move to it. Requires the MOVEbody part.
    * @param {object} target Can be a GameObjector any object containing x and y properties.
    * @param {object} opts An object with additional options that are passed to game/utilsfindPath.
    * @returns {OK|ERR_NOT_OWNER|ERR_TIRED|ERR_NO_BODYPART}
    */
    moveTo(target,opts);

    /**
    * Find the optimal path to the target and move to it. Requires the MOVEbody part.
    * @param {Resource} target The target object to be picked up.
    * @returns {OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
    */
    pickup(target);

    /**
    * Help another creep to follow this creep. The fatigue generated for the target's move will be added to the creep instead of the target. Requires the MOVEbody part.
                                    The target has to be at adjacent square to the creep. The creep must move elsewhere, and the target must move towards the creep.
    * @param {Creep} target The target creep.
    * @returns {OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE}
    */
    pull(target);

    /**
    * A ranged attack against another creep or structure. Requires the RANGED_ATTACKbody part. If the target is inside a rampart, the rampart is attacked instead.
                                    The target has to be within 3 squares range of the creep.
    * @param {GameObject} target The target object to be attacked up.
    * @returns {OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
    */
    rangedAttack(target);

    /**
    * Heal another creep at a distance. It will restore the target creep’s damaged body parts function and increase the hits counter. Requires the HEALbody part. The
                                    target has to be within 3 squares range of the creep.
    * @param {Creep} target The target creep object.
    * @returns {OK|ERR_NOT_OWNER|ERR_INVALID_TARGET|ERR_NOT_IN_RANGE|ERR_NO_BODYPART}
    */
    rangedHeal(target);

    /**
    * A ranged attack against all hostile creeps or structures within 3 squares range. Requires the RANGED_ATTACKbody part. The attack power depends on the range
                                    to each target. Friendly units are not affected.
    * @returns {OK|ERR_NOT_OWNER|ERR_NO_BODYPART}
    */
    rangedMassAttack();

    /**
    * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
    * @param {GameObject} target The target object.
    * @param {str} resourceType One of the RESOURCE_* constants.
    * @param {float} amount(optional) The amount of resources to be transferred. If omitted, all the available carried amount is used.
    * @returns {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
    */
    transfer(target,resourceType,[amount]);

    /**
    * Withdraw resources from a structure. The target has to be at adjacent square to the creep. Multiple creeps can withdraw from the same object in the same tick. Your creeps can withdraw resources from hostile structures as
                                    well, in case if there is no hostile rampart on top of it.
    * @param {GameObject} target The target object.
    * @param {str} resourceType One of the RESOURCE_* constants.
    * @param {float} amount(optional) The amount of resources to be transferred. If omitted, all the available carried amount is used.
    * @returns {OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE|ERR_INVALID_ARGS}
    */
    withdraw(target,resourceType,[amount]);

}
