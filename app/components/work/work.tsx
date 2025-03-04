"use client";

import { Arrow } from "@/assets";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "../modal/modal";

// const projectsData = [
//   {
//     title: "TechyTypes Revamped Website",
//     tags: ["HTML", "CSS", "React.js"],
//     describtion: "",
//   },
// ];

export const Work = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-base font-semibold opacity-30 text-center md:mb-[82px] mb-6 uppercase">
        Selected work
      </h2>
      <div className="flex items-center gap-7">
        <div className="">
          <ul className="flex gap-4 text-white/30 text-xs uppercase">
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
          </ul>
          <h3 className="my-6 font-bold text-[40px] max-w-[238px]">
            TechyTypes Revamped Website
          </h3>
          <button
            className="w-[52px] h-[52px] rounded-full border border-solid border-white/10 flex items-center justify-center transition-all hover:bg-white group relative"
            onClick={() => setActive((prev) => !prev)}
          >
            <span className="block w-1 h-1 bg-[#5F5F5F] rounded-full group-hover:opacity-0 group-hover:scale-0 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
            <Arrow className="transition-all scale-0 opacity-0 origin-bottom-left	 group-hover:scale-100 group-hover:opacity-100" />
          </button>
        </div>
        <div
          className={clsx("ms-auto cursor-pointer")}
          onClick={() => setActive((prev) => !prev)}
        >
          <Image
            src={"/project.jpg"}
            alt="project image"
            width={630}
            height={473}
            quality={100}
            className="rounded-3xl"
            draggable="false"
          />
        </div>
      </div>
      <Modal isOpen={active} onClose={() => setActive(false)}>
        <Image
          src={"/project.jpg"}
          alt="project image"
          width={630}
          height={473}
          quality={100}
          className="rounded-3xl"
          draggable="false"
        />
        <div className="text-slate-900">
          <h3 className="my-6 font-bold text-[40px] max-w-[238px]">
            TechyTypes Revamped Website
          </h3>
          <ul className="flex gap-4 text-xs uppercase">
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
          </ul>
          <p className=" mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            malesuada, sapien ac sagittis aliquet, nisl leo tincidunt odio, vel
            ultricies purus odio sit amet nunc. Donec euismod, purus nec
            fermentum luctus, elit turpis ultricies metus, nec aliquet ex odio
            sed lacus.
          </p>
        </div>
      </Modal>
    </div>
  );
};
