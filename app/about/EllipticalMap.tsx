"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FRAME_WIDTH = 1364;
const FRAME_HEIGHT = 897;
const CENTER_X = FRAME_WIDTH / 2;
const CENTER_Y = FRAME_HEIGHT / 2;

const INNER_A = 1104 / 2;
const INNER_B = 726.0176 / 2;
const OUTER_A = FRAME_WIDTH / 2;
const OUTER_B = FRAME_HEIGHT / 2;

const INNER_LOGOS = ["comp1", "comp2", "comp3", "comp4", "comp5"];
const OUTER_LOGOS = ["comp6", "comp7", "comp8"];

const INNER_DURATION = 26;
const OUTER_DURATION = 32;

export default function EllipticalMap() {
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const outerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  // Scale the whole fixed-size frame to fit the available width
  useEffect(() => {
    const updateScale = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;
      const availableWidth = wrapper.parentElement?.clientWidth ?? FRAME_WIDTH;
      const nextScale = Math.min(0.93, availableWidth / FRAME_WIDTH);
      setScale(nextScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    let frameId: number;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = (now - start) / 1000;

      const innerAngleBase = -(elapsed / INNER_DURATION) * Math.PI * 2;
      innerRefs.current.forEach((el, i) => {
        if (!el) return;
        const offset = (i / INNER_LOGOS.length) * Math.PI * 2;
        const angle = innerAngleBase + offset;
        const x = CENTER_X + INNER_A * Math.cos(angle);
        const y = CENTER_Y + INNER_B * Math.sin(angle);
        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      });

      const outerAngleBase = (elapsed / OUTER_DURATION) * Math.PI * 2;
      outerRefs.current.forEach((el, i) => {
        if (!el) return;
        const offset = (i / OUTER_LOGOS.length) * Math.PI * 2;
        const angle = outerAngleBase + offset;
        const x = CENTER_X + OUTER_A * Math.cos(angle);
        const y = CENTER_Y + OUTER_B * Math.sin(angle);
        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      });

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="mx-auto flex w-full justify-center overflow-hidden py-16">
      <div
        style={{
          width: FRAME_WIDTH * scale,
          height: FRAME_HEIGHT * scale,
        }}
      >
        <div
          ref={wrapperRef}
          className="relative origin-top-left"
          style={{
            width: FRAME_WIDTH,
            height: FRAME_HEIGHT,
            transform: `scale(${scale})`,
          }}
        >
          {/* Outer ellipse border */}
          <div
            className="absolute rounded-[50%]"
            style={{
              width: FRAME_WIDTH,
              height: FRAME_HEIGHT,
              top: 0,
              left: 0,
              border: "4px solid #D8E9F7",
            }}
          />

          {/* Inner ellipse border */}
          <div
            className="absolute rounded-[50%]"
            style={{
              width: 1104,
              height: 726.0176,
              top: 85,
              left: 130,
              border: "3.24px solid #D8E9F7",
            }}
          />

          {/* World map */}
          <div
            className="absolute"
            style={{
              width: 1001.1033,
              height: 500.9999,
              top: 199,
              left: 181,
            }}
          >
            <Image
              src="/worldmap.png"
              alt="World map"
              fill
              className="object-contain"
            />
          </div>

          {/* Inner ellipse logos */}
          {INNER_LOGOS.map((logo, i) => (
            <div
              key={logo}
              ref={(el) => {
                innerRefs.current[i] = el;
              }}
              className="absolute left-0 top-0 flex items-center justify-center rounded-full bg-white px-4 py-2 shadow-md"
            >
              <Image
                src={`/${logo}.jpg`}
                alt={logo}
                width={140}
                height={40}
                className="h-auto w-auto max-h-[32px] object-contain"
              />
            </div>
          ))}

          {/* Outer ellipse logos */}
          {OUTER_LOGOS.map((logo, i) => (
            <div
              key={logo}
              ref={(el) => {
                outerRefs.current[i] = el;
              }}
              className="absolute left-0 top-0 flex items-center justify-center rounded-full bg-white px-4 py-2 shadow-md"
            >
              <Image
                src={`/${logo}.jpg`}
                alt={logo}
                width={100}
                height={40}
                className="h-auto w-auto max-h-[32px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}