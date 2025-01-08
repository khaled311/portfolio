"use client";

import { ChevronDown } from "@/assets";
import File from "@/assets/File";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export const HeroSection = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Senior Front-End Developer."],
      typeSpeed: 100,
      backSpeed: 50,
      // loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className="h-screen flex items-center justify-center flex-col">
      <div className="text-center mt-auto">
        <span className="text-5xl font-bold bg-gradient-to-r from-[#636FDF] via-[#A647CC] to-[#E14D8F] bg-clip-text text-transparent">
          Hello,
        </span>
        <h1 className="text-4xl font-extrabold mt-3 mb-8">
          <p className="mb-3">I’m Khaled Sarhan,</p>
          <span ref={el}></span>
        </h1>
        <a
          href="/cv.pdf"
          download
          className="border border-solid border-white/10 inline-flex items-center justify-center m-auto p-[16px_24px] rounded-full text-white hover:bg-white hover:text-black transition-all group gap-2"
        >
          <File />
          <span>Resume</span>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center mt-auto pb-4 gap-4 animate-bounce">
        <span>Scroll</span>
        <ChevronDown />
      </div>
    </section>
  );
};

{
  /* <span className="font-bold bg-gradient-to-r from-[#636FDF] via-[#A647CC] via-[#E14D8F] via-[#EF9D5D] to-[#EED282] bg-clip-text text-transparent">  */
}
{
  /* This is the original code for linear animation */
}
