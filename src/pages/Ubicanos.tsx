import React from 'react';
import { MapPin, Phone, Clock, Mail, Navigation, Building2, Users, Car } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Ubicanos = () => {
  const locations = [
    {
      id: 1,
      name: "Centro Policlínico Caracas",
      address: "Edificio Centro Caracas, piso 2 consultorio 2D, diagonal al Hospital de Clínicas Caracas en San Bernardino",
      phone: "0424-2082491",
      whatsapp: "0424-2082491",
      email: "caracas@conspat.com",
      hours: {
        weekdays: "8:00 AM - 5:00 PM",
        saturday: "8:00 AM - 1:00 PM",
        sunday: "Cerrado"
      },
      services: [
        "Biopsias convencionales",
        "Citologías cervicales",
        "Inmunohistoquímica",
        "Estudios intraoperatorios"
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31383.861052920114!2d-66.91804928966778!3d10.502033850738526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a593153a3fdd7%3A0xaaf9f4fa3540b05!2sCentro%20M%C3%A9dico%20de%20Caracas%20(Centro%20M%C3%A9dico%20San%20Bernardino)!5e0!3m2!1ses-419!2sve!4v1749248645266!5m2!1ses-419!2sve",
      features: [
        { icon: <Car className="w-5 h-5" />, text: "Estacionamiento disponible" },
        { icon: <Users className="w-5 h-5" />, text: "Personal especializado" },
        { icon: <Building2 className="w-5 h-5" />, text: "Instalaciones modernas" }
      ]
    },
    {
      id: 2,
      name: "Charallave",
      address: "Edificio Multioficinas CONEX, Av. Perimetral, Charallave 1012, Miranda",
      phone: "04144861289",
      whatsapp: "04144861289",
      email: "charallave@conspat.com",
      hours: {
        weekdays: "8:00 AM - 5:00 PM",
        saturday: "Cerrado",
        sunday: "Cerrado"
      },
      services: [
        "Biopsias convencionales",
        "Citologías cervicales",
        "Protocolos oncológicos",
        "Punciones especializadas"
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.5461389040174!2d-66.85548772683936!3d10.217463269258872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2aef20fe1dd8ff%3A0xb2b8f6a1166a3266!2sEdificio%20Conex!5e0!3m2!1ses-419!2sve!4v1749248608034!5m2!1ses-419!2sve",
      features: [
        { icon: <Car className="w-5 h-5" />, text: "Estacionamiento disponible" },
        { icon: <Users className="w-5 h-5" />, text: "Personal especializado" },
        { icon: <Building2 className="w-5 h-5" />, text: "Instalaciones modernas" }
      ]
    },
    {
      id: 3,
      name: "Policlínica Méndez Gimón",
      address: "Planta Baja, Consultorio 1, Av. Andrés Bello Policlínica Mendez Gimon, ala oeste, Caracas 1059, Distrito Capital",
      phone: "04241425562",
      whatsapp: "04241425562",
      email: "mendezgimon@conspat.com",
      hours: {
        weekdays: "8:00 AM - 5:00 PM",
        saturday: "8:00 AM - 1:00 PM",
        sunday: "Cerrado"
      },
      services: [
        "Todos los servicios patológicos",
        "Biopsias especializadas",
        "Inmunohistoquímica",
        "Cono de cuello uterino"
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.954574957969!2d-66.88481932683484!3d10.50424411415906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5922e62098af%3A0x995b73ca2f77b0c6!2sPoliclinica%20M%C3%A9ndez%20Gim%C3%B3n!5e0!3m2!1ses-419!2sve!4v1749248584093!5m2!1ses-419!2sve",
      features: [
        { icon: <Car className="w-5 h-5" />, text: "Estacionamiento disponible" },
        { icon: <Users className="w-5 h-5" />, text: "Equipo completo de patólogos" },
        { icon: <Building2 className="w-5 h-5" />, text: "Instalaciones especializadas" }
      ]
    },
    {
      id: 4,
      name: "Clínica Sanatrix",
      address: "Piso 1 consultorio 118 A, Edif. Clínica Sanatrix, Av. 4ta. Cruce, con Calle 2, Caracas 1060, Miranda, Chacao",
      phone: "04142691682",
      whatsapp: "04142691682",
      email: "sanatrix@conspat.com",
      hours: {
        weekdays: "8:00 AM - 5:00 PM",
        saturday: "Cerrado",
        sunday: "Cerrado"
      },
      services: [
        "Biopsias convencionales",
        "Citologías cervicales",
        "Estudios intraoperatorios",
        "Protocolos oncológicos"
      ],
      mapUrl: "https://maps.app.goo.gl/Qb2vjShttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31385.18895641457!2d-66.89271776117104!3d10.48894813616448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5901c141bdd5%3A0x3d019a7b8e4f3ab6!2sCl%C3%ADnica%20Sanatrix!5e0!3m2!1ses-419!2sve!4v1749248552338!5m2!1ses-419!2sveaxy9YjMpP26",
      features: [
        { icon: <Car className="w-5 h-5" />, text: "Estacionamiento disponible" },
        { icon: <Users className="w-5 h-5" />, text: "Personal especializado" },
        { icon: <Building2 className="w-5 h-5" />, text: "Instalaciones modernas" }
      ]
    },
    {
      id: 5,
      name: "Maracay",
      address: "Piso 5, Centro Quirúrgico del Norte, Torre Calicanto, C. López Aveledo, Maracay 2101, Aragua",
      phone: "04242131746",
      whatsapp: "04242131746",
      email: "maracay@conspat.com",
      hours: {
        weekdays: "8:00 AM - 5:00 PM",
        saturday: "Cerrado",
        sunday: "Cerrado"
      },
      services: [
        "Biopsias convencionales",
        "Citologías cervicales",
        "Inmunohistoquímica",
        "Punciones especializadas"
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.071629304573!2d-67.60132522683877!3d10.255806868584628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803b61beba572d%3A0x2171cb799716e6c!2sCentro%20Quir%C3%BArgico%20del%20Norte!5e0!3m2!1ses-419!2sve!4v1749247038934!5m2!1ses-419!2sve",
      linkUrl: "https://www.google.com/maps/place/Centro+Quir%C3%BArgico+del+Norte/@10.2558069,-67.6013252,15z"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestras <span className="text-[#cf1dc9]">Ubicaciones</span>
            </h1>
            <div className="w-24 h-1 bg-[#cf1dc9] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Encuentra la sede de Laboratorios Conspat más cercana a ti. 
              Contamos con instalaciones modernas y personal especializado para brindarte el mejor servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {locations.map((location, index) => (
              <div key={location.id} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Location Info */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="bg-[#cf1dc9] p-3 rounded-xl mr-4">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{location.name}</h2>
                    </div>

                    <div className="space-y-6">
                      {/* Address */}
                      <div className="flex items-start space-x-4">
                        <Navigation className="w-5 h-5 text-[#cf1dc9] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900">Dirección</p>
                          <p className="text-gray-600">{location.address}</p>
                        </div>
                      </div>

                      {/* Contact */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-[#cf1dc9]" />
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Teléfono</p>
                            <p className="text-gray-600 text-sm">{location.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-[#cf1dc9]" />
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Email</p>
                            <p className="text-gray-600 text-sm">{location.email}</p>
                          </div>
                        </div>
                      </div>

                      {/* Hours */}
                      <div className="flex items-start space-x-4">
                        <Clock className="w-5 h-5 text-[#cf1dc9] mt-1 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-900 mb-2">Horarios de Atención</p>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Lunes a Viernes:</span>
                              <span className="font-medium text-gray-900">{location.hours.weekdays}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Sábados:</span>
                              <span className="font-medium text-gray-900">{location.hours.saturday}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Domingos:</span>
                              <span className="font-medium text-gray-900">{location.hours.sunday}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <a
                          href={`https://wa.me/58${location.whatsapp.replace(/^0/, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-[#26d466] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1abf5a] transition-all duration-300 text-center"
                        >
                          WhatsApp
                        </a>
                      
                        <a
                          href={`tel:+58${location.phone.replace(/^0/, '')}`}
                          className="flex-1 border-2 border-[#cf1dc9] text-[#cf1dc9] px-6 py-3 rounded-xl font-semibold hover:bg-[#cf1dc9] hover:text-white transition-all duration-300 text-center"
                        >
                          Llamar Ahora
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="h-96 relative">
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
                      ></iframe>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl">
                        <p className="text-sm font-semibold text-gray-900">{location.name}</p>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#cf1dc9] to-[#ae29ba] rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿No encuentras la ubicación que buscas?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contáctanos directamente y te ayudaremos a encontrar la mejor opción para ti. 
              Estamos comprometidos con brindarte el mejor servicio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/584242082491"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#cf1dc9] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                WhatsApp
              </a>
              <a
                href="tel:+584242082491"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#cf1dc9] transition-all duration-300"
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