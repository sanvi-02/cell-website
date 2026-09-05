export default function Intro() {
    return (
        <section
            id="Intro"
            className="bg-white py-6 px-4 md:px-12 flex justify-center"
        >
            <div
                className="relative max-w-86/100 rounded-[20px]
                bg-white min-h-[650px]
                flex items-center px-8 md:px-16 overflow-hidden"
            >

                {/* ================= LEFT CONTENT ================= */}
                <div className="relative z-20 w-full lg:w-[48%] py-12">

                    <span
                        className="tracking-[2px] uppercase font-manrope
                        font-[500] text-[14px] md:text-[16px]
                        text-[#08268F]"
                    >
                        ECELL
                    </span>

                    <h1
                        className="mt-4 font-manrope font-[600]
                        text-[48px]/[58px] md:text-[64px] lg:text-[72px]
                        leading-[0.95] tracking-[-2px]
                        text-[#011A7F]"
                    >
                        Fostering a culture of
                        innovation since
                        2006.
                    </h1>

                    <p
                        className="mt-8 font-manrope font-[400]
                        text-[20px]/[29.5px] md:text-[17px]
                        leading-[1.5] text-[#4B4B4B]
                        max-w-[520px]"
                    >
                        E-Cell IIT Roorkee is more than a student group it's
                        a launchpad for world-class startups. We connect
                        ambitious students with industry leaders, investors,
                        and alumni to turn breakthrough ideas into thriving
                        businesses.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-16 mt-10">

                        <div>
                            <h3
                                className="font-manrope font-[500]
                                text-[30px]/[36px] md:text-[32px] text-[#333]"
                            >
                                30+
                            </h3>

                            <p className="font-manrope text-[14px]/[20px] text-[#888]">
                                Startups Incubated
                            </p>
                        </div>

                        <div>
                            <h3
                                className="font-manrope font-[500]
                                text-[30px]/[36px] md:text-[32px] text-[#333]"
                            >
                                $10M+
                            </h3>

                            <p className="font-manrope text-[13px] text-[#888]">
                                Funding Raised
                            </p>
                        </div>

                    </div>
                </div>


                {/* ================= RIGHT VISUAL ================= */}
                <div
                    className="absolute right-0 top-0
                    hidden lg:block w-[52%] h-full"
                >

                    {/* Large grey background card */}
                    <div
                        className="absolute right-[6%] top-[5%]
                        w-[78%] h-[70%]
                        rounded-[22px]
                        bg-[#F5F5F5]
                        shadow-[0_20px_45px_rgba(0,0,0,0.08)]"
                    />

                    {/* Website preview IMAGE */}
                    <div
                        className="absolute z-10
                        right-[50%] bottom-[8%]
                        w-[48%]
                        rounded-[10px]
                        overflow-hidden
                        shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                    >
                        <img
                            src="/website_preview.png"
                            alt="E-Cell IIT Roorkee website preview"
                            className="block w-full h-auto"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}