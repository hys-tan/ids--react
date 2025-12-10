import React from 'react';
import styles from './hero.module.css';
import { getImageUrl } from '../../utils/image-helper';
import { BsArrowDownCircleFill } from "react-icons/bs";

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>
                        Servicios Técnicos Especializados para la Continuidad de sus Operaciones
                    </h1>
                    <p className={styles.description}>
                        Garantizamos la continuidad operativa de sus equipos críticos mediante mantenimiento 
                        especializado en sistemas eléctricos, electromecánicos y HVAC. Atención inmediata y 
                        soporte técnico 24/7.
                    </p>
                    <a href="#servicios" className={styles.infoButton}>
                        Más información
                        <BsArrowDownCircleFill />
                    </a>
                </div>
                
                <div className={styles.imageContainer}>
                    <img 
                        src={getImageUrl('ge.webp')} 
                        alt="Generador eléctrico industrial" 
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
