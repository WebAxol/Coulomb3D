'use strict';

class State {
    
    public transitions;

    constructor(){
        this.transitions = {};
    }

    execute(){
        return false;
    };

}

export default State;