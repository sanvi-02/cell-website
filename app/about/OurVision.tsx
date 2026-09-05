import Image from "next/image";

const cards = [
  {
    title: "OWNERSHIP",
    description:
      "We take end-to-end responsibility for our ventures from the first sketch to the first customer.",
    image: "/vision1.jpg",
  },
  {
    title: "INNOVATION",
    description:
      "We challenge convention and build what doesn't exist yet, redefining industries one idea at a time.",
    image: "/vision2.jpg",
  },
  {
    title: "COMMUNITY",
    description:
      "We grow together — mentors, founders, and dreamers who lift each other toward bigger outcomes.",
    image: "/vision3.jpg",
  },
  {
    title: "IMPACT",
    description:
      "We measure success by the ventures we launch and the change they create in the real world.",
    image: "/vision4.jpg",
  },
];

export default function OurVision() {
  return (
    <section className="mx-auto flex w-full max-w-[1276px] flex-col items-center gap-16 py-16">
      <h2 className="flex h-[98px] w-[376px] items-center justify-center font-manrope text-[64px] font-semibold uppercase leading-[98px] text-[#011A7F]">
        Our Vision
      </h2>

      <div className="flex w-full items-center gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group relative h-[460px] w-[304px] flex-none overflow-hidden rounded-[28px] bg-[#0A1633] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40"
          >
            {/* Background image */}
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg, #050B1F 0%, rgba(7,15,38,0.775) 25%, rgba(10,22,51,0.55) 50%, rgba(10,22,51,0) 100%)",
              }}
            />

            {/* Text content */}
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h3 className="font-manrope text-[24px] font-bold uppercase leading-[32px] text-white">
                {card.title}
              </h3>
              <p className="mt-2 w-[240px] font-manrope text-[16px] font-medium leading-[23px] tracking-[0.5px] text-white/80">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}