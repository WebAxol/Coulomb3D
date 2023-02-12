import Vector3D from './Vector3D.js';
class Space {
    constructor(size, pos) {
        this.pos = pos;
        this.field = Array(size).fill(Array(size).fill(Array(size).fill(new Vector3D(0, 0, 0)))); // 3D Matrix
        this.charges = {};
    }
}
