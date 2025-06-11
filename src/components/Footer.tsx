import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Instagram, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const isOnUbicanosPage = location.pathname === '/ubicanos';
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
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
            <h3 className="text-xl font-bold mb-4">Preguntas Frecuentes</h3>
            <div className="faq">
              <div onClick={() => toggleQuestion(1)} className="cursor-pointer">
                <h4 className="text-md font-semibold">¿Tiempo de espera para los resultados?</h4>
              </div>
              {activeQuestion === 1 && (
                <p className="text-sm">
                  
                  <ul className="list-disc list-inside">
                    <li>Citologías: 3-5 días hábiles.</li>
                    <li>Biopsias: 5-7 días hábiles.</li>
                    <li>Biopsias óseas: 7-10 días hábiles.</li>
                    <li>Inmunohistoquímica: 12-15 días hábiles.</li>
                  </ul>
                </p>
              )}

              <div onClick={() => toggleQuestion(2)} className="cursor-pointer">
                <h4 className="text-md font-semibold">¿Cual es el costo de los exámenes?</h4>
              </div>
              {activeQuestion === 2 && (
                <p className="text-sm">
                  Los costos varían según el tipo de estudio. contactanos directamente con los datos del paciente y la orden médica para proporcionar costos exactos.
                </p>
              )}
            </div>
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
      </div>
    </footer>
  );
};

export default Footer;