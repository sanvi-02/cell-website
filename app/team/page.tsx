import Navbar from "@/components/Navbar";
import TeamGrid from "@/components/TeamGrid";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Team | E-Cell IIT Roorkee",
  description:
    "Meet the dedicated team of thinkers, builders, and creators fostering innovation and entrepreneurship at IIT Roorkee.",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001766] tracking-tight leading-tight">
            Meet the team behind the ecosystem.
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            A dedicated group of thinkers, builders, and creators working
            tirelessly to foster innovation and entrepreneurship at IIT Roorkee.
          </p>
        </div>

        {/* Team Grid Section */}
        <TeamGrid />
      </main>

      <Footer />
    </div>
  );
}
