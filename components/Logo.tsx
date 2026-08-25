import React from "react";
import Image from "next/image";
import LogoImg from "./Logo Container.png";

interface LogoProps {
  lightBg?: boolean; // if true (header), text is dark; if false (footer), logo can be styled for dark bg
  className?: string;
}

export default function Logo({ lightBg = true, className = "" }: LogoProps) {
  return (
    <div 
      className={`flex items-center select-none ${className}`}
      style={{
        width: "96.87px",
        height: "43.16px",
      }}
    >
      <Image
        src={LogoImg}
        alt="E-Cell IIT Roorkee Logo"
        width={96.87}
        height={43.16}
        style={{
          width: "96.87px",
          height: "43.16px",
          objectFit: "contain",
        }}
        className={`transition-all duration-300 ${
          lightBg ? "" : "brightness-0 invert" // Shows clean white logo in footer
        }`}
        priority
      />
    </div>
  );
}
