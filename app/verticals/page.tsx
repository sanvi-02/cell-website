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
import SideCard from "@/components/sideCard";
import StackCard from "@/components/stackCard";
import VerticalsHero from "@/components/VerticalsHero";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function App() {
    return (
        <main className="min-h-screen bg-[#fafafa] text-[#0b1d68] selection:bg-[#0e2c9d] selection:text-white">
            <Navbar />
            <VerticalsHero />
            <Footer />
            
        </main>

    );
}