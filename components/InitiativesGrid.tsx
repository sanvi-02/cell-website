import React from "react";
import InitiativeCard, { InitiativeItem } from "./InitiativeCard";
import ContainerImg from "./Container.png";

const initiativesData: InitiativeItem[] = [
  {
    id: "events",
    title: "EVENTS",
    subtitle: "What we do at E-Cell?",
    description:
      "Drives entrepreneurial thinking through high-impact competitions like Investor's Den & Marketing Mavericks, company breakdowns, and real-world startup analysis.",
    logo: ContainerImg,
  },
  {
    id: "startup-launchpad",
    title: "STARTUP LAUNCHPAD",
    subtitle: "Build. Validate. Launch.",
    description:
      "Connects students with real startups through live problem statements, structured mentorship, and growth pathways like the Junior Accelerator.",
    logo: ContainerImg,
  },
  {
    id: "zero-to-one",
    title: "ZERO TO ONE",
    subtitle: "We Identify Real Problems",
    description:
      "Drives product innovation by identifying real campus problems, delivering end-to-end product experiences from ideation to deployment, and building Noosphere.",
    logo: ContainerImg,
  },
  {
    id: "marketing-outreach",
    title: "MARKETING & OUTREACH",
    subtitle: "We Turn Ideas into Content",
    description:
      "Face of E-Cell managing a 25k+ LinkedIn & Instagram community, converting business model insights into content, and hosting Founder Talks.",
    logo: ContainerImg,
  },
  {
    id: "e-summit",
    title: "E-SUMMIT",
    subtitle: "We Connect with the Ecosystem",
    description:
      "Annual flagship conclave uniting students, founders, and investors for B-Plan competitions, hackathons, and Internship & Job Fairs at IIT Roorkee.",
    logo: ContainerImg,
  },
];

export default function InitiativesGrid() {
  return (
    <div className="mx-auto max-w-[1150px] px-4 md:px-0 py-16 w-full">
      <div className="flex flex-wrap justify-center gap-8">
        {initiativesData.map((initiative) => (
          <InitiativeCard key={initiative.id} initiative={initiative} />
        ))}
      </div>
    </div>
  );
}
