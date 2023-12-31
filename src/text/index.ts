import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { SCENE } from '../scene';
import { MATERIAL_PINK_600 } from '../materials';

const FONT_STYLE = {
  size: 0.4,
  height: 0.05,
  curveSegments: 12,
  bevelEnabled: true,
  bevelThickness: 0.03,
  bevelSize: 0.02,
  bevelOffset: 0,
  bevelSegments: 5,
};

const FONT_LOADER = new FontLoader();
export const loadFont = () => {
  FONT_LOADER.load('/fonts/optimer_regular.typeface.json', (font) => {
    const TEXT_GEOMETRY = new TextGeometry(
      `Life is easy,
      
Framework author: 
zerodeleo`,
      {
        font,
        ...FONT_STYLE,
      }
    );
    const TEXT_MESH = new THREE.Mesh(TEXT_GEOMETRY, MATERIAL_PINK_600);
    TEXT_MESH.position.set(-5, 7, 0);
    TEXT_GEOMETRY.center();
    SCENE.add(TEXT_MESH);
  });
};
