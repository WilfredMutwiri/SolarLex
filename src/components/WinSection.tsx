import { Button } from "@/components/ui/button";

export const WinSection = () => {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6 uppercase">
              A brighter win for people and the planet{" "}
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-secondary-foreground text-lg leading-relaxed">
              When night falls, millions of families across sub-Saharan Africa
              are left in darkness. Many turn to kerosene lamps or paraffin
              candles which is a times costly, hazardous, and harmful to both health and the
              environment.
            </p>
            <p className="text-secondary-foreground text-lg leading-relaxed">
              But with clean solar energy, a single light can change everything.
              One simple switch brings safety, opportunity, and hope, while also
              protecting the planet we share. Every solar light switched on is a
              small victory for people and the Earth.
            </p>
            <Button
              variant="outline"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
            >
              Together, we can power lasting, sustainable progress.
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
