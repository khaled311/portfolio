import Image from "next/image";

const images = [
  "/HtmlIcon.svg",
  "/CssIcon.svg",
  "/ReactIcon.svg",
  "/TSIcon.svg",
  "/NextIcon.svg",
  "/RQIcon.svg",
  "/TailwindcssIcon.svg",
];

export const Skills = () => {
  return (
    <div className="mt-[240px]">
      <div className="container">
        <div className="">
          <h2 className="text-base font-semibold text-white opacity-30 text-center md:mb-[64px] mb-6 uppercase">
            Skills
          </h2>
          <div className="flex gap-5 items-center justify-center flex-wrap">
            {images?.map((icon) => (
              <Image
                key={icon}
                src={icon}
                width={66}
                height={66}
                alt={icon}
                draggable="false"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
