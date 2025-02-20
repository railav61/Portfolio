import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
function Cyl() {
  let tex = useTexture("./bg5.png");
  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y -= delta;
  });
  return (
    <group rotation={[0, 0, 0]}>
      <mesh ref={cyl} position={[0, 1, 0]}>
        <cylinderGeometry args={[2, 2, 2, 300, 300, true]} />
        <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default Cyl;
