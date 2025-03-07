"use client";

import { Arrow } from "@/assets";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { Modal } from "../modal/modal";

type Project = {
  title: string;
  tags: string[];
  description: string;
  image: string;
};

const projectsData = [
  {
    title: "TechyTypes Revamped Website",
    tags: ["Next.js", "TypeScript"],
    description: `I played a key role in rebuilding TechyTypes’ website using Next.js,
    focusing on performance optimization, scalability, and a seamless
    user experience. I worked on modernizing the frontend architecture,
    improving load times, and implementing best practices for SEO and
    accessibility. By leveraging server-side rendering (SSR) and static
    site generation (SSG), I helped enhance both speed and efficiency.
    Additionally, I contributed to refining the UI/UX, ensuring a
    visually appealing and user-friendly interface. Collaborating with
    designers and backend developers, I helped integrate APIs and
    streamline data fetching. My work also involved optimizing state
    management and implementing reusable components for maintainability.
    This project strengthened my expertise in Next.js, React, and
    performance-driven development, reinforcing my ability to build
    high-quality, scalable web applications.`,
    image: "/techytypes_project.png",
  },
  {
    title: "VVerse - The Ultimate Community Platform",
    tags: ["Next.js", "TypeScript"],
    description: `VVerse is a comprehensive digital ecosystem designed to empower communities across various domains. It integrates multiple modules inspired by platforms like Facebook (social networking), Udemy (online learning), YouTube (video sharing), Blog (content publishing), and Upwork (freelance marketplace). Built for scalability, VVerse enables users to connect, learn, create, and collaborate seamlessly. The platform supports rich media, interactive learning, and professional networking, fostering engagement and growth. With a modular architecture, it ensures flexibility for future expansions. Advanced features include real-time communication, AI-driven recommendations, and a robust monetization system. VVerse is more than a platform—it’s a verse where opportunities thrive.`,
    image: "/vverse_project.png",
  },
];

export const Work = () => {
  const [state, setState] = useState({
    active: false,
    project: {} as Project,
  });

  return (
    <div className="container px-4">
      <h2 className="text-base font-semibold opacity-30 text-center md:mb-[82px] mb-6 uppercase">
        Selected work
      </h2>
      <div className="flex flex-col gap-20">
        {projectsData.map((project, index) => (
          <div
            className={clsx("flex items-center gap-7", {
              "flex-row-reverse": index % 2 !== 0,
            })}
            key={index}
          >
            <div className="">
              <ul className="flex gap-4 text-white/30 text-xs uppercase">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <h3 className="my-6 font-bold text-[40px]">{project.title}</h3>
              <button
                className="w-[52px] h-[52px] rounded-full border border-solid border-white/10 flex items-center justify-center transition-all hover:bg-white group relative"
                onClick={() =>
                  setState((prev) => ({
                    ...prev,
                    active: !prev.active,
                    project: project,
                  }))
                }
              >
                <span className="block w-1 h-1 bg-[#5F5F5F] rounded-full group-hover:opacity-0 group-hover:scale-0 transition-all absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                <Arrow className="transition-all scale-0 opacity-0 origin-bottom-left	 group-hover:scale-100 group-hover:opacity-100" />
              </button>
            </div>
            <div
              className="ms-auto cursor-pointer shrink-0"
              onClick={() =>
                setState((prev) => ({
                  ...prev,
                  active: !prev.active,
                  project: project,
                }))
              }
            >
              <Image
                src={project.image}
                alt="project image"
                width={630}
                height={473}
                quality={100}
                className="rounded-3xl"
                draggable="false"
              />
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={state.active}
        onClose={() => setState((prev) => ({ ...prev, active: false }))}
      >
        <Image
          src={state?.project?.image}
          alt="project image"
          width={986}
          height={473}
          quality={100}
          className="rounded-3xl"
          draggable="false"
        />
        <div className="text-slate-900">
          <h3 className="my-6 font-bold text-[40px]">
            {state?.project?.title}
          </h3>
          <ul className="flex gap-4 text-xs uppercase">
            {state?.project?.tags?.map((tag) => (
              <li className="text-[#eed282] text-3xl" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          <p className="leading-relaxed text-black/60 mt-6">
            {state?.project?.description}
          </p>
        </div>
      </Modal>
    </div>
  );
};
