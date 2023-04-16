class Vector3D {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    /*  Basic Arithmetic */
    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    static add(v1, v2) {
        return new Vector3D(v1.x + v2.x, v1.y + v2.y, v1.z + v2.z);
    }
    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    static sub(v1, v2) {
        return new Vector3D(v1.x - v2.x, v1.y - v2.y, v1.z - v2.z);
    }
    scale(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }
    static scale(v, s) {
        return new Vector3D(v.x * s, v.y * s, v.z * s);
    }
    /* Complex operations */
    dot(v) {
        return (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
    }
    static dot(v1, v2) {
        return (v1.x * v2.x) + (v1.y * v2.y) + (v1.z * v2.z);
    }
    /* Others */
    length() {
        return Math.hypot(this.x, this.y, this.z);
    }
    static normalize(v) {
        return Vector3D.scale(v, 1 / v.length());
    }
}
export default Vector3D;
