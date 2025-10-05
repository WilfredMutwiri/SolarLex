import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WinSection } from "@/components/WinSection";
import { StoryCards } from "@/components/StoryCards";
import { ProgramCards } from "@/components/ProgramCards";
import { ImpactStats } from "@/components/ImpactStats";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About/>
      <WinSection />
      <StoryCards />
      <ProgramCards />
      <ImpactStats />
      <Newsletter />
    </div>
  );
};

export default Index;
