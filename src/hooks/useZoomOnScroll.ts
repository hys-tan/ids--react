import { useState, useEffect } from 'react';

export const useZoomOnScroll = () => {
  const [scale, setScale] = useState(1.1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calcular el porcentaje de scroll (0 a 1)
      // El zoom ocurre durante la primera pantalla (100vh)
      const scrollPercentage = Math.min(scrollPosition / windowHeight, 1);
      
      // Escala desde 1.1 (inicial) hasta 1.5 (máximo zoom)
      const newScale = 1.1 + (scrollPercentage * 0.4);
      
      setScale(newScale);
    };

    // Agregar el event listener
    window.addEventListener('scroll', handleScroll);
    
    // Llamar una vez al montar para establecer el valor inicial
    handleScroll();

    // Cleanup: remover el event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { scale };
};
