import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";

const stories = [
  {
    image: story1,
    title: "Pokot Shines with Solar Power",
    description:
      "In one of Kenya’s most remote and underserved regions, clean solar energy now lights every home, school, and health center. Pokot has become a beacon of progress — the first community to achieve universal energy access through our solar empowerment program.",
  },
  {
    image: story2,
    title: "Olive’s Light of Resilience",
    description:
      "Through seasons of drought and uncertainty, Olive Hamasamu found strength in solar. As both a farmer and a health volunteer in Chikonka Village, she’s turned simple solar light into lasting opportunity — for her family, her neighbors, and her community.",
  },
  {
    image: story3,
    title: "A New Dawn for Thauzeni’s Family",
    description:
      "Before solar arrived, nights were dark and dangerous for Thauzeni and his family. Now, their home glows with safety and hope. With a solar home system, life no longer stops when the sun sets — it begins anew under the light of clean energy.",
  },
];

export const StoryCards = () => {
  return (
    <section id="stories" className="py-16 md:py-20 bg-background pt-28">
      <div className="container mx-auto px-4">
        <div>
          <h2 className="text-base md:text-4xl font-bold text-secondary-foreground mb-6 uppercase text-center"><span className="text-secondary">~</span> Stories of Light & Hope <span className="text-secondary">~</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{story.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {story.description}
                </p>
                {/* <Button variant="link" className="p-0 h-auto">
                  Learn more →
                </Button> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
