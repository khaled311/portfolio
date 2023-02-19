/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const index = (props: Props) => {
  const pros = [1, 2, 3, 4];

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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="section-title">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {pros?.map((item, i) => (
          <div
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center pt-80 p-20 md:pt-0 md:justify-end md:p-44 h-screen"
            key={item}
          >
            <motion.img
              initial={{
                y: -100,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              src="/assets/pro1.png"
              alt=""
              className="max-w-md"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-5xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case studt {i + 1} of {pros?.length}:
                </span>{" "}
                UPS clone
              </h4>

              <p className="text-lg text-center md:text-left">
                This is a paragraph
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default index;
