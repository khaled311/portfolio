import { Experience } from "./components/experience/experience";
import { HeroSection } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { Overview } from "./components/overview/overview";
import { ScrollIndicator } from "./components/scroll-indicator/scroll-indicator";
import { Work } from "./components/work/work";

export default function Home() {
  return (
    <>
      {/* <ScrollIndicator /> */}
      <main>
        <Navbar />
        <HeroSection />
        <Overview />
        <Experience />
        <Work />
      </main>
    </>
  );
}
