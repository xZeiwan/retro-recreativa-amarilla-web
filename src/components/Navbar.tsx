
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 bg-retro-dark border-b-2 border-retro-yellow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="font-pixel text-retro-yellow text-xl">ARCADE-R</span>
          </div>
          
          {/* Menú para pantallas medianas y grandes */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="font-pixel text-retro-yellow text-sm hover:text-retro-red transition-colors">INICIO</a>
            <a href="#videos" className="font-pixel text-retro-yellow text-sm hover:text-retro-red transition-colors">VIDEOS</a>
            <a href="#funcionalidades" className="font-pixel text-retro-yellow text-sm hover:text-retro-red transition-colors">FUNCIONALIDADES</a>
          </div>
          
          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-retro-yellow hover:text-retro-yellow focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menú móvil desplegable */}
      <div className={cn(
        "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
        isOpen ? "max-h-60" : "max-h-0"
      )}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-retro-dark border-t border-retro-yellow">
          <a 
            href="#inicio" 
            className="block px-3 py-2 font-pixel text-retro-yellow text-sm hover:text-retro-red"
            onClick={toggleMenu}
          >
            INICIO
          </a>
          <a 
            href="#videos" 
            className="block px-3 py-2 font-pixel text-retro-yellow text-sm hover:text-retro-red"
            onClick={toggleMenu}
          >
            VIDEOS
          </a>
          <a 
            href="#funcionalidades" 
            className="block px-3 py-2 font-pixel text-retro-yellow text-sm hover:text-retro-red"
            onClick={toggleMenu}
          >
            FUNCIONALIDADES
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
