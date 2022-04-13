import {GameObject} from './game/prototypes/game-object';
/**
 * A separate part of creep body. Step over a BodyPart by a creep to augment the creep with the body part.
 */
export class BodyPart {
    /**
    * @type {string}
    * The type of the body part, one of these constants:WORKMOVECARRYATTACKRANGED_ATTACKHEALTOUGH
    */
    type;

    /**
    * @type {number}
    * The number of ticks until this item disappears.
    */
    ticksToDecay;

}
/**
 * A flag is a key game object for this arena. Step over a flag by a creep to capture it and gain control over the tower next to the flag. Capture all flags to win the game.
 */
export class Flag {
    /**
    * @type {boolean}
    * Equals to true or false if the flag is owned. Returns undefined if it is neutral.
    */
    my;

}

export class AreaEffect extends GameObject{
    /**
    * @type {string}
    * One of the following constants: EFFECT_FREEZE, EFFECT_DAMAGE.
    */
    effect;

}

/**
* @constant
*/
export const EFFECT_DAMAGE = 'damage';

/**
* @constant
*/
export const EFFECT_FREEZE = 'freeze';

/**
* @constant
*/
export const EFFECT_HEAL = 'heal';

/**
* @constant
*/
export const RESOURCE_SCORE = 'score';

/**
* @constant
*/
export const RESOURCE_SCORE_X = 'score_x';

/**
* @constant
*/
export const RESOURCE_SCORE_Y = 'score_y';

/**
* @constant
*/
export const RESOURCE_SCORE_Z = 'score_z';

export class ScoreCollector extends GameObject{
    /**
    * @type {boolean}
    * Whether you have control over this collector.
    */
    my;

    /**
    * @type {string}
    * The type of the resource this collector accepts.
    */
    resourceType;

    /**
    * @type {number}
    * Current collected score number of the owner player.
    */
    score;

    /**
    * @type {number}
    * Total number of score needed to win instantly.
    */
    scoreTotal;

}
