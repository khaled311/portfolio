import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiStrapi,
  SiTailwindcss,
  SiMaterialui,
  SiStorybook,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

type Props = {};

const ExperianceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 transition-opacity cursor-pointer duration-500 overflow-hidden">
      <div className="w-32 max-h-32 rounded-full xl:w-[200px]">
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
          className="max-w-full object-cover object-center"
          src="/assets/techytypes.webp"
        />
      </div>

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front-end developer</h4>
        <p className="font-bold text-2xl mt-1">TechyTypes</p>
        <div className="flex space-x-2 my-2">
          <FaReact title="React" />
          <SiTypescript title="Typescript" />
          <SiNextdotjs title="Next.js" />
          <IoLogoJavascript title="Javascript" />
          <SiStrapi title="Strapi" />
          <SiTailwindcss title="Tailwindcss" />
          <SiMaterialui title="MaterialUI" />
          <SiStorybook title="Storybook" />
        </div>
        <p className="uppercase py-5 text-gray-300">Oct 2020 - Dec 2022</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Participated in the &quot;do Analysis&quot; app which is a data
            analysis and collection platform for social media platforms.
          </li>
          <li>
            Updated{" "}
            <a
              href={"https://techytypes.com/"}
              className="inline-block text-[#f7ab0a]"
            >
              TechyTypes
            </a>{" "}
            old website using new technologies [Next.js].
          </li>
          <li>
            Developed a lot of newsletters for both, company and Google for
            their events and initiatives in the Mena region.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperianceCard;
