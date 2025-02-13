import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
          alt="Students studying"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-600/80" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Rent, Trade, Save – <span className="text-teal-300">JustTradeMore!</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Your campus marketplace for affordable rentals. Share resources, save money, and help your fellow students.
        </p>
        <button className="bg-white text-teal-900 px-8 py-4 rounded-lg text-lg font-semibold flex items-center hover:bg-teal-50 transition-colors">
          <Search className="mr-2" />
          Explore Available Rentals
        </button>
      </div>
    </div>
  );
};

export default Hero;