import Camera from '../utils/Camera.js';
import Space from '../utils/Space.js';
import Vector3D from '../utils/Vector3D.js';

const camera  = new Camera();
const space   = new Space(15,new Vector3D(10,0,10));

export { camera, space };