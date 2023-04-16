import Plane3D from './Plane3D.js';
'use strict';
class Camera {
    constructor(distance, alpha, beta) {
        this.plane = new Plane3D(0, 0, 0);
        this.distanceToPlane = distance;
        this.horizontalAngle = alpha;
        this.verticalAngle = beta;
        this.plane.update(distance, alpha, beta);
    }
}
export default Camera;
