"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import Image from "next/image";
import { useSectionView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Skills = () => {
  const fadeVariants = {
    initial: { opacity: 0, y: 100 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.05 * index },
    }),
  };
  const { ref } = useSectionView("Skills", 0.5);
  return (
    <section
      ref={ref}
      id="skills"
      className="max-w-[53rem] text-center sm:mb-40 scroll-m-4 sm:scroll-mt-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap gap-5 text-lg justify-center">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-slate-700 border
          border-b-purple-400 shadow-md rounded-lg px-5 py-3 hover:cursor-pointer"
            key={index}
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              className=""
              src={skill.icon}
              alt={skill.name}
              width={50}
              height={50}
            />
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
