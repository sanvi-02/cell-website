import React from "react";
import Image from "next/image";
import Logo from "./Logo";
import Group57Img from "./Group 57.png";

export default function Footer() {
  const exploreLinks = [
    { label: "Home", href: "#" },
    { label: "Initiatives", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Team", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  const socialLinks = [
    {
      id: "facebook",
      href: "#",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      id: "twitter",
      href: "#",
      icon: (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
    },
    {
      id: "instagram",
      href: "#",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
    },
    {
      id: "linkedin",
      href: "#",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      id: "youtube",
      href: "#",
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.507 9.388.507 9.388.507s7.518 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer 
      className="text-white pt-[60px] pb-[40px] px-4 md:px-[60px] min-h-[625px] flex flex-col justify-between items-center w-full"
      style={{
        background: "linear-gradient(rgba(1, 26, 127, 0.61), rgba(1, 26, 127, 0.61)), linear-gradient(90deg, #002575, #000209)"
      }}
    >
      {/* Footer Content Wrapper - Max-width 1440px with a vertical gap of 48px */}
      <div className="mx-auto max-w-[1440px] w-full flex flex-col gap-[48px]">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 w-full">
          {/* Brand/About Section (Left) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="relative w-[111.65px] h-[44px] flex items-center justify-start select-none">
              <Image
                src={Group57Img}
                alt="E-Cell IIT Roorkee Logo"
                width={111.65}
                height={44}
                style={{ width: "111.65px", height: "44px", objectFit: "contain", objectPosition: "left" }}
                priority
              />
            </div>
            <p className="text-[16px] leading-[24px] text-zinc-100/90 font-manrope max-w-[450px]">
              The Entrepreneurship Cell of IIT Roorkee is a student-run organisation
              dedicated to fostering entrepreneurship by empowering students with
              mentorship, consultancy, and networking opportunities with alumni,
              entrepreneurs, and investors.
            </p>
          </div>

          {/* Quick Links Sections (Right) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 md:pl-16">
            {/* Explore column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-manrope font-normal text-[16px] leading-[24px] tracking-normal text-white uppercase">
                EXPLORE
              </h3>
              <ul className="flex flex-col gap-3 font-manrope text-[14px]">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-zinc-200 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts column */}
            <div className="flex flex-col gap-4">
              <h3 className="font-manrope font-normal text-[16px] leading-[24px] tracking-normal text-white uppercase">
                CONTACTS
              </h3>
              <ul className="flex flex-col gap-3 font-manrope text-[14px] text-zinc-200">
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
                    +917222996098
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Address and Social Media Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          {/* Address on Left */}
          <div className="flex flex-col gap-2">
            <h3 className="font-manrope font-medium text-[16px] leading-[24px] tracking-normal text-white uppercase">
              ADDRESS
            </h3>
            <p className="text-[15px] leading-[24px] text-white font-manrope font-normal max-w-[548px] w-full">
              E-Cell Office, SAC Building
              <br />
              IIT Roorkee
              <br />
              Roorkee, Uttarakhand - 247667
            </p>
          </div>

          {/* Social Links on Right */}
          <div className="flex items-center gap-[12px] self-start md:self-auto">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#002575] hover:bg-zinc-200 hover:scale-105 transition-all duration-300 shadow-md"
                aria-label={`Visit E-Cell IIT Roorkee on ${social.id}`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider and Bottom meta section */}
        <div className="flex flex-col gap-6 w-full">
          <div className="border-t-[1.5px] border-white/30 w-full" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[16px] leading-[24px] text-white font-manrope font-normal">
            <span>Made with ❤️ by Design & Tech Team</span>
            <div>
              <a href="#" className="hover:text-zinc-200 transition-colors">
                Terms of use/Privacy policy
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
