import impactBg from "@/assets/impact-bg.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "SquidLight Solar Africa  transformed our village. We now have light at night, and my children can study after dark.",
    name: "Amina, Kenya",
    image: "https://randomuser.me/api/portraits/women/62.jpg",
  },
  {
    quote:
      "Thanks to SquidLight Solar Africa , our community has access to clean energy. It has improved our quality of life significantly.",
    name: "Mark, Kenya",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    quote:
      "The solar lights provided by SquidLight Solar Africa  have been a game-changer for our family. We save money and help the environment.",
    name: "Grace, Kenya",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
  },
  {
    quote:
      "SquidLight's initiative has brought hope and progress to our community. We are grateful for their support.",
    name: "John, Kenya",
    image: "https://randomuser.me/api/portraits/women/69.jpg",
  },
  {
    quote:
      "With SquidLight's solar solutions, we can now work and study after sunset. It has truly changed our lives.",
    name: "Lina, Kenya",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
];

const stats = [
  {
    number: 2.4,
    suffix: "M",
    label: "solar lights bringing brighter nights to homes worldwide",
  },
  {
    number: 13.1,
    suffix: "M",
    label:
      "lives across sub-Saharan Africa illuminated with clean, reliable energy",
  },
  {
    number: 312,
    prefix: "$",
    suffix: "M",
    label: "saved by families every year through affordable solar power",
  },
];

export const ImpactStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <div>
      {/* ===== Impact Section ===== */}
      <section
        id="impact"
        ref={ref}
        className="relative py-20 md:py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${impactBg})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-7xl font-bold text-secondary mb-4">
                  {animate ? (
                    <CountUp
                      key={index + Date.now()}
                      start={0}
                      end={stat.number}
                      duration={3}
                      decimals={stat.number % 1 !== 0 ? 1 : 0}
                      prefix={stat.prefix || ""}
                      suffix={stat.suffix || ""}
                    />
                  ) : (
                    `${stat.prefix || ""}0${stat.suffix || ""}`
                  )}
                </div>
                <p className="text-xl text-white font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden py-16 bg-background group">
        <h2 className="text-xl md:text-4xl font-bold text-secondary-foreground mb-6 uppercase text-center">
          <span className="text-secondary">~</span> What others Have To Say!{" "}
          <span className="text-secondary">~</span>
        </h2>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex animate-scroll-x group-hover:[animation-play-state:paused]"
            style={{ minWidth: "max-content" }}
          >
            {/* Duplicate testimonials multiple times to ensure continuous flow */}
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, index) => (
                <div
                  key={index}
                  className="w-[450px] bg-primary mx-6 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex-shrink-0"
                >
                  <p className="text-gray-50 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center mt-4 gap-4">
                    <img
                      src={testimonial.image}
                      className="w-12 h-12 rounded-full"
                      alt={testimonial.name}
                    />
                    <div className="text-gray-50 font-semibold">
                      {testimonial.name}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
