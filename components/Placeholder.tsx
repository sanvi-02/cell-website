import { Card } from "./stackCard";

export default function Placeholder({ card, featured = false }: { card: Card; featured?: boolean }) {
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