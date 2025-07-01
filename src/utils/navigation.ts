export const scrollToSection = (sectionId: string, headerHeight: number = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.offsetTop - headerHeight;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/^0/, '');
};

export const createWhatsAppUrl = (phone: string): string => {
  return `https://wa.me/58${formatPhoneNumber(phone)}`;
};

export const createTelUrl = (phone: string): string => {
  return `tel:+58${formatPhoneNumber(phone)}`;
};

export const createMailtoUrl = (email: string): string => {
  return `mailto:${email}`;
};