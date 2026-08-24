import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  XIcon,
  InstagramIcon,
  LinkedInIcon,
  YouTubeIcon,
} from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-[#001454] text-white pt-16 pb-8 border-t border-blue-950 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          {/* Brand & Description Column */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="E-Cell IIT Roorkee"
                width={150}
                height={45}
                className="brightness-0 invert object-contain"
              />
            </div>
            <p className="text-slate-300 text-sm leading-relaxed pr-0 md:pr-6">
              The Entrepreneurship Cell of IIT Roorkee is a student-run
              organisation dedicated to fostering entrepreneurship by empowering
              students with mentorship, consultancy, and networking
              opportunities with alumni, entrepreneurs, and investors.
            </p>

            {/* Address */}
            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Address
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                E-Cell Office, SAC Building
                <br />
                IIT Roorkee
                <br />
                Roorkee, Uttarakhand - 247667
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/initiatives"
                  className="hover:text-white transition-colors"
                >
                  Initiatives
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts & Socials Column */}
          <div className="md:col-span-4 space-y-6 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Contacts
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>
                  <a
                    href="mailto:ecell@iitr.ac.in"
                    className="hover:text-white transition-colors"
                  >
                    ecell@iitr.ac.in
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917222996098"
                    className="hover:text-white transition-colors"
                  >
                    +91 7222996098
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-6 md:pt-0">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white text-[#001454] flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white text-[#001454] flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <XIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white text-[#001454] flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white text-[#001454] flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white text-[#001454] flex items-center justify-center hover:bg-slate-200 transition-colors"
              >
                <YouTubeIcon className="w-4 h-4 fill-current" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>Made with ❤️ by Design & Tech Team</p>
          <p className="hover:text-white cursor-pointer transition-colors">
            Terms of use/Privacy policy
          </p>
        </div>
      </div>
    </footer>
  );
}
