import { Scroll, useScroll } from "@react-three/drei";
import { useState, useRef, useLayoutEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";

const Section = (props: any) => {
  return (
    <section
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="">{props.children}</div>
    </section>
  );
};

const BoxOverlay = () => {
  const scroll = useScroll();
  const tl = useRef<any>();

  const [opacityValues, setOpacityValues] = useState({
    firstSection: 1,
    secondSection: 1,
    lastSection: 1,
    fourthSection: 1,
    fifthSection: 1,
    compSection: 1,
  });

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());

    const newOpacityValues = {
      ...opacityValues,
      firstSection: 1 - scroll.range(0, 0.04),
      secondSection: scroll.curve(0.08, 0.06),
      lastSection: scroll.curve(0.19, 0.06),
      fourthSection: scroll.curve(0.31, 0.06),
      fifthSection: scroll.curve(0.44, 0.04),
      compSection: scroll.curve(0.98, 0.05),
    };
    setOpacityValues(newOpacityValues);
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
  });

  return (
    <Scroll html>
      <div>
        <Section opacity={opacityValues.firstSection}>
          <div className="abs">
            <h1>What is a Box?</h1>
            <p>By Vineeth</p>
          </div>
        </Section>

        <Section opacity={opacityValues.secondSection}>
          <div className="abs">
            <h1>
              The box, a seemingly mundane object, captures the essence of
              existence itself.
            </h1>
          </div>
        </Section>

        <Section opacity={opacityValues.lastSection}>
          <div className="abs">
            <h1>
              Within the confines of its structured enclosure, the box serves as
              a metaphorical vessel that houses the mysteries of life.
            </h1>
          </div>
        </Section>

        <Section opacity={opacityValues.fourthSection}>
          <div className="abs">
            <h1>
              It challenges us to question the nature of confinement & the
              constraints we impose upon ourselves.
            </h1>
          </div>
        </Section>

        <Section opacity={opacityValues.fifthSection}>
          <div className="abs">
            <h1>Can we break free from the perceived limitations?</h1>
          </div>
        </Section>
        <Section>
          <div className="abs"></div>
        </Section>
        <Section>
          <div className="abs"></div>
        </Section>
        <Section>
          <div className="abs"></div>
        </Section>
        <Section>
          <div className="abs"></div>
        </Section>

        <Section opacity={opacityValues.compSection}>
          <div className="abs comp-name">
            <h1>DOT PRODUCT</h1>
            <p>Design and Redefine</p>
          </div>
        </Section>
      </div>
    </Scroll>
  );
};

export default BoxOverlay;
