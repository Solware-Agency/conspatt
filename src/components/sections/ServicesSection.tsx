import React from 'react';
import FadeContent from '../FadeContent';
import ScrollFloat from '../ScrollFloat';
import { SERVICES } from '../../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="servicios" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollFloat
            containerClassName="mb-4 pb-2"
            textClassName="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white leading-tight break-words hyphens-auto transition-colors duration-300 px-4 sm:px-0"
            animationDuration={2}
            ease="back.inOut(2)"
            scrollStart="center bottom+=60%"
            scrollEnd="bottom bottom-=50%"
            stagger={0.10}
            fontSize="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
          >
            Nuestros Tipos De Procesamientos
          </ScrollFloat>
          <div className="w-24 h-1 bg-[#cf1dc9] mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center transition-colors duration-300">
            Te ofrecemos distintos tipos de servicios para mejorar tu salud.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, index) => (
            <FadeContent key={index} blur={true} duration={1000} delay={index * 200}>
              <div className="relative group p-2">
                <div className="absolute -inset-2 bg-[#cf1dc9]/15 rounded-2xl shadow-3xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-7 min-h-[280px] sm:min-h-[320px] lg:min-h-[340px] w-full flex flex-col text-center shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:scale-[1.02] relative z-10">
                  <div className="flex flex-col items-center justify-center flex-1 space-y-3 sm:space-y-4">
                    <div className="bg-gradient-to-br from-[#cf1dc9] to-[#ae29ba] w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center text-white flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 leading-tight px-2">
                    <h3 className="font-bold text-gray-900 dark:text-white transition-colors duration-300 leading-tight px-3" style={{ fontSize: 'clamp(0.875rem, 4vw, 1.25rem)' }}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300 px-3" style={{ fontSize: 'clamp(0.75rem, 3.5vw, 1rem)' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>
          )
          )
          }
      </div>
    </section>
  );
};

export default ServicesSection;