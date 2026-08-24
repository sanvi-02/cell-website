"use client";

import { useState } from "react";
import TeamCard from "./TeamCard";
import { TEAM_MEMBERS, VERTICALS, VerticalType } from "@/data/teamData";

export default function TeamGrid() {
  const [selectedVertical, setSelectedVertical] = useState<VerticalType>("All");

  const filteredMembers =
    selectedVertical === "All"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((m) => m.vertical === selectedVertical);

  return (
    <section className="w-full py-6">
      {/* Category Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2 mb-12 max-w-4xl mx-auto px-4">
        {VERTICALS.map((vertical) => {
          const isActive = selectedVertical === vertical;
          return (
            <button
              key={vertical}
              onClick={() => setSelectedVertical(vertical)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#001766] text-white shadow-md shadow-blue-900/20 scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              {vertical}
            </button>
          );
        })}
      </div>

      {/* Team Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
}
