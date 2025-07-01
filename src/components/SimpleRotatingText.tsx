import React, { useState, useEffect } from 'react';

interface SimpleRotatingTextProps {
  texts: string[];
  rotationInterval?: number;
  className?: string;
}

const SimpleRotatingText: React.FC<SimpleRotatingTextProps> = ({
  texts,
  rotationInterval = 4000,
  className = ""
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (texts.length <= 1) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === texts.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 300);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [texts.length, rotationInterval]);

  return (
    <span
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        display: 'inline-block'
      }}
    >
      {texts[currentIndex]}
    </span>
  );
};

export default SimpleRotatingText; 