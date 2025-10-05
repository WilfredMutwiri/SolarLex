// contact page
import React from 'react';
import solar2 from '@/assets/solar2.jpg';

export const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 pt-28">
      <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6 uppercase text-center">
        <span className="text-secondary">~</span> Get in Touch{" "}
        <span className="text-secondary">~</span>
      </h2>
      <p className="text-lg mb-6 text-center">
        We'd love to hear from you! Whether you have questions about our programs, want to get involved, or just want to say hello, feel free to reach out.
      </p>
      <div className="flex-col md:flex-row justify-center items-center gap-6">
        <div className='flex-1'>
          <img src={solar2} alt="Contact Installation" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        </div>
        <div className="flex-1">
          <form className="space-y-4 pt-4 md:pt-0">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 rounded-md p-2" placeholder="Enter Your Full Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" id="email" className="w-full border border-gray-300 rounded-md p-2" placeholder="Enter Your Email Address" />
            </div>
            <div>
              <label htmlFor="message" className="  block text-sm font-medium mb-1">Message</label>
              <textarea id="message" className="w-full border border-gray-300 rounded-md p-2" rows="4" placeholder="Type your message here..."></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Us</h2>
        <p className="text-base md:text-lg mb-4">
          You can also reach us via email at +254701234567 or follow us on social media for the latest updates and news.
        </p>
      </div>
    </div>
  );
}   