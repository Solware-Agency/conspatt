import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (section: string) => {
    if (isOnUbicanosPage) {
      return section === 'ubicanos';
    }
    return activeSection === section;
  };

  const scrollToSection = (sectionId: string) => {
    try {
      if (isOnUbicanosPage) {
        navigate('/', { replace: true });
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const headerHeight = 80;
            const elementPosition = element.offsetTop - headerHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
        }
      }
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Error in scrollToSection:', error);
      navigate('/');
    }
  };

  const handleNavigation = (path: string) => {
    try {
      navigate(path);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = path;
    }
  };

  const isOnUbicanosPage = location.pathname === '/ubicanos';

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/');
          }}>
            <img 
              src="/logo.png" 
              alt="Logo Laboratorios Conspat" 
              className="w-20 sm:w-24 h-auto dark:brightness-0 dark:invert transition-all duration-300"
              onError={(e) => {
                console.error('Error loading logo:', e);
                e.currentTarget.style.display = 'none';
                const textLogo = document.createElement('span');
                textLogo.textContent = 'CONSPAT';
                textLogo.className = 'text-xl font-bold text-[#cf1dc9]';
                e.currentTarget.parentNode?.appendChild(textLogo);
              }}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {isOnUbicanosPage ? (
              <>
                <button 
                  onClick={() => handleNavigation('/')}
                  className={`transition-colors flex items-center h-full ${isActive('inicio') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]'}`}
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className={`transition-colors flex items-center h-full ${isActive('nosotros') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]'}`}
                >
                  Nosotros
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className={`transition-colors flex items-center h-full ${isActive('servicios') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]'}`}
                >
                  Servicios
                </button>
                <button 
                  onClick={() => handleNavigation('/ubicanos')}
                  className={`transition-colors flex items-center h-full ${isActive('ubicanos') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]'}`}
                >
                  Ubícanos
                </button>
                <button 
                  onClick={() => scrollToSection('contactanos')}
                  className={`transition-colors flex items-center h-full ${isActive('contactanos') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]'}`}
                >
                  Contáctanos
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className={`transition-colors flex items-center h-full ${isActive('inicio') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]'}`}
                >
                  Inicio
                </button>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className={`transition-colors flex items-center h-full ${isActive('nosotros') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]'}`}
                >
                  Nosotros
                </button>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className={`transition-colors flex items-center h-full ${isActive('servicios') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]'}`}
                >
                  Servicios
                </button>
                <button 
                  onClick={() => handleNavigation('/ubicanos')}
                  className={`transition-colors flex items-center h-full ${isActive('ubicanos') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]'}`}
                >
                  Ubícanos
                </button>
                <button 
                  onClick={() => scrollToSection('contactanos')}
                  className={`transition-colors flex items-center h-full ${isActive('contactanos') ? 'text-[#cf1dc9] font-medium border-b-2 border-[#cf1dc9] pb-1' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]'}`}
                >
                  Contáctanos
                </button>
              </>
            )}
            
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
          </nav>

          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-1">
              {isOnUbicanosPage ? (
                <>
                  <button 
                    onClick={() => handleNavigation('/')}
                    className={`py-3 px-4 text-left transition-colors rounded-lg ${isActive('inicio') ? 'text-[#cf1dc9] font-medium bg-[#cf1dc9]/10' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9] hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Inicio
                  </button>
                  <button 
                    onClick={() => scrollToSection('nosotros')}
                    className={`py-3 px-4 text-left transition-colors rounded-lg ${isActive('nosotros') ? 'text-[#cf1dc9] font-medium bg-[#cf1dc9]/10' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9] hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Nosotros
                  </button>
                  <button 
                    onClick={() => scrollToSection('servicios')}
                    className={`py-3 px-4 text-left transition-colors rounded-lg ${isActive('servicios') ? 'text-[#cf1dc9] font-medium bg-[#cf1dc9]/10' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9] hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Servicios
                  </button>
                  <button 
                    onClick={() => handleNavigation('/ubicanos')}
                    className={`py-3 px-4 text-left transition-colors rounded-lg ${isActive('ubicanos') ? 'text-[#cf1dc9] font-medium bg-[#cf1dc9]/10' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9] hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Ubícanos
                  </button>
                  <button 
                    onClick={() => scrollToSection('contactanos')}
                    className={`py-3 px-4 text-left transition-colors rounded-lg ${isActive('contactanos') ? 'text-[#cf1dc9] font-medium bg-[#cf1dc9]/10' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9] hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Contáctanos
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => scrollToSection('inicio')}
                    className={`py-3 px-4 text-left transition-colors rounded-lg ${isActive('inicio') ? 'text-[#cf1dc9] font-medium bg-[#cf1dc9]/10' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9] hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Inicio
                  </button>
                  <button 
                    onClick={() => scrollToSection('nosotros')}
                    className={`py-3 px-4 text-left transition-colors rounded-lg ${isActive('nosotros') ? 'text-[#cf1dc9] font-medium bg-[#cf1dc9]/10' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9] hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Nosotros
                  </button>
                  <button 
                    onClick={() => scrollToSection('servicios')}
                    className={`py-3 px-4 text-left transition-colors rounded-lg ${isActive('servicios') ? 'text-[#cf1dc9] font-medium bg-[#cf1dc9]/10' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9] hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Servicios
                  </button>
                  <button 
                    onClick={() => handleNavigation('/ubicanos')}
                    className={`py-3 px-4 text-left transition-colors rounded-lg ${isActive('ubicanos') ? 'text-[#cf1dc9] font-medium bg-[#cf1dc9]/10' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9] hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Ubícanos
                  </button>
                  <button 
                    onClick={() => scrollToSection('contactanos')}
                    className={`py-3 px-4 text-left transition-colors rounded-lg ${isActive('contactanos') ? 'text-[#cf1dc9] font-medium bg-[#cf1dc9]/10' : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9] hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                  >
                    Contáctanos
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;