'use strict';

import { World, NullWorld } from "../World.js";

interface TransitionHash {
    [key : string] : State
}

class State {
    
    private transitions : TransitionHash;
    private world : World;

    constructor(){
        this.transitions = {};
        this.world = new NullWorld();
    }

    setUp(transitions : TransitionHash){
        this.transitions = transitions;
        return this;
    }

    init(world : World){
        this.world = world;
        return this;
    }

    handleEvent(eventName :string){

        if(!this.transitions[eventName]) throw Error(`Cannot handle event '${eventName}': it is not an event`);
        let newState :State = this.transitions[eventName];
        this.world.changeState(newState);
    };

    execute() :any {
        return false;
    };
}

export { TransitionHash, State };