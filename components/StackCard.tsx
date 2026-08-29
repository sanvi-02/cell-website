import Placeholder from "./Placeholder";

export type Card = {
  label: string;
  title: string;
  text: string;
  type: "image" | "video";
  src: string;
};

export const cards: Card[] = [
    { label: "Zero to one", title: "Zero to One", text: "Building solutions and startups around real problems within and beyond the IIT Roorkee campus  from the first sketch to the first paying customer.", type: "image", src: "/verticals/zero.jpg" },
    { label: "Startup Launchpad", title: "Startup Launchpad", text: "Working with external startups to give E-Cell members hands-on exposure to real-world startup execution.", type: "video", src: "/verticals/launchpad.mp4" },
    { label: "Events", title: "Events", text: "Creating entrepreneurship-focused experiences through E-Cell events and collaborations with clubs, companies and organizations.", type: "image", src: "/verticals/events.jpg" },
    { label: "Marketing", title: "Marketing & Outreach", text: "Creating engaging and educational content around entrepreneurship and E-Cell while expanding its reach.", type: "video", src: "/verticals/market.mp4" },
    { label: "Design", title: "Design", text: "Building E-Cell's visual identity and creating design solutions across itsecosystem.", type: "video", src: "/verticals/design.mp4" },
    { label: "Tech", title: "Tech", text: "Building websites, digital products and technical solutions for E-Cell and its verticals.", type: "video", src: "/verticals/tech.mp4" },
];

export default function StackCard({
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