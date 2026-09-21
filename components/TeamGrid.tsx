"use client";

import TeamCard from "./TeamCard";
import { TEAM_MEMBERS } from "@/data/teamData";

export default function TeamGrid() {
  return (
    <section className="w-full py-6">
      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {TEAM_MEMBERS.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
