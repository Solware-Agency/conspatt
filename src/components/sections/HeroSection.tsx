import React from 'react';
import SimpleRotatingText from '../SimpleRotatingText';
import AnimatedStatCard from '../AnimatedStatCard';
import { STATS_DATA, CONTACT_INFO } from '../../constants';

const HeroSection: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero-section relative bg-white dark:bg-gray-900 overflow-hidden py-12 sm:py-16 lg:py-20 pt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6 break-words hyphens-auto transition-colors duration-300 px-2 sm:px-0">
              <span className="text-gray-900 dark:text-white">Tu </span>
              <span className="inline-flex items-center justify-center w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-[#cf1dc9] text-white rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                <SimpleRotatingText
                  texts={['Salud', 'Vida', 'Bien']}
                  rotationInterval={4000}
                  className="text-white font-bold"
                />
              </span>
              <span className="text-gray-900 dark:text-white"> es nuestra prioridad</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-center lg:text-justify transition-colors duration-300">
              En Conspat, proporcionamos diagnósticos patológicos precisos y oportunos, inspirados por el deseo de
              investigar y ayudar a la comunidad médica desde 2004.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                className="bg-[#cf1dc9] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-[#ae29ba] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                onClick={() => scrollToSection('servicios')}
              >
                Conocer Servicios
              </button>
              <button
                className="border-2 border-[#cf1dc9] text-[#cf1dc9] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-[#cf1dc9] hover:text-white transition-all duration-300 text-sm sm:text-base"
                onClick={() => scrollToSection('contactanos')}
              >
                Contactar Ahora
              </button>
            </div>
          </div>
          
          <div className="relative flex justify-center mt-8 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-6 lg:p-8 transition-all transform hover:scale-105 hover:shadow-2xl w-full max-w-sm lg:max-w-md border border-gray-200 dark:border-gray-700 duration-300">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/consig.webp" alt="Perfil de Instagram" className="w-full h-auto object-contain rounded" />
              </a>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center mt-4 text-black dark:text-white transition-colors duration-300">
                Conoce Nuestros Laboratorios
              </h3>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center lg:text-left mt-2 text-[#c221c2] font-semibold text-sm sm:text-base"
              >
                Ver en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 sm:mt-16 lg:mt-20 relative py-12 sm:py-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/mano.webp)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#cf1dc9] to-[#ae29ba] opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center text-white">
            {STATS_DATA.map((stat, index) => (
              <AnimatedStatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;