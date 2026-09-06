"use client";

import { useState, useEffect, useRef, useLayoutEffect } from "react";
import StackCard, { cards } from "./StackCard";
import SideCard, { sideCards } from "./SideCard";

export default function VerticalsHero() {
    const [order, setOrder] = useState<number[]>([0, 1, 2, 3, 4, 5]);

    const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
    const [enteringIndex, setEnteringIndex] = useState<number | null>(null);
    const [enterPhase, setEnterPhase] = useState<"jump" | "settle" | null>(null);

    const [pendingTarget, setPendingTarget] = useState<number | null>(null);
    const [pendingDirection, setPendingDirection] = useState<"forward" | "backward" | null>(null);

    const [pillTargetIndex, setPillTargetIndex] = useState(0);

    const isBusy = leavingIndex !== null || enteringIndex !== null;

    const popBack = (arr: number[]) => [arr[arr.length - 1], ...arr.slice(0, -1)];

    const showCard = (index: number) => {
        if (isBusy || order[0] === index) return;

        const direction: "forward" | "backward" = index > order[0] ? "forward" : "backward";
        setPendingTarget(index);
        setPendingDirection(direction);
        setPillTargetIndex(index);

        if (direction === "forward") {
            setLeavingIndex(order[0]);
        } else {
            const incoming = order[order.length - 1];
            setEnteringIndex(incoming);
            setEnterPhase("jump");
            setOrder((prev) => popBack(prev));
        }
    };

    useEffect(() => {
        if (leavingIndex === null) return;
        const timer = window.setTimeout(() => {
            setOrder((prev) => {
                const rest = prev.filter((i) => i !== leavingIndex);
                return [...rest, leavingIndex];
            });
            setLeavingIndex(null);
        }, 520);
        return () => window.clearTimeout(timer);
    }, [leavingIndex]);

    useEffect(() => {
        if (pendingDirection !== "forward" || pendingTarget === null || leavingIndex !== null) return;
        if (order[0] === pendingTarget) {
            setPendingTarget(null);
            setPendingDirection(null);
        } else {
            setLeavingIndex(order[0]);
        }
    }, [order, leavingIndex, pendingDirection, pendingTarget]);

    useEffect(() => {
        if (enterPhase !== "jump") return;
        const raf1 = requestAnimationFrame(() => {
            const raf2 = requestAnimationFrame(() => setEnterPhase("settle"));
            return () => cancelAnimationFrame(raf2);
        });
        return () => cancelAnimationFrame(raf1);
    }, [enterPhase]);

    useEffect(() => {
        if (enterPhase !== "settle") return;
        const timer = window.setTimeout(() => {
            setEnteringIndex(null);
            setEnterPhase(null);
        }, 520);
        return () => window.clearTimeout(timer);
    }, [enterPhase]);

    useEffect(() => {
        if (pendingDirection !== "backward" || pendingTarget === null || enteringIndex !== null) return;
        if (order[0] === pendingTarget) {
            setPendingTarget(null);
            setPendingDirection(null);
        } else {
            const incoming = order[order.length - 1];
            setEnteringIndex(incoming);
            setEnterPhase("jump");
            setOrder((prev) => popBack(prev));
        }
    }, [order, enteringIndex, pendingDirection, pendingTarget]);

    const displayOrder = leavingIndex !== null ? order.filter((i) => i !== leavingIndex) : order;

    const pillContainerRef = useRef<HTMLDivElement>(null);
    const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const [pillStyle, setPillStyle] = useState<{ left: number; width: number; height: number } | null>(null);

    const measurePill = () => {
        const container = pillContainerRef.current;
        const activeBtn = buttonRefs.current[pillTargetIndex];
        if (!container || !activeBtn) return;
        const containerRect = container.getBoundingClientRect();
        const btnRect = activeBtn.getBoundingClientRect();
        setPillStyle({
            left: btnRect.left - containerRect.left,
            width: btnRect.width,
            height: btnRect.height,
        });
    };

    useLayoutEffect(() => {
        measurePill();
    }, [pillTargetIndex]);

    useEffect(() => {
        window.addEventListener("resize", measurePill);
        return () => window.removeEventListener("resize", measurePill);
    }, []);

    return (
        <section id="top" className="mx-auto max-w-[1180px] px-4 pb-20 pt-12 text-center sm:px-6 sm:pb-24 md:px-10 md:pt-20">
            <p className="mb-5 flex items-center justify-center gap-2 text-sm font-semibold uppercase leading-4 tracking-[1.2px] text-[#011A7F]">
                <span aria-hidden="true">•</span>
                Verticals
                <span aria-hidden="true">•</span>
            </p>
            <h1 className="mx-auto max-w-[632px] text-[clamp(28px,6vw,52px)] font-semibold leading-[1.08] tracking-[-.04em] text-[#0c287c] sm:text-5xl md:text-[52px]">
                Different strengths. One<br className="hidden sm:block" /> entrepreneurial ecosystem.
            </h1>
            <p className="mx-auto mt-5 max-w-[735px] text-xs leading-relaxed text-[#777b91] sm:text-sm">
                E-Cell IIT Roorkee operates through six verticals, each contributing differently to building, creating, communicating and enabling entrepreneurship.
            </p>

            <div className="relative mx-auto mt-16 flex min-h-[550px] max-w-[850px] items-center justify-center sm:min-h-[550px]">
                <SideCard card={sideCards[0]} label="Ideas" className="left-0 top-[2%]" />
                <SideCard card={sideCards[1]} label="Community" className="bottom-[8%] left-[-60px]" />
                <SideCard card={sideCards[3]} label="Ventures" className="right-[-20px] top-[4%]" />
                <SideCard card={sideCards[2]} label="Impact" className="bottom-[9%] right-4" />

                <div className="relative flex h-[420px] w-full max-w-[365px] items-end justify-center pt-16 sm:h-[420px]">
                    {order.map((cardIdx) => {
                        const isLeaving = cardIdx === leavingIndex;
                        const isEntering = cardIdx === enteringIndex;
                        const position = isLeaving ? 0 : displayOrder.indexOf(cardIdx);
                        const z = isLeaving || isEntering ? order.length + 20 : order.length - position;
                        return (
                            <StackCard
                                key={cardIdx}
                                card={cards[cardIdx]}
                                position={position}
                                isLeaving={isLeaving}
                                isEntering={isEntering}
                                enterPhase={enterPhase}
                                z={z}
                                onClick={() => showCard(cardIdx)}
                            />
                        );
                    })}
                </div>
            </div>

            <div
                ref={pillContainerRef}
                className="relative mx-auto flex max-w-[727px] flex-wrap justify-center gap-1 rounded-[16px] bg-white p-1.5 shadow-[0_8px_25px_rgba(30,49,130,.06)]"
            >
                {pillStyle && (
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-1.5 rounded-[12px] bg-[#011A7F] shadow-md transition-[transform,width] duration-500 ease-in-out"
                        style={{
                            left: 0,
                            width: pillStyle.width,
                            height: pillStyle.height,
                            transform: `translateX(${pillStyle.left}px)`,
                        }}
                    />
                )}

                {cards.map((card, index) => (
                    <button
                        key={card.label}
                        ref={(el) => {
                            buttonRefs.current[index] = el;
                        }}
                        onClick={() => showCard(index)}
                        className={`relative z-10 rounded-[12px] px-4 py-2 text-[14px] font-medium transition-colors duration-300 md:px-5 ${
                            pillTargetIndex === index ? "text-white" : "text-[#4b4f5f]"
                        }`}
                    >
                        {card.label}
                    </button>
                ))}
            </div>
        </section>
    );
}