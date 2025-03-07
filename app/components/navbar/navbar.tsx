"use client";
import { links } from "@/lib/constants";
import { motion } from "motion/react";
import { Github, LinkedIn, Logo } from "@/assets";

export const Navbar = () => {
  return (
    <motion.div
      className="container fixed top-0 left-0 right-0 z-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="basis-1/3 flex justify-start">
          <div className="group">
            <Logo />
          </div>
        </div>
        <ul className="flex space-x-8 basis-1/3 justify-end">
          <li>
            <a href={links.linkedIn} className="group" target="_blank">
              <LinkedIn className="group-hover:[&>path]:fill-[#EED282]" />
            </a>
          </li>
          <li>
            <a href={links.github} className="group" target="_blank">
              <Github className="group-hover:[&>path]:fill-[#EED282]" />
            </a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};
