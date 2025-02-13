import React from 'react';
import { School, DollarSign, Search, Shield, MapPin } from 'lucide-react';

const features = [
  {
    icon: School,
    title: 'University-Based Rentals',
    description: 'Connect with students from your campus for convenient rentals'
  },
  {
    icon: DollarSign,
    title: 'Save Money, Earn Money',
    description: 'Rent what you need and earn from what you don\'t use'
  },
  {
    icon: Search,
    title: 'Easy Search & Filters',
    description: 'Find exactly what you need with smart search options'
  },
  {
    icon: Shield,
    title: 'Secure Payments & Reviews',
    description: 'Safe transactions and trusted user reviews'
  },
  {
    icon: MapPin,
    title: 'Proximity-Based Matching',
    description: 'Find rentals close to your location'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why JustTradeMore?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;