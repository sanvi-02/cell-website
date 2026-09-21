import React from "react";
import Image from "next/image";
import Group57Img from "./Group 57.png";
import FacebookIcon from "./facebook (2).png";
import TwitterIcon from "./Twitter.png";
import InstagramIcon from "./Instagram.png";
import LinkedinIcon from "./LinkedIN.png";
import YoutubeIcon from "./Youtube.png";

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
      iconSrc: FacebookIcon,
    },
    {
      id: "twitter",
      href: "#",
      iconSrc: TwitterIcon,
    },
    {
      id: "instagram",
      href: "#",
      iconSrc: InstagramIcon,
    },
    {
      id: "linkedin",
      href: "#",
      iconSrc: LinkedinIcon,
    },
    {
      id: "youtube",
      href: "#",
      iconSrc: YoutubeIcon,
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
          <div className="flex items-center gap-[5px] self-start md:self-auto">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="flex h-11 w-11 items-center justify-center rounded-full hover:scale-105 transition-all duration-300 shadow-md"
                aria-label={`Visit E-Cell IIT Roorkee on ${social.id}`}
              >
                <Image
                  src={social.iconSrc}
                  alt={`${social.id} logo`}
                  width={22}
                  height={22}
                  style={{ width: "32px", height: "32.45px", objectFit: "contain" }}
                />
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
