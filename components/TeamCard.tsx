"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TeamMember } from "@/data/teamData";
import { XIcon, LinkedInIcon, MailIcon } from "./SocialIcons";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group [perspective:1000px] w-full h-[390px] cursor-pointer">
      <div className="relative w-full h-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-sm hover:shadow-xl">
        {/* ================= FRONT SIDE ================= */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-2xl border border-slate-100 p-3 flex flex-col justify-between">
          {/* Member Photo */}
          <div className="relative w-full h-[290px] rounded-xl overflow-hidden bg-slate-100">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>

          {/* Member Info */}
          <div className="px-1 pt-2 pb-1 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-blue-700 transition-colors">
                {member.name}
              </h3>
              <p className="text-sm text-slate-500 font-medium">
                {member.designation}
              </p>
            </div>
            <div className="mt-0.5 text-slate-400 group-hover:text-blue-600 transition-colors">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>

        {/* ================= BACK SIDE (Hover State) ================= */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#001766] rounded-2xl p-6 flex flex-col items-center justify-center text-center text-white border border-blue-900 shadow-2xl">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {member.name}
          </h3>
          <p className="text-lg text-slate-300 font-light mt-1 mb-8">
            {member.designation}
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3">
            {member.socials.twitter && (
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s Twitter / X`}
                className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 hover:bg-white/25 hover:border-white/40 flex items-center justify-center text-white transition-all transform hover:scale-105"
              >
                <XIcon className="w-5 h-5 fill-current" />
              </a>
            )}

            {member.socials.linkedin && (
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name}'s LinkedIn`}
                className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 hover:bg-white/25 hover:border-white/40 flex items-center justify-center text-white transition-all transform hover:scale-105"
              >
                <LinkedInIcon className="w-5 h-5 fill-current" />
              </a>
            )}

            {member.socials.email && (
              <a
                href={member.socials.email}
                aria-label={`Email ${member.name}`}
                className="w-11 h-11 rounded-xl bg-white/10 border border-white/20 hover:bg-white/25 hover:border-white/40 flex items-center justify-center text-white transition-all transform hover:scale-105"
              >
                <MailIcon className="w-5 h-5 fill-current" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
