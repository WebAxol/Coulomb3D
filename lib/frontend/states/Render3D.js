'use strict';
import { State } from "./State.js";
import { camera } from "../setUp/utils.js";
class Render3D extends State {
    execute() {
        console.log('Rendering Field');
        this.handleEvent('spaceRendered');
        return true;
    }
    ;
    horizontalSegment() {
        let alpha = camera.horizontalAngle * (Math.PI / 180);
        let beta = camera.verticalAngle * (Math.PI / 180);
        let slope = Math.tan(alpha) * Math.cos(beta);
        let perpendicular = -Math.pow(slope, -1);
        let segmentMidPoint = [Math.cos(alpha) * Math.cos(beta), Math.sin(alpha)];
        let bisector = Math.cos(beta) * camera.distanceToPlane;
        let yIntercept = (segmentMidPoint[1] * bisector) - (segmentMidPoint[0] * bisector);
    }
    verticalSegment() {
        let beta = camera.verticalAngle * (Math.PI / 180);
        let alpha = camera.horizontalAngle * (Math.PI / 180);
        let slope = Math.tan(beta) * Math.cos(alpha);
        let perpendicular = -Math.pow(slope, -1);
        let segmentMidPoint = [Math.cos(beta) * Math.cos(alpha), Math.sin(beta)];
        let bisector = Math.cos(alpha) * camera.distanceToPlane;
        let yIntercept = (segmentMidPoint[1] * bisector) - (segmentMidPoint[0] * bisector);
    }
}
export default Render3D;
