export default function Footer() {
    return (
        <footer id="Footer" className="w-full bg-[linear-gradient(90deg,#002575_0%,#011A7F_61%,#000209_100%)] text-white px-8 md:px-16 lg:px-[7%] pt-12 md:pt-14 pb-6">
            <div className="w-full max-w-[1440px] mx-auto">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

                    {/* Brand + Description */}
                    <div className="md:col-span-6 lg:col-span-6">
                        <div className="flex items-center gap-3">
                            <img src="/Logo_footer.svg" />
                            {/* <div className="flex items-center justify-center w-9 h-9">
                                <span className="text-[30px] leading-none font-bold text-[#00A8FF]">◆</span>
                            </div>

                            <div>
                                <h2 className="font-manrope font-[600] text-[20px] leading-[20px]">E-Cell</h2>
                                <p className="font-manrope text-[7px] tracking-[1px] leading-[10px]">IIT ROORKEE</p>
                            </div> */}
                        </div>

                        <p className="mt-8 max-w-[430px] font-manrope font-[400] text-[16px]/[24px] leading-[20px] text-white/90">
                            The Entrepreneurship Cell of IIT Roorkee is a student-run organisation dedicated to fostering entrepreneurship by empowering students with mentorship, consultancy, and networking opportunities with alumni, entrepreneurs, and investors.
                        </p>

                        {/* Address */}
                        <div className="mt-12">
                            <p className="font-manrope font-[500] text-[16px]/[24px] uppercase">Address</p>

                            <p className="mt-4 font-manrope font-[400] text-[15px] leading-[18px] text-white/90">
                                E-Cell Office, SAC Building
                                <br />
                                IIT Roorkee
                                <br />
                                Roorkee, Uttarakhand - 247667
                            </p>
                        </div>
                    </div>

                    {/* Explore */}
                    <div className="md:col-span-3 lg:col-span-3">
                        <h3 className="font-manrope font-[500] text-[16px]/[24px] uppercase">Explore</h3>

                        <div className="mt-6 flex flex-col gap-4">
                            <a href="#Home" className="font-manrope text-[16px]/[24px] text-white/90 hover:text-white transition-colors">Home</a>
                            <a href="#Initiatives" className="font-manrope text-[16px]/[24px] text-white/90 hover:text-white transition-colors">Initiatives</a>
                            <a href="#About" className="font-manrope text-[16px]/[24px] text-white/90 hover:text-white transition-colors">About Us</a>
                            <a href="#Team" className="font-manrope text-[16px]/[24px] text-white/90 hover:text-white transition-colors">Team</a>
                            <a href="#Contact" className="font-manrope text-[16px]/[24px] text-white/90 hover:text-white transition-colors">Contact Us</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-3 lg:col-span-3 flex flex-col justify-between">
                        <div>
                            <h3 className="font-manrope font-[500] text-[16px]/[24px] uppercase">Contacts</h3>

                            <div className="mt-6 flex flex-col gap-4">
                                <a href="mailto:ecell@iitr.ac.in" className="font-manrope text-[16px]/[24px] text-white/90 hover:text-white transition-colors">ecell@iitr.ac.in</a>
                                <a href="tel:+917222996098" className="font-manrope text-[16px]/[24px] text-white/90 hover:text-white transition-colors">+91 7222996098</a>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-10 flex items-center gap-3 md:justify-end">
                            <a href="#" aria-label="Facebook" className="w-[32px] h-auto rounded-full flex items-center justify-center text-[#061B80] font-bold text-[13px] hover:scale-105 transition-transform"><img src="/Facebook.svg"/></a>
                            <a href="#" aria-label="Twitter" className="w-[32px] h-auto  rounded-full flex items-center justify-center text-[#061B80] font-bold text-[11px] hover:scale-105 transition-transform"><img src="/Twitter.svg"/></a>
                            <a href="#" aria-label="Instagram" className="w-[32px] h-auto  rounded-ful flex items-center justify-center text-[#061B80] font-bold text-[11px] hover:scale-105 transition-transform"><img src="/Instagram.svg"/></a>
                            <a href="#" aria-label="LinkedIn" className="w-[32px] h-auto rounded-full flex items-center justify-center text-[#061B80] font-bold text-[10px] hover:scale-105 transition-transform"><img src="/LinkedIN.svg"/></a>
                            <a href="#" aria-label="YouTube" className="w-[32px] h-auto  rounded-full flex items-center justify-center text-[#061B80] font-bold text-[9px] hover:scale-105 transition-transform"><img src="/Youtube.svg"/></a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/30 mt-12 md:mt-14"></div>

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6">
                    <p className="font-manrope text-[16px]/[24px] text-white/90">
                        Made with ❤️ by Design & Tech Team
                    </p>

                    <p className="font-manrope text-[16px]/[24px] text-white/90">
                        Terms of use/Privacy policy
                    </p>
                </div>

            </div>
        </footer>
    );
}