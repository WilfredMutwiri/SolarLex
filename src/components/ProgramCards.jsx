import { Card } from "@/components/ui/card";
import { Lightbulb, Users, BookOpen, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


const programs = [
  {
    slug: "the-light-of-change",
    icon: Lightbulb,
    title: "The Light of Change",
    description: "A simple solar lamp with the power to transform lives instantly.",
  },
  {
    slug: "community-solar-champions",
    icon: Users,
    title: "Community Solar Champions",
    description: "Partnering with local innovators helps solar energy reach more homes, faster and farther.",
  },
  {
    slug: "learning-in-the-light",
    icon: BookOpen,
    title: "Learning in the Light",
    description: "With solar lamps, children can study safely after sunset and dream beyond daylight.",
  },
  {
    slug: "lighting-up-healthcare",
    icon: HeartPulse,
    title: "Lighting Up Healthcare",
    description: "Reliable, clean light keeps clinics running safely around the clock, protecting every life.",
  },
];

export const ProgramCards = () => {
  const navigate=useNavigate();

  return (
    <section id="programs" className="py-16 md:py-20 bg-muted pt-28">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-base md:text-4xl font-bold text-secondary-foreground mb-6 uppercase text-center"><span className="text-secondary">~</span> The brilliance of solar energy <span className="text-secondary">~</span></h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                <Button variant="link" className="p-0 h-auto" onClick={()=>navigate(`/programs/${program.slug}`)}>
                  Learn more →
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
