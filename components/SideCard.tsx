type SideCardData = {
    label: string;
    type: "image" | "video";
    src: string;
};

export const sideCards: SideCardData[] = [
    { label: "Ideas", src: "/verticals/ideas1.png", type: "image" },
    { label: "Community", src: "/verticals/community.jpeg", type: "image" },
    { label: "Impact", src: "/verticals/impact.jpeg", type: "image" },
    { label: "Ventures", src: "/verticals/ventures1.png", type: "image" },
];

export default function SideCard({
    card,
    label,
    className,
}: {
    card: SideCardData;
    label: string;
    className: string;
}) {
    return (
        <div className={`absolute hidden flex-col rounded-[14px] bg-white p-2 shadow-[0_24px_50px_-20px_rgba(0,0,0,.35)] transition-all duration-500 hover:-translate-y-2 lg:flex ${className}`}
            style={{
                width: "clamp(140px, 12vw, 210px)",
                height: "clamp(137px, 11.75vw, 206px)",
            }}

        >
            <div className="relative w-full h-full overflow-hidden rounded-[12px]">
                {card.type === "image" ? (
                    <img
                        src={card.src}
                        alt={card.label}
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
                <span className="absolute right-2 top-2 rounded-[6px] border border-white/25 bg-[#011A7F]/80 px-1.5 py-0.5 text-[12px] font-semibold text-white backdrop-blur-md shadow-[0_1px_2px_-1px_rgba(0,0,0,.1),0_1px_3px_rgba(0,0,0,.1)]">
                    {label}
                </span>
            </div>
        </div>
    );
}