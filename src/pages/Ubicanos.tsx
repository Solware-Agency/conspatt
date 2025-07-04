import React, { useLayoutEffect } from 'react';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import SpotlightCard from '../components/SpotlightCard';

import { LOCATIONS } from '../constants';
import { createWhatsAppUrl, createTelUrl, createMailtoUrl } from '../utils/navigation';

const Ubicanos: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors duration-300">
      <WhatsAppButton />
      <Header activeSection="ubicanos" />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[350px] flex items-center justify-center pt-16">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/mar.webp)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 drop-shadow-2xl leading-tight break-words hyphens-auto px-4 sm:px-0">
            Nuestras <span className="text-white">Ubicaciones</span>
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-4 shadow-lg" />
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Encuentra la sede de Laboratorios Conspat más cercana a ti. 
            Contamos con instalaciones modernas y personal especializado para brindarte el mejor servicio.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {LOCATIONS.map((location, index) => (
              <div key={location.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Location Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <SpotlightCard className="min-h-[320px] sm:h-80 dark:bg-gray-800 dark:border-gray-700" spotlightColor="rgba(207, 29, 201, 0.15)">
                    <div className="flex items-center mb-4">
                      <div className="bg-[#cf1dc9] p-2 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                        {location.name}
                      </h2>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      {/* Address */}
                      <div className="flex items-start space-x-2 sm:space-x-3">
                        <Navigation className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf1dc9] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">
                            Dirección
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">
                            {location.address}
                          </p>
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf1dc9] flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm transition-colors duration-300">
                              Teléfono
                            </p>
                            <a 
                              href={createTelUrl(location.phone)}
                              className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm hover:text-[#cf1dc9] transition-colors cursor-pointer"
                            >
                              {location.phone}
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf1dc9] flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm transition-colors duration-300">
                              Email
                            </p>
                            <a 
                              href={createMailtoUrl(location.email)}
                              className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm hover:text-[#cf1dc9] transition-colors cursor-pointer"
                            >
                              {location.email}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-2 pt-2">
                        <a
                          href={createWhatsAppUrl(location.whatsapp)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#26d466] text-white px-3 sm:px-4 py-2 rounded-xl font-semibold hover:bg-[#1abf5a] transition-all duration-300 text-center text-sm sm:text-base"
                        >
                          <FaWhatsapp className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2" /> WhatsApp
                        </a>
                      
                        <a
                          href={createTelUrl(location.phone)}
                          className="flex-1 border-2 border-[#cf1dc9] text-[#cf1dc9] px-3 sm:px-4 py-2 rounded-xl font-semibold hover:bg-[#cf1dc9] hover:text-white transition-all duration-300 text-center text-sm sm:text-base"
                        >
                          Llamar Ahora
                        </a>
                      </div>
                    </div>
                  </SpotlightCard>
                </div>

                {/* Map */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} mt-6 lg:mt-0`}>
                  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 h-64 sm:h-80 transition-colors duration-300">
                    <div className="h-full relative">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-3xl"
                        title={`Mapa de ${location.name}`}
                      />
                      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl transition-colors duration-300">
                        <p className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white transition-colors duration-300">
                          {location.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#cf1dc9] to-[#ae29ba] rounded-3xl p-6 sm:p-8 lg:p-12 text-center text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight break-words hyphens-auto px-4 sm:px-0">
              ¿No encuentras la ubicación que buscas?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contáctanos directamente y te ayudaremos a encontrar la mejor opción para ti. 
              Estamos comprometidos con brindarte el mejor servicio.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href={createWhatsAppUrl('4242082491')}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#cf1dc9] px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                WhatsApp
              </a>
              <a
                href={createTelUrl('4242082491')}
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-[#cf1dc9] transition-all duration-300 text-sm sm:text-base"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ubicanos;