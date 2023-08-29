'use strict';
class Camera {
    constructor(distance, alpha, beta) {
        this.distanceToPlane = distance;
        this.horizontalAngle = alpha * (Math.PI / 180);
        this.verticalAngle = beta * (Math.PI / 180);
    }
    getHorizontalAngle(vertex) {
        let vertexAngle = Math.atan(vertex.z / vertex.x);
        let angle = vertexAngle - this.horizontalAngle;
        return angle;
    }
    getVerticalAngle(vertex, horizontalAngle) {
        let horizontalDistance = Math.hypot(vertex.x, vertex.z) * Math.cos(horizontalAngle);
        let vertexAngle = Math.atan(vertex.y / horizontalDistance);
        let angle = vertexAngle - this.verticalAngle;
        return angle;
    }
    getProjectionCoords(vertex) {
        let horizontalAngle = this.getHorizontalAngle(vertex);
        let verticalAngle = this.getVerticalAngle(vertex, horizontalAngle);
        let x = (Math.tan(horizontalAngle) / Math.tan(80 * (Math.PI / 180))) * 1200;
        let y = (Math.tan(verticalAngle) / Math.tan(80 * (Math.PI / 180))) * 1200;
        return { z: x, y: y };
    }
}
export default Camera;
//# sourceMappingURL=Camera.js.map