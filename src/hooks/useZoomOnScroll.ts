import { useState, useEffect } from 'react';

export const useZoomOnScroll = () => {
  const [scale, setScale] = useState(1.1);
  const [borderRadius, setBorderRadius] = useState(50);

  useEffect(() => {
    const handleScrollAndResize = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      // Calcular el porcentaje de scroll (0 a 1)
      // El zoom ocurre durante la primera pantalla (100vh)
      const scrollPercentage = Math.min(scrollPosition / windowHeight, 1);

      // Escala desde 1.1 (inicial) hasta 1.5 (máximo zoom)
      const newScale = 1.1 + (scrollPercentage * 0.4);

      // Border radius máximo: 30px en móvil (<=1300px), 50px en desktop
      const maxRadius = windowWidth <= 1300 ? 30 : 50;

      // Border radius se reduce hasta 0px
      // Se reduce más rápido (durante el primer 40% del scroll)
      const radiusProgress = Math.min(scrollPosition / (windowHeight * 0.4), 1);
      const newBorderRadius = maxRadius * (1 - radiusProgress);

      setScale(newScale);
      setBorderRadius(newBorderRadius);
    };

    // Agregar los event listeners
    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    // Llamar una vez al montar para establecer el valor inicial
    handleScrollAndResize();

    // Cleanup: remover los event listeners
    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, []);

  return { scale, borderRadius };
};
