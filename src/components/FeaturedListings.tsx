import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'MacBook Pro 2023',
    category: 'Electronics',
    price: '₹3,500/day',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Calculus Textbook',
    category: 'Books',
    price: '₹1,200/week',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Tennis Racket Set',
    category: 'Sports',
    price: '₹800/day',
    image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Scientific Calculator',
    category: 'Electronics',
    price: '₹400/day',
    image: 'https://images.unsplash.com/photo-1564037276144-82f3524b2ddb?auto=format&fit=crop&q=80'
  }
];

const FeaturedListings = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= listings.length ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? listings.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Rentals</h2>
        
        <div className="relative">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {listings.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <span className="text-sm text-teal-600 font-medium">{item.category}</span>
                      <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                      <p className="text-gray-600 mt-2">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;