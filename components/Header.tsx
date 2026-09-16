"use client";

import React, { useState } from "react";
import LgLogo from "./lg.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#", active: false },
    { label: "Initiatives", href: "#", active: true },
    { label: "About Us", href: "#", active: false },
    { label: "Verticals", href: "#", active: false },
    { label: "Team", href: "#", active: false },
    { label: "Contact Us", href: "#", active: false },
  ];

  return (
    <section id="Navbar" className="w-full bg-white relative">
      {/* The Figma overlay shows a width of 1280px and height of ~75px */}
      <div
        id="nav"
        className="max-w-86/100 mx-auto h-[75px] px-6 lg:px-8 flex justify-between items-center my-4 bg-[#FFFFFF1A] rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-zinc-200/60 backdrop-blur-md"
      >
        {/* Logo Container */}
        <div>
          <a href="#" className="flex items-center">
            <img
              src="lg.png"
              alt="E-Cell Logo"
              className="h-[43px] w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = LgLogo.src;
              }}
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div
          id="options"
          className="hidden md:flex items-center gap-6 lg:gap-10 font-poppins font-[300] text-[18px] leading-[100%] tracking-normal text-[#011A7F]"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="cursor-pointer text-center hover:text-blue-500 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden max-w-86/100 mx-auto bg-white rounded-b-[20px] shadow-lg border border-zinc-100 px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-lg px-4 py-2 font-poppins font-[300] text-[18px] leading-[100%] text-[#011A7F] text-center hover:bg-blue-50 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </section>
  );
}
