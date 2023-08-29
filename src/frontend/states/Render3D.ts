'use strict';

import { State } from "./State.js";
import { camera, space } from "../setUp/utils.js";
import Vector3D from '../utils/Vector3D.js';


// TODO: fix rendering issues when plane is rotated
// TODO: Refactor code

class Render3D extends State {
    
    #canvas;
    #context;

    constructor(canvas){
        super();
        this.#canvas  = canvas;
        this.#context = canvas.getContext('2d');
    }

    execute(){
        this.projectVertices();
    };

    projectVertices(){
        
        let field = space.field;
        let pos   = space.pos;
        let n     = field.length;

        for(let x = 0; x < n; x++ ){
            for(let y = 0; y < n; y++ ){
                for(let z = 0; z < n; z++ ){

                    let vertex1FromOrigin = (new Vector3D(x ,y ,z )).add(pos);
                    let vertex2FromOrigin = ((new Vector3D(x ,y ,z )).add(pos)).add(Vector3D.normalize(new Vector3D(x,y,z)).scale(0.5));


                    let intercept1 = camera.getProjectionCoords(vertex1FromOrigin);
                    let intercept2 = camera.getProjectionCoords(vertex2FromOrigin);

                    let distance1 = vertex1FromOrigin.length();
                    let distance2 = vertex2FromOrigin.length();

                    let color = `rgba(
                        ${x * Math.abs(255 / n)},
                        ${y * Math.abs(255 / n)},
                        ${z * Math.abs(255 / n)}
                    ,1)`;

                    this.RenderPoint(intercept2.z,intercept2.y,distance2, color);    
                    this.RenderLine(intercept1,intercept2,color);            
            
                }
            }
        }
    }

    RenderPoint(x,y,distance, color){

        let midWidth  = this.#canvas?.width  / 2;
        let midHeight = this.#canvas?.height / 2;
        
        let _x = midWidth  + x * 3;
        let _y = midHeight + y * 3;

        this.#context.fillStyle = color;
        this.#context.beginPath();
        this.#context.arc(_x,_y, 50 / distance, 0, 2 * Math.PI);
        this.#context.fill();
        this.#context.closePath();

    }

    RenderLine(v1,v2,color){

        let midWidth  = this.#canvas?.width  / 2;
        let midHeight = this.#canvas?.height / 2;

        let _x1 = midWidth  + v1.z * 3;
        let _y1 = midHeight + v1.y * 3;

        let _x2 = midWidth  + v2.z * 3;
        let _y2 = midHeight + v2.y * 3;

        console.log(_x1,_y1,_x2,_y2)

        this.#context.strokeStyle = color;
        this.#context.lineWidth = 1;

        this.#context.beginPath();
        this.#context.moveTo(_x1,_y1);
        this.#context.lineTo(_x2,_y2);
        this.#context.closePath();
        this.#context.stroke();
    }

}

export default Render3D;
