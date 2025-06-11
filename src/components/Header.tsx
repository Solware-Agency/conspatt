import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (section: string) => {
    return activeSection === section;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const isOnUbicanosPage = location.pathname === '/ubicanos';

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-24 h-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isOnUbicanosPage ? (
              <>
                <Link 
                  to="/" 
                  className={`transition-colors ${isActive('inicio') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                >
                  Inicio
                </Link>
                <Link 
                  to="/#nosotros" 
                  className={`transition-colors ${isActive('nosotros') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                >
                  Nosotros
                </Link>
                <Link 
                  to="/#servicios" 
                  className={`transition-colors ${isActive('servicios') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                >
                  Servicios
                </Link>
                <Link 
                  to="/ubicanos" 
                  className={`transition-colors ${isActive('ubicanos') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                >
                  Ubícanos
                </Link>
                <Link 
                  to="/#contactanos" 
                  className={`transition-colors ${isActive('contactanos') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                >
                  Contáctanos
                </Link>
              </>
            ) : (
              <>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className={`transition-colors ${isActive('inicio') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className={`transition-colors ${isActive('nosotros') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                >
                  Nosotros
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className={`transition-colors ${isActive('servicios') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                >
                  Servicios
                </button>
                <Link 
                  to="/ubicanos"
                  className={`transition-colors ${isActive('ubicanos') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                >
                  Ubícanos
                </Link>
                <button 
                  onClick={() => scrollToSection('contactanos')}
                  className={`transition-colors ${isActive('contactanos') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
                >
                  Contáctanos
                </button>
              </>
            )}
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
              <Link 
                to="/" 
                className="py-2 text-left text-gray-700 hover:text-[#cf1dc9] transition-colors"
              >
                Inicio
              </Link>
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
                className={`py-2 transition-colors ${isActive('ubicanos') ? 'text-[#cf1dc9] font-medium' : 'text-gray-700 hover:text-[#cf1dc9]'}`}
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