import Link from "next/link";

export default function Navbar() {
    return (
        <section id="Navbar" className="w-full bg-white">
            {/* The Figma overlay shows a width of 1280px and height of ~75px */}
            <div id="nav" className="max-w-86/100 mx-auto h-[75px] px-6 lg:px-8 flex justify-between items-center my-4 bg-[#FFFFFF1A] rounded-[20px]"> 
                
                {/* Logo Container */}
                <Link href="/" className="flex items-center">
                    <img 
                        src="/logo_nav.svg" 
                        alt="E-Cell Logo" 
                        className="h-[43px] w-auto object-contain cursor-pointer" 
                    />
                </Link>
                
                {/* Navigation Links */}
                <div id="options" className="hidden md:flex items-center gap-6 lg:gap-10 text-[#011A7F] font-[400] text-[18px]">
                    <Link href="/" className="cursor-pointer hover:text-blue-500 transition-colors">Home</Link>
                    <Link href="/initiatives" className="cursor-pointer hover:text-blue-500 transition-colors">Initiatives</Link>
                    <Link href="/verticals" className="cursor-pointer hover:text-blue-500 transition-colors">Verticals</Link>
                    <Link href="/#About" className="cursor-pointer hover:text-blue-500 transition-colors">About Us</Link>
                    <Link href="/#Team" className="cursor-pointer hover:text-blue-500 transition-colors">Team</Link>
                    <Link href="/#Contact" className="cursor-pointer hover:text-blue-500 transition-colors">Contact Us</Link>
                </div>
                
            </div>
        </section>
    );
}