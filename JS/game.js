import * as utils from './game/utils';
export {utils};
import * as prototypes from './game/prototypes';
export {prototypes};
import * as constants from './game/constants';
export {constants};
import * as visual from './game/visual';
export {visual};
/**
 * 
 */
export class arenaInfo {
    /**
    * @type {str}
    * The name of the arena.
    */
    name;

    /**
    * @type {float}
    * Currently equals to 1 for basic arena and 2 for advanced.
    */
    level;

    /**
    * @type {str}
    * Currently equals to "alpha".
    */
    season;

    /**
    * @type {float}
    * Game ticks limit.
    */
    ticksLimit;

    /**
    * @type {float}
    * CPU wall time execution limit per one tick(except the first tick).
    */
    cpuTimeLimit;

    /**
    * @type {float}
    * CPU wall time limit on the first tick.
    */
    cpuTimeLimitFirstTick;

}
