import React from "react";
import Image from "next/image";
import TextImg from "./Text.png";
import InitiativeIcon from "./InitiativeIcon";

export interface InitiativeItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  logo: unknown; // Dynamic logo image passed from parent
}

interface InitiativeCardProps {
  initiative: InitiativeItem;
}

export default function InitiativeCard({ initiative }: InitiativeCardProps) {
  return (
    <div className="group relative flex flex-col w-full max-w-[362px] min-[362px]:w-[362px] h-[366px] rounded-[16px] bg-[#0F2138] p-[8px] border border-blue-900/20 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/40 overflow-hidden">
      {/* Inner outline container matching padding: 8px and layout */}
      <div className="flex flex-col items-center justify-between w-full h-full border border-white/40 rounded-[12px] p-[20px] text-center z-10 transition-colors duration-300 group-hover:border-white/60">
        {/* Main card content */}
        <div className="flex flex-col items-center w-full">
          {/* Icon wrapper */}
          <div className="mb-4">
            <InitiativeIcon id={initiative.id} fallbackLogo={initiative.logo} />
          </div>

          {/* Title - Plus Jakarta Sans, Bold, 22px, 28px line-height, #FFFFFF */}
          <h3 className="font-plus-jakarta-sans font-bold text-[22px] leading-[28px] tracking-normal text-center text-white mb-1">
            {initiative.title}
          </h3>

          {/* Subtitle */}
          {initiative.subtitle && (
            <p className="font-manrope font-semibold text-[13px] leading-[18px] text-blue-400 text-center mb-2">
              {initiative.subtitle}
            </p>
          )}

          {/* Description - Manrope, Regular (400), 13.5px, 21px line-height, #B8C5DA */}
          <p className="font-manrope font-normal text-[13.5px] leading-[21px] tracking-normal text-center text-[#B8C5DA] max-w-[280px] w-full mx-auto">
            {initiative.description}
          </p>
        </div>

        <button className="w-[136.6px] h-[41.6px] rounded-[8px] border-[0.8px] border-white/60 bg-transparent flex items-center justify-center gap-[8px] py-[10px] px-[16px] text-white transition-all duration-300 hover:bg-white hover:border-white hover:shadow-lg hover:shadow-white/5 group/btn mt-2">
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
