import Vector3D from './Vector3D.js';

class Plane3D{

    public center   :Vector3D = new Vector3D(0,0,0); // closest point to origin
    public normal   :Vector3D = new Vector3D(0,0,0); // vector perpendicular to plane

    constructor(distance,alpha,beta){   /* alpha : horizontal angle;  beta : vertical angle */
    
        this.update(distance, alpha,beta);
    }

    update(distance : number, alpha :number ,beta :number){

        alpha *= (Math.PI / 180);
        beta  *= (Math.PI / 180);

        this.center = new Vector3D(
            distance * Math.cos(alpha) * Math.cos(beta),
            distance * Math.sin(beta),
            distance * Math.sin(alpha) * Math.cos(beta)
        );

        this.normal = Vector3D.normalize(this.center); 
    }

    isPointOnPlane(point :Vector3D){

        let centerToPoint = Vector3D.sub(this.center,point);
        let dot = Vector3D.dot(centerToPoint,this.normal);
        
        return (Math.round(dot * Math.pow(10,9)) / Math.pow(10,9)) == 0;
    }

    lineVsPlane(lineDirection :Vector3D) :Vector3D{

        let numerator    = Vector3D.dot(this.normal,this.center);
        let denominator  = Vector3D.dot(this.normal,lineDirection);

        let interception = Vector3D.scale(lineDirection, numerator / denominator);
        return interception;
    }
}

export default Plane3D;