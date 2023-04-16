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
        for (let x = 0; x < n * 3; x++) {
            for (let y = 0; y < n; y++) {
                for (let z = 0; z < n; z++) {
                    let o = 0;
                    if (!(x == o || x == 3 * (n - o) || y == o || y == n - o || z == o || z == n - o))
                        continue;
                    let vertexFromOrigin = (new Vector3D(x, y, z)).add(pos);
                    let intercept = camera.plane.lineVsPlane(vertexFromOrigin);
                    let distance = vertexFromOrigin.length();
                    let color = `rgba(
                        ${Math.abs(((x * 5 + y * 1 + z * 10)) / (3 * n)) * 255},
                        ${Math.abs(((x * 1 + y * 1 + z * 5)) / (3 * n)) * 255},
                        ${Math.abs(((x * 2 + y * 1 + z * 1)) / (3 * n)) * 255}
                    ,1)`;
                    this.RenderPoint(intercept.z, intercept.y, distance, color);
                }
            }
        }
    }
    rotateVertexInversely(vertex) {
        let alpha = camera.horizontalAngle * (Math.PI / 180);
        let beta = camera.verticalAngle * (Math.PI / 180);
        let vAlpha = Math.atan(vertex.z / vertex.x);
        let vBeta = Math.atan(vertex.y / Math.hypot(vertex.x, vertex.z));
        return new Vector3D(vertex.length() * (Math.cos(vAlpha - alpha) * Math.cos(vBeta - beta)), vertex.length() * (Math.sin(vBeta - beta)), vertex.length() * (Math.sin(vAlpha - alpha) * Math.cos(vBeta - beta)));
    }
    RenderPoint(x, y, distance, color) {
        let midWidth = __classPrivateFieldGet(this, _Render3D_canvas, "f")?.width / 2;
        let midHeight = __classPrivateFieldGet(this, _Render3D_canvas, "f")?.height / 2;
        let _x = midWidth + (x * 230);
        let _y = midHeight + (y * 230);
        __classPrivateFieldGet(this, _Render3D_context, "f").fillStyle = color;
        __classPrivateFieldGet(this, _Render3D_context, "f").beginPath();
        __classPrivateFieldGet(this, _Render3D_context, "f").arc(_x - 900, _y - 900, 1 * 10000 / (distance * distance), 0, 2 * Math.PI);
        __classPrivateFieldGet(this, _Render3D_context, "f").fill();
        __classPrivateFieldGet(this, _Render3D_context, "f").closePath();
    }
}
_Render3D_canvas = new WeakMap(), _Render3D_context = new WeakMap();
export default Render3D;
