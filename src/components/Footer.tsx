import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    window.location.href = `/#${sectionId}`;
  };

  return (
    <footer className="bg-gradient-to-r from-[#cf1dc9] to-[#ae29ba] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-3xl font-bold mb-4 inline-block">
              <span className="text-white">C</span>
              <span className="text-white/90">ONSPAT</span>
            </Link>
            <p className="text-white/90 mb-6 leading-relaxed">
              Mantente al día con nuestras novedades y eventos especiales. ¡Síguenos!
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/584125550123" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/conspat" target="_blank" rel="noopener noreferrer" className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="mailto:info@conspat.com" className="bg-white/20 p-3 rounded-xl hover:bg-white/30 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Acceso Rápido</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('inicio')} className="text-white/90 hover:text-white transition-colors">Inicio</button></li>
              <li><button onClick={() => scrollToSection('nosotros')} className="text-white/90 hover:text-white transition-colors">Nosotros</button></li>
              <li><button onClick={() => scrollToSection('servicios')} className="text-white/90 hover:text-white transition-colors">Servicios</button></li>
              <li><Link to="/ubicanos" className="text-white/90 hover:text-white transition-colors">Ubícanos</Link></li>
              <li><button onClick={() => scrollToSection('contactanos')} className="text-white/90 hover:text-white transition-colors">Contáctanos</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Sedes</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-white">Policlínica Méndez Gimón</p>
                <p className="text-white/90 text-sm">Torre Centro Clínica Santana</p>
                <p className="text-white/90 text-sm">Maracay</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/90">
            © Conspat 2024 | Todos los derechos reservados por Conspat.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;