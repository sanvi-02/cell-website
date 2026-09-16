"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/initiatives", label: "Initiatives" },
    { href: "/verticals", label: "Verticals" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Team" },
    { href: "/#Contact", label: "Contact Us" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section id="Navbar" className="w-full bg-white relative z-50">
            {/* The Figma overlay shows a width of 1280px and height of ~75px */}
            <div id="nav" className="max-w-86/100 mx-auto h-[75px] px-6 lg:px-8 flex justify-between items-center my-4 bg-[#FFFFFF1A] rounded-[20px]">

                {/* Logo Container */}
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <img
                        src="/logo_nav.svg"
                        alt="E-Cell Logo"
                        className="h-[43px] w-auto object-contain cursor-pointer"
                    />
                </Link>

                {/* Navigation Links */}
                <div id="options" className="hidden md:flex items-center gap-6 lg:gap-10 text-[#011A7F] font-[400] text-[18px]">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="cursor-pointer hover:text-blue-500 transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Hamburger Button */}
                <button
                    type="button"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="md:hidden flex flex-col items-center justify-center gap-[5px] w-[36px] h-[36px] cursor-pointer"
                >
                    <span className={`block h-[2px] w-[22px] bg-[#011A7F] transition-transform duration-300 ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
                    <span className={`block h-[2px] w-[22px] bg-[#011A7F] transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                    <span className={`block h-[2px] w-[22px] bg-[#011A7F] transition-transform duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
                </button>

            </div>

            {/* Mobile Menu Panel */}
            <div
                className={`md:hidden max-w-86/100 mx-auto overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] opacity-100 mb-4" : "max-h-0 opacity-0"}`}
            >
                <div className="flex flex-col items-start gap-2 px-6 py-4 bg-white rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] text-[#011A7F] font-[400] text-[18px]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="w-full py-2 cursor-pointer hover:text-blue-500 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}