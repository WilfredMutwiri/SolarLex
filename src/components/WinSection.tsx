import { Button } from "@/components/ui/button";

export const WinSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6 uppercase">
              A 100% win for people and planet
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-secondary-foreground text-lg leading-relaxed">
              When the sun goes down the working day ends for millions of people across sub-Saharan Africa. 
              The only option is to ignite kerosene lamps and paraffin candles, which emit toxic fumes into 
              people's lungs and into the earth's atmosphere.
            </p>
            <p className="text-secondary-foreground text-lg leading-relaxed">
              Yet with the power of solar and the flick of a switch you can change the story. Every time 
              someone switches on a solar powered light, it's an instant win for people and the planet. 
              Real, sustainable change can happen. And it can happen overnight.
            </p>
            <Button variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Make sustainable change happen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
