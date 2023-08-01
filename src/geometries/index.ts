import * as THREE from "three";
import { MATERIAL_GRAY_400, MATERIAL_PINK_900 } from "../materials";

const CUBE_GEOMETRY = new THREE.BoxGeometry(3, 3, 3);
export const CUBE_MESH = new THREE.Mesh(CUBE_GEOMETRY, MATERIAL_PINK_900);
CUBE_MESH.position.set(0, 0, 0);

const PLANE_GEOMETRY = new THREE.PlaneGeometry(20, 20);
export const PLANE_MESH = new THREE.Mesh(PLANE_GEOMETRY, MATERIAL_GRAY_400);
PLANE_MESH.position.set(0, -3, 0);
PLANE_MESH.rotation.x = -Math.PI * 0.5;
