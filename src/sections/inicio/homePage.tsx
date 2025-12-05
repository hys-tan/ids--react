// BIBLIOTECAS EXTERNAS
import React, { useRef, useEffect } from 'react';
import { BsChevronCompactDown } from "react-icons/bs";

// HOOKS Y UTILIDADES
import { useZoomOnScroll } from '../../hooks/useZoomOnScroll';
import { getImageUrl } from '../../utils/image-helper';

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

      <span className={styles.scrollIcon} aria-hidden="true" title="">
        <BsChevronCompactDown />
      </span>
    </div>
    // El segundo contenedor irá aquí abajo, pero lo haremos después.
  );
};

export default HomePage;
