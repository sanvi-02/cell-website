"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: "/icon1.png",
    iconWidth: 40.58,
    iconHeight: 20.29,
    value: "50K+",
    label: "STUDENTS REACHED",
    labelFont: "font-manrope",
  },
  {
    icon: "/icon2.png",
    iconWidth: 30.44,
    iconHeight: 33.82,
    value: "200+",
    label: "EVENTS HOSTED",
    labelFont: "font-manrope",
  },
  {
    icon: "/icon3.png",
    iconWidth: 29.66,
    iconHeight: 29.65,
    value: "150+",
    label: "STARTUPS INCUBATED",
    labelFont: "font-manrope",
  },
  {
    icon: "/icon4.png",
    iconWidth: 30.44,
    iconHeight: 30.44,
    value: "18+",
    label: "YEARS OF LEGACY",
    labelFont: "font-space-grotesk",
  },
];


function parseValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: parseInt(match[1], 10), suffix: match[2] };
}

function useInViewOnce(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options ?? { threshold: 0.3 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}

function useCountUp(target: number, start: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return count;
}

function StatValue({ value, start }: { value: string; start: boolean }) {
  const { target, suffix } = parseValue(value);
  const count = useCountUp(target, start);

  return (
    <span
      className="flex h-[100px] w-full items-center font-plus-jakarta text-[90.1875px] font-extrabold leading-[99px] text-white"
      style={{ letterSpacing: "-1.80375px" }}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function OurImpact() {
  const { ref, inView } = useInViewOnce({ threshold: 0.3 });

  return (
    <section className="relative h-[653.86px] w-full overflow-hidden mt-30">
      {/* Background image */}
      <Image
        src="/impactBG.jpg"
        alt="Our Impact background"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "#061B35CC",
          mixBlendMode: "multiply",
        }}
      />

      {/* Content */}
      <div
        ref={ref}
        className="absolute left-[90.19px] right-[90.19px] top-0 flex flex-col items-start pb-[72.15px]"
      >
        <h2
          className="flex h-[100px] w-full items-center font-plus-jakarta text-[90.1875px] font-extrabold mt-30 leading-[99px] text-white"
          style={{ letterSpacing: "-1.80375px" }}
        >
          OUR IMPACT
        </h2>

        <div className="mt-[98.41px] flex w-full items-start justify-between gap-15.5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex w-[294.61px] flex-col items-start gap-[9.02px]"
            >
              <Image
                src={stat.icon}
                alt={stat.label}
                width={stat.iconWidth}
                height={stat.iconHeight}
              />

              <div className="flex w-full flex-col items-start pt-[9.02px]">
                <StatValue value={stat.value} start={inView} />
              </div>

              <div className="flex w-full flex-col items-start">
                <span
                  className={`flex h-[14px] w-full items-center text-[13.5281px] font-bold leading-[14px] text-[#B9C7E4] ${stat.labelFont}`}
                  style={{ letterSpacing: "2.02922px" }}
                >
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}