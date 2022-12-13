import React from "react";

import {
  FaBriefcase,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaRegPaperPlane,
  FaInstagram,
  FaRegEnvelope,
  FaCode,
  FaEye,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

export const navigation = [
  { id: 2, name: "projects", link: "#projects", icon: <FaBriefcase /> },
  {
    id: 3,
    name: "github",
    link: "https://github.com/LucasMig",
    icon: <FaGithub />,
  },
  {
    id: 4,
    name: "linkedin",
    link: "https://www.linkedin.com/in/lucas-migliori/",
    icon: <FaLinkedin />,
  },
  {
    id: 5,
    name: "resume",
    link: "https://drive.google.com/uc?export=download&id=1A40hGIXBcrmk3JBgdw0xdiDMV7Lo-h9q",
    icon: <FaFileAlt />,
  },
];

export const coverLetter = [
  "Hello there! 👋🏼",
  "I'm Lucas Migliori, a Brazilian Front-end Developer. Really glad to see you here.",
  "Currently, I'm working with Software QA at Jüsto. In my spare time, I work on my own projects and some freelance jobs in order to improve my development skills.",
  "Besides being 'the average nerd' who's able to spend an impressive time looking at code lines, I'm also passionate about financial market's and would spend an entire afternoon talking about it.",
  "I guess this pretty much sums it up! Please, feel free to take a look at some of my work below.",
];

export const projects = [
  {
    id: 1,
    name: "calculatas",
    techs: [
      { name: "html", icon: <FaHtml5 /> },
      { name: "css", icon: <FaCss3Alt /> },
      { name: "js", icon: <FaJs /> },
    ],
    imageUrl: "https://i.ibb.co/8jd5PFP/calculatas-compressed.webp",
    title: "how many cans?",
    description:
      "A calculator to help you find out how many paint buckets you're gonna need to paint your walls. Created as a challenge for Digital Republic's selection process. Check out the readme file for this one on my GitHub for a overview of the business rules.",
    links: [
      {
        name: "repository",
        url: "https://github.com/LucasMig/calculatas",
        icon: <FaCode />,
      },
      {
        name: "view live",
        url: "https://calculatas.netlify.app/",
        icon: <FaEye />,
      },
    ],
  },
  {
    id: 2,
    name: "forkify",
    techs: [
      { name: "html", icon: <FaHtml5 /> },
      { name: "css", icon: <FaCss3Alt /> },
      { name: "js", icon: <FaJs /> },
    ],
    imageUrl: "https://i.ibb.co/qR5ffj8/forkify-compressed.webp",
    title: "find and create delicious meals",
    description:
      "This application was built as the final project for a Vanilla JS course. Created from absolute scratch using MVC architecture and many other cool JS features, techniques and patterns. Please, make sure to check out the readme file for this one. I promise it's gonna be worth it!",
    links: [
      {
        name: "repository",
        url: "https://github.com/LucasMig/forkify-app",
        icon: <FaCode />,
      },
      {
        name: "view live",
        url: "https://forkify-migliori.netlify.app/",
        icon: <FaEye />,
      },
    ],
  },
  {
    id: 3,
    name: "bankist",
    techs: [
      { name: "html", icon: <FaHtml5 /> },
      { name: "css", icon: <FaCss3Alt /> },
      { name: "js", icon: <FaJs /> },
    ],
    imageUrl: "https://i.ibb.co/zfNVn3s/bankist-compressed.webp",
    title: "A basic bank service simulation",
    description:
      "This is a project built during a JavaScript course. It basically aims to simulate a bank account with some basic functions, such as transfering or borrowing money. To properly test this one, please check out the readme file on my GitHub.",
    links: [
      {
        name: "repository",
        url: "https://github.com/LucasMig/bankist-app",
        icon: <FaCode />,
      },
      {
        name: "view live",
        url: "https://bankist-migliori.netlify.app/",
        icon: <FaEye />,
      },
    ],
  },
  {
    id: 4,
    name: "mappin",
    techs: [
      { name: "html", icon: <FaHtml5 /> },
      { name: "css", icon: <FaCss3Alt /> },
      { name: "js", icon: <FaJs /> },
    ],
    imageUrl: "https://i.ibb.co/Gnqvv7X/mappin-compressed.webp",
    title: "pin your workouts on the map",
    description:
      "My very first project using a external library, which was leaflet.js. Also, this was my first OOP project, using some new JavaScript resources like Classes and Classfields. Simply click anywhere in the map to map a new workout!",
    links: [
      {
        name: "repository",
        url: "https://github.com/LucasMig/mappin-app",
        icon: <FaCode />,
      },
      {
        name: "view live",
        url: "https://mappin-migliori.netlify.app/",
        icon: <FaEye />,
      },
    ],
  },
];

export const footer = {
  info: {
    zipCode: "04206-000",
    neighbourhood: "Ipiranga",
    city: "São Paulo",
    country: "Brazil",
  },
  contact: [
    {
      id: 1,
      name: "telegram",
      address: "@lucasmigliori",
      url: "https://t.me/lucasmigliori",
      icon: <FaRegPaperPlane />,
    },
    {
      id: 2,
      name: "instagram",
      address: "@lucas.migliori",
      url: "https://www.instagram.com/lucas.migliori/",
      icon: <FaInstagram />,
    },
    {
      id: 3,
      name: "email",
      address: "lucasmigliori@gmail.com",
      url: "lucasmigliori@gmail.com",
      icon: <FaRegEnvelope />,
    },
    {
      id: 4,
      name: "linkedin",
      address: "in/lucas-migliori",
      url: "https://www.linkedin.com/in/lucas-migliori/",
      icon: <FaLinkedin />,
    },
  ],
};
