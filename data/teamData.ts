export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  vertical: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export const VERTICALS = [
  "All",
  "Secretaries",
  "Overall Coordinators",
  "Design & Tech",
  "Events & PR",
  "Corporate Relations",
] as const;

export type VerticalType = (typeof VERTICALS)[number];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Secretaries",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "2",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Secretaries",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "3",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Secretaries",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "4",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Secretaries",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "5",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Overall Coordinators",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "6",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Overall Coordinators",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "7",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Design & Tech",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "8",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Design & Tech",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "9",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Events & PR",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "10",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Events & PR",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "11",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Corporate Relations",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
  {
    id: "12",
    name: "Vrishnak Saini",
    designation: "Secretary",
    vertical: "Corporate Relations",
    image: "/team/vrishnak.png",
    socials: {
      twitter: "https://x.com",
      linkedin: "https://linkedin.com",
      email: "mailto:vrishnak@ecell.iitr.ac.in",
    },
  },
];
