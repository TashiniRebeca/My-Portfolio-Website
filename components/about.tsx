/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import TabBtn from "./ui/tab-btn";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionView } from "@/lib/hooks";

const tab_data = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>Java</li>
        <li>HTTML, CSS, JS</li>
        <li>React JS</li>
        <li>SQL</li>
        <li>C#</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>University of Westminster - (2022 - Present)</li>
        <li>School - Sacred Heart Convent - (2007 - 2020)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul>
        <li>Internship - HCL Technologies - (2022 - Present)</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { ref } = useSectionView("About", 0.5);

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="scroll-m-4 sm:scroll-mt-40"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="md:grid md:grid-cols-2 gap-6 items-center py-8 px-1 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/myphoto.jpg"
          alt="About"
          width={350}
          height={350}
          className="rounded-lg sm:items-center"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-lg mt-5">
            I&apos;m an undergraduate student pursuing BSc(Hons) in Computer
            Science at the University of Westminster. I have a passion for
            developing software applications and I have experience in developing
            web applications, mobile applications, and desktop applications. I
            have experience in working with Java, JavaScript, ReactJS, React
            Native, NodeJS, Python, and C#. I have also worked with technologies
            like Firebase, MongoDB, and MySQL. I am a quick learner, a team
            player and I am always eager to learn new technologies. I am looking
            for an opportunity to work in a challenging environment.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabBtn
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabBtn>
            <TabBtn
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabBtn>
            <TabBtn
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabBtn>
          </div>
          <div className="mt-5">
            {tab_data.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
