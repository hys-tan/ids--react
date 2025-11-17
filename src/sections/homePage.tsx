import React from 'react';
import styles from './homePage.module.css';
import { getImageUrl } from '../utils/image-helper';
 
const HomePage: React.FC = () => {
  return (
    <div className={styles.welcomeContainer}>
      {/* Contenido de bienvenida */}
      <img src={getImageUrl('portada.webp')} alt="Portada" className={styles.backgroundImage} />
      <div className={styles.contentWrapper}>
        <h1 className={styles.title}>Servicio Técnico Especializado</h1>
        <p className={styles.description}>Ofrecemos mantenimiento preventivo y correctivo, grupos electrógenos, fabricación de tableros de transferencia y mantenimiento de motores eléctricos.</p>
      </div>
    </div>
    // El segundo contenedor irá aquí abajo, pero lo haremos después.
  );
};

export default HomePage;
