import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import InitiativesGrid from "@/components/InitiativesGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Initiatives | E-Cell IIT Roorkee",
  description: "Explore the initiatives organized by E-Cell IIT Roorkee to foster entrepreneurship.",
};

export default function InitiativesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900 font-sans antialiased">
      {/* Navigation Header from Home page */}
      <Navbar />

      {/* Main Content Section */}
      <main className="flex-1 bg-white">
        {/* Intro Banner Section */}
        <section className="mx-auto max-w-4xl px-6 pt-12 md:pt-16 pb-4 text-center">
          <h1 className="font-manrope font-semibold text-[40px] md:text-[48px] leading-[56px] tracking-normal text-center uppercase text-[#011A7F] flex items-center justify-center mx-auto">
            OUR INITIATIVES
          </h1>
          <p className="mt-6 md:mt-8 font-manrope font-normal text-[16px] md:text-[18px] leading-[28px] text-[#474747] max-w-[768px] w-full mx-auto text-center">
            We at E-Cell, IIT Roorkee believe that entrepreneurship is the key to
            India&apos;s development. To fulfill this vision, we have conceptualized and
            successfully implemented various initiatives to help students, young
            entrepreneurs, and professionals in their entrepreneurial journey.
          </p>
        </section>

        {/* Initiatives Grid Section */}
        <section className="bg-white">
          <InitiativesGrid />
        </section>
      </main>

      {/* Footer Section from Home page */}
      <Footer />
    </div>
  );
}
