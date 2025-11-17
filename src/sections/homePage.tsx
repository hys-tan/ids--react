import React, { useRef, useEffect } from 'react';
import styles from './homePage.module.css';
import { getImageUrl } from '../utils/image-helper';
import { useZoomOnScroll } from '../hooks/useZoomOnScroll';
 
const HomePage: React.FC = () => {
  const { scale } = useZoomOnScroll();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--zoom-scale', scale.toString());
    }
  }, [scale]);

  return (
    <div className={styles.welcomeContainer} ref={containerRef}>
      {/* Contenido de bienvenida */}
      <img 
        src={getImageUrl('portada.webp')} 
        alt="Portada" 
        className={styles.backgroundImage}
      />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Servicio Técnico Especializado</h1>
        <p className={styles.description}>Ofrecemos mantenimiento preventivo y correctivo, grupos electrógenos, fabricación de tableros de transferencia y mantenimiento de motores eléctricos.</p>
      </div>
      <div className={styles.shapeDivider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className={styles.shapeFill}></path>
          </svg>
      </div>
    </div>
    // El segundo contenedor irá aquí abajo, pero lo haremos después.
  );
};

export default HomePage;
