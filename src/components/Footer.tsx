import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#cf1dc9] text-white pt-1 sm:pt-2 lg:pt-4 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-2 sm:pt-4 lg:pt-6">
          <div className="text-center md:text-left">
            <Link to="/" className="text-3xl font-bold mb-3 inline-block">
              <img 
                src="/logo-blanco.webp" 
                alt="Logo de Conspat" 
                className="h-12 sm:h-14 mx-auto md:mx-0"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src.includes('.webp')) {
                    img.src = '/logo-blanco.png';
                  } else if (img.src.includes('.png')) {
                    img.style.display = 'none';
                    const textLogo = document.createElement('span');
                    textLogo.textContent = 'CONSPAT';
                    textLogo.className = 'text-2xl font-bold text-white';
                    img.parentNode?.appendChild(textLogo);
                  }
                }}
              />
            </Link>
            <p className="text-white/90 mb-3 leading-relaxed">
              Mantente informado sobre nuestras últimas novedades en diagnósticos y eventos especializados. ¡Síguenos!
            </p>
          </div>

          {/* Iconos centrados */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-5 text-center">Conéctate con nosotros</h3>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="https://wa.me/584242082491" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 sm:p-3 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 hover:shadow-lg">
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a href="https://www.instagram.com/uhdconspat?igsh=MW0wdGN4cDRuY2ZyeA==" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-2 sm:p-3 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 hover:shadow-lg">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a href="mailto:uhdconspat@gmail.com" className="bg-white/20 p-2 sm:p-3 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 hover:shadow-lg">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3">Sedes</h3>
            <div className="space-y-1">
              <div>
                <p className="text-white text-sm sm:text-base">Centro Policlínico Caracas / Charallave</p>
              </div>
              <div>
                <p className="text-white text-sm sm:text-base">Policlínica Méndez Gimón / Clínica Sanatrix</p>
              </div>
              <div>
                <p className="text-white text-sm sm:text-base">Maracay</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 text-center">
          <p className="text-white/90">
            Desarrollado por <a href="https://www.solware.agency/" target="_blank" rel="noopener noreferrer" className="hover:underline">Solware.agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;