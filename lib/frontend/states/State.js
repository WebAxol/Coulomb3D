'use strict';
class State {
    constructor() {
        this.transitions = {};
    }
    setUp(transitions) {
        this.transitions = transitions;
    }
    execute() {
        return false;
    }
    ;
}
export { State };
