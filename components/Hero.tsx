export default function Hero() {
    return (
        <section id="Hero" className="w-full bg-white py-6 px-4 md:px-12 flex justify-center">
            <div 
                className="relative w-full max-w-86/100 rounded-[20px] overflow-hidden bg-cover bg-center aspect-[16/9] md:aspect-[16/8] flex items-start p-8 md:p-16"
                style={{ backgroundImage: "url('/james_thomson.png')" }}
            >
                {/* Gradient overlay to ensure text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#ffffffb9] via-blue-900/30 to-transparent pointer-events-none" />

                <div className="relative z-10 text-white space-y-4 md:space-y-6">
                    <span className="tracking-wider uppercase font-manrope font-[500] text-[18px]/[26px]">
                        E-CELL IIT ROORKEE
                    </span>
                    
                    <h1 className="font-manrope font-[600] text-[72px]/[68.4px] tracking-[-1.8px]">
                        Where Ideas <br />
                        Become Impact.
                    </h1>

                    <p className="font-manrope font-[500] text-[16px]/[26px] tracking-[1px] max-w-[600px]">
                        Empowering the next generation of entrepreneurs through ideas,
                        innovation, and a thriving startup ecosystem.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 md:gap-4 pt-2">
                        <button className="bg-[#011A7F] hover:bg-blue-950 text-white font-medium text-xs pr-[32px] pl-[32px] pt-[16px] pb-[16px] rounded-[79px] flex items-center gap-2 transition-colors font-manrope font-[500] text-[18px]/[24px]">
                            Explore E-Cell
                            <span>&rarr;</span>
                        </button>

                        <button className="bg-[#FFFFFF5C] hover:bg-white text-gray-900 font-medium text-xs md:text-sm px-[32px] py-[16px] md:px-6 md:py-3 rounded-[57px] transition-colors">
                            Our Initiatives
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}