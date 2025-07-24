"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="NGO Logo"
            className="h-10 w-auto rounded-lg shadow-md"
          />
          <div className="leading-tight">
            <h1 className="text-xl font-bold text-blue-800">ICC</h1>
            <p className="text-sm text-blue-700">International Childcare</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#about" className="text-slate-800 hover:text-black font-medium">About Us</a>
          <a href="#contact" className="text-slate-800 hover:text-black font-medium">Contact</a>
          <a href="#vision" className="text-slate-800 hover:text-black font-medium">Vision</a>
          <a
            href="#donate"
            className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition font-medium"
          >
            Donate Now
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <a href="#about" className="block text-gray-700 hover:text-black">About Us</a>
          <a href="#contact" className="block text-gray-700 hover:text-black">Contact</a>
          <a href="#vision" className="block text-gray-700 hover:text-black">Vision</a>
          <a
            href="#donate"
            className="block text-center bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
          >
            Donate Now
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
