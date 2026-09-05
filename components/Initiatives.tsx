import Link from "next/link";

const initiatives = [
    {
        title: "E-Summit",
        category: "FLAGSHIP FESTIVAL",
        description:
            "The flagship entrepreneurial festival of IIT Roorkee. Three days of high-impact networking, pitching, and learning alongside founders, VCs, and innovators.",
        image: "/e-summit.png",
        number: "01",
    },
    {
        title: "E-School",
        category: "STARTUP ACCELERATOR",
        description:
            "A structured curriculum and mentorship track taking early-stage student founders from problem statement to validated MVP.",
        image: "/e-school.png",
        number: "02",
    },
    {
        title: "Pinnacle",
        category: "INNOVATION SPRINT",
        description:
            "The multi-stage national case-study and startup competition pitting top tier campus talent against real-world problem sets.",
        image: "/e-school.png",
        number: "03",
    },
    {
        title: "National Social Summit",
        category: "IMPACT CONCLAVE",
        description:
            "Centering ventures that solve for the next billion. Exploring deep technology and grassroots solutions across education, healthcare, and sustainability.",
        image: "/e-summit.png",
        number: "04",
    },
];

export default function Initiatives() {
    return (
        <section id="Initiatives" className="w-full bg-white px-8 md:px-16 lg:px-[7%] py-16 md:py-20 flex justify-center">
            <div className="relative w-full max-w-86/100">

                {/* Header */}
                <div className="flex items-start justify-between mb-8 md:mb-10">
                    <div>
                        <p className="font-manrope font-[600] text-[16px]/[20px] tracking-[2px] text-[#011A7F] uppercase">
                            Our Initiatives
                        </p>

                        <h2 className="mt-4 font-manrope font-[600] text-[48px]/[56px] md:text-[46px] leading-[1.05] text-[#011A7F]">
                            Initiatives that drive the
                            <br />
                            startup ecosystem.
                        </h2>
                    </div>

                    {/* View all button */}
                    <Link href="/initiatives" className="hidden md:block mt-1 px-[24px] py-[12px] rounded-[32px] border border-[#1111111A] font-manrope text-[16px]/[20px] text-[#474747] hover:bg-[#F7F7F7] transition-colors">
                        View All Initiatives
                    </Link>
                </div>

                {/* Initiative Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {initiatives.map((initiative, index) => (
                        <div key={index} className={`relative group h-[420px] md:h-[280px] rounded-[32px] overflow-hidden ${index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"}`} style={{ boxShadow: "0px 8px 10px -6px #0000001A, 0px 20px 25px -5px #0000001A" }}>
                            
                            <img src={initiative.image} alt={initiative.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

                            <span className="absolute right-4 bottom-[-28px] font-manrope font-[600] text-[150px] leading-none text-white/10 select-none">
                                {initiative.number}
                            </span>

                            <span className="absolute top-10 left-10 inline-flex px-[16px] py-[6px] rounded-full bg-[#00000033] backdrop-blur-sm border border-[#FFFFFF33] font-manrope text-[12px]/[16px] tracking-[0.5px] font-[500] text-white z-10">
                                {initiative.category}
                            </span>

                            <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 text-white">
                                <h3 className="font-manrope font-[600] text-[48px]/[48px] md:text-[32px] leading-none">
                                    {initiative.title}
                                </h3>

                                <p className="mt-4 max-w-[570px] font-manrope font-[400] text-[18px]/[29.25px] md:text-[13px] leading-[20px] text-white/80">
                                    {initiative.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View All */}
                <Link href="/initiatives" className="md:hidden mt-8 inline-block px-5 py-2.5 rounded-full border border-[#E5E5E5] font-manrope text-[11px] text-[#555] text-center">
                    View All Initiatives
                </Link>

            </div>
        </section>
    );
}