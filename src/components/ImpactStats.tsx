import impactBg from "@/assets/impact-bg.jpg";

const stats = [
{
  number: "2.4M",
  label: "solar lights bringing brighter nights to homes worldwide",
},
{
  number: "13.1M",
  label: "lives across sub-Saharan Africa illuminated with clean, reliable energy",
},
{
  number: "$312M",
  label: "saved by families every year through affordable solar power",
},
];

export const ImpactStats = () => {
  return (
    <section 
      id="impact" 
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-7xl font-bold text-secondary mb-4">
                {stat.number}
              </div>
              <p className="text-xl text-white font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
