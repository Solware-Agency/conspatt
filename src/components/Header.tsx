import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { scrollToSection } from '../utils/navigation';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isOnUbicanosPage = location.pathname === '/ubicanos';

  const isActive = (section: string) => {
    if (isOnUbicanosPage) {
      return section === 'ubicanos';
    }
    return activeSection === section;
  };

  const handleScrollToSection = (sectionId: string) => {
    try {
      if (isOnUbicanosPage) {
        navigate('/', { replace: true });
        setTimeout(() => scrollToSection(sectionId), 100);
      } else {
        scrollToSection(sectionId);
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

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'ubicanos', label: 'Ubícanos', isPage: true },
    { id: 'contactanos', label: 'Contáctanos' },
  ];

  const renderNavItem = (item: typeof navItems[0], isMobile = false) => {
    const baseClasses = `transition-colors ${
      isMobile 
        ? 'py-3 px-4 text-left rounded-lg block w-full' 
        : 'flex items-center h-full'
    }`;
    
    const activeClasses = isActive(item.id) 
      ? 'text-[#cf1dc9] font-medium' + (isMobile ? ' bg-[#cf1dc9]/10' : ' border-b-2 border-[#cf1dc9] pb-1')
      : 'text-gray-700 dark:text-gray-300 hover:text-[#cf1dc9]' + (isMobile ? ' hover:bg-gray-50 dark:hover:bg-gray-800' : '');

    if (item.isPage) {
      return (
        <button
          key={item.id}
          onClick={() => handleNavigation('/ubicanos')}
          className={`${baseClasses} ${activeClasses}`}
        >
          {item.label}
        </button>
      );
    }

    return (
      <button
        key={item.id}
        onClick={() => handleScrollToSection(item.id)}
        className={`${baseClasses} ${activeClasses}`}
      >
        {item.label}
      </button>
    );
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm dark:shadow-gray-800 fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center" onClick={(e) => {
            e.preventDefault();
            handleNavigation('/');
          }}>
            <img 
              src="/logo.webp" 
              alt="Logo Laboratorios Conspat" 
              className="w-20 sm:w-24 h-auto transition-all duration-300"
              style={{
                filter: document.documentElement.classList.contains('dark') ? 'brightness(0) invert(1)' : 'none'
              }}
              onError={(e) => {
                const img = e.currentTarget;
                if (img.src.includes('.webp')) {
                  img.src = '/logo.png';
                } else if (img.src.includes('.png')) {
                  img.style.display = 'none';
                  const textLogo = document.createElement('span');
                  textLogo.textContent = 'CONSPAT';
                  textLogo.className = 'text-xl font-bold text-[#cf1dc9] dark:text-white';
                  img.parentNode?.appendChild(textLogo);
                }
              }}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map(item => renderNavItem(item))}
            <DarkModeToggle />
          </nav>

          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <DarkModeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <nav className="flex flex-col space-y-1">
              {navItems.map(item => renderNavItem(item, true))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;