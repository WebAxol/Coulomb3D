'use strict';
class World {
    constructor(initialState) {
        this.state = initialState;
        this.inputQueue = [];
        this.init();
    }
    init() {
        // Init events, etc.
    }
    execute() {
        this.state.execute();
    }
}
export {};
