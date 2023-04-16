import Plane3D from './Plane3D.js';

'use strict';

class Camera {

    public distanceToPlane : number;
    public horizontalAngle : number;
    public verticalAngle   : number;
    public plane           : Plane3D = new Plane3D(0,0,0);

    constructor(distance,alpha,beta){

        this.distanceToPlane = distance;
        this.horizontalAngle = alpha;
        this.verticalAngle   = beta;

        this.plane.update(distance,alpha,beta);
    }

}

export default Camera;