import * as THREE from "three";

export const AMBIENT_LIGHT = new THREE.AmbientLight("#fff", 0.5);

export const DIRECTIONAL_LIGHT = new THREE.DirectionalLight("#fff", 0.5);
DIRECTIONAL_LIGHT.position.x = 1;
DIRECTIONAL_LIGHT.position.set(-0.5, 2, 2);
DIRECTIONAL_LIGHT.shadow.camera.near = 1;
DIRECTIONAL_LIGHT.shadow.camera.far = 25;
DIRECTIONAL_LIGHT.shadow.camera.top = 3;
DIRECTIONAL_LIGHT.shadow.camera.right = 3;
DIRECTIONAL_LIGHT.shadow.camera.bottom = -3;
DIRECTIONAL_LIGHT.shadow.camera.left = -3;
DIRECTIONAL_LIGHT.shadow.radius = 20;
