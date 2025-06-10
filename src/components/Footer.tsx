import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  return (
    <footer className="bg-[#cf1dc9] text-white py-0">
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-t-2 border-white mb-4" />
        <div className="grid md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-bold mb-4 inline-block">
              <img src="public/logo blanco.png" alt="Logo de Conspat" className="h-16" />
            </Link>
            <p className="text-white/90 mb-4 leading-relaxed">
              Mantente al día con nuestras novedades y eventos especiales. ¡Síguenos!
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/584125550123" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 hover:shadow-lg">
                <FaWhatsapp className="w-6 h-6 text-white" />
              </a>
              <a href="https://www.instagram.com/uhdconspat?igsh=MW0wdGN4cDRuY2ZyeA==" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 hover:shadow-lg">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="mailto:info@conspat.com" className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-colors transform hover:scale-105 hover:shadow-lg">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Acceso Rápido</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('inicio')} className="text-white/90 hover:text-white transition-colors">Inicio</button></li>
              <li><button onClick={() => scrollToSection('nosotros')} className="text-white/90 hover:text-white transition-colors">Nosotros</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="text-white/90 hover:text-white transition-colors">Servicios</button></li>
              <li><Link to="/ubicanos" className="text-white/90 hover:text-white transition-colors">Ubícanos</Link></li>
              <li><button onClick={() => scrollToSection('contactanos')} className="text-white/90 hover:text-white transition-colors">Contáctanos</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Sedes</h3>
            <div className="space-y-2">
              <div>
                <p className="text-white">Centro Policlínico Caracas</p>
              </div>
              <div>
                <p className="text-white">Charallave</p>
              </div>
              <div>
                <p className="text-white">Policlínica Méndez Gimón</p>
              </div>
              <div>
                <p className="text-white">Clínica Sanatrix</p>
              </div>
              <div>
                <p className="text-white">Maracay</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 pt-0 text-left">
          <p className="text-white/90 font-bold">
            Desarrollado por <a href="https://www.solware.agency/" target="_blank" rel="noopener noreferrer" className="hover:underline">Solware.agency</a>
          </p>
        </div>
        <div className="mt-0 pt-0 text-left">
          <p className="text-white/90">
            {/* Aquí puedes agregar cualquier otro texto que desees */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;