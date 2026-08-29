"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="mx-auto flex max-w-[1180px] items-center rounded-b-lg bg-[#FFFFFF1A] justify-between px-6 py-4 md:px-10">
            <Link href="/">
                <img
                    src="/verticals/logo_nav.svg"
                    alt="E-Cell Logo"
                    className="h-11 w-24"
                />
            </Link>
            <nav className="hidden items-center gap-6 text-[16px] font-medium text-[#011A7F] md:flex">
                {[
                    { name: "Home", href: "/" },
                    { name: "Initiatives", href: "/initiatives" },
                    { name: "About Us", href: "/about" },
                    { name: "Verticals", href: "/verticals" },
                    { name: "Team", href: "/team" },
                ].map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className="transition-colors hover:text-[#0d43bf]"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </header>
    );
}