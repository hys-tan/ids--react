import React from 'react';
import styles from './clientes.module.css';
import { getImageUrl } from '../../utils/image-helper';

const Clientes: React.FC = () => {
    const clientLogos = [
        'aap.png',
        'frioa.png',
        'proquinsa.png',
        'binswagner.png',
        'fconfianza.png',
        'delosi.png'
    ];

    return (
        <div className={styles.clientesContainer}>
            <h2 className={styles.title}>Nuestros Clientes</h2>

            <div className={styles.logosGrid}>
                {clientLogos.map((logo, index) => (
                    <div key={`logo-${index}`} className={styles.logoItem}>
                        <img
                            src={getImageUrl(logo)}
                            alt={`Cliente ${index + 1}`}
                            className={styles.logoImage}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clientes;
