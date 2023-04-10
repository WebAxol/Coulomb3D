'use strict';

class Camera {

    public distanceToPlane : number;
    public horizontalAngle : number;
    public verticalAngle   : number;
    public planeWidth      : number; 
    public planeHeight     : number;

    constructor(){

        this.distanceToPlane = 10;
        this.planeWidth      = 3000;
        this.planeHeight     = 1500;
        this.horizontalAngle = 1;
        this.verticalAngle   = 0;
    }

}

export default Camera;