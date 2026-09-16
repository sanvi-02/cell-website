import React from "react";
import Image from "next/image";
import ContainerImg from "./Container.png";

interface InitiativeIconProps {
  id: string;
  fallbackLogo?: any;
}

export default function InitiativeIcon({ id, fallbackLogo }: InitiativeIconProps) {
  switch (id) {
    case "events":
      return (
        <div className="w-14 h-14 rounded-full bg-blue-500/15 border border-blue-400/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {/* Calendar Event Icon */}
          <svg className="w-7 h-7 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zM14.25 12h.008v.008H14.25V12zm0 3h.008v.008H14.25V15zm0 2.25h.008v.008H14.25v-.008zM16.5 12h.008v.008H16.5V12zm0 3h.008v.008H16.5V15z" />
          </svg>
        </div>
      );

    case "startup-launchpad":
      return (
        <div className="w-14 h-14 rounded-full bg-indigo-500/15 border border-indigo-400/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {/* Rocket Launch Icon */}
          <svg className="w-7 h-7 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.24a9.043 9.043 0 01-.225-1.528c0-.663.076-1.307.225-1.528m4.945 4.945c.221.149.465.225 1.528.225.663 0 1.307-.076 1.528-.225" />
          </svg>
        </div>
      );

    case "zero-to-one":
      return (
        <div className="w-14 h-14 rounded-full bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {/* 0 -> 1 Innovation Arrow Icon */}
          <svg className="w-7 h-7 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 005.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>
        </div>
      );

    case "marketing-outreach":
      return (
        <div className="w-14 h-14 rounded-full bg-sky-500/15 border border-sky-400/30 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {/* Bar Chart Icon matching attached user image */}
          <div className="flex items-end gap-1.5 h-6">
            <div className="w-1.5 h-3 bg-sky-200/80 rounded-full" />
            <div className="w-1.5 h-6 bg-white rounded-full" />
            <div className="w-1.5 h-4 bg-sky-300 rounded-full" />
            <div className="w-1.5 h-5 bg-sky-100/90 rounded-full" />
          </div>
        </div>
      );

    case "e-summit":
      return (
        <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
          {/* Official E-Summit Blue Circular Logo */}
          <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="esummitLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#009BF2" />
                <stop offset="100%" stopColor="#0048CE" />
              </linearGradient>
              <mask id="esummitLogoMask">
                <circle cx="50" cy="50" r="48" fill="white" />
                {/* Top diagonal slash cutout */}
                <rect x="38" y="24" width="56" height="7" rx="3.5" transform="rotate(-18 38 24)" fill="black" />
                {/* Bottom diagonal slash cutout */}
                <rect x="6" y="69" width="56" height="7" rx="3.5" transform="rotate(-18 6 69)" fill="black" />
              </mask>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#esummitLogoGrad)" mask="url(#esummitLogoMask)" />
          </svg>
        </div>
      );

    default:
      if (fallbackLogo) {
        return (
          <div className="w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Image src={fallbackLogo} alt="Initiative Icon" width={56} height={56} style={{ width: "56px", height: "56px", objectFit: "contain" }} />
          </div>
        );
      }
      return null;
  }
}
