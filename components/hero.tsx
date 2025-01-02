"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import MagicBtn from "./ui/magic-btn";
import { MdArrowCircleRight, MdOutlineFileDownload } from "react-icons/md";
import { TextGenerateEffect } from "./ui/textgenerator";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useActiveSec } from "@/context/active-sec-context";
import { useSectionView } from "@/lib/hooks";

const Hero = () => {
  const { ref } = useSectionView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="scroll-mt-[100rem]">
      <motion.div
        className="grid justify-center grid-cols-1 ml-8 sm:grid-cols-12"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 125,
          duration: 0.5,
        }}
      >
        <div className="col-span-7 text-center place-self-center sm:text-left">
          <h1 className="mb-4 text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-slate-400">
              Hello, I&apos;m{" "}
            </span>
            <TextGenerateEffect
              className="text-left text-[60px] md:text-5xl lg:text-6xl"
              words="Tashini Weerasooriya."
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            An undergraduate student based in Sri Lanka. I am a passionate
            software developer who loves to learn new technologies and build
            software applications.
          </p>
          <div>
            <Link
              href="#contact"
              className="inline-flex gap-3 items-center justify-center px-6 py-3 rounded-full w-full sm:w-fit mr-4 font-bold text-black bg-gradient-to-br from-[#821be2] via-[#a4a4e4] to-[#d8bbe8] hover:bg-slate-200
              focus:scale-110 active:scale-100 transition hover:scale-110"
            >
              Hire Me <MdArrowCircleRight />
            </Link>
            <MagicBtn
              href="/My Resume-Tashini.pdf"
              icon={<MdOutlineFileDownload opacity={500} />}
              position="right"
              otherClasses="focus:scale-110 active:scale-100 transition hover:scale-110"
            />
          </div>
        </div>
        <div className="col-span-5 mt-4 place-self-center lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/girl.jpg"
              width={400}
              height={400}
              alt="Hero Image"
              className="absolute ml-4 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
