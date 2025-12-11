import React from 'react';
import styles from './hero.module.css';
import { getImageUrl } from '../../utils/image-helper';
import { BsArrowDownCircleFill } from "react-icons/bs";

const Hero: React.FC = () => {
    return (
        <div className={styles.hero}>
            {/* SERVICIOS */}
            <img
                src={getImageUrl('ge.webp')}
                alt="Portada"
                className={styles.heroImage}
            />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Servicios Técnicos Especializados para la Continuidad de sus Operaciones
                </h1>
                <p className={styles.description}>
                    Garantizamos la continuidad operativa de sus equipos críticos mediante mantenimiento especializado en sistemas eléctricos, electromecánicos y HVAC. Atención inmediata y soporte técnico 24/7.
                </p>
                <a href="#servicios" className={styles.infoButton}>
                    Más Información
                    <BsArrowDownCircleFill />
                </a>
            </div>
        </div>
    );
};

export default Hero;
