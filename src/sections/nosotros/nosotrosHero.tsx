import React from 'react';
import styles from './nosotrosHero.module.css';

const NosotrosHero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Nosotros</h1>
                <p className={styles.description}>
                    Somos un equipo de profesionales especializados en servicios técnicos
                    para equipos críticos, comprometidos con la excelencia y la satisfacción
                    de nuestros clientes.
                </p>
            </div>
        </section>
    );
};

export default NosotrosHero;
