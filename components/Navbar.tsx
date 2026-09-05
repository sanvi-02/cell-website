export default function Navbar() {
    return (
        <section id="Navbar" className="w-full bg-white">
            {/* The Figma overlay shows a width of 1280px and height of ~75px */}
            <div id="nav" className="max-w-86/100 mx-auto h-[75px] px-6 lg:px-8 flex justify-between items-center my-4 bg-[#FFFFFF1A] rounded-[20px]"> 
                
                {/* Logo Container */}
                <div>
                    <img 
                        src="logo_nav.svg" 
                        alt="E-Cell Logo" 
                        className="h-[43px] w-auto object-contain" 
                    />
                </div>
                
                {/* Navigation Links */}
                <div id="options" className="hidden md:flex items-center gap-6 lg:gap-10 text-[#011A7F] font-[400] text-[18px]">
                    <div className="cursor-pointer hover:text-blue-500 transition-colors">Home</div>
                    <div className="cursor-pointer hover:text-blue-500 transition-colors">Initiatives</div>
                    <div className="cursor-pointer hover:text-blue-500 transition-colors">About Us</div>
                    <div className="cursor-pointer hover:text-blue-500 transition-colors">Verticals</div>
                    <div className="cursor-pointer hover:text-blue-500 transition-colors">Team</div>
                    <div className="cursor-pointer hover:text-blue-500 transition-colors">Contact Us</div>
                </div>
                
            </div>
        </section>
    );
}