import { Experience } from "@/components/experience/experience";
import { HeroSection } from "@/components/hero/hero";
import { Navbar } from "@/components/navbar/navbar";
import { Overview } from "@/components/overview/overview";
import { Work } from "@/components/work/work";
import { Skills } from "@/components/skills/skills";
import { Connect } from "./components/connect/connect";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
        <Overview />
        <Experience />
        <Work />
        <Skills />
        <Connect />
      </main>
    </>
  );
}
