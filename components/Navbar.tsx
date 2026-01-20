
import React, { useState } from 'react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <i className="fas fa-bolt text-white text-xl"></i>
          </div>
          <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            ASTRA<span className="text-primary">AI</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors font-medium">Features</a>
          <a href="#magic" className="text-gray-300 hover:text-white transition-colors font-medium">AI Magic</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors font-medium">Pricing</a>
          <button className="px-6 py-2.5 bg-white text-dark rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10">
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white focus:outline-none">
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col gap-4 animate-fade-in">
          <a href="#features" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white">Features</a>
          <a href="#magic" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white">AI Magic</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-lg text-gray-300 hover:text-white">Pricing</a>
          <button className="w-full px-6 py-3 bg-primary text-white rounded-xl font-bold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
