import Camera from '../utils/Camera.js';
import Space from '../utils/Space.js';
import Vector3D from '../utils/Vector3D.js';

const camera  = new Camera(10,45,45);
const space   = new Space(30,new Vector3D(50,12,12));

export { camera, space };