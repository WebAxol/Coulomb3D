class Vector3D{

    public x :number;
    public y :number;
    public z :number;

    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /*  Basic Arithmetic */

    add(v) :Vector3D{
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    static add(v1 :Vector3D,v2 :Vector3D) :Vector3D{
        return new Vector3D(v1.x + v2.x,v1.y + v2.y,v1.z + v2.z);
    }

    sub(v) :Vector3D{
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    static sub(v1 :Vector3D,v2 :Vector3D) :Vector3D{
        return new Vector3D(v1.x - v2.x,v1.y - v2.y,v1.z - v2.z);
    }

    scale(s :number) :Vector3D{
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }

    static scale(v :Vector3D, s :number) :Vector3D{
        return new Vector3D(v.x * s, v.y *s, v.z * s);
    }

    /* Complex operations */

    dot(v) :number{
        return (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
    }

    static dot(v1,v2) :number{
        return (v1.x * v2.x) + (v1.y * v2.y) + (v1.z * v2.z);   
    }

    /* Others */

    length() :number{
        return Math.hypot(this.x,this.y,this.z);
    }

    static normalize(v :Vector3D){
        return Vector3D.scale(v, 1 / v.length());
    }


}

export default Vector3D;