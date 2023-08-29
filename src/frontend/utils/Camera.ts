import Vector3D from './Vector3D.js';

'use strict';

class Camera {

    public distanceToPlane : number;
    public horizontalAngle : number;
    public verticalAngle   : number;

    constructor(distance,alpha,beta){

        this.distanceToPlane = distance;
        this.horizontalAngle = alpha * (Math.PI / 180);
        this.verticalAngle   = beta  * (Math.PI / 180);
    }

    getHorizontalAngle(vertex :Vector3D) :number{
        
        let vertexAngle :number = Math.atan(vertex.z / vertex.x);        
        let angle :number =  vertexAngle - this.horizontalAngle;
   
        return angle;
    }

    getVerticalAngle(vertex :Vector3D, horizontalAngle :number) :number{
        
        let horizontalDistance :number = Math.hypot(vertex.x, vertex.z) * Math.cos(horizontalAngle);
        let vertexAngle :number = Math.atan(vertex.y / horizontalDistance);
        let angle :number = vertexAngle - this.verticalAngle;
        return angle;
    }

    getProjectionCoords(vertex) {

        let horizontalAngle = this.getHorizontalAngle(vertex); 
        let verticalAngle   = this.getVerticalAngle(vertex,horizontalAngle); 

        let x :number = (Math.tan(horizontalAngle) / Math.tan(80 * (Math.PI / 180))) * 1200;
        let y :number = (Math.tan(verticalAngle)   / Math.tan(80 * (Math.PI / 180))) * 1200;

        return {z : x, y : y};
    }

}

export default Camera;