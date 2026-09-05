import React from "react";
import Image from "next/image";
import TextImg from "./Text.png";

export interface InitiativeItem {
  id: string;
  title: string;
  description: string;
  logo: any; // Dynamic logo image passed from parent
}

interface InitiativeCardProps {
  initiative: InitiativeItem;
}

export default function InitiativeCard({ initiative }: InitiativeCardProps) {
  return (
    <div className="group relative flex flex-col w-full max-w-[362px] min-[362px]:w-[362px] h-[366px] rounded-[16px] bg-[#0F2138] p-[8px] border border-blue-900/20 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 hover:shadow-[0_12px_30px_rgba(59,130,246,0.15)] overflow-hidden">
      {/* Decorative background glow on hover */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-blue-600/10 blur-3xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />

      {/* Inner outline container matching padding: 8px and layout */}
      <div className="flex flex-col items-center justify-between w-full h-full border border-white/40 rounded-[12px] p-[24px] text-center z-10 transition-colors duration-300 group-hover:border-white/60">
        {/* Main card content */}
        <div className="flex flex-col items-center w-full">
          {/* Icon wrapper - 64x64, no extra boundaries/backgrounds */}
          <div className="w-16 h-16 mb-6 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
            <Image
              src={initiative.logo}
              alt={`${initiative.title} Icon`}
              width={64}
              height={64}
              style={{ width: "64px", height: "64px", objectFit: "contain" }}
              priority
            />
          </div>

          {/* Title - Plus Jakarta Sans, Bold, 24px, 32px line-height, #FFFFFF */}
          <h3 className="font-plus-jakarta-sans font-bold text-[24px] leading-[32px] tracking-normal text-center text-white mb-3">
            {initiative.title}
          </h3>

          {/* Description - Manrope, Regular (400), 14px, 22.75px line-height, #B8C5DA, max-width 276px */}
          <p className="font-manrope font-normal text-[14px] leading-[22.75px] tracking-normal text-center text-[#B8C5DA] max-w-[276px] w-full mx-auto">
            {initiative.description}
          </p>
        </div>

        <button className="w-[136.6px] h-[41.6px] rounded-[8px] border-[0.8px] border-white/60 bg-transparent flex items-center justify-center gap-[8px] py-[10px] px-[16px] text-white transition-all duration-300 hover:bg-white hover:border-white hover:shadow-lg hover:shadow-white/5 group/btn">
          <span className="font-manrope font-bold text-[14px] leading-[20px] tracking-normal text-center text-white group-hover/btn:text-[#0F2138] transition-colors duration-300">
            Know More
          </span>
          <Image
            src={TextImg}
            alt="arrow"
            width={20}
            height={20}
            style={{ width: "20px", height: "20px", objectFit: "contain" }}
            className="transition-transform duration-300 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </div>
  );
}
