import * as THREE from "three";
import { DIRECTIONAL_LIGHT } from "../lights";
import { RENDERER } from "../renderer";

type Shadow = { softShadowMap: boolean };

export const shadow = ({ softShadowMap }: Shadow) => {
  RENDERER.shadowMap.enabled = true;

  /** LIGHTS
   * Only the following types of lights support shadows: PointLight DirectionalLight SpotLight
   */
  DIRECTIONAL_LIGHT.castShadow = true;
  DIRECTIONAL_LIGHT.shadow.mapSize.width = 1024;
  DIRECTIONAL_LIGHT.shadow.mapSize.height = 1024;

  if (softShadowMap) {
    RENDERER.shadowMap.type = THREE.PCFSoftShadowMap;
  }
};
