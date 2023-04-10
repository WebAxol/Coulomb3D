'use strict';

import { State } from "./State.js";
import { camera, space } from "../setUp/utils.js";

class Render3D extends State {
    
    execute(){
        return true;
    };

    calculateHorizontalLine(){
        let angle = camera.horizontalAngle;
        let slope = Math.tan(angle);
    }

}

export default Render3D;
