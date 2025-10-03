import impactBg from "@/assets/impact-bg.jpg";

const stats = [
  {
    number: "2.4M",
    label: "lights distributed worldwide",
  },
  {
    number: "13.1M",
    label: "people in sub-Saharan Africa reached by clean, safe, affordable light",
  },
  {
    number: "$312M",
    label: "saved by families a year",
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
