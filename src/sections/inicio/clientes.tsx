import React, { useEffect } from 'react';
import styles from './clientes.module.css';
import { getImageUrl } from '../../utils/image-helper';
import { useBorderRadiusOnScroll } from '../../hooks/useBorderRadiusOnView';

const Clientes: React.FC = () => {
    const { ref, borderRadius } = useBorderRadiusOnScroll({
        maxRadius: 50,
        maxRadiusMobile: 30,
        bottomOffset: 0,
        bottomOffsetMobile: 0,
    });

    useEffect(() => {
        if (ref.current) {
            ref.current.style.setProperty('--border-radius', `${borderRadius}px`);
        }
    }, [borderRadius, ref]);

    const clientLogos = [
        { file: 'aap.webp', name: 'AAP Industrial' },
        { file: 'frioa.webp', name: 'Frioa' },
        { file: 'proquinsa.webp', name: 'Proquinsa' },
        { file: 'binswagner.webp', name: 'Binswagner' },
        { file: 'fconfianza.webp', name: 'Financiera Confianza' },
        { file: 'delosi.webp', name: 'Delosi' }
    ];

    return (
        <div className={styles.clientesContainer} ref={ref}>
            <h2 className={styles.title}>Nuestros Clientes</h2>

            <div className={styles.logosGrid}>
                {clientLogos.map((logo, index) => (
                    <div key={`logo-${index}`} className={styles.logoItem}>
                        <img
                            src={getImageUrl(logo.file)}
                            alt={`Logo de ${logo.name}`}
                            className={styles.logoImage}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clientes;
