"use client";

import { useState } from "react";
import TeamCard from "./TeamCard";
import { TEAM_MEMBERS, VERTICALS } from "@/data/teamData";

export default function TeamGrid() {
  const [activeVertical, setActiveVertical] = useState<string>("All");

  const filteredMembers =
    activeVertical === "All"
      ? TEAM_MEMBERS
      : TEAM_MEMBERS.filter((member) => member.vertical === activeVertical);

  const getCount = (vertical: string) => {
    if (vertical === "All") return TEAM_MEMBERS.length;
    return TEAM_MEMBERS.filter((m) => m.vertical === vertical).length;
  };

  return (
    <section className="w-full py-6">
      {/* Vertical Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 px-4">
        {VERTICALS.map((vertical) => {
          const isActive = activeVertical === vertical;
          const count = getCount(vertical);

          return (
            <button
              key={vertical}
              onClick={() => setActiveVertical(vertical)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 shadow-sm border ${
                isActive
                  ? "bg-[#001766] text-white border-[#001766] shadow-md scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span>{vertical}</span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full font-medium transition-colors ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Team Cards Grid */}
      {filteredMembers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500">
          No team members found in this vertical.
        </div>
      )}
    </section>
  );
}
