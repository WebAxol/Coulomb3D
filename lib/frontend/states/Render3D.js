'use strict';
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Render3D_canvas, _Render3D_context;
import { State } from "./State.js";
import { camera, space } from "../setUp/utils.js";
import Vector3D from '../utils/Vector3D.js';
// TODO: fix rendering issues when plane is rotated
// TODO: Refactor code
class Render3D extends State {
    constructor(canvas) {
        super();
        _Render3D_canvas.set(this, void 0);
        _Render3D_context.set(this, void 0);
        __classPrivateFieldSet(this, _Render3D_canvas, canvas, "f");
        __classPrivateFieldSet(this, _Render3D_context, canvas.getContext('2d'), "f");
    }
    execute() {
        this.projectVertices();
    }
    ;
    projectVertices() {
        let field = space.field;
        let pos = space.pos;
        let n = field.length;
        for (let x = 0; x < n; x++) {
            for (let y = 0; y < n; y++) {
                for (let z = 0; z < n; z++) {
                    let vertex1FromOrigin = (new Vector3D(x, y, z)).add(pos);
                    let vertex2FromOrigin = ((new Vector3D(x, y, z)).add(pos)).add(Vector3D.normalize(new Vector3D(x, y, z)).scale(0.5));
                    let intercept1 = camera.getProjectionCoords(vertex1FromOrigin);
                    let intercept2 = camera.getProjectionCoords(vertex2FromOrigin);
                    let distance1 = vertex1FromOrigin.length();
                    let distance2 = vertex2FromOrigin.length();
                    let color = `rgba(
                        ${x * Math.abs(255 / n)},
                        ${y * Math.abs(255 / n)},
                        ${z * Math.abs(255 / n)}
                    ,1)`;
                    this.RenderPoint(intercept2.z, intercept2.y, distance2, color);
                    this.RenderLine(intercept1, intercept2, color);
                }
            }
        }
    }
    RenderPoint(x, y, distance, color) {
        let midWidth = __classPrivateFieldGet(this, _Render3D_canvas, "f")?.width / 2;
        let midHeight = __classPrivateFieldGet(this, _Render3D_canvas, "f")?.height / 2;
        let _x = midWidth + x * 3;
        let _y = midHeight + y * 3;
        __classPrivateFieldGet(this, _Render3D_context, "f").fillStyle = color;
        __classPrivateFieldGet(this, _Render3D_context, "f").beginPath();
        __classPrivateFieldGet(this, _Render3D_context, "f").arc(_x, _y, 50 / distance, 0, 2 * Math.PI);
        __classPrivateFieldGet(this, _Render3D_context, "f").fill();
        __classPrivateFieldGet(this, _Render3D_context, "f").closePath();
    }
    RenderLine(v1, v2, color) {
        let midWidth = __classPrivateFieldGet(this, _Render3D_canvas, "f")?.width / 2;
        let midHeight = __classPrivateFieldGet(this, _Render3D_canvas, "f")?.height / 2;
        let _x1 = midWidth + v1.z * 3;
        let _y1 = midHeight + v1.y * 3;
        let _x2 = midWidth + v2.z * 3;
        let _y2 = midHeight + v2.y * 3;
        console.log(_x1, _y1, _x2, _y2);
        __classPrivateFieldGet(this, _Render3D_context, "f").strokeStyle = color;
        __classPrivateFieldGet(this, _Render3D_context, "f").lineWidth = 1;
        __classPrivateFieldGet(this, _Render3D_context, "f").beginPath();
        __classPrivateFieldGet(this, _Render3D_context, "f").moveTo(_x1, _y1);
        __classPrivateFieldGet(this, _Render3D_context, "f").lineTo(_x2, _y2);
        __classPrivateFieldGet(this, _Render3D_context, "f").closePath();
        __classPrivateFieldGet(this, _Render3D_context, "f").stroke();
    }
}
_Render3D_canvas = new WeakMap(), _Render3D_context = new WeakMap();
export default Render3D;
