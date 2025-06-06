import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-black">C</span>
              <span className="text-[#cf1dc9]">ONSPAT</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className={`transition-colors ${isActive('/') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-[#cf1dc9] transition-colors"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-[#cf1dc9] transition-colors"
            >
              Servicios
            </button>
            <Link 
              to="/ubicanos"
              className={`transition-colors ${isActive('/ubicanos') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
            >
              Ubícanos
            </Link>
            <button 
              onClick={() => scrollToSection('contactanos')}
              className="text-gray-700 hover:text-[#cf1dc9] transition-colors"
            >
              Contáctanos
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="py-2 text-left text-gray-700 hover:text-[#cf1dc9] transition-colors"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="py-2 text-left text-gray-700 hover:text-[#cf1dc9] transition-colors"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="py-2 text-left text-gray-700 hover:text-[#cf1dc9] transition-colors"
              >
                Servicios
              </button>
              <Link 
                to="/ubicanos"
                className={`py-2 transition-colors ${isActive('/ubicanos') ? 'text-[#cf1dc9] font-medium' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Ubícanos
              </Link>
              <button 
                onClick={() => scrollToSection('contactanos')}
                className="py-2 text-left text-gray-700 hover:text-[#cf1dc9] transition-colors"
              >
                Contáctanos
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;