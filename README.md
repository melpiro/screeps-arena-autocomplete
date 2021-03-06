A project that implement function, class, constants prototypes of the whole JS Screep arena API

## How to use it

Create a new folder, put the JS folder in it, add a main.mjs file and start coding in it !
### The main problem

Now there is a problem, the JS Screep API includes must be located at the root ("/") of the computer.
But here the JS files are located in "./JS/...".
So to solve the problem, i made a small python script (launch.py) that copy the main.mjs file to the folder of your choise, and remplace every "./JS/" by "/" in in. Allowing you to include the lib with the "./JS/" folder

### Example of main.mjs

```javascript
import { prototypes, utils, constants } from './JS/game';

export function loop() {
    /** @type{prototypes.Creep} */
    var creep = utils.getObjectsByPrototype(prototypes.Creep)[0];
    /** @type{prototypes.Source} */
    var source = utils.getObjectsByPrototype(prototypes.Source)[0];

    if (creep.getRangeTo(source) > 1) {
        creep.moveTo(source);
    } else {
        creep.harvest(source);
    }
}
```

Then generate final code with
```
python launch.py ./main.mjs ~/ScreepArena/.../main.mjs
```
### Tips to improve your code
* Always use prototypes anotations to get the right type for each of your variable (see below). By doing this, you will get a better auto-complete.

```javascript
/** @type{prototypes.Creep} */
```

* Do not include files directly in your code, use instead global includes : 

```javascript
import { prototypes, utils, constants } from './JS/game';
```

#### Info : how the code is generated
To generate the code of the library, i used a python script that read the Screep Arena documentation and generate JS prototypes of each objects found in it.
