import { Card } from "@/components/ui/card";
import { Lightbulb, Users, BookOpen, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    icon: Lightbulb,
    title: "The Solar Light",
    description: "The small invention with an instant impact",
  },
  {
    icon: Users,
    title: "Solar Entrepreneurs",
    description: "Working with local communities means we can reach further, faster",
  },
  {
    icon: BookOpen,
    title: "Bright Learning",
    description: "Solar lights mean children can study & learn after dark",
  },
  {
    icon: HeartPulse,
    title: "Powering Healthcare",
    description: "Clean, safe light ensures that clinics are safe for all, no matter the time of day",
  },
];

export const ProgramCards = () => {
  return (
    <section id="programs" className="py-16 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow group">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{program.description}</p>
                <Button variant="link" className="p-0 h-auto">
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
