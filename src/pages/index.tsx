import {
  Header,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  ContactMe,
} from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white min-h-screen snap-y snap-mandatory overflow-hidden z-0">
      <Head>
        <title>Sarhan&apos;s Portfolio</title>
        <meta name="description" content="Khaled Sarhan's portforlio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Header />
        {/* <main> */}
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        <section id="experience" className="snap-center">
          <Experience />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-center">
          <Projects />
        </section>
        <section id="contact" className="snap-center">
          <ContactMe />
        </section>
        {/* </main> */}
      </div>
    </div>
  );
}
