import React from 'react';
import styles from './accion.module.css';

const Accion: React.FC = () => {
    return (
        <section className={styles.accionSection}>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h2 className={styles.title}>¿Necesita Soporte Técnico Inmediato?</h2>
                    <p className={styles.subtitle}>
                        Atendemos emergencias y mantenimiento correctivo 24/7 en todo Lima para evitar paradas costosas.
                    </p>
                </div>
                <a href="/contacto" className={styles.ctaButton}>
                    Contáctenos
                </a>
            </div>
        </section>
    );
};

export default Accion;
