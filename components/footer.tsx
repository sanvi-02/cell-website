"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
    FaYoutube
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer
                id="contact"
                className="relative px-6 pb-10 pt-14 text-white sm:px-10 lg:px-[60px] lg:pt-[60px]"
                style={{
                    background:
                        "linear-gradient(95.1deg, #002575 -6%, #000209 103.49%), linear-gradient(0deg, rgba(1, 26, 127, 0.61), rgba(1, 26, 127, 0.61))",
                }}
            >
                <div className="absolute inset-0 z-0 bg-[#011A7F]/[61%] pointer-events-none" />
                <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-col gap-12 lg:gap-[48px]">
                    {/* About + links row */}
                    <div className="flex flex-col gap-16 border-b-[0.4px] border-white pb-10 md:gap-24 lg:flex-row lg:justify-between lg:gap-[224px] lg:pb-12">
                        {/* About Content */}
                        <div className="flex w-full flex-col gap-8 lg:w-[548px] lg:gap-[96px]">
                            <div className="flex flex-col gap-12 lg:gap-12">
                                <Link href="/">
                                    <img
                                        src="/verticals/cell-footer-logo.png"
                                        alt="E-Cell footer Logo"
                                        className="h-11 w-28"
                                    />
                                </Link>

                                <p className="max-w-[370px] text-[16px] font-normal leading-relaxed text-white">
                                    The Entrepreneurship Cell of IIT Roorkee is a student-run organization dedicated to fostering entrepreneurship by empowering students with mentorship, consultancy and networking opportunities.
                                </p>
                            </div>
                            <p className="text-[15px] leading-relaxed font-normal lg:gap-4 text-white">
                                <span className="font-medium text-[16px] text-white">ADDRESS</span>
                                <br />
                                E-Cell, IIT Roorkee
                                <br />
                                Roorkee, Uttarakhand - 247667
                            </p>
                        </div>

                        <div className="flex w-full flex-col gap-10 lg:w-[548px] lg:gap-[113px]">
                            <div className="flex flex-wrap justify-between gap-10 sm:gap-6">
                                <div className="flex flex-col gap-4 lg:w-[106px] lg:gap-8">
                                    <p className="text-[16px] font-bold uppercase tracking-widest text-white">Explore</p>
                                    <div className="flex flex-col space-y-3 text-[16px] text-white">
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
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 lg:gap-8">
                                    <p className="text-[16px] font-bold uppercase tracking-widest text-white">Contacts</p>
                                    <p className="text-[16px] leading-6 text-white">hello@ecell.in<br />+91 7222996098</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <div className="flex gap-4">
                                    {[
                                        { Icon: FaFacebook, link: "https://www.facebook.com/ECellDomsIitRoorkee/" },
                                        { Icon: FaInstagram, link: "https://www.instagram.com/ecelliitr/?hl=en" },
                                        { Icon: FaTwitter, link: "https://x.com/ecell_iitr" },
                                        { Icon: FaLinkedin, link: "https://www.linkedin.com/company/ecelliitr/?originalSubdomain=in" },
                                        { Icon: FaYoutube, link: "https://www.youtube.com/channel/UCnbXsB-qIQUMWsVRzzKB4Cg" },
                                    ].map(({ Icon, link }) => (
                                        <a
                                            key={link}
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="rounded-full bg-white p-1.5 text-[#082180] transition-transform hover:-translate-y-1"
                                        >
                                            <Icon className="h-3 w-3" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="flex flex-col gap-3 text-[16px] text-white sm:flex-row sm:items-center sm:justify-between">
                        <span>Made with ❤️ by E-Cell Design & Tech Team</span>
                        <span>Terms of use · Privacy policy</span>
                    </div>
                </div>
            </footer>
    );
}