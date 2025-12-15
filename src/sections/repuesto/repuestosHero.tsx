import React from 'react';
import styles from './repuestosHero.module.css';

const RepuestosHero: React.FC = () => {
    return (
        <section className={styles.repuestosHero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Repuestos</h1>
                <p className={styles.description}>
                    Descripción del Hero
                </p>
            </div>
        </section>
    );
};

export default RepuestosHero;
