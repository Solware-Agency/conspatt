import {
  Microscope,
  Shield,
  CheckCircle,
  Target,
  Lightbulb,
  UserCheck,
  Scissors,
  Eye,
  Syringe,
  User,
  Heart,
  Building2,
  Stethoscope,
  Users,
  Award,
  Car
} from 'lucide-react';
import type { Service, ProcessStep, GalleryImage, MissionValue, StatData } from '../types';

export const SERVICES: Service[] = [
  {
    icon: <Scissors className="w-8 h-8" />,
    title: 'Biopsias',
    description: 'Extraemos pequeñas muestras y utilizamos técnicas avanzadas para detectar enfermedades como el cáncer, infecciones y problemas inflamatorios.',
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Citologías',
    description: 'Analizamos tus células para detectar infecciones, inflamaciones y prevenir el cáncer. Cada análisis tiene como prioridad tu bienestar y salud.',
  },
  {
    icon: <Syringe className="w-8 h-8" />,
    title: 'Punciones',
    description: 'Realizamos extracciones mínimas de líquido o tejido con una aguja fina. Este sencillo procedimiento nos permite analizar muestras y detectar problemas de salud eficazmente.',
  },
  {
    icon: <Microscope className="w-8 h-8" />,
    title: 'Inmunohistoquímica',
    description: 'Utilizamos la inmunohistoquímica, una herramienta clave que combina histología e inmunología, para obtener información crucial sobre tu salud y darte diagnósticos precisos.',
  },
  {
    icon: <User className="w-8 h-8" />,
    title: 'Cono de Cuello Uterino',
    description: 'En este procedimiento, se extrae una pequeña muestra cónica del cuello uterino para analizarla y detectar células anormales, previniendo así el cáncer de cuello uterino.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Protocolos Oncológicos',
    description: 'Ofrecemos planes de tratamiento personalizados para el cáncer, como cirugías, radioterapias, quimioterapias y otros, ajustados a las necesidades de cada paciente.',
  },
];

export const CORE_VALUES = [
  'Personal altamente calificado',
  'Atención Personalizada',
  'Tecnología Avanzada',
  'Trabajo en equipo',
  'Pasión por la salud',
  'Confidencialidad',
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: <Microscope className="w-6 h-6" />,
    title: 'Preparación de la muestra',
    description: 'Preparación del tejido para análisis.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Análisis patológico',
    description: 'Examen microscópico de la muestra.',
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: 'Elaboración del informe',
    description: 'Análisis de resultados y emisión de informe.',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/Whisk_a1c12feb90.jpg',
    alt: 'Laboratorio de patología - Análisis microscópico',
    title: 'Análisis Microscópico',
  },
  {
    src: '/Whisk_3efea70758.jpg',
    alt: 'Equipo de laboratorio especializado',
    title: 'Tecnología Avanzada',
  },
  {
    src: '/Whisk_d6377a6764.jpg',
    alt: 'Profesionales trabajando en laboratorio',
    title: 'Equipo Especializado',
  },
  {
    src: '/Whisk_7c8e7c40cd.jpg',
    alt: 'Instalaciones modernas del laboratorio',
    title: 'Instalaciones Modernas',
  },
];

export const MISSION_VALUES: MissionValue[] = [
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Nuestra Misión',
    description: 'Proporcionar diagnósticos patológicos que marquen la diferencia en la vida de nuestros pacientes, con precisión, rapidez y el más alto nivel de profesionalismo.',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Innovación Constante',
    description: 'Invertimos en la última tecnología y equipos de diagnóstico para ofrecer análisis con la mayor eficiencia y confiabilidad.',
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: 'Compromiso Social',
    description: 'Inspirados por el deseo de investigar y ayudar a la comunidad médica, siendo un referente en patología desde 2004.',
  },
];

export const STATS_DATA: StatData[] = [
  {
    icon: <Building2 className="w-8 h-8" />,
    value: 250,
    label: 'Clínicas trabajadas'
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    value: 768,
    label: 'Doctores satisfechos'
  },
  {
    icon: <Users className="w-8 h-8" />,
    value: 62079,
    label: 'Clientes atendidos'
  },
  {
    icon: <Award className="w-8 h-8" />,
    value: 24,
    label: 'Años de experiencia'
  }
];

export const CLIENT_LOGOS = [
  '/client1.png',
  '/client2.png',
  '/client3.png',
  '/client4.png',
  '/client5.png',
];

export const LOCATIONS = [
  {
    id: 1,
    name: "Centro Policlínico Caracas",
    address: "Edificio Centro Caracas, piso 2 consultorio 2D, diagonal al Hospital de Clínicas Caracas en San Bernardino",
    phone: "0424-2082491",
    whatsapp: "0424-2082491",
    email: "uhdconspat@gmail.com",
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
    phone: "0414-4861289",
    whatsapp: "0414-4861289",
    email: "uhdconspat@gmail.com",
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
    phone: "0424-1425562",
    whatsapp: "0424-1425562",
    email: "uhdconspat@gmail.com",
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
    phone: "0414-2691682",
    whatsapp: "0414-2691682",
    email: "uhdconspat@gmail.com",
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.0873288305843!2d-66.86244902496217!3d10.493781889638344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5901c141bdd5%3A0x3d019a7b8e4f3ab6!2sCl%C3%ADnica%20Sanatrix!5e0!3m2!1ses-419!2sve!4v1749538992363!5m2!1ses-419!2sve",
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
    phone: "0424-2131746",
    whatsapp: "0424-2131746",
    email: "uhdconspat@gmail.com",
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
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.071629304573!2d-67.60132522683877!3d10.255806868584628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e803b61beba572d%3A0x2171cb799716e6c!2sCentro%20Quir%C3%BArgico%20del%20Norte!5e0!3m2!1ses-419!2sve!4v1749247038934!5m2!1ses-419!2sve"
  }
];

export const FAQ_DATA = [
  {
    id: 1,
    question: "¿Tiempo de espera para los resultados?",
    answer: [
      "Citologías: 3-5 días hábiles.",
      "Biopsias: 5-7 días hábiles.",
      "Biopsias óseas: 7-10 días hábiles.",
      "Inmunohistoquímica: 12-15 días hábiles."
    ]
  },
  {
    id: 2,
    question: "¿Cuál es el costo de los exámenes?",
    answer: "Los costos varían según el tipo de estudio. Contáctanos directamente con los datos del paciente y la orden médica para proporcionar costos exactos."
  }
];

export const CONTACT_INFO = {
  phone: "0424-2082491",
  email: "uhdconspat@gmail.com",
  location: "Caracas, Venezuela",
  whatsapp: "584242082491",
  instagram: "https://www.instagram.com/uhdconspat?igsh=MW0wdGN4cDRuY2ZyeA=="
};

export const BUSINESS_HOURS = {
  weekdays: "8:00 AM - 5:00 PM",
  saturday: "8:00 AM - 1:00 PM",
  note: "(Los horarios pueden variar dependiendo de la sede)"
};