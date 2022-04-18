/**
 * Container for custom navigation cost data. If a non-0 value is found in the CostMatrix then that value will be used instead of the default terrain cost.
 */
export class CostMatrix {
    /**
    * Creates a new CostMatrixcontaining 0's for all positions.
    */
    constructor();

    /**
    * Set the cost of a position in this CostMatrix.
    * @param {float} x The X position in the game
    * @param {float} y The Y position in the game
    * @param {float} cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or equal to 255 will be treated as unwalkable.
    * @returns {void}
    */
    set(x,y,cost);

    /**
    * Get the cost of a position in this CostMatrix.
    * @param {float} x The X position in the game
    * @param {float} y The Y position in the game
    * @returns {int}
    */
    get(x,y);

    /**
    * Copy this CostMatrixinto a new CostMatrixwith the same data and return new CostMatrix
    */
    clone();

}

/**
* Find an optimal path between 
* @param {object} origin 
* @param {object} goal 
* @param {object} opts(optional) 
* @returns {{path:Array<{x:float,y:float}>,ops:int,cost:int,incomplete:bool}}
*/
export function searchPath(origin,goal,[opts]);