import { useGLTF } from "@react-three/drei";
import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function MacContainer() {
  const spacemanRef = useRef();
  let { scene, animations } = useGLTF("/boy.glb");

  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y -= delta;
  });
  return (
    <mesh
      ref={cyl}
      position={[0, -8, 0]}
      scale={[10, 10, 10]}
      rotation={[0, 19, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default MacContainer;
