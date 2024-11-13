import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import adsyncContactImg from "@/public/Contact Page - AdSync.png";
import adsyncTCImg from "@/public/TC Page - AdSync.png";
import gitImg from "@/public/git.png"
import htmlcssImg from "@/public/html-css.png"
import jsImg from "@/public/java-script.png"
import javaImg from "@/public/java.png"
import mysqlImg from "@/public/mysql.png"
import nodeImg from "@/public/node-js.png"
import pythonImg from "@/public/python.png"
import reactImg from "@/public/react.png"
import typescriptImg from "@/public/typescript.png"

export const links = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Contact",
    path: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "AdSync - Contact Page",
    description:
      "I developed the contact page of our SDGP Group Project. It has a form with validation.",
    tags: ["React", "Tailwind" , "HTML & CSS"],
    imageUrl: adsyncContactImg,
  },
  {
    title: "AdSync - T & C Page",
    description:
      "I developed the terms and conditions page as well. The page will popup when the user click on agreeting for T&C.",
    tags: ["React", "TypeScript", "Tailwind"],
    imageUrl: adsyncTCImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: adsyncContactImg,
  },
] ;

export const skillsData = [
  {
    name:"HTML,CSS",
    icon: htmlcssImg
  },
  {
    name:"JavaScript",
    icon: jsImg
  },
  {
    name:"TypeScript",
    icon: typescriptImg
  },
  {
    name:"React",
    icon: reactImg
  },
  {
    name:"Node JS",
    icon: nodeImg
  },
  {
    name:"Git",
    icon: gitImg
  },
  {
    name:"Java",
    icon: javaImg
  },
  {
    name:"Python",
    icon: pythonImg
  },
  {
    name:"My SQL",
    icon: mysqlImg
  },
] as const;