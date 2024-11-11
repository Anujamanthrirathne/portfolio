// Import assets
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  gym,
  movie,
  ecom,
  kiri,
  gami,
  padme
    // Ensure gym is imported here
} from "../assets";  // Adjust the import path to match your folder structure

// Navigation links
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

// Services provided
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full stack Developer",
    icon: creator,
  },
];

// Technologies used
const technologies = [
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
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

// Work experiences
const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// Client testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but chama proved me wrong.",
    name: "Charaka Jayamith",
    designation: "CFO",
    company: "Amandhi",
    image: kiri,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like chama does.",
    name: "Pasindu Gamlath",
    designation: "COO",
    company: "DEF Corp",
    image: gami,
  },
  {
    testimonial:
      "After chama optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Nipun (පද්මේ අයියා)",
    designation: "CTO",
    company: "456 Enterprises",
    image: padme,
  },
];

// Project details
const projects = [
  {
    name: "Gym Management system",
    description:
      "Web-based platform that allows users to search, book, and manage their body and fitness.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gym,  // Ensure gym is used correctly
    source_code_link: "https://github.com/Anujamanthrirathne/GymManagement",
  },
  {
    name: "Movieo",
    description:
      "Web application that enables users to search movies and trending movies list trail vedios and Tv series",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "idmbd db",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ecommerce Multivendor",
    description:
      "A comprehensive ecom site you can search product chat with vendors give stars for review and several payment methods .",
    tags: [
      {
        name: "redux",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/Anujamanthrirathne/ITP-CHAMA",
  },
];

export { services, technologies, experiences, testimonials, projects };
