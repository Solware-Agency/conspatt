import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/584242082491', '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 left-4 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
      title="¡Escríbenos por WhatsApp!"
    >
      <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />

      {/* Pulse animation */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
    </button>
  );
};

export default WhatsAppButton;