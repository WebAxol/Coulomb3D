'use strict';

import { State } from "./State.js";
import { space } from "../setUp/utils.js";

class CalculateField extends State {
    
     execute(){

        let field = space.field;
        let pos   = space.pos;
        let n     = field.length;

        for(let x = 0; x < n * 3; x += 3 ){
            for(let y = 0; y < n; y++ ){
                for(let z = 0; z < n; z++ ){
      
                }
            }
        }

        this.handleEvent('fieldCalculated');
        return true;
    };

    fieldAt(){
        
    }



}

export default CalculateField;