/**
 * Visuals provide a way to show various visual debug info in the game. All drawings will be shown for the current tick only. All draw coordinates are measured in game coordinates and centered to tile centers, i.e. (10,10)
                                    will point to the center of the creep at x:10; y:10 position. Fractional coordinates are allowed.
 */
export class Visual {
    /**
    * @type {float}
    * The layer of visuals in the object.
    */
    layer;

    /**
    * @type {bool}
    * Whether visuals in this object are persistent.
    */
    persistent;

    /**
    * Creates a new empty instance of Visual.
    * @param {float} layer(optional) The layer of visuals in this object. Visuals of higher layer overlaps visuals of lower layer. Default is 0.
    * @param {bool} persistent Whether visuals in this object are persistent. Non-persistent visuals are visible during the current tick only.
    */
    constructor( [layer],persistent);

    /**
    * Draw a circle.
    * @param {object} pos The position object of the center. May be GameObjector any object containing x and y properties.
    * @param {object} style(optional) An object with the following properties: radius(number) Circle radius, default is 0.15.fill(string) Fill color in the following format: #ffffff(hex triplet). Default is #ffffff.opacity(number) Opacity value, default is 0.5.stroke(string) Stroke color in the following format: #ffffff(hex triplet). Default is #ffffff.strokeWidth(number) Stroke line width, default is 0.1.lineStyle(string) Either undefined(solid line), dashed, or dotted. Default is undefined.
    */
    circle(pos,[style]);

    /**
    * Remove all visuals from the object.
    */
    clear();

    /**
    * Draw a line.
    * @param {object} pos1 The start position object. May be GameObjector any object containing x and y properties.
    * @param {object} pos2 The finish position object. May be GameObjector any object containing x and y properties.
    * @param {object} style(optional) An object with the following properties: width(number) Line width, default is 0.1.color(string) Line color in the following format: #ffffff(hex triplet). Default is #ffffff.opacity(number) Opacity value, default is 0.5.lineStyle(string) Either undefined(solid line), dashed, or dotted. Default is undefined.
    */
    line(pos1,pos2,[style]);

    /**
    * Draw a polyline.
    * @param {array} points An array of points. Every item may be GameObjector any object containing x and y properties.
    * @param {object} style(optional) An object with the following properties: fill(string) Fill color in the following format: #ffffff(hex triplet). Default is #ffffff.opacity(number) Opacity value, default is 0.5.stroke(string) Stroke color in the following format: #ffffff(hex triplet). Default is #ffffff.strokeWidth(number) Stroke line width, default is 0.1.lineStyle(string) Either undefined(solid line), dashed, or dotted. Default is undefined.
    */
    poly(points,[style]);

    /**
    * Draw a rectangle.
    * @param {object} pos The position object of the top-left corner. May be GameObjector any object containing x and y properties.
    * @param {float} w The width of the rectangle.
    * @param {float} h The height of the rectangle.
    * @param {object} style(optional) An object with the following properties: fill(string) Fill color in the following format: #ffffff(hex triplet). Default is #ffffff.opacity(number) Opacity value, default is 0.5.stroke(string) Stroke color in the following format: #ffffff(hex triplet). Default is #ffffff.strokeWidth(number) Stroke line width, default is 0.1.lineStyle(string) Either undefined(solid line), dashed, or dotted. Default is undefined.
    */
    rect(pos,w,h,[style]);

    /**
    * Draw a text label. You can use any valid Unicode characters, including emoji.
    * @param {str} text The text message.
    * @param {object} pos The position object of the label baseline. May be GameObject or any object containing x and y properties.
    * @param {object} style(optional) An object with the following properties: color(string) Font color in the following format: #ffffff(hex triplet). Default is #ffffff.font(number|string) Either a number or a string in one of the following forms: "0.7" (relative size in game coordinates), "20px" (absolute size in pixels), "0.7 serif", or "bold italic 1.5 Times
                                                                New Roman"stroke(string) Stroke color in the following format: #ffffff(hex triplet). default is undefined(no stroke).strokeWidth(number) Stroke line width, default is 0.15.backgroundColor(string) Background color in the following format: #ffffff(hex triplet). Default is undefined(no background). When background is enabled, text vertical align is set to middle
                                                                (default is baseline).backgroundPadding(number) Background rectangle padding, default is 0.3.aling(string) Text align, either center, left, or right. Default is center.opacity(number) Opacity value, default is 1.
    */
    text(text,pos,[style]);

    /**
    * Get the stored size of all visuals stored in the object.
    */
    size();

}
