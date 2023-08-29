'use strict';
import { NullWorld } from "../World.js";
class State {
    constructor() {
        this.transitions = {};
        this.world = new NullWorld();
    }
    setUp(transitions) {
        this.transitions = transitions;
        return this;
    }
    init(world) {
        this.world = world;
        return this;
    }
    handleEvent(eventName) {
        if (!this.transitions[eventName])
            throw Error(`Cannot handle event '${eventName}': it is not an event`);
        let newState = this.transitions[eventName];
        this.world.changeState(newState);
    }
    ;
    execute() {
        return false;
    }
    ;
}
export { State };
//# sourceMappingURL=State.js.map