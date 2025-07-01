import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds: string[], offset: number = 100) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + offset;

      let currentSection = sectionIds[0] || '';

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (sectionId && sectionIds.includes(sectionId)) {
            currentSection = sectionId;
          }
        }
      });

      // Handle end of page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        const lastSection = Array.from(sections).pop();
        const lastSectionId = lastSection?.getAttribute('id');
        if (lastSectionId && sectionIds.includes(lastSectionId)) {
          currentSection = lastSectionId;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};