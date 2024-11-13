"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSec } from "@/context/active-sec-context";

const Navbar = () => {
  const { activeSec, setActiveSec, setTimeofLastClick } = useActiveSec();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border
            border-white border-opacity-20 bg-black bg-opacity-80 shadow-lg shadow-purple-200/[0.03]
            backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav
        className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2
      py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
      >
        <ul
          className="flex gap-y-1 w-[22rem] flex-wrap items-center justify-center
        text-[0.9rem] font-medium text-gray-300 "
        >
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.path}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.2 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-purple-400 transition",
                  {
                    "text-purple-400": activeSec === link.name,
                  }
                )}
                href={link.path}
                onClick={() => {
                  setActiveSec(link.name);
                  setTimeofLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSec && (
                  <motion.span
                    className="bg-slate-400/[0.3] rounded-full absolute inset-0 -z-10"
                    layoutId="activeSec"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
