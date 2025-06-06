import React, { useState } from 'react';
import { 
  Microscope, 
  Shield, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight,
  CheckCircle,
  Star,
  Award,
  Heart
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CountUp from '../components/CountUp';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    howDidYouKnow: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const services = [
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Biopsias",
      description: "Análisis microscópico exhaustivo para obtener muestras que ofrecen diagnósticos precisos como estudios intraoperatorios, biopsias convencionales, entre otros."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Citologías",
      description: "Análisis citológico para detectar infecciones, inflamaciones y presencia de células. Cito-aspirar para evaluar la naturaleza de nódulos en diversas partes."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Punciones",
      description: "Procedimientos especializados de punción de tiroides o tórax, lista cuando se trata de realizar una dicha lista."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Inmunohistoquímica",
      description: "Técnica de laboratorio que utiliza una herramienta esencial que permite detectar histológico e inmunológico."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Cono de Cuello Uterino",
      description: "Procedimiento ginecológico específico para biopsias complejas del cuello uterino con precisión y cuidado."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Protocolos Oncológicos",
      description: "Diagnósticos especializados para tratamientos personalizados entre pacientes oncológicos con ología clínica."
    }
  ];

  const values = [
    "Personal altamente calificado",
    "Compromiso social", 
    "Innovación",
    "Trabajo en equipo",
    "Pasión por la salud",
    "Confidencialidad"
  ];

  const processSteps = [
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Preparación de la muestra",
      description: "La muestra del tejido se prepara para su análisis, mediante fijación, inclusión en parafina, corte y tinción."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Análisis patológico", 
      description: "El patólogo examina la muestra bajo el microscopio, realiza análisis microscópicos y macroscópicos."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Elaboración del informe",
      description: "El patólogo recoge y analiza todos los resultados para emitir un informe final detallado."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="inicio" className="relative bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Tu <span className="text-[#cf1dc9]">salud</span> es nuestra prioridad
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                En Conspat, proporcionamos diagnósticos patológicos precisos y oportunos, 
                inspirados por el deseo de investigar y ayudar a la comunidad médica desde 2004.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#cf1dc9] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#ae29ba] transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Conocer Servicios
                </button>
                <button className="border-2 border-[#cf1dc9] text-[#cf1dc9] px-8 py-4 rounded-xl font-semibold hover:bg-[#cf1dc9] hover:text-white transition-all duration-300">
                  Contactar Ahora
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[#cf1dc9] to-[#ae29ba] rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 -rotate-3">
                  <div className="text-center">
                    <div className="bg-[#cf1dc9] w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Microscope className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Resultados Rápidos y Precisos</h3>
                    <p className="text-gray-600">
                      En Conspat, priorizamos la urgencia de tus diagnósticos patológicos para brindarte los mejores resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-[#cf1dc9] to-[#ae29ba] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <CountUp
                  from={0}
                  to={250}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-4xl font-bold mb-2"
                  onStart={() => console.log('CountUp started')}
                  onEnd={() => console.log('CountUp ended')}
                />
                <div className="text-white/90">Clínicas trabajadas</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <CountUp
                  from={0}
                  to={768}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-4xl font-bold mb-2"
                  onStart={() => console.log('CountUp started')}
                  onEnd={() => console.log('CountUp ended')}
                />
                <div className="text-white/90">Doctores satisfechos</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <CountUp
                  from={0}
                  to={62079}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-4xl font-bold mb-2"
                  onStart={() => console.log('CountUp started')}
                  onEnd={() => console.log('CountUp ended')}
                />
                <div className="text-white/90">Clientes atendidos</div>
              </div>
              <div className="transform hover:scale-105 transition-transform duration-300">
                <CountUp
                  from={0}
                  to={24}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-4xl font-bold mb-2"
                  onStart={() => console.log('CountUp started')}
                  onEnd={() => console.log('CountUp ended')}
                />
                <div className="text-white/90">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Somos Laboratorio <span className="text-[#cf1dc9]">Conspat</span>
            </h2>
            <div className="w-24 h-1 bg-[#cf1dc9] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce más de nuestra historia y equipo técnico especializado.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Expertos en resultados patológicos
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En Laboratorios Conspat, nos enorgullece ser un referente en patología en Caracas, Venezuela. 
                Desde nuestra fundación en octubre de 2004, hemos estado dedicados a brindar diagnósticos 
                precisos y oportunos, inspirados por el deseo de investigar y ayudar a la comunidad. 
                Nuestra misión es proporcionar diagnósticos que marquen la diferencia en la vida de nuestros pacientes.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Invertimos en la última tecnología y equipos de diagnóstico para ofrecer una amplia gama 
                de estudios patológicos, incluyendo biopsias y citologías. Nuestra infraestructura avanzada 
                nos permite realizar análisis con la mayor eficiencia, asegurando diagnósticos rápidos y 
                confiables que son esenciales para la atención médica de nuestros pacientes.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-[#cf1dc9] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#cf1dc9]/10 to-[#ae29ba]/10 rounded-3xl p-8">
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="bg-[#cf1dc9] w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Proporcionar diagnósticos patológicos que marquen la diferencia en la vida 
                    de nuestros pacientes, con precisión, rapidez y el más alto nivel de profesionalismo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              El Rol Del <span className="text-[#cf1dc9]">Patólogo</span> En Tu Tratamiento
            </h2>
            <div className="w-24 h-1 bg-[#cf1dc9] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              El patólogo es clave en la detección, diagnóstico de enfermedades, da 
              el pronto de los resultados y asistente para el cirujano médico en su procedimiento.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-[#cf1dc9] to-[#ae29ba] w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 left-full w-8">
                    <ChevronRight className="w-6 h-6 text-[#cf1dc9] mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nosotros Ofrecemos Distintos Tipos De <span className="text-[#cf1dc9]">Procesamientos</span>
            </h2>
            <div className="w-24 h-1 bg-[#cf1dc9] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Te ofrecemos distintos tipos de servicios para mejorar tu salud.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="text-[#cf1dc9] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contactanos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Estamos Siempre Listos Para <span className="text-[#cf1dc9]">Ayudarte</span>.
              <br />Contáctanos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ponte en contacto con Laboratorios Conspat. Contamos con la mejor 
              precisión y rapidez del mundo patológico.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Nombre Completo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#cf1dc9] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Correo electrónico"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#cf1dc9] focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#cf1dc9] focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="howDidYouKnow" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cómo nos conociste?
                  </label>
                  <select
                    id="howDidYouKnow"
                    name="howDidYouKnow"
                    value={formData.howDidYouKnow}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#cf1dc9] focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="google">Google</option>
                    <option value="referido">Referido médico</option>
                    <option value="redes">Redes sociales</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Comentario:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Comentario"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#cf1dc9] focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#cf1dc9] text-white py-4 rounded-xl font-semibold hover:bg-[#ae29ba] transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Enviar
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#cf1dc9] p-3 rounded-xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <p className="text-gray-600">+58 212-555-0123</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#cf1dc9] p-3 rounded-xl">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@conspat.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#cf1dc9] p-3 rounded-xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Ubicación</p>
                      <p className="text-gray-600">Caracas, Venezuela</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Horarios de Atención</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lunes a Viernes:</span>
                    <span className="font-semibold text-gray-900">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sábados:</span>
                    <span className="font-semibold text-gray-900">8:00 AM - 1:00 PM</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    (Los horarios pueden variar dependiendo de la sede)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;