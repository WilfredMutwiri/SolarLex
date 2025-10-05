// donations page
import React from 'react';
import solar3 from '@/assets/solar3.jpg'

export const Donations = () => {
  return (
    <div className="container mx-auto px-4 py-16 pt-28">
        <h2 className="text-xl md:text-4xl font-bold text-secondary-foreground mb-6 uppercase text-center">
          <span className="text-secondary">~</span> Support Our Mission{" "}
          <span className="text-secondary">~</span>
        </h2>      <p className="text-lg mb-6 text-center">
        Your generous donations help us bring solar energy to communities in need around the world.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-baseline md:items-center gap-6">
        <div className='flex-1'>
        <img src={solar3} alt="Solar Panel Installation" className="w-full md:w-1/2 rounded-lg shadow-lg" />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-4">Make a Donation</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" id="name" className="w-full border border-gray-300 rounded-md p-2" placeholder="Enter Your Full Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" id="email" className="w-full border border-gray-300 rounded-md p-2" placeholder="Enter Your Email Address" />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium mb-1">Donation Amount</label>
              <input type="number" id="amount" className="w-full border border-gray-300 rounded-md p-2" placeholder="Ksh 50" />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors">
              Donate Now
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Other Ways to Support</h2>
        <p className="text-base md:text-lg mb-4">
          If you're unable to donate, you can still help by volunteering, spreading the word about our mission, or partnering with us.
        </p>
      </div>
    </div>
  );
}