import React from "react";
import InitiativeCard, { InitiativeItem } from "./InitiativeCard";
import ContainerImg from "./Container.png";

// Mapping function to dynamically compile card data from separate arrays
function generateCardData(
  logos: any[],
  headings: string[],
  paras: string[]
): InitiativeItem[] {
  return headings.map((heading, index) => ({
    id: `initiative-${index}`,
    title: heading,
    description: paras[index] || "",
    logo: logos[index] || ContainerImg, // fallback logo
  }));
}

export default function InitiativesGrid() {
  // 1. Array of logos (using ContainerImg for all 9 cards as requested)
  const logos = Array(9).fill(ContainerImg);

  // 2. Array containing all headings (identical "E-Summit" for all 9 cards as requested)
  const headings = Array(9).fill("E-Summit");

  // 3. Array containing all description paragraphs (identical for all 9 cards as requested)
  const paras = Array(9).fill(
    "Our flagship entrepreneurship festival — bringing founders, investors, and thinkers together for keynotes, competitions, and networking at scale."
  );

  // Generate the dynamic initiatives list using our function
  const initiatives = generateCardData(logos, headings, paras);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {initiatives.map((initiative) => (
          <InitiativeCard key={initiative.id} initiative={initiative} />
        ))}
      </div>
    </div>
  );
}
