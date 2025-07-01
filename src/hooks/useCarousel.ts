import { useEffect } from 'react';
import { gsap } from 'gsap';

export const useCarousel = (containerSelector: string, duration: number = 25) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const carousel = document.querySelector(containerSelector);
      if (carousel) {
        gsap.set(carousel, { x: 0 });
        
        const tl = gsap.timeline({ 
          repeat: -1, 
          yoyo: true,
          repeatDelay: 0.5
        });
        
        tl.to(carousel, {
          x: '-50%',
          duration,
          ease: 'sine.inOut'
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [containerSelector, duration]);
};