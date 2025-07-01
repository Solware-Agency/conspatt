import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GsapSplitText } from 'gsap/SplitText';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MedicalParticles from '../components/MedicalParticles';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';

import { useScrollSpy } from '../hooks/useScrollSpy';
import '../styles.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, GsapSplitText);

const SECTION_IDS = ['inicio', 'nosotros', 'servicios', 'contactanos'];

const Home: React.FC = () => {
  const activeSection = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    // Initialize ScrollTrigger
    const timer = setTimeout(() => {
      const heroElement = document.querySelector('.hero-section');
      if (heroElement) {
        const trigger = ScrollTrigger.create({
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          onEnter: () => {},
          onLeave: () => {},
        });

        return () => trigger.kill();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors duration-300">
      <MedicalParticles />
      <WhatsAppButton />
      <Header activeSection={activeSection} />
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Home;