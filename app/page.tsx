import { HeroSection } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import OverviewSection from "./components/overview/overview";
import { ScrollIndicator } from "./components/scroll-indicator/scroll-indicator";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <main>
        <Navbar />
        <HeroSection />
        <OverviewSection />
      </main>
    </>
  );
}
