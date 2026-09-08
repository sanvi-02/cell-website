export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  vertical: string;
  image: string;
  socials: {
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
      linkedin: "http://www.linkedin.com/in/vrishank-saini-2a0774282",
      email: "mailto:vrishank_s@me.iitr.ac.in",
    },
  },
  {
    id: "2",
    name: "Kunj Mendapara",
    designation: "Additional Secretary",
    vertical: "Secretaries",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/kunj-mendapara-571831287/",
      email: "mailto:kunj_bm@me.iitr.ac.in",
    },
  },
  {
    id: "3",
    name: "Divyam Saini",
    designation: "Convenor of E-Summit'27",
    vertical: "Secretaries",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/divyamsaini2712",
      email: "mailto:divyam_s1@ce.iitr.ac.in",
    },
  },
  {
    id: "4",
    name: "Vivek Singh",
    designation: "Co-convenor",
    vertical: "Secretaries",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/vivek-singh-52243a2b6",
      email: "mailto:vivek_s@es.iitr.ac.in",
    },
  },
  {
    id: "5",
    name: "Paavni Khattri ",
    designation: "Co-Convenor",
    vertical: "Overall Coordinators",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/paavni-khattri-588374313/",
      email: "mailto:paavni_k@bt.iitr.ac.in",
    },
  },
  {
    id: "6",
    name: "Parshv Shah",
    designation: "Co-Convener",
    vertical: "Overall Coordinators",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/parshv-shah-2a2600333",
      email: "mailto:parshv_s@me.iitr.ac.in",
    },
  },
  {
    id: "7",
    name: "Arnav Vinod Deshpande",
    designation: "Head of Startup Launchpad",
    vertical: "Design & Tech",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/arnav-deshpande-948890235",
      email: "mailto:arnav_vd@es.iitr.ac.in",
    },
  },
  {
    id: "8",
    name: "Nikhil Rajput",
    designation: "Head of Startup Launchpad ",
    vertical: "Events & PR",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/nikhil-rajput-b73aa0282?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "mailto:nikhil1@bt.iitr.ac.in",
    },
  },
  {
    id: "9",
    name: "Rohan Budaniya",
    designation: "Head of Startup Launchpad ",
    vertical: "Events & PR",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/rohan-budaniya-0340a4314?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "mailto:rohan_b1@es.iitr.ac.in",
    },
  },
  {
    id: "10",
    name: "Tavgun Kaur",
    designation: "Senior Manager - Startup Launchpad",
    vertical: "Corporate Relations",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/tavgun-kaur-106b88342/",
      email: "mailto:tavgunkbakshi@gmail.com",
    },
  },
  {
    id: "11",
    name: "Divya Khasgiwal",
    designation: "Head of Zero to One",
    vertical: "Corporate Relations",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/divya-khasgiwal-a442aa311?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "mailto:divya_ak@es.iitr.ac.in",
    },
  },
  {
    id: "12",
    name: "Dev Kansal",
    designation: "Head of Zero to One",
    vertical: "Secretaries",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/thedevkansal/",
      email: "mailto:dev_k@mt.iitr.ac.in",
    },
  },
  {
    id: "13",
    name: "Arjita Singh",
    designation: "Head of Zero to One",
    vertical: "Secretaries",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:arjita_s@bt.iitr.ac.in",
    },
  },
  {
    id: "14",
    name: "Shagun Bhatia",
    designation: "Head of Zero to One - Design",
    vertical: "Secretaries",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/shagun-bhatia-807353314?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "mailto:shagun_b@mt.iitr.ac.in",
    },
  },
  {
    id: "15",
    name: "Sanvi Jain",
    designation: "Head of Tech",
    vertical: "Overall Coordinators",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/sanvijain02/",
      email: "mailto:sanvi_j@ce.iitr.ac.in",
    },
  },
  {
    id: "16",
    name: "Mannat Gupta",
    designation: "Head of Tech",
    vertical: "Overall Coordinators",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:mannat_g@mt.iitr.ac.in",
    },
  },
  {
    id: "17",
    name: "Zoya Shaikh",
    designation: "Head of Design",
    vertical: "Overall Coordinators",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "http://linkedin.com/in/zoyashaikh-iitr",
      email: "mailto:zoya_ais@ce.iitr.ac.in",
    },
  },
  {
    id: "18",
    name: "Krishna Verma",
    designation: "Head of Design",
    vertical: "Design & Tech",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/krishna-verma-b354a4346/",
      email: "mailto:krishna_v@ch.iitr.ac.in",
    },
  },
  {
    id: "19",
    name: "Jaykumar Tanna",
    designation: "Head of Events",
    vertical: "Design & Tech",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/jaykumar-tanna-54a9a3333?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "mailto:jaykumar_tl@me.iitr.ac.in",
    },
  },
  {
    id: "20",
    name: "Jasmine Sanghu",
    designation: "Head of Events",
    vertical: "Design & Tech",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/jasmine-sanghu-136782333/",
      email: "mailto:jasmine_s@me.iitr.ac.in",
    },
  },
  {
    id: "21",
    name: "Hriday Toor",
    designation: "Sinior Manager-Events",
    vertical: "Events & PR",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:hriday_t@ch.iitr.ac.in",
    },
  },
  {
    id: "22",
    name: "Abhinav Arora",
    designation: "Head of Marketing and Outreach",
    vertical: "Events & PR",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/abhinav-arora-120b02316/",
      email: "mailto:abhinav_a@bt.iitr.ac.in",
    },
  },
  {
    id: "23",
    name: "Ved Parikh",
    designation: "Head of Marketing and Outreach",
    vertical: "Design & Tech",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/veduparikh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:ved_pu@ch.iitr.ac.in",
    },
  },
  {
    id: "24",
    name: "Mrityunjay Srivastava",
    designation: "Senior Manager-Marketing and Outreach",
    vertical: "Events & PR",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/mrityunjay-srivastava-25a017334?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      email: "mailto:mrityunjay_s@ece.iitr.ac.in",
    },
  },
  {
    id: "25",
    name: "Rajarshi Verma",
    designation: "Core Member",
    vertical: "Corporate Relations",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://linkedin.com/in/rajarshi-verma",
      email: "mailto:rajarshi_v@bt.iitr.ac.in",
    },
  },
  {
    id: "26",
    name: "Manasvi Sawaria",
    designation: "Core Member",
    vertical: "Corporate Relations",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://linkedin.com",
      email: "mailto:manasvisawaria@gmail.com",
    },
  },
  {
    id: "27",
    name: "Tejas Biradar",
    designation: "Core Member",
    vertical: "Corporate Relations",
    image: "/team/vrishnak.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/krishna-verma-b354a4346/",
      email: "mailto:tejas_tb@ar.iitr.ac.in",
    },
  },
];
