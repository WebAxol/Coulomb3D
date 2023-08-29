import Vector3D from './Vector3D.js';
class Plane3D {
    constructor(distance, alpha, beta) {
        this.center = new Vector3D(0, 0, 0); // closest point to origin
        this.normal = new Vector3D(0, 0, 0); // vector perpendicular to plane
        this.update(distance, alpha, beta);
    }
    update(distance, alpha, beta) {
        alpha *= (Math.PI / 180);
        beta *= (Math.PI / 180);
        this.center = new Vector3D(distance * Math.cos(alpha) * Math.cos(beta), distance * Math.sin(beta), distance * Math.sin(alpha) * Math.cos(beta));
        this.normal = Vector3D.normalize(this.center);
    }
    getHorizontalAngle(vertex) {
        let normalAngle = Math.atan(this.normal.z / this.normal.x);
        let vertexAngle = Math.atan(vertex.z / vertex.x);
        let angle = vertexAngle - normalAngle;
        console.log(angle * (180 / Math.PI));
        return angle;
    }
    getVerticalAngle(vertex, horizontalAngle) {
        let angleBetweenHorizontalNormal = Math.abs(horizontalAngle - Math.atan(this.normal.z / this.normal.x));
        let horizotal = Math.hypot(this.normal.x, this.normal.z) / Math.cos(angleBetweenHorizontalNormal);
        let normalAngle = Math.atan(this.normal.y / horizotal);
        let vertexAngle = Math.atan(vertex.y / Math.hypot(vertex.x, vertex.z));
        let angle = vertexAngle - normalAngle;
        console.log(angle * (180 / Math.PI));
        return angle;
    }
    getProjectionCoords(vertex) {
        let horizontalAngle = this.getHorizontalAngle(vertex);
        let x = (horizontalAngle / Math.atan(80 * (Math.PI / 180))) * 600;
        let y = (this.getVerticalAngle(vertex, horizontalAngle) / Math.atan(80 * (Math.PI / 180))) * 600;
        return { z: x, y: y };
    }
    isPointOnPlane(point) {
        let centerToPoint = Vector3D.sub(this.center, point);
        let dot = Vector3D.dot(centerToPoint, this.normal);
        return (Math.round(dot * Math.pow(10, 9)) / Math.pow(10, 9)) == 0;
    }
    lineVsPlane(lineDirection) {
        let numerator = Vector3D.dot(this.normal, this.center);
        let denominator = Vector3D.dot(this.normal, lineDirection);
        let interception = Vector3D.scale(lineDirection, numerator / denominator);
        return interception;
    }
}
export default Plane3D;
