"use client";
import Image from "next/image";

export const Experience = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="mt-[248px]">
        <h2 className="text-base font-semibold opacity-30 text-center md:mb-[82px] mb-6 uppercase">
          Experience
        </h2>
        <div className="relative md:grid grid-cols-2 grid-rows-3">
          <div
            className="absolute top-4 md:left-1/2 left-0 w-1 bg-gradient-to-b from-white from-[39%] to-[39%] to-[#363441]"
            style={{
              height: "calc((100%/3) * 2)",
            }}
          >
            <div className="w-2 h-2 rounded-full bg-white absolute -top-1 left-1/2 -translate-x-1"></div>
            <div className="w-2 h-2 rounded-full bg-[#363441] absolute -bottom-1 left-1/2 -translate-x-1"></div>
          </div>
          <div className="pb-6 md:mb-14 mb-6 px-4">
            <Image
              src={"/sdaia.svg"}
              alt="SDAIA"
              width={100}
              height={42}
              draggable="false"
            />
            <h2 className="m-[24px_0_8px] text-base text-white">
              Senior Front-end Developer
            </h2>
            <span className="text-white/50 text-sm mb-4 block">
              NOV 2023 - NOV 2024 / Riyadh, Saudi Arabia
            </span>
            <ul className="list-disc space-y-2">
              <li className="text-sm text-white">
                Led the development of advanced front-end solutions to support
                SDAIA’s data and AI initiatives, delivering high-performance and
                innovative web applications.
              </li>
              <li className="text-sm text-white">
                Collaborated with cross-functional teams to translate complex
                project requirements into intuitive, user-friendly, and visually
                appealing applications.
              </li>
              <li className="text-sm text-white">
                Optimized website performance and user engagement using
                cutting-edge front-end technologies and best practices.
              </li>
              <li className="text-sm text-white">
                Enhanced development processes and standards, promoting a
                culture of innovation and continuous improvement. Actively
                participated in mentorship and knowledge-sharing sessions to
                support team development and professional growth.
              </li>
            </ul>
          </div>
          <div className="pb-6 col-start-2 row-start-2 ps-[90px] px-4">
            <Image
              src={"/techytypes.svg"}
              alt="SDAIA"
              width={100}
              height={42}
              draggable="false"
            />
            <h2 className="m-[24px_0_8px] text-base text-white">
              Front-end Developer
            </h2>
            <span className="text-white/50 text-sm mb-4 block">
              OCT 2020 - OCT 2023 / Cairo, Egypt
            </span>
            <ul className="list-disc space-y-2">
              <li className="text-sm text-white">
                Played a key role in developing the &quot;do Analysis&quot;
                application, a platform designed for data collection and
                analysis from social media channels.
              </li>
              <li className="text-sm text-white">
                Leveraged modern technologies to enhance and optimize the
                TechyTypes website.
              </li>
              <li className="text-sm text-white">
                Designed and developed multiple newsletters for internal and
                external stakeholders, including <strong>Google</strong>,
                showcasing events and initiatives across the MENA region.
              </li>
            </ul>
          </div>
          <div className="pb-6 col-start-1 row-start-3 ps-[90px] px-4">
            <Image
              src={"/tasawk.svg"}
              alt="SDAIA"
              width={60}
              height={42}
              draggable="false"
            />
            <h2 className="m-[24px_0_8px] text-base text-white">
              UI/Opencart Developer
            </h2>
            <span className="text-white/50 text-sm mb-4 block">
              JAN 2019 - OCT 2020 / Mansoura, Egypt
            </span>
            <ul className="list-disc space-y-2">
              <li className="text-sm text-white">
                Developed and maintained custom e-commerce websites and
                applications using OpenCart, ensuring high performance and user
                engagement.
              </li>
              <li className="text-sm text-white">
                Collaborated with clients to design intuitive and responsive
                user interfaces tailored to their business needs in the MENA
                market.
              </li>
              <li className="text-sm text-white">
                Implemented front-end enhancements and optimized site
                functionality, improving user experience and driving customer
                satisfaction.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
