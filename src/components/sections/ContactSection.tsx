import React, { useState } from 'react';
import { Phone, Mail, MapPin, HelpCircle } from 'lucide-react';
import SpotlightCard from '../SpotlightCard';
import ScrollFloat from '../ScrollFloat';
import { useForm } from '../../hooks/useForm';
import { CONTACT_INFO, BUSINESS_HOURS, FAQ_DATA } from '../../constants';

const ContactSection: React.FC = () => {
  const { formData, handleInputChange, handleSubmit } = useForm();
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <section id="contactanos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative z-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <ScrollFloat
            containerClassName="mb-4 pb-2"
            textClassName="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white leading-tight break-words hyphens-auto transition-colors duration-300 px-4 sm:px-6 lg:px-8"
            animationDuration={2}
            ease="back.inOut(2)"
            scrollStart="center bottom+=60%"
            scrollEnd="bottom bottom-=50%"
            stagger={0.10}
            fontSize="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl"
          >
            Contacta con Nuestros Especialistas
          </ScrollFloat>
          <div className="w-24 h-1 bg-[#cf1dc9] mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center transition-colors duration-300">
            Contamos con la mejor precisión y rapidez del mundo patológico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          {/* Contact Form */}
          <div className="w-full">
            <SpotlightCard
              className="spotlight-contact-form w-full dark:bg-gray-800 dark:border-gray-700"
              spotlightColor="rgba(207, 29, 201, 0.15)"
              style={{ width: '100%' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 p-4 sm:p-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre Completo"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#cf1dc9] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#cf1dc9] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Teléfono:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#cf1dc9] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="howDidYouKnow" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    ¿Cómo nos conociste?
                  </label>
                  <select
                    id="howDidYouKnow"
                    name="howDidYouKnow"
                    value={formData.howDidYouKnow}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#cf1dc9] focus:border-transparent transition-all duration-300 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="google">Google</option>
                    <option value="referido">Referido médico</option>
                    <option value="redes">Redes sociales</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Comentario:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Comentario"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-[#cf1dc9] focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#cf1dc9] text-white py-4 rounded-xl font-semibold hover:bg-[#ae29ba] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enviar
                </button>
              </form>
            </SpotlightCard>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 w-full">
            <SpotlightCard className="spotlight-contact-info w-full dark:bg-gray-800 dark:border-gray-700" spotlightColor="rgba(207, 29, 201, 0.15)">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 transition-colors duration-300 px-2 sm:px-0">
                Información de Contacto
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-[#cf1dc9] p-2 sm:p-3 rounded-xl flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">
                      Teléfono
                    </p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-600 dark:text-gray-300 text-sm sm:text-base break-all transition-colors duration-300">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-[#cf1dc9] p-2 sm:p-3 rounded-xl flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">
                      Email
                    </p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 dark:text-gray-300 text-sm sm:text-base break-all transition-colors duration-300">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-[#cf1dc9] p-2 sm:p-3 rounded-xl flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">
                      Ubicación
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">
                      {CONTACT_INFO.location}
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            <SpotlightCard className="spotlight-hours w-full dark:bg-gray-800 dark:border-gray-700" spotlightColor="rgba(207, 29, 201, 0.15)">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 transition-colors duration-300 px-2 sm:px-0">
                Horarios de Atención
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">
                    Lunes a Viernes:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">
                    {BUSINESS_HOURS.weekdays}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base transition-colors duration-300">
                    Sábados:
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base transition-colors duration-300">
                    {BUSINESS_HOURS.saturday}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4 transition-colors duration-300">
                  {BUSINESS_HOURS.note}
                </p>
              </div>
            </SpotlightCard>

            <SpotlightCard
              className="spotlight-faq w-full dark:bg-gray-800 dark:border-gray-700"
              spotlightColor="rgba(207, 29, 201, 0.15)"
              style={{ maxHeight: '400px', overflowY: 'auto' }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 pb-2 transition-colors duration-300 px-2 sm:px-0">
                Preguntas Frecuentes
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {FAQ_DATA.map((faq) => (
                  <div key={faq.id}>
                    <div
                      onClick={() => toggleQuestion(faq.id)}
                      className="cursor-pointer flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    >
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white pr-2 transition-colors duration-300">
                        {faq.question}
                      </h4>
                      <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#cf1dc9] flex-shrink-0" />
                    </div>
                    {activeQuestion === faq.id && (
                      <div className="mt-3 p-3 bg-white dark:bg-gray-600 rounded-lg border-l-4 border-[#cf1dc9]">
                        {Array.isArray(faq.answer) ? (
                          <ul className="list-disc list-inside text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1 transition-colors duration-300">
                            {faq.answer.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;