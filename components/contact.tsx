"use client";

import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import Link from "next/link";
import { useSectionView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendMessage } from "@/actions/send-message";
import SendBtn from "./send-btn";
import toast from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionView("Contact", 0.5);

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-20 w-[min(100%,60rem)]"
    >
      <div className="">
        <h4 className="text-3xl font-bold text-white my-2">
          Let&apos;s Connect
        </h4>
        <p className="text-[#ADB7BE] mb-4 max-w-md text-lg">
          {" "}
          I&apos;m currently looking for new opportunities. If you&apos;re
          interested in working with me, feel free to reach out.
        </p>
        <div className="socials flex flex-row gap-3">
          <Link href="https://github.com/TashiniRebeca">
            <IconBrandGithub size={50} color="#ADB7BE" />
          </Link>
          <Link href="https://www.linkedin.com/in/tashini-weerasooriya-784003239/">
            <IconBrandLinkedin size={50} color="#ADB7BE" />
          </Link>
          <Link href="">
            <IconBrandInstagram size={50} color="#ADB7BE" />
          </Link>
          <Link href="">
            <IconBrandWhatsapp size={50} color="#ADB7BE" />
          </Link>
        </div>
      </div>
      <div className="">
        <form
          className="flex flex-col gap-4"
          action={async (formData) => {
            const { error } = await sendMessage(formData);

            if (error) {
              toast.error(error);
              return;
            } else {
              toast.success("Email sent successfully!");
            }
          }}
        >
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
            className="rounded-md pb-3 placeholder-[#9CA2A9] text-gray-600 outline-none outline-[#6407a2]"
            required
            maxLength={50}
          />
          <label htmlFor="email" className="text-lg">
            Email
          </label>
          <input
            type="email"
            className="rounded-md pb-3 placeholder-[#9CA2A9] text-gray-600 outline-none outline-[#6407a2]"
            name="email"
            placeholder="Enter your Email"
            required
            maxLength={500}
          />
          <label htmlFor="message" className="text-lg">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message"
            className="rounded-md pb-5 mb-4 placeholder-[#9CA2A9] text-gray-600 outline-none outline-[#6407a2]"
            required
            maxLength={5000}
          ></textarea>
          <SendBtn />
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
