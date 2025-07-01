// Global type definitions
export interface FormData {
  name: string;
  email: string;
  phone: string;
  howDidYouKnow: string;
  message: string;
}

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

export interface MissionValue {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface StatData {
  icon: React.ReactNode;
  value: number;
  label: string;
}

export interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  services: string[];
  mapUrl: string;
  features?: Array<{
    icon: React.ReactNode;
    text: string;
  }>;
}