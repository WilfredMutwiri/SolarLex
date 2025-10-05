// About page component
import React from "react";
import holdBulb from "@/assets/holdBulb.jpg"
export const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 pt-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 uppercase text-center">
          <span className="text-secondary">~</span> About Us{" "}
          <span className="text-secondary">~</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="flex-1">
            <img
              src={holdBulb}
              className="w-[600px] rounded-md hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1">
            <p className="text-lg text-gray-700">
              SolarLex is dedicated to bringing clean, renewable solar energy to
              communities in need around the world. Our mission is to improve
              lives by providing sustainable energy solutions that empower
              individuals and foster economic growth. Since our founding, we
              have successfully implemented numerous solar projects that have
              transformed communities, reduced carbon footprints, and created
              lasting impact.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              We believe that access to clean energy is a fundamental human
              right and are committed to making solar power accessible and
              affordable for all. Join us in our journey to create a brighter,
              more sustainable future for everyone.
            </p>
            
            <div className="flex space-x-10">
            {/* join button */}
            <button className="mt-10 text-sm md:text-base px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary/90 transition duration-500 w-44"
            onClick={() => window.location.href = '/Signup'}
            >
              Join Us
            </button>
            <button className="mt-10 text-sm md:text-base px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary/90 transition duration-500 w-44"
            onClick={() => window.location.href = '/Donate'}
            >
              Donate Today
            </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
