'use strict';

interface TransitionHash {
    [key : string] : State
}

class State {
    
    public transitions : TransitionHash;

    constructor(){
        this.transitions = {};
    }

    setUp(transitions : TransitionHash){
        
        this.transitions = transitions;
    }

    execute(){
        return false;
    };

}

export { TransitionHash, State };