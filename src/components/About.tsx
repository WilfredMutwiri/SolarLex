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
              SquidLight Solar Africa is dedicated to bringing clean, renewable solar energy to
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
        {/* mission,Vision and Core Values section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-center">Our Mission</h3>
              <p className="text-gray-700 text-center">
                To provide sustainable solar energy solutions to underserved communities, improving quality of life and fostering economic growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-center">Our Vision</h3 >
              <p className="text-gray-700 text-center">
                A world where every community has access to clean, affordable, and reliable solar energy, empowering individuals and protecting the planet.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-center">Core Values</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Integrity: We operate with transparency and honesty in all our endeavors.</li>
                <li>Empowerment: We believe in empowering communities through education and access to resources.</li>
                <li>Sustainability: We are committed to environmentally responsible practices.</li>
                <li>Collaboration: We work together with partners and communities to achieve shared goals.</li>
                <li>Innovation: We embrace new technologies and approaches to maximize impact.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* partner with us section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 uppercase text-center mt-16">  
            <span className="text-secondary">~</span> Partner With Us{" "}
            <span className="text-secondary">~</span>
          </h2>
          <p className="text-lg text-gray-700 text-center">
            We collaborate with a diverse range of partners, including local communities, NGOs, government agencies, and corporate sponsors. Together, we can amplify our impact and drive meaningful change. If you are interested in partnering with us, please reach out to discuss potential opportunities.
          </p>  
          <div>
            <div className="flex justify-center">
              <button className="mt-10 text-sm md:text-base px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary/90 transition duration-500 w-44"
              onClick={() => window.location.href = '/Contact'}
              >
                Contact Us
              </button>
            </div>
            <div>
              {/* whatapp chat */}
              <p className="text-gray-500 text-sm text-center mt-2">Or chat with us on WhatsApp: <a href="https://wa.me/1234567890" className="text-green-500 hover:underline">+254 700 112 233</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
