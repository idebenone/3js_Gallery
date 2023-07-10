import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import BoxOverlay from "./BoxOverlay";
import Box from "../Models/Box";

export default function BoxCanvas(): JSX.Element {
  return (
    <>
      <div className="canvas-container">
        <Canvas
          camera={{
            fov: 50,
            position: [10, 10, 10],
          }}
        >
          <ScrollControls pages={10} damping={0.25}>
            <BoxOverlay />
            <Box />
          </ScrollControls>
        </Canvas>
      </div>
    </>
  );
}
