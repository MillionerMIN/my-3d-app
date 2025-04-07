'use client'

import { GLTFLoader } from 'three/addons'
// import { TextureLoader } from 'three'
import { useLoader } from '@react-three/fiber';

export function Model({ url , textures}: { url: string, textures?: string[] }) {
  const {nodes, materials, scene} = useLoader(
    GLTFLoader, 
    url
  );

  // const [colorMap, normalMap, roughnessMap ] = useLoader(TextureLoader, textures)


  return <primitive object={scene} />;
  // return (
  //   <mesh geometry={nodes}>

  

  //   </mesh>

}

