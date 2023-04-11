'use strict';
class World {
    constructor() {
        this.inputQueue = [];
        this.inited = false;
    }
    init(config) {
        if (!this.inited) {
            config.states.forEach((state) => { state.init(this); }); // Establish reference to World object for each state.
            this.state = config.initialState;
            this.inited = true;
        }
        return this;
    }
    changeState(newState) {
        this.state = newState;
        this.execute();
    }
    execute() {
        this.state.execute();
    }
}
// Newly instanced States need a reference to a World object: it will be a NullWorld object by default until they are initialized.
class NullWorld extends World {
    execute() { return false; }
}
export { World, NullWorld };
