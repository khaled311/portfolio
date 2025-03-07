import Image from "next/image";

export const Overview = () => {
  return (
    <section className="container">
      <div className="flex md:flex-row flex-col items-center md:gap-[90px] gap-6 md:mx-[60px]">
        <div className="shrink-0">
          <Image
            src="/me.jpg"
            width={360}
            height={450}
            alt="me"
            className="mix-blend-luminosity"
          />
        </div>
        <div className="md:p-[52px] p-4 text-center md:text-start">
          <h2 className="font-extrabold md:text-[34px] text-xl leading-[46px] mb-8 max-w-[335px]">
            Solving real-world problems through development
          </h2>
          <p className="text-sm md:ps-9">
            As a dedicated front-end developer with expertise in responsive web
            design, I&apos;m committed to contributing to team success. I have
            extensive experience in the software product development life cycle
            and pride myself on writing clear, efficient, and maintainable code.
            I stay up-to-date with industry best practices to deliver
            cutting-edge websites with exceptional user experiences. With a
            collaborative mindset and a focus on detail, I&apos;m eager to help
            you achieve your web development goals.
          </p>
        </div>
      </div>
    </section>
  );
};
