const speakers = [
    {
        name: "SIDDHARTH MAHESHWARI",
        role: "Founder, Newton school",
        image: "/siddharth-maheshwari.png",
    },
    {
        name: "AMAN GUPTA",
        role: "CMO, boAt",
        image: "/aman-gupta.png",
    },
    {
        name: "ASHISH ARORA",
        role: "Founder, Physics Galaxy",
        image: "/ashish-arora.png",
    },
    {
        name: "A. VELUMANI",
        role: "Creator, Thyrocare",
        image: "/a-velumani.png",
    },
];

export default function PastSpeakers() {
    return (
        <section id="PastSpeakers" className="w-full bg-white px-8 md:px-16 lg:px-[7%] py-16 md:py-20 flex justify-center">
            <div className="relative w-full max-w-86/100">

                {/* Header */}
                <div className="flex items-end justify-between mb-16">
                    <div>
                        <p className="font-manrope font-[600] text-[16px]/[20px] tracking-[2px] text-[#011A7F] uppercase">
                            Past Speakers
                        </p>

                        <h2 className="mt-5 font-manrope font-[600] text-[48px]/[56px] md:text-[46px] leading-[1.05] tracking-[-1px] text-[#011A7F] max-w-[600px]">
                            Learn from the visionaries
                            <br />
                            shaping tomorrow.
                        </h2>
                    </div>

                    {/* Navigation */}
                    <div className="hidden md:flex items-center gap-4">
                        <button className="w-[42px] h-[42px] rounded-full border border-[#1111111A] flex items-center justify-center text-[#011A7F] hover:bg-[#F7F7F7] transition-colors">
                            <span className="text-[22px] leading-none">‹</span>
                        </button>

                        <button className="w-[42px] h-[42px] rounded-full border border-[#1111111A] flex items-center justify-center text-[#011A7F] hover:bg-[#F7F7F7] transition-colors">
                            <span className="text-[22px] leading-none">›</span>
                        </button>
                    </div>
                </div>

                {/* Speakers */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {speakers.map((speaker) => (
                        <div key={speaker.name} className="relative h-[400px] rounded-[16px] overflow-hidden group">
                            
                            {/* Image */}
                            <img src={speaker.image} alt={speaker.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                            {/* Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                            {/* Speaker Info */}
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                                <h3 className="font-manrope font-[500] text-[20px]/[25px] tracking-[0.5px] text-white uppercase">
                                    {speaker.name}
                                </h3>

                                <p className="mt-1 font-manrope font-[400] text-[14px]/[20px] text-white/70">
                                    {speaker.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Navigation */}
                <div className="flex md:hidden justify-end gap-3 mt-6">
                    <button className="w-[42px] h-[42px] rounded-full border border-[#1111111A] flex items-center justify-center text-[#011A7F]">
                        <span className="text-[22px] leading-none">‹</span>
                    </button>

                    <button className="w-[42px] h-[42px] rounded-full border border-[#1111111A] flex items-center justify-center text-[#011A7F]">
                        <span className="text-[22px] leading-none">›</span>
                    </button>
                </div>

            </div>
        </section>
    );
}