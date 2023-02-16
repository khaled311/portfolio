/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import { BackgroundCircles } from "@/components";
import { myImg } from "@/assets";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      "Hello, I'm Khaled Sarhan.",
      "I'm a front-end developer.",
      "I also have some knowledge in backend.",
    ],
    loop: true,
    delaySpeed: 2500,
    typeSpeed: 70,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="absolute">
        <img
          src="/assets/small.png"
          alt=""
          className="rounded-full relative h-32 w-32 mx-auto object-cover"
        />
        <h2 className="text-sm uppercase text-gray-500 py-2 tracking-widest">
          Software Engineer
        </h2>
        <h1 className="text-3xl lg:text-4xl font-semibold px-10">
          <span className="mr-1">{text}</span>
          <Cursor cursorColor="#f7ab0a" />
        </h1>

        <div className="mt-4">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#project"}>
            <button className="heroButton">Project</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
