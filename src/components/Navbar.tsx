import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-teal-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">JustTradeMore</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-teal-600 transition-colors">Home</a>
            <a href="/browse" className="text-gray-700 hover:text-teal-600 transition-colors">Browse Listings</a>
            <a href="/post" className="text-gray-700 hover:text-teal-600 transition-colors">Post an Item</a>
            <a href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">Contact Us</a>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
              Sign In
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Home</a>
              <a href="/browse" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Browse Listings</a>
              <a href="/post" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Post an Item</a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Contact Us</a>
              <button className="w-full text-left px-3 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;