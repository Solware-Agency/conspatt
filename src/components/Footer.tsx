import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
        <footer className="bg-[#cf1dc9] text-white py-0 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t-2 border-white mb-3" />
        <div className="grid md:grid-cols-3 gap-4 items-start">
          <div>
            <Link to="/" className="text-3xl font-bold mb-3 inline-block">
              <img src="/logo blanco.png" alt="Logo de Conspat" className="h-14" />
            </Link>
            <p className="text-white/90 mb-3 leading-relaxed">
              Mantente al día con nuestras novedades y eventos especiales. ¡Síguenos!
            </p>
          </div>

          {/* Iconos centrados */}
          <div className="flex justify-center items-center h-full">
            <div className="flex space-x-4">
              <a href="https://wa.me/584242082491" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 hover:shadow-lg">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.instagram.com/uhdconspat?igsh=MW0wdGN4cDRuY2ZyeA==" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 hover:shadow-lg">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="mailto:uhdconspat@gmail.com" className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 hover:shadow-lg">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="text-left">
              <h3 className="text-xl font-bold mb-3">Sedes</h3>
              <div className="space-y-1">
                <div>
                  <p className="text-white">Centro Policlínico Caracas / Charallave</p>
                </div>
                <div>
                  <p className="text-white">Policlínica Méndez Gimón / Clínica Sanatrix</p>
                </div>
                <div>
                  <p className="text-white">Maracay</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/90 font-bold">
            Desarrollado por <a href="https://www.solware.agency/" target="_blank" rel="noopener noreferrer" className="hover:underline">Solware.agency</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;