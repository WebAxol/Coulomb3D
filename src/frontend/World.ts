'use strict';

import State from './states/State.js';

class World {

    private state : State;
    private inputQueue :[];

    constructor(initialState : State){

        this.state = initialState;
        this.inputQueue = []; 
        this.init();
    }   

    init(){
        // Init events, etc.
    }

    execute(){
        this.state.execute();
    }

}