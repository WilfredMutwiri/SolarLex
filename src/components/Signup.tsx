// signup page tp enroll users to the mailing list
import React from "react";
import solarImg from "@/assets/solar.jpg";

export const Signup = () => {
  return (
    <section id="signup" className="py-16 bg-gray-50 pt-28">
      <div className="mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 uppercase text-center">
          <span className="text-secondary">~</span> Join Our Mailing List{" "}
          <span className="text-secondary">~</span>
        </h2>
        <p className="text-lg text-gray-700 text-center mb-8">
          Sign up for our newsletter to receive the latest updates on our solar
          projects, success stories, and ways you can get involved.
        </p>
        <div className="flex flex-row">
          <div className="flex-1 mr-8">
            <img
              src={solarImg}
              className="w-full object-cover rounded-md mb-8"
            />
          </div>
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-md hover:bg-secondary/90 transition duration-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
