import React, { useRef, useState } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame, Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { setWorld, removeWorld } from "../Redux/reducers/worldSlice";
import { RootState } from "../Redux/store";

const Frame = React.forwardRef((props: any, ref: any) => {
  useFrame(() => {
    if (props.world) {
      const animation = gsap.timeline().to(ref.current.scale, {
        x: 1,
        y: 1,
        z: 1,
      });
      ref.current.rotation.y += 0.0001;
      return () => {
        animation.kill();
      };
    } else {
      if (props.active) {
        const animation = gsap.timeline().to(ref.current.scale, {
          x: 0.15,
          y: 0.15,
          z: 0.15,
        });
        ref.current.rotation.y += 0.001;
        return () => {
          animation.kill();
        };
      } else {
        ref.current.rotation.y += 0.005;
        const animation = gsap.timeline().to(ref.current.scale, {
          x: 0.1,
          y: 0.1,
          z: 0.1,
        });

        return () => {
          animation.kill();
        };
      }
    }
  });

  return null;
});

const SkyBoxModel = () => {
  const world = useSelector((state: RootState) => state.world.active);
  const modelRef = useRef<any>();
  const groupRef = useRef<any>();
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const scale = 0.5;

  const handleClick = () => {
    dispatch(setWorld("skybox"));
  };

  const model = useGLTF("/skybox.glb");
  model.scene.scale.set(scale, scale, scale);
  modelRef.current = model;

  return (
    <>
      <div className="canvas-container">
        <Canvas
          camera={{
            fov: 75,
            position: [-100, 0, -50],
          }}
        >
          <ambientLight />
          <group
            ref={groupRef}
            onPointerEnter={() => setActive(true)}
            onPointerLeave={() => setActive(false)}
            onClick={handleClick}
          >
            {modelRef.current && <primitive object={modelRef.current.scene} />}
            <Frame active={active} ref={groupRef} world={world} />
          </group>
          <OrbitControls autoRotate={false} enableZoom={false} />
        </Canvas>
        <div className="world-name">
          <h4
            className={`${world ? `show` : "hide"}`}
            onClick={() => dispatch(removeWorld())}
          >
            X
          </h4>
          <h1 className={`${active || world ? `show` : "hide"}`}>Sky Box</h1>
        </div>
      </div>
    </>
  );
};
useGLTF.preload("/skybox.glb");

export default SkyBoxModel;
