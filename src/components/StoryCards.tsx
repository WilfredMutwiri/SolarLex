import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const stories = [
  {
    image: story1,
    title: "100% Energy Access in Kasakula",
    description: "In one of Malawi's poorest and most remote regions, every household, school and the local clinic now has clean, reliable solar power. Kasakula is the first community in the country to reach 100% energy access through our Energy-as-a-Service model.",
  },
  {
    image: story2,
    title: "A Spark of Change in Chikonka Village",
    description: "Olive Hamasamu's story of resilience in the face of drought and hardship is a testament to the power of community and the impact of solar lighting. As a health care volunteer and farmer, she's transformed her family's future with solar power.",
  },
  {
    image: story3,
    title: "Thauzeni's First Night with Solar",
    description: "Without access to reliable light, Thauzeni and his family faced several challenges. The darkness made it difficult and dangerous to move around. The introduction of the solar home system brought transformative changes.",
  },
];

export const StoryCards = () => {
  return (
    <section id="stories" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{story.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{story.description}</p>
                <Button variant="link" className="p-0 h-auto">
                  Learn more →
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
