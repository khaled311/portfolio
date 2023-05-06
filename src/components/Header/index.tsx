import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

const index = (props: Props) => {
  return (
    <header className="sticky top-0 flex justify-between z-20 py-4">
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/khaled311"
          fgColor="gray"
          bgColor="transparent"
          style={{ width: 40, height: 40 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/ksarhan311/"
          fgColor="gray"
          bgColor="transparent"
          style={{ width: 40, height: 40 }}
        />
      </motion.div>
      <motion.div
        initial={{
          x: 300,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          network="email"
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
          style={{ width: 40, height: 40 }}
          url="#contact"
        />
        <a
          href="#contact"
          className="hidden md:inline-flex text-sm text-gray-400"
        >
          k.sarhan311@gmail.com
        </a>
      </motion.div>
    </header>
  );
};

export default index;
