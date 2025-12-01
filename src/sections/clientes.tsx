import React from 'react';
import styles from './clientes.module.css';
import { getImageUrl } from '../utils/image-helper';

const Clientes: React.FC = () => {
    const clientLogos = [
        'aap.webp',
        'frioa.webp',
        'proquinsa.webp',
        'delosi.webp',
        'fconfianza.webp',
        'binswagner.webp'
    ];

    return (
        <div className={styles.clientesContainer}>
            {/*
            <h2 className={styles.title}>Clientes que Confían en Nosotros</h2>
            */}

            <div className={styles.carouselWrapper}>
                {/* Overlay fade izquierdo */}
                <div className={styles.fadeLeft}></div>
                {/* Overlay fade derecho */}
                <div className={styles.fadeRight}></div>

                <div className={styles.carouselTrack}>
                    {/* Primera copia de los logos */}
                    {clientLogos.map((logo, index) => (
                        <div key={`logo-${index}`} className={styles.logoItem}>
                            <img
                                src={getImageUrl(logo)}
                                alt={`Cliente ${index + 1}`}
                                className={styles.logoImage}
                            />
                        </div>
                    ))}
                    {/* Segunda copia para loop infinito */}
                    {clientLogos.map((logo, index) => (
                        <div key={`logo-duplicate-${index}`} className={styles.logoItem}>
                            <img
                                src={getImageUrl(logo)}
                                alt={`Cliente ${index + 1}`}
                                className={styles.logoImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Clientes;
