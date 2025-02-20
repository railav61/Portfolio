import { useGLTF, useAnimations } from "@react-three/drei";
import React from "react";
import { useRef, useEffect } from "react";

function Falling() {
  const spacemanRef = useRef();
  let { scene, animations } = useGLTF("https://res.cloudinary.com/dmqwpwo6c/image/upload/f_auto,q_auto/v1/task-manager/axg02dxyp5r5domae9xl");
  const { actions } = useAnimations(animations, spacemanRef);

  useEffect(() => {
    actions["Idle"].play();
  }, [actions]);

  return (
    <mesh
      ref={spacemanRef}
      position={[-3, -7, 0]}
      scale={[10, 10, 10]}
      rotation={[0, 14.5, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
}

export default Falling;
