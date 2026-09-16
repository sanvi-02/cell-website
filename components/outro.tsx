export default function Outro() {
    return (
        <section id="Outro" className="relative w-full overflow-hidden flex justify-center">
            <div className="relative w-full h-[600px] sm:h-[700px] md:h-[820px] lg:h-[925px] overflow-hidden">

                {/* Background Image */}
                <img src="/team.jpg" alt="E-Cell IIT Roorkee community" className="absolute top-[60px] sm:top-[90px] md:top-[120px] lg:top-[140px] inset-x-0 bottom-0 w-full h-full object-cover object-center" />

                {/* White Curved Top */}
                <div className="absolute top-0 left-[-10%] w-[120%] h-[350px] sm:h-[445px] md:h-[400px] lg:h-[420px] bg-white rounded-b-[50%] z-10" />

                {/* Content */}
                <div className="absolute top-6 md:top-[50px] left-1/2 -translate-x-1/2 w-full max-w-[850px] px-6 text-center z-20">

                    {/* Heading */}
                    <h2 className="font-manrope font-[500] text-[32px]/[36px] sm:text-[42px]/[46px] md:text-[54px]/[58px] lg:text-[56px]/[58px] tracking-[-1.5px] text-[#011A7F]">
                        Join our vibrant
                        <br />
                        startup community.
                    </h2>

                    {/* Description */}
                    <p className="mt-4 md:mt-10 font-manrope font-[400] text-[16px]/[24px] text-[#6B6B6B] max-w-[650px] mx-auto">
                        Connect with like-minded builders, get exclusive access to resources, mentorship,
                        <br className="hidden md:block" />
                        and be a part of the fastest-growing entrepreneurial ecosystem at IIT Roorkee.
                    </p>

                    {/* Email Form */}
                    <form className="mt-5 md:mt-9 mx-auto w-full max-w-[490px] h-[52px] rounded-full border border-[#1111111A] bg-white overflow-hidden flex items-center p-[5px]">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="appearance-none flex-1 min-w-0 w-full h-full px-3 sm:px-4 bg-transparent outline-none font-manrope text-[12px] sm:text-[13px] text-[#333] placeholder:text-[#888]"
                        />

                        <button type="submit" className="flex-shrink-0 h-full px-[16px] sm:px-[24px] rounded-full bg-[#011A7F] hover:bg-[#001566] text-white font-manrope font-[500] text-[12px] sm:text-[13px] flex items-center gap-1 sm:gap-2 transition-colors">
                            Submit
                            <span className="text-[14px] sm:text-[16px]">→</span>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}