'use strict';

import { State } from "./State.js";


class CalculateField extends State {
    
     execute(){
        //console.log('Calculating Field');
        this.handleEvent('fieldCalculated');
        return true;
    };
}

export default CalculateField;