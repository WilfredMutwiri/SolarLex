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

const testimonials = [
  {
    quote: "SolarLex transformed our village. We now have light at night, and my children can study after dark.",
    name: "Amina, Kenya",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
  },  
  {
    quote: "Thanks to SolarLex, our community has access to clean energy. It has improved our quality of life significantly.",
    name: "Mark, Kenya",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    quote: "The solar lights provided by SolarLex have been a game-changer for our family. We save money and help the environment.",
    name: "Grace, Kenya",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
  },
  {
    quote: "SolarLex's initiative has brought hope and progress to our community. We are grateful for their support.",
    name: "John, Kenya",
    image: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    quote: "With SolarLex's solar solutions, we can now work and study after sunset. It has truly changed our lives.",
    name: "Lina, Kenya",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
];


export const ImpactStats = () => {
  return (
    <div>
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
    {/* testimonials section */}
    <section>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-xl md:text-4xl font-bold text-secondary-foreground mb-6 uppercase text-center">
          <span className="text-secondary">~</span> What others Have To Say!{" "}
          <span className="text-secondary">~</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
              <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center mt-4 gap-4">
                <img
                  src={`${testimonial.image}`} className="w-12 h-12 rounded-full mr-4" 
                  alt={testimonial.name}
                />
                <div className="text-gray-900 font-semibold">{testimonial.name}</div>
              </div>
            </div>
          ))}
        </div>  
      </div>
    </section>
    </div>
  );
};
