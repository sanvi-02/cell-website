import Image from "next/image";

const timeline = [
  {
    year: "2006",
    title: "THE INCEPTION",
    desc: "Entrepreneurship Cell, IIT Roorkee was founded with a vision to cultivate an entrepreneurial spirit among students and foster a culture of innovation.",
    image: "/history1.png",
    side: "left",
  },
  {
    year: "2012",
    title: "FIRST E-SUMMIT",
    desc: "The inaugural Entrepreneurship Summit was launched, bringing together industry leaders, investors, and students on a single platform to discuss the future of startups.",
    image: "/history2.png",
    side: "right",
  },
  {
    year: "2018",
    title: "EXPANDING THE ECOSYSTEM",
    desc: "E-Cell expanded its initiatives and outreach, creating more opportunities for students to explore entrepreneurship.",
    image: "/history3.png",
    side: "left",
  },
  {
    year: "2022",
    title: "BUILDING NEW COMMUNITIES",
    desc: "New programs, collaborations and initiatives strengthened the entrepreneurial ecosystem at IIT Roorkee.",
    image: "/history4.png",
    side: "right",
  },
  {
    year: "2026",
    title: "THE NEXT CHAPTER",
    desc: "E-Cell continues to build, create and enable entrepreneurship through its growing ecosystem of students, founders and innovations.",
    image: "/history5.png",
    side: "left",
  },
] as const;

function TextBlock({
  year,
  title,
  desc,
  side,
}: {
  year: string;
  title: string;
  desc: string;
  side: "left" | "right";
}) {
  const alignClass =
    side === "left" ? "items-end text-right" : "items-start text-left";

  const yearPositionClass =
    side === "left"
      ? "left-[141px] text-right"
      : "right-[141px] text-left";

  return (
    <div className={`relative flex w-[452.67px] flex-col gap-4 ${alignClass}`}>
      {/* Big background year number */}
      <span
        className={`pointer-events-none absolute -top-[129px] w-[312px] select-none font-manrope text-[120px] font-extrabold leading-[120px] text-[#0058BC40] ${yearPositionClass}`}
      >
        {year}
      </span>

      <h3
        className={`relative w-[398px] font-manrope text-[40px] font-bold uppercase leading-[48px] text-black ${
          side === "left" ? "text-right" : "text-left"
        }`}
      >
        {title}
      </h3>
      <p
        className={`relative w-[427.78px] font-work-sans text-[16px] font-normal leading-[25.6px] text-[#44474D] ${
          side === "left" ? "text-right" : "text-left"
        }`}
      >
        {desc}
      </p>
    </div>
  );
}
export default function OurHistory() {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-20 py-[120px]">
      {/* Header */}
      <div className="mx-auto flex w-[1120px] max-w-full flex-col items-center gap-4">
        <h2 className="flex h-[88px] w-full items-center justify-center text-center font-manrope text-[80px] font-extrabold leading-[88px] tracking-[-1.6px]">
          <span className="text-black mr-3">OUR </span>
          <span className="text-[#011A7F]">HISTORY</span>
        </h2>
        <div className="flex w-[672px] max-w-full flex-col items-center pt-2">
          <p className="text-center font-manrope text-[20px] font-normal leading-[34px] text-[#474747]">
            From a student initiative to a growing entrepreneurial ecosystem,
            our journey has evolved with every generation.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative mt-24 flex flex-col">
        {/* Center vertical line */}
        <div className="absolute inset-0 left-1/2 h-full w-[2px] -translate-x-1/2">
          <Image src="/cl.png" alt="" fill className="object-cover" />
        </div>

        {timeline.map((item) => {
          const textLeft = item.side === "left";

          return (
            <div
              key={item.year}
              className={`relative flex items-center justify-between py-16 px-4 ${
                textLeft ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <TextBlock
                year={item.year}
                title={item.title}
                desc={item.desc}
                side={item.side}
              />

              {/* Spot point on the center line */}
              <Image
                src="/sPoint.png"
                alt=""
                width={20}
                height={20}
                className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
              />

              <div className="relative h-[339.5px] w-[452.67px] overflow-hidden rounded-[8px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}