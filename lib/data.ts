import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import adsyncContactImg from "@/public/Contact Page - AdSync.png";
import adsyncTCImg from "@/public/TC Page - AdSync.png";
import consultationImg from "@/public/Skin Consultation System.png";
import commentsPageImg from "@/public/Melodyo - Comments Page.png";
import gitImg from "@/public/git.png";
import htmlcssImg from "@/public/html-css.png";
import jsImg from "@/public/java-script.png";
import javaImg from "@/public/java.png";
import mysqlImg from "@/public/mysql.png";
import nodeImg from "@/public/node-js.png";
import pythonImg from "@/public/python.png";
import reactImg from "@/public/react.png";
import typescriptImg from "@/public/typescript.png";

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

export const projectsData = [
  {
    title: "AdSync - Contact Page",
    description:
      "I developed the contact page of our SDGP Group Project. It has a form with validation.",
    tags: ["React", "Tailwind", "HTML & CSS"],
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
    title: "Skin Consultation System",
    description:
      "A console app that can book an appointment, view appointments, and view the available doctors.",
    tags: ["Java", "JavaFX"],
    imageUrl: consultationImg,
  },
  {
    title: "Melodyo - Musical Website",
    description:
      "A group project where I developed the home page and comments page.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: commentsPageImg,
  },
];

export const skillsData = [
  {
    name: "HTML,CSS",
    icon: htmlcssImg,
  },
  {
    name: "JavaScript",
    icon: jsImg,
  },
  {
    name: "TypeScript",
    icon: typescriptImg,
  },
  {
    name: "React",
    icon: reactImg,
  },
  {
    name: "Node JS",
    icon: nodeImg,
  },
  {
    name: "Git",
    icon: gitImg,
  },
  {
    name: "Java",
    icon: javaImg,
  },
  {
    name: "Python",
    icon: pythonImg,
  },
  {
    name: "My SQL",
    icon: mysqlImg,
  },
] as const;
