import React from 'react';
import { CheckCircle } from 'lucide-react';
import SplitText from '../SplitText';
import ScrollFloat from '../ScrollFloat';
import BlurText from '../BlurText';
import FadeContent from '../FadeContent';
import { GALLERY_IMAGES, MISSION_VALUES, CORE_VALUES, PROCESS_STEPS, CLIENT_LOGOS } from '../../constants';
import TiltedCard from '../TiltedCard';
import { useCarousel } from '../../hooks/useCarousel';

const AboutSection: React.FC = () => {
  useCarousel('.carousel-container', 25);

  return (
    <section id="nosotros" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollFloat
            containerClassName="mb-4 pb-2"
            textClassName="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-tight break-words hyphens-auto transition-colors duration-300 px-4 sm:px-6 lg:px-8"
            animationDuration={2}
            ease="back.inOut(2)"
            scrollStart="center bottom+=60%"
            scrollEnd="bottom bottom-=50%"
            stagger={0.10}
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
          >
            Somos Laboratorio Conspat
          </ScrollFloat>
          <div className="w-24 h-1 bg-[#cf1dc9] mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center transition-colors duration-300">
            Conoce más de nuestra historia y equipo técnico especializado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-2 text-center lg:text-left transition-colors duration-300 px-2 lg:px-0">
              Expertos en resultados patológicos
            </h3>
            <BlurText
              text="En Laboratorios Conspat, nos enorgullece ser un referente en patología en Caracas, Venezuela. Desde nuestra fundación en octubre de 2004, hemos estado dedicados a brindar diagnósticos precisos y oportunos, inspirados por el deseo de investigar y ayudar a la comunidad. Nuestra misión es proporcionar diagnósticos que marquen la diferencia en la vida de nuestros pacientes."
              delay={50}
              animateBy="words"
              direction="top"
              animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
              animationTo={[
                { filter: 'blur(5px)', opacity: 0.5, y: 5 },
                { filter: 'blur(0px)', opacity: 1, y: 0 },
              ]}
              onAnimationComplete={() => {}}
              className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-justify hyphens-auto transition-colors duration-300"
            />
            <BlurText
              text="Invertimos en la última tecnología y equipos de diagnóstico para ofrecer una amplia gama de estudios patológicos, incluyendo biopsias y citologías. Nuestra infraestructura avanzada nos permite realizar análisis con la mayor eficiencia, asegurando diagnósticos rápidos y confiables que son esenciales para la atención médica de nuestros pacientes."
              delay={50}
              animateBy="words"
              direction="top"
              animationFrom={{ filter: 'blur(10px)', opacity: 0, y: -50 }}
              animationTo={[
                { filter: 'blur(5px)', opacity: 0.5, y: 5 },
                { filter: 'blur(0px)', opacity: 1, y: 0 },
              ]}
              onAnimationComplete={() => {}}
              className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-justify hyphens-auto transition-colors duration-300"
            />
          </div>

          {/* Gallery Section */}
          <div className="relative mt-12 lg:mt-0">
            <div className="bg-gradient-to-br from-[#cf1dc9]/10 to-[#ae29ba]/10 dark:from-[#cf1dc9]/20 dark:to-[#ae29ba]/20 rounded-3xl p-6 sm:p-8 transition-colors duration-300 mt-8 sm:mt-12 lg:mt-16 mb-8 sm:mb-12 lg:mb-16">
              <div className="text-center mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 pb-2 transition-colors duration-300 px-2 sm:px-0">
                  Nuestras Instalaciones
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">
                  Tecnología de vanguardia y personal especializado trabajando para tu salud
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {GALLERY_IMAGES.map((image, index) => (
                  <FadeContent key={index} blur={true} duration={800} delay={index * 200}>
                    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-24 sm:h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (img.src.includes('.jpg')) {
                            img.style.display = 'none';
                            const placeholder = document.createElement('div');
                            placeholder.className = 'w-full h-24 sm:h-32 bg-gray-200 dark:bg-gray-700 flex items-center justify-center';
                            placeholder.innerHTML = '<span class="text-xs text-gray-500 dark:text-gray-400">Imagen no disponible</span>';
                            img.parentNode?.appendChild(placeholder);
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white text-xs sm:text-sm font-semibold">{image.title}</p>
                        </div>
                      </div>
                    </div>
                  </FadeContent>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission and Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <ScrollFloat
              containerClassName="mb-4 pb-2"
              textClassName="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 dark:text-white leading-tight px-4 sm:px-6 lg:px-8 break-words hyphens-auto transition-colors duration-300"
              animationDuration={2}
              ease="back.inOut(2)"
              scrollStart="center bottom+=60%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.10}
              fontSize="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            >
              Nuestra Misión y Valores
            </ScrollFloat>
            <div className="w-24 h-1 bg-[#cf1dc9] mx-auto mb-6" />
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center px-4 transition-colors duration-300">
              Los principios que nos guían en nuestro compromiso con la excelencia médica y el servicio a la comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {MISSION_VALUES.map((item, index) => (
              <FadeContent key={index} blur={true} duration={1000} delay={index * 200}>
                <div className="bg-white dark:bg-gray-700 rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full min-h-[300px] flex flex-col justify-between border border-gray-200 dark:border-gray-600">
                  <div className="text-center flex-grow flex flex-col justify-center">
                    <div className="bg-gradient-to-br from-[#cf1dc9] to-[#ae29ba] w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 pb-2 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeContent>
            ))}
          </div>

          {/* Core Values Grid */}
          <div className="mt-12 sm:mt-16">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 pb-2 transition-colors duration-300 px-2 sm:px-0">
                Nuestros Valores Fundamentales
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">
                Los pilares que sostienen nuestro compromiso con la excelencia
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {CORE_VALUES.map((value, index) => (
                <FadeContent key={index} duration={800} delay={index * 100}>
                  <div className="bg-white dark:bg-gray-700 rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#cf1dc9]">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#cf1dc9] flex-shrink-0" />
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-sm sm:text-base transition-colors duration-300">
                        {value}
                      </span>
                    </div>
                  </div>
                </FadeContent>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollFloat
              containerClassName="mb-4 pb-2"
              textClassName="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white px-4 sm:px-6 lg:px-8 leading-tight break-words hyphens-auto transition-colors duration-300"
              animationDuration={2}
              ease="back.inOut(2)"
              scrollStart="center bottom+=60%"
              scrollEnd="bottom bottom-=50%"
              stagger={0.10}
              fontSize="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl"
            >
              Nuestro Rol En Tu Tratamiento
            </ScrollFloat>
            <div className="w-24 h-1 bg-[#cf1dc9] mx-auto mb-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={index} className="flex justify-center h-[320px] w-full max-w-sm mx-auto">
                <TiltedCard
                  containerHeight="320px"
                  containerWidth="280px"
                  scaleOnHover={1.1}
                  rotateAmplitude={10}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 h-[300px] w-[260px] flex flex-col text-center border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="bg-gradient-to-br from-[#cf1dc9] to-[#ae29ba] w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex flex-col justify-center flex-grow">
                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 px-2 leading-tight break-words transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base px-2 text-center break-words transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-12 bg-[#cf1dc9] heartbeat-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="overflow-hidden relative logo-carousel w-full">
            <div className="flex gap-6 sm:gap-8 lg:gap-12 carousel-container">
              {/* Render multiple sets for seamless loop */}
              {Array.from({ length: 4 }, (_, setIndex) => 
                CLIENT_LOGOS.map((src, index) => (
                  <div key={`logo-${setIndex}-${index}`} className="flex-shrink-0 overflow-hidden rounded-lg shadow-lg logo-item">
                    <img
                      src={src}
                      alt={`Cliente ${index + 1}`}
                      className="w-20 h-16 sm:w-24 sm:h-18 lg:w-32 lg:h-24 object-contain"
                      onError={(e) => {
                        const img = e.currentTarget;
                        img.style.display = 'none';
                      }}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;