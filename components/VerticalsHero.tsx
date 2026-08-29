"use client";

import { useState, useEffect } from "react";
import StackCard , {cards} from "./StackCard";
import SideCard , {sideCards} from "./SideCard";

export default function VerticalsHero() {

    const [order, setOrder] = useState<number[]>([0, 1, 2, 3, 4, 5]);
    const [leavingIndex, setLeavingIndex] = useState<number | null>(null);
    const [pendingTarget, setPendingTarget] = useState<number | null>(null);

    const showCard = (index: number) => {
        if (leavingIndex !== null || order[0] === index) return;
        setPendingTarget(index);
        setLeavingIndex(order[0]);
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
        if (pendingTarget === null || leavingIndex !== null) return;
        if (order[0] === pendingTarget) {
            setPendingTarget(null);
        } else {
            setLeavingIndex(order[0]);
        }
    }, [order, leavingIndex, pendingTarget]);

    const displayOrder = leavingIndex !== null ? order.filter((i) => i !== leavingIndex) : order;

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
                            const position = isLeaving ? 0 : displayOrder.indexOf(cardIdx);
                            const z = isLeaving ? order.length + 20 : order.length - position;
                            return (
                                <StackCard
                                    key={cardIdx}
                                    card={cards[cardIdx]}
                                    position={position}
                                    isLeaving={isLeaving}
                                    z={z}
                                    onClick={() => showCard(cardIdx)}
                                />
                            );
                        })}
                    </div>
                </div>

                <div className="mx-auto flex max-w-[727px] flex-wrap justify-center gap-1 rounded-[16px] bg-white p-1.5 shadow-[0_8px_25px_rgba(30,49,130,.06)]">
                    {cards.map((card, index) => (
                        <button
                            key={card.label}
                            onClick={() => showCard(index)}
                            className={`rounded-[12px] px-4 py-2 text-[14px] font-medium transition-all duration-300 md:px-5 ${order[0] === index ? "bg-[#011A7F] text-white shadow-md" : "text-[#4b4f5f] hover:bg-[#eef1ff]"}`}
                        >
                            {card.label}
                        </button>
                    ))}
                </div>
            </section>
    );
}