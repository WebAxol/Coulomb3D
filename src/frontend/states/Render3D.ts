'use strict';

import { State } from "./State.js";
import { camera, space } from "../setUp/utils.js";
import Vector3D from '../utils/Vector3D.js';


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

        for(let x = 0; x < n * 3; x ++ ){
            for(let y = 0; y < n; y++ ){
                for(let z = 0; z < n; z++ ){

                    let o = 0;

                    if(!(x == o || x == 3 * (n - o ) || y == o || y == n - o || z == o || z == n -o)) continue;

                    let vertexFromOrigin = (new Vector3D(x,y,z)).add(pos);
                    let intercept = camera.plane.lineVsPlane(vertexFromOrigin);
                    let distance = vertexFromOrigin.length();

                    let color = `rgba(
                        ${Math.abs(((x * 5 + y * 1 + z * 10)) / (3*n)) * 255},
                        ${Math.abs(((x * 1 + y * 1 + z * 5)) / (3*n)) * 255},
                        ${Math.abs(((x * 2 + y * 1 + z * 1)) / (3*n)) * 255}
                    ,1)`;

                    this.RenderPoint(intercept.z,intercept.y,distance, color);                
                }
            }
        }

    }

    rotateVertexInversely(vertex){

        let alpha  = camera.horizontalAngle * (Math.PI / 180);
        let beta   = camera.verticalAngle   * (Math.PI / 180);

        let vAlpha = Math.atan(vertex.z / vertex.x);
        let vBeta  = Math.atan(vertex.y / Math.hypot(vertex.x,vertex.z));

        return new Vector3D(
            vertex.length() * (Math.cos(vAlpha - alpha) * Math.cos(vBeta - beta)),
            vertex.length() * (Math.sin(vBeta  -  beta)),
            vertex.length() * (Math.sin(vAlpha - alpha) * Math.cos(vBeta - beta))
        );

    }

    RenderPoint(x,y,distance, color){

        let midWidth  = this.#canvas?.width  / 2;
        let midHeight = this.#canvas?.height / 2;
        
        let _x = midWidth  + (x * 230);
        let _y = midHeight + (y * 230);

        this.#context.fillStyle = color;
        this.#context.beginPath();
        this.#context.arc(_x - 900,_y - 900, 1 * 10000 / (distance * distance), 0, 2 * Math.PI);
        this.#context.fill();
        this.#context.closePath();

    }

}

export default Render3D;
