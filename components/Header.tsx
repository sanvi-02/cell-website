"use client";

import React, { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#", active: false },
    { label: "Initiatives", href: "#", active: true },
    { label: "About Us", href: "#", active: false },
    { label: "Verticals", href: "#", active: false },
    { label: "Team", href: "#", active: false },
  ];

  return (
    <div className="relative mt-[16px] w-full px-4 md:px-8">
      <header className="mx-auto max-w-[1280px] w-full bg-white/95 backdrop-blur-md border border-zinc-200/60 rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300">
        <div className="flex items-center justify-between py-[16px] px-[24px]">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="transition-transform duration-200 hover:scale-[1.02]">
              <Logo lightBg={true} />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-[24px]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-poppins text-[18px] leading-none transition-colors duration-300 ${
                  item.active
                    ? "text-[#011A7F] font-normal"
                    : "text-[#2d3b66] font-normal hover:text-[#011A7F]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                // Close Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-[300px] border-t border-zinc-100 bg-white rounded-b-[20px]" : "max-h-0"
          }`}
        >
          <div className="space-y-1.5 px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-4 py-2.5 text-base font-semibold transition-all ${
                  item.active
                    ? "bg-blue-50 text-blue-700"
                    : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}
