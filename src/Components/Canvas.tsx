import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import AmazonModel from "../Models/AmazonModel";
import SkyBoxModel from "../Models/SkyBoxModel";
import { RootState } from "../Redux/store";
import { useSelector } from "react-redux";

const Canvas = () => {
  const world = useSelector((state: RootState) => state.world.active);
  const worldName = useSelector((state: RootState) => state.world.world);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 4, ease: "Power1.easeInOut" }
    );

    return () => {
      animation.kill();
    };
  }, [world]);

  return (
    <div ref={containerRef}>
      {!world && (
        <div className="worlds">
          <AmazonModel />
          <SkyBoxModel />
        </div>
      )}
      {world && (
        <div className="worlds">
          {worldName === "amazon" && <AmazonModel />}
          {worldName === "skybox" && <SkyBoxModel />}
        </div>
      )}
    </div>
  );
};

export default Canvas;
