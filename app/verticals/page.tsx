"use client";

import Navbar from "@/components/Navbar";
import VerticalsHero from "@/components/VerticalsHero";
import Footer from "@/components/Footer";

export default function VerticalsPage() {
    return (
        <main className="min-h-screen bg-[#fafafa] text-[#0b1d68] selection:bg-[#0e2c9d] selection:text-white">
            <Navbar />
            <VerticalsHero />
            <Footer />
        </main>
    );
}