import { useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { gsap } from "gsap";

export default function Box() {
  const boxRef = useRef<any>();
  const tl = useRef<any>();
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      boxRef.current.position,
      { x: 0, y: 0, z: 0, duration: 1 },
      0
    );

    tl.current.to(
      boxRef.current.rotation,
      { x: 0, y: Math.PI / 6, z: 0, duration: 0.5 },
      0
    );

    tl.current.to(
      boxRef.current.rotation,
      { x: 0, y: -Math.PI / 4, z: 0, duration: 0.5 },
      0.5
    );

    tl.current.to(
      boxRef.current.position,
      { x: 10, y: 10, z: 10, duration: 1 },
      1
    );

    tl.current.to(
      boxRef.current.position,
      { x: -4, y: -4, z: -4, duration: 1 },
      2
    );

    tl.current.to(
      boxRef.current.rotation,
      { x: 0, y: -Math.PI / 1, z: 0, duration: 0.5 },
      2
    );
  });

  return (
    <>
      <group ref={boxRef} position={[10, 9.8, 10]}>
        <mesh>
          <boxGeometry args={[4, 4, 4]} />
          <meshBasicMaterial wireframe={true} color={"#757575"} />
        </mesh>
      </group>
    </>
  );
}
