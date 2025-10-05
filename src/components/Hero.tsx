import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden mt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-primary p-8 md:p-12 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 uppercase tracking-tight">
              Create lasting, meaningful impact
            </h1>
            <a href="/Donate">
            <Button variant="secondary" size="lg" className="group">
              Donate today
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
