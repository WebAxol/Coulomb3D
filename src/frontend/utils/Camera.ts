'use strict';

class Camera {

    public distanceToPlane : Number;
    public horizontalAngle : Number;
    public verticalAngle   : Number;
    public planeWidth      : Number; 
    public planeHeight     : Number;

    constructor(){

        this.distanceToPlane = 10;
        this.planeWidth      = 3000;
        this.planeHeight     = 1500;
        this.horizontalAngle = 0;
        this.verticalAngle   = 0;
    }

}