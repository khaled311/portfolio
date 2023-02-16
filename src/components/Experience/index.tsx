import React from "react";
import { motion } from "framer-motion";
import ExperianceCard from "./ExperianceCard";

type Props = {};

const index = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="section-title">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll py-10 snap-x snap-mandatory">
        <ExperianceCard />
        <ExperianceCard />
        <ExperianceCard />
        <ExperianceCard />
      </div>
    </motion.div>
  );
};

export default index;
