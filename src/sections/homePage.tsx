// BIBLIOTECAS EXTERNAS
import React, { useRef, useEffect } from 'react';
import { BsChevronCompactDown } from "react-icons/bs";

// HOOKS Y UTILIDADES
import { useZoomOnScroll } from '../hooks/useZoomOnScroll';
import { getImageUrl } from '../utils/image-helper';

// ESTILOS
import styles from './homePage.module.css';
 
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
        <p className={styles.description}>Somos una empresa especializada en servicios técnicos integrales, ofreciendo mantenimiento preventivo y correctivo, grupos electrógenos, fabricación de tableros de transferencia y mantenimiento de motores eléctricos.</p>
      </div>
      <div className={styles.shapeDivider}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={styles.shapeFill}></path>
          </svg>
      </div>
      <span className={styles.scrollIcon} aria-hidden="true" title="">
        <BsChevronCompactDown />
      </span>
    </div>
    // El segundo contenedor irá aquí abajo, pero lo haremos después.
  );
};

export default HomePage;
