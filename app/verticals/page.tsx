"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";

type Card = {
    label: string;
    title: string;
    text: string;
    type: "image" | "video";
    src: string
};

const cards: Card[] = [
    { label: "Zero to one", title: "Zero to One", text: "Building solutions and startups around real problems within and beyond the IIT Roorkee campus  from the first sketch to the first paying customer.", type: "image", src: "/verticals/zero.jpg" },
    { label: "Startup Launchpad", title: "Startup Launchpad", text: "Working with external startups to give E-Cell members hands-on exposure to real-world startup execution.", type: "video", src: "/verticals/launchpad.mp4" },
    { label: "Events", title: "Events", text: "Creating entrepreneurship-focused experiences through E-Cell events and collaborations with clubs, companies and organizations.", type: "image", src: "/verticals/events.jpg" },
    { label: "Marketing", title: "Marketing & Outreach", text: "Creating engaging and educational content around entrepreneurship and E-Cell while expanding its reach.", type: "video", src: "/verticals/market.mp4" },
    { label: "Design", title: "Design", text: "Building E-Cell's visual identity and creating design solutions across itsecosystem.", type: "video", src: "/verticals/design.mp4" },
    { label: "Tech", title: "Tech", text: "Building websites, digital products and technical solutions for E-Cell and its verticals.", type: "video", src: "/verticals/tech.mp4" },
];

function Placeholder({ card, featured = false }: { card: Card; featured?: boolean }) {
    return (
        <div className={`relative w-full overflow-hidden bg-[#D9D9D7] rounded-[7.38px] ${featured
            ? "aspect-[457.85/406.15]" // matches Figma: image fill-width, fixed 406.15px height at 457.85px width
            : "aspect-[180/176]" // side-card image: fill-width, fixed 176px height at 180px width
            }`}>
            {card.type === "image" ? (
                <img
                    src={card.src}
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            ) : (
                <video
                    src={card.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                />
            )}

            <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_70%_20%,white_0,transparent_35%),linear-gradient(130deg,transparent_40%,rgba(8,30,100,.25))]" />
        </div>
    );
}

function StackCard({
    card,
    position,
    isLeaving,
    z,
    onClick,
}: {
    card: Card;
    position: number;
    isLeaving: boolean;
    z: number;
    onClick?: () => void;
}) {
    const clamped = Math.min(position, 5);
    const isFront = position === 0 && !isLeaving;
    const translateY = isLeaving ? 1000 : position === 0 ? 0 : -clamped * 36;
    const scale = isLeaving ? 1 : position === 0 ? 1 : 1 - clamped * 0.07;
    const opacity = isLeaving ? 1 : clamped >= 5 ? 0 : 1;

    return (
        <div
            onClick={!isFront && !isLeaving ? onClick : undefined}
            style={{
                zIndex: z,
                transform: `translateY(${translateY}px) scale(${scale})`,
                opacity,
            }}
            className={`absolute inset-x-0 top-0 mx-auto flex w-[92%] flex-col rounded-[14.77px] border border-white bg-white text-left shadow-[0_3.69px_22.25px_rgba(0,0,0,.07)] transition-all duration-500 ease-in-out ${!isFront && !isLeaving ? "cursor-pointer" : ""}`}
        >
            <div
                className="flex flex-col"
                style={{
                    padding: "clamp(8px, 2.3vw, 11.08px)",
                    gap: "clamp(6px, 1.9vw, 9.23px)",
                    maxWidth: "min(457.85px, 100%)",
                    margin: "0 auto",
                    width: "100%",
                }}
            >
                <Placeholder card={card} featured />
                <div
                    className={`overflow-hidden`}
                    style={{ paddingTop: isFront ? "11.08px" : 0 }}
                >
                    <h2 className="font-serif text-[clamp(21px,2.2vw,33.23px)] font-normal tracking-tight text-[#474747]">
                        {card.title}
                    </h2>
                    <p className="mt-1 font-normal text-[14px] leading-relaxed text-[#4A4A4A]">
                        {card.text}
                    </p>
                </div>
            </div>
        </div>
    );
}


const sideCards = [
    { label: "Ideas", src: "/verticals/ideas.jpg", type: "image" },
    { label: "Community", src: "/verticals/community.jpg", type: "image" },
    { label: "Impact", src: "/verticals/impact.png", type: "image" },
    { label: "Ventures", src: "/verticals/ventures.png", type: "image" },
];

function SideCard({
    card,
    label,
    className,
}: {
    card: Card;
    label: string;
    className: string;
}) {
    return (
        <div
            className={`absolute hidden flex-col rounded-[14px] bg-white p-2 shadow-[0_24px_50px_-20px_rgba(0,0,0,.35)] transition-all duration-500 hover:-translate-y-2 md:flex ${className}`}
            style={{
                width: "clamp(140px, 12vw, 196px)",
                height: "clamp(137px, 11.75vw, 192px)",
            }}
        >
            <div className="relative w-full overflow-hidden rounded-[12px]">
                {card.type === "image" ? (
                    <img
                        src={card.src}
                        alt={card.title}
                        className="h-full w-full object-cover  transition-all duration-500"
                    />
                ) : (
                    <video
                        src={card.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d68]/50 via-transparent to-transparent" />
                <span className="absolute right-2 top-2 rounded-[6px] bg-[#011A7F] px-2.5 py-1 text-[12px] font-semibold text-white shadow-[0_1px_2px_-1px_rgba(0,0,0,.1),0_1px_3px_rgba(0,0,0,.1)]">
                    {label}
                </span>
            </div>
        </div>
    );
}

export default function App() {

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
        <main className="min-h-screen bg-[#fafafa] text-[#0b1d68] selection:bg-[#0e2c9d] selection:text-white">
            <header className="mx-auto flex max-w-[1180px] items-center rounded-b-lg bg-[#FFFFFF1A] justify-between px-6 py-4 md:px-10">
                <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
                    <img src="/verticals/cell-logo.png" alt="E-Cell Logo" className="h-8 w-15" />
                </a>
                <nav className="hidden items-center gap-6 text-[16px] font-medium text-[#011A7F] md:flex">
                    {[
                        { name: "Home", href: "/" },
                        { name: "Initiatives", href: "/initiatives" },
                        { name: "About Us", href: "/about" },
                        { name: "Verticals", href: "/verticals" },
                        { name: "Team", href: "/team" },
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="transition-colors hover:text-[#0d43bf]"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </header>

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


            <footer
                id="contact"
                className="relative px-6 pb-10 pt-14 text-white sm:px-10 lg:px-[60px] lg:pt-[60px]"
                style={{
                    background:
                        "linear-gradient(95.1deg, #002575 -6%, #000209 103.49%), linear-gradient(0deg, rgba(1, 26, 127, 0.61), rgba(1, 26, 127, 0.61))",
                }}
            >
                <div className="absolute inset-0 z-0 bg-[#011A7F]/[61%] pointer-events-none" />
                <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col gap-12 lg:gap-[48px]">
                    {/* About + links row */}
                    <div className="flex flex-col gap-16 border-b-[0.4px] border-white pb-10 md:gap-24 lg:flex-row lg:justify-between lg:gap-[224px] lg:pb-12">
                        {/* About Content */}
                        <div className="flex w-full flex-col gap-8 lg:w-[548px] lg:gap-[96px]">
                            <div className="flex flex-col gap-12 lg:gap-12">
                                <div className="flex items-center gap-4 lg:gap-6">
                                    <span className="text-2xl text-[#6ac4f1]">◢</span>
                                    <span className="text-sm font-semibold">E-Cell</span>
                                </div>
                                <p className="max-w-[370px] text-[16px] font-normal leading-relaxed text-white">
                                    The Entrepreneurship Cell of IIT Roorkee is a student-run organization dedicated to fostering entrepreneurship by empowering students with mentorship, consultancy and networking opportunities.
                                </p>
                            </div>
                            <p className="text-[15px] leading-relaxed font-normal lg:gap-4 text-white">
                                <span className="font-medium text-[16px] text-white">ADDRESS</span>
                                <br />
                                E-Cell, IIT Roorkee
                                <br />
                                Roorkee, Uttarakhand - 247667
                            </p>
                        </div>

                        <div className="flex w-full flex-col gap-10 lg:w-[548px] lg:gap-[113px]">
                            <div className="flex flex-wrap justify-between gap-10 sm:gap-6">
                                <div className="flex flex-col gap-4 lg:w-[106px] lg:gap-8">
                                    <p className="text-[16px] font-bold uppercase tracking-widest text-white">Explore</p>
                                    <div className="flex flex-col space-y-3 text-[16px] text-white">
                                        {[
                                            { name: "Home", href: "/" },
                                            { name: "Initiatives", href: "/initiatives" },
                                            { name: "About Us", href: "/about" },
                                            { name: "Verticals", href: "/verticals" },
                                            { name: "Team", href: "/team" },
                                        ].map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="transition-colors hover:text-[#0d43bf]"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 lg:gap-8">
                                    <p className="text-[16px] font-bold uppercase tracking-widest text-white">Contacts</p>
                                    <p className="text-[16px] leading-6 text-white">hello@ecell.in<br />+91 7222996098</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="flex gap-4">
                                    {[
                                        { Icon: FaFacebook, link: "https://www.facebook.com/ECellDomsIitRoorkee/" },
                                        { Icon: FaInstagram, link: "https://www.instagram.com/ecelliitr/?hl=en" },
                                        { Icon: FaTwitter, link: "https://x.com/ecell_iitr" },
                                        { Icon: FaLinkedin, link: "https://www.linkedin.com/company/ecelliitr/?originalSubdomain=in" },
                                        { Icon: FaYoutube, link: "https://www.youtube.com/channel/UCnbXsB-qIQUMWsVRzzKB4Cg" },
                                    ].map(({ Icon, link }) => (
                                        <a
                                            key={link}
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full bg-white p-1.5 text-[#082180] transition-transform hover:-translate-y-1"
                                        >
                                            <Icon className="h-3 w-3" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="flex flex-col gap-3 text-[16px] text-white sm:flex-row sm:items-center sm:justify-between">
                        <span>Made with ♥ by E-Cell Design & Tech Team</span>
                        <span>Terms of use · Privacy policy</span>
                    </div>
                </div>
            </footer>
        </main>
    );
}