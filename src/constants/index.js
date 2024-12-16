/* eslint-disable no-unused-vars */
import {
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  matlab,
  python,
  mssqlserver,
  nextjs,
  optinum,
  jobvine,
  fraser,
  gocamp,
  hoobank,
  gemini,
  buzzing,
  estate,
  aigen,
  software,
  analyst,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: software,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: analyst,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MATLAB",
    icon: matlab,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "MS SQL Server",
  //   icon: mssqlserver,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Technical Support Lead",
    company_name: "Opti-Num Solutions",
    icon: optinum,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Ensuring team responses to clients in tech support are up to standard.",
      "Providing support to technical team when required on cases as well as to clients.",
      "Performing analytics on technical support performance metrics using MATLAB.",
      "Building relationships with clients to ensure long term company success.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "JOBVINE",
    icon: jobvine,
    iconBg: "#383E60",
    date: "Feb 2024 - Present",
    points: [
      "Engaging with clients to get a sense of all their bottlenecks and ensure that solution meets all their needs.",
      "Developing frontend UI/UX web applications",
      "Developing backend web applications",
      "Designing application components and writing code for them using Next.js, React, etc.",
    ],
  },
  {
    title: "Junior Consultant - Software Engineering",
    company_name: "Opti-Num Solutions",
    icon: optinum,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Developing and maintaining web applications using MATLAB and other related technologies.",
      "Developing and maintaining dashboards using Python.",
      "Collaborating with cross-functional teams including developers, senior lead consultants, and account owners to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graduate Engineer",
    company_name: "Opti-Num Solutions",
    icon: optinum,
    iconBg: "#383E56",
    date: "Jan 2023 - Jul 2023",
    points: [
      "Developing and maintaining applications using MATLAB, Python and other related technologies.",
      "Collaborating with cross-functional teams including developers, managres and account owners to create high-quality products.",
      "Performing data analytics on client data to support decison making and business strategies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Business Improvement Graduate",
    company_name: "Fraser Alexander",
    icon: fraser,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Jan 2023",
    points: [
      "Performing data analytics on company data to support decison making and business strategies.",
      "Supporting admins in utlisation of company applications built with PowerApps to ensure effciency.",
      "Collaborating with operators and supervisors to identify and improve production bottlenecks.",
      "Performing regular site visits to ensure that operations are up to standard.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ntshuxeko proved me wrong.",
    name: "Jackie Yo.",
    designation: "Lead",
    company: "BlackberryDesigns",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ntshuxeko does.",
    name: "Jon E.",
    designation: "CEO",
    company: "Beatuty Designs",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "Ntshuxeko was a pleasure to work with. She and delivered a solution that exceeded my expectation.",
    name: "Katy S.",
    designation: "Manager",
    company: "Construction IO",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    testimonial:
      "After Ntshuxeko optimized our website, our traffic increased by 50%. We can't thank her enough!",
    name: "Michael M.",
    designation: "Media Manager",
    company: "StudyConnect",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];

const projects = [
  {
    name: "GoCamp!",
    description:
      "GoCamp! is the ultimate travelling and camping guide for users that want to go camping in Limpopo.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gocamp,
    source_code_link:
      "https://github.com/NtshuxieGitHub/Camping-Website-Frontend",
    website_link: "https://campinguide.ncmatpro.com/",
  },
  {
    name: "HooBank Clone",
    description:
      "The ultimate banking experience with sleek design features and an interactive user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "pink-text-gradient",
      },
    ],
    image: hoobank,
    source_code_link: "https://github.com/NtshuxieGitHub/Bank-Landing-Page",
    website_link: "https://hoobankclone.ncmatpro.com/",
  },
  {
    name: "Gemini 2.0",
    description:
      "Gemini 2.0 is a Google Gemini inspired AI search engine with a minimalist design and robust functionality.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "GoogleAI",
        color: "pink-text-gradient",
      },
    ],
    image: gemini,
    source_code_link: "https://github.com/NtshuxieGitHub/Gemini-Clone",
    website_link: "https://geminiclone.ncmatpro.com/",
  },
  {
    name: "Buzzing",
    description:
      "Features sleek visuals and an interactive user experience tailored for audiphiles and tech enthisiasts.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "pink-text-gradient",
      },
    ],
    image: buzzing,
    source_code_link:
      "https://github.com/NtshuxieGitHub/Fully-Responsive-Headphones-Web",
    website_link: "https://buzzing.ncmatpro.com/",
  },
  {
    name: "Estate",
    description:
      "Offers a user-friendly interface for browsing homes, and connecting with agents for a seamless real estate experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "pink-text-gradient",
      },
    ],
    image: estate,
    source_code_link:
      "https://github.com/NtshuxieGitHub/Real-Estate-Web-Application",
    website_link: "https://realestate.ncmatpro.com/",
  },
  {
    name: "AI Image Generator",
    description:
      "This app allows users to get creating using AI by typing a prompt and generating an image of that prompt using AI.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NodeExpress",
        color: "pink-text-gradient",
      },
      {
        name: "Mongoose",
        color: "pink-text-gradient",
      },
    ],
    image: aigen,
    source_code_link:
      "https://github.com/NtshuxieGitHub/AI-Image-Generator-App",
    website_link: "https://aiimagegen.ncmatpro.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
