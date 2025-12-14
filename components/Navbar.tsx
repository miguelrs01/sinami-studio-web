import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SAFE_ASSETS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Juegos', path: '/games' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-orange-50 shadow-md transition-transform group-hover:scale-105 group-hover:rotate-3">
               <img 
                 src={SAFE_ASSETS.LOGO} 
                 alt="Sinami Studio Logo" 
                 className="w-full h-full object-cover p-1"
                 onError={(e) => { (e.currentTarget as HTMLImageElement).src = SAFE_ASSETS.FALLBACK_LOGO; }}
               />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-gray-800 group-hover:text-orange-600 transition-colors">
              SINAMI <span className="text-red-500">STUDIO</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-bold transition-colors duration-200 ${
                  isActive(link.path) 
                    ? 'text-orange-600' 
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-orange-600 focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-base font-bold text-gray-700 hover:text-orange-600 hover:bg-orange-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
