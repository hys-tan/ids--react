import React from 'react';
import styles from './cuerpo.module.css';
import { getImageUrl } from '../utils/image-helper';

const Cuerpo: React.FC = () => {
  return (
    <section className={styles.cuerpoContainer}>
      <h2 className={styles.title}>Nuestras Soluciones Integrales</h2>

      <div className={styles.grid}>
        {/* --- TARJETA 1 --- */}
        <div className={styles.card}>
          <div className={styles.imagePlaceholder}>
            <img 
              src={getImageUrl('electromecanico.webp')}
              alt="Mantenimiento Electromecánico"
              className={styles.cardImage}/>
          </div>
          <h3 className={styles.cardTitle}>Mantenimiento Electromecánico</h3>
          <p className={styles.cardText}>
            Ofrecemos mantenimiento preventivo, correctivo y predictivo para grupos electrógenos y motores
            eléctricos, garantizando su correcto funcionamiento.
          </p>
        </div>

        <div className={styles.card}>
        {/* --- TARJETA 2 --- */}
          <div className={styles.imagePlaceholder}>
            <img 
              src={getImageUrl('bombeo.webp')}
              alt="Sistema de Bombeo"
              className={styles.cardImage}/>
          </div>
          <h3 className={styles.cardTitle}>Sistemas de Bombeo y Presurización</h3>
          <p className={styles.cardText}>
            Aseguramos el rendimiento y continuidad de los sistemas de bombeo con servicio especializado en
            venta y mantenimiento de bombas de agua.
          </p>
        </div>

        {/* --- TARJETA 3 --- */}
        <div className={styles.card}>
          <div className={styles.imagePlaceholder}>
            <img 
              src={getImageUrl('ats.webp')}
              alt="Sistema de Transferencia Automática"
              className={styles.cardImage}/>
          </div>
          <h3 className={styles.cardTitle}>Sistemas de Transferencia Automática</h3>
          <p className={styles.cardText}>
            Nos especializamos en la fabricación e instalación de tableros de transferencia automática,
            diseñando soluciones confiables y ajustadas a cada cliente.
          </p>
        </div>

        {/* --- TARJETA 4 --- */}
        <div className={styles.card}>
          <div className={styles.imagePlaceholder}>
            <img 
              src={getImageUrl('pozo.webp')}
              alt="Sistemas de Climatización y Seguridad"
              className={styles.cardImage}/>
          </div>
          <h3 className={styles.cardTitle}>Sistemas de Climatización y Seguridad</h3>
          <p className={styles.cardText}>
            Realizamos instalación de sistemas HVAC y mantenimiento de pozos a tierra, garantizando óptimo
            funcionamiento y seguridad.
          </p>
        </div>
      </div>
      
      {/* --- SHAPE DIVIDER --- */}
      <div className={styles.shapeDivider}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className={styles.shapeFill}></path>
        </svg>
      </div>
    </section>
  );
};

export default Cuerpo;
