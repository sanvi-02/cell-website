"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Initiatives", href: "/initiatives" },
  { name: "About Us", href: "/about" },
  { name: "Verticals", href: "/verticals" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-6 pb-2 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto">
      {/* Floating Pill Container */}
      <div className="bg-[#F8F9FA]/95 backdrop-blur-md rounded-2xl md:rounded-[24px] border border-slate-200/60 shadow-xs px-6 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between transition-all">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative flex items-center h-8 sm:h-9">
            <Image
              src="/logo.png"
              alt="E-Cell IIT Roorkee"
              width={160}
              height={45}
              className="object-contain w-auto h-7 sm:h-8"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#001766] py-1 ${
                  isActive
                    ? "text-[#001766] font-semibold"
                    : "text-[#233876]/85 hover:text-[#001766]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#233876] hover:bg-slate-200/50 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-[#F8F9FA] rounded-2xl border border-slate-200/80 p-4 space-y-2 shadow-lg">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                  isActive
                    ? "bg-[#001766] text-white font-semibold"
                    : "text-[#233876] hover:bg-slate-200/60"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
