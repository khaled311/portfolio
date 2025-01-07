"use client";
import { links } from "@/lib/constants";
import { motion } from "motion/react";
import { Github, LinkedIn, Logo, MenuBars } from "@/assets";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <motion.div
      className="container mx-auto fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="flex justify-between items-center py-4 px-8">
        <div className="basis-1/3 flex justify-start">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        {/* Defered */}
        {/* <div
          className="basis-1/3 flex justify-center items-center w-8 h-8 cursor-pointer"
          onClick={() => setMenuOpen((old) => !old)}
        >
          <MenuBars menuOpen={menuOpen} />
        </div> */}
        <ul className="flex space-x-8 basis-1/3 justify-end">
          <li>
            <a href={links.linkedIn} className="group" target="_blank">
              <LinkedIn className="group-hover:[&>path]:fill-white" />
            </a>
          </li>
          <li>
            <a href={links.github} className="group" target="_blank">
              <Github className="group-hover:[&>path]:fill-white" />
            </a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};
