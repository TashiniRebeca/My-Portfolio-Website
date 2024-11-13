"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { useSectionView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionView("Projects", 0.5);

  return (
    <section id="projects" ref={ref} className="scroll-m-4 sm:scroll-mt-40">
      <SectionHeading>My Projects</SectionHeading>
      <div className="justify-center">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

type ProjectProps = (typeof projectsData)[0];

function Project({ title, description, tags, imageUrl }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className="bg-gray-800 max-w-[42rem] border
    border-purple-300 overflow-hidden sm:pr-8 relative sm:h-[22rem] rounded-md
    hover:bg-slate-500/[0.5] cursor-pointer transition group-even:pl-8"
      >
        <div
          className="pt=4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
      group-even:ml-[17rem]"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-50">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-purple-500/[0.7] px-3 py-1 text-[0.7rem] uppercase
          tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project Image"
          quality={95}
          className="absolute top-20 -right-14 w-[21.25rem] h-[17.25rem] rounded-t-lg shadow-2xl
        group-even:right-[initial] group-even:-left-20 group-hover:-translate-x-3 
        group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04]
        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
        />
      </section>
    </motion.div>
  );
}

export default Projects;
