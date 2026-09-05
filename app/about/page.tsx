import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | E-Cell IIT Roorkee",
  description:
    "Learn more about the Entrepreneurship Cell of IIT Roorkee, our mission, vision, history, and initiatives.",
};

export default function AboutPage() {
  const pillars = [
    {
      title: "Connect",
      description:
        "Bridge the gap between ambitious student founders, seasoned alumni, and top venture capitalists to build lasting networks.",
      icon: "/connect.svg",
    },
    {
      title: "Inspire",
      description:
        "Spark the entrepreneurial spirit through high-impact summits, speaker sessions with unicorn founders, and hackathons.",
      icon: "/inspire.svg",
    },
    {
      title: "Guide",
      description:
        "Provide rigorous mentorship, incubation resources, and structured tracks taking early-stage ideas to market validation.",
      icon: "/guide.svg",
    },
  ];

  const stats = [
    { value: "2006", label: "Year Established" },
    { value: "30+", label: "Startups Incubated" },
    { value: "$10M+", label: "Funding Raised" },
    { value: "50,000+", label: "Community Reach" },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Homepage Navbar */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* ================= HERO SECTION ================= */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 pt-12 md:pt-20 pb-16">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-[#011A7F] font-manrope font-semibold text-xs md:text-sm uppercase tracking-[2px] mb-6">
              About E-Cell IIT Roorkee
            </span>
            <h1 className="font-manrope font-bold text-4xl sm:text-5xl lg:text-6xl text-[#011A7F] tracking-tight leading-[1.1]">
              Fostering a culture of innovation since 2006.
            </h1>
            <p className="mt-6 font-manrope text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              The Entrepreneurship Cell of IIT Roorkee is a student-run organisation dedicated
              to fostering entrepreneurship by empowering students with mentorship, consultancy,
              and networking opportunities with alumni, entrepreneurs, and investors.
            </p>
          </div>

          {/* Banner Image */}
          <div className="mt-12 md:mt-16 relative w-full h-[320px] sm:h-[420px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-xl">
            <Image
              src="/team.jpg"
              alt="E-Cell IIT Roorkee Team"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white max-w-lg">
              <p className="text-xs uppercase tracking-widest font-semibold text-blue-200">
                E-Cell IIT Roorkee
              </p>
              <h2 className="text-xl md:text-2xl font-bold font-manrope mt-1">
                The student body driving India&apos;s next generation of entrepreneurs.
              </h2>
            </div>
          </div>
        </section>

        {/* ================= STATS SECTION ================= */}
        <section className="w-full bg-[#001766] text-white py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="p-4">
                <p className="font-manrope font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm sm:text-base text-blue-200 font-manrope">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            {/* Mission Card */}
            <div className="p-8 md:p-12 rounded-[24px] bg-[#F7F9FD] border border-blue-100 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-[2px] text-[#011A7F]">
                  Our Mission
                </span>
                <h3 className="mt-4 font-manrope font-semibold text-2xl md:text-3xl text-[#011A7F]">
                  Ignite the entrepreneurial spark.
                </h3>
                <p className="mt-4 text-slate-600 font-manrope text-base leading-relaxed">
                  To instill a spirit of innovation and self-reliance among campus students by
                  providing a platform where curiosity meets execution. We strive to de-risk
                  early-stage entrepreneurship through direct access to mentors, capital, and real-world exposure.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-blue-200/60 flex items-center gap-2 text-sm font-semibold text-[#011A7F]">
                Learn more about our initiatives &rarr;
              </div>
            </div>

            {/* Vision Card */}
            <div className="p-8 md:p-12 rounded-[24px] bg-[#F7F9FD] border border-blue-100 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-[2px] text-[#011A7F]">
                  Our Vision
                </span>
                <h3 className="mt-4 font-manrope font-semibold text-2xl md:text-3xl text-[#011A7F]">
                  Building India&apos;s leading venture hub.
                </h3>
                <p className="mt-4 text-slate-600 font-manrope text-base leading-relaxed">
                  To position IIT Roorkee as a premier cradle of world-class startups solving
                  mission-critical challenges for India and the globe. We envision an ecosystem
                  where every transformative idea finds the guidance it needs to thrive.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-blue-200/60 flex items-center gap-2 text-sm font-semibold text-[#011A7F]">
                Explore our six verticals &rarr;
              </div>
            </div>
          </div>
        </section>

        {/* ================= THREE PILLARS ================= */}
        <section className="w-full bg-[#FAFCFF] py-20 px-6 lg:px-8 border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="font-manrope font-semibold text-xs md:text-sm uppercase tracking-[2px] text-[#011A7F]">
                Core Pillars
              </span>
              <h2 className="mt-3 font-manrope font-bold text-3xl sm:text-4xl text-[#011A7F]">
                How we empower founders.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-8 rounded-[20px] bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col items-start"
                >
                  <div className="w-16 h-16 rounded-[12px] bg-[#F0F3FF] flex items-center justify-center p-3 mb-6">
                    <img
                      src={pillar.icon}
                      alt={pillar.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-manrope font-bold text-xl text-[#06258F] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}
        <section className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-[#001766] to-[#011A7F] text-white p-10 md:p-14 rounded-[28px] shadow-xl">
            <h2 className="font-manrope font-bold text-3xl sm:text-4xl">
              Ready to take your idea to the next level?
            </h2>
            <p className="mt-4 text-blue-100 text-base md:text-lg max-w-xl mx-auto">
              Join our flagship events, apply for mentorship tracks, or connect with our team today.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/initiatives"
                className="px-6 py-3 rounded-full bg-white text-[#011A7F] font-semibold text-sm hover:bg-blue-50 transition-colors shadow-md"
              >
                Explore Initiatives
              </Link>
              <Link
                href="/team"
                className="px-6 py-3 rounded-full border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Homepage Footer */}
      <Footer />
    </div>
  );
}
