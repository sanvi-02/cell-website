import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="mx-auto flex w-full max-w-[1281px] items-center justify-between gap-[26px] px-4 pt-[185px] pb-40">
      {/* Left: text block */}
      <div className="flex w-[519px] flex-col items-start -pt-20">
        <div className="flex w-[519px] flex-col items-start pb-[36.8px]">
          <h1 className="w-[519px] font-manrope text-[92px] font-bold leading-[98px] text-[#011A7F]">
            ABOUT <br />E-CELL IIT ROORKEE
          </h1>
        </div>
        <div className="flex w-[519px] max-w-[662.4px] flex-col items-start">
          <p className="w-[519px] font-manrope text-[23px] font-normal leading-[39px] text-[#474747]">
            Fostering entrepreneurship and innovation since 2006, empowering
            the next generation of builders and creators at IIT Roorkee.
          </p>
        </div>
      </div>

      {/* Right: image */}
      <div className="relative h-[463px] w-[694px] flex-none overflow-hidden rounded-[29px]">
        <Image
          src="/about-hero.jpg"
          alt="E-Cell IIT Roorkee"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}