/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary Pig project || created: 3/3/20
 *  @todo
 */

import EventHandler from './EventHandler.js';

export default class Main {

    constructor(){
        new HandleEvent();
    }

}

window.addEventListener('load', () => {
    new Main();
});