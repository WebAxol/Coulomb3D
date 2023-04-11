'use strict';

import { State } from "./State.js";
import { camera, space } from "../setUp/utils.js";

class Render3D extends State {
    
    execute(){
        console.log('Rendering Field');
        this.handleEvent('spaceRendered');
        return true;
    };

    horizontalSegment() {

        let alpha :number = camera.horizontalAngle * (Math.PI / 180);
        let beta  :number = camera.verticalAngle   * (Math.PI / 180);

        let slope :number             =   Math.tan(alpha) * Math.cos(beta);
        let perpendicular :number     = - Math.pow(slope,-1);
        let segmentMidPoint :number[] = [ Math.cos(alpha) * Math.cos(beta), Math.sin(alpha) ];
        let bisector                  =   Math.cos(beta) * camera.distanceToPlane; 

        let yIntercept =  (segmentMidPoint[1] * bisector) - (segmentMidPoint[0] * bisector);
        
    }

    verticalSegment() {

        let beta  :number = camera.verticalAngle   * (Math.PI / 180);
        let alpha :number = camera.horizontalAngle * (Math.PI / 180);

        let slope :number             =   Math.tan(beta) * Math.cos(alpha);
        let perpendicular :number     = - Math.pow(slope,-1);
        let segmentMidPoint :number[] = [ Math.cos(beta) * Math.cos(alpha), Math.sin(beta) ];
        let bisector                  =   Math.cos(alpha) * camera.distanceToPlane; 

        let yIntercept =  (segmentMidPoint[1] * bisector) - (segmentMidPoint[0] * bisector);
        
    }


}

export default Render3D;
