import * as THREE from "three";
import { MATERIAL_PINK_900 } from "../materials";

const CUBE = new THREE.BoxGeometry(3, 3, 3);
export const CUBE_MESH = new THREE.Mesh(CUBE, MATERIAL_PINK_900);
CUBE_MESH.position.set(0, 0, 0);
