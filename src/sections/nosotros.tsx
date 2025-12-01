import React from 'react';
import styles from './nosotros.module.css';
import { GoGoal, GoLightBulb } from "react-icons/go";

const Nosotros: React.FC = () => {
    return (
        <div className={styles.nosotrosContainer}>

            {/* Contenedor principal */}
            <div className={styles.contentWrapper}>
                {/* Contenido */}
                <div className={styles.textColumn}>
                    <h2 className={styles.title}>Aliados en Continuidad Operativa</h2>
                    <p className={styles.description}>
                        Nuestra identidad se define por superar las expectativas del mercado mediante soluciones técnicas de alta fiabilidad. Fusionamos la experiencia en campo con la innovación constante para transformar el mantenimiento industrial en una ventaja competitiva, extendiendo la vida útil de su inversión con estándares de calidad rigurosos.
                    </p>
                    <hr className={styles.divider} />

                    {/* Tarjetas de Misión y Visión */}
                    <div className={styles.cardsContainer}>
                        {/* Tarjeta Misión */}
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <GoGoal className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>Nuestra Misión</h3>
                            <p className={styles.cardText}>
                                Proveer soluciones de alta calidad con enfoque en la confiabilidad y puntualidad.
                            </p>
                        </div>

                        {/* Tarjeta Visión */}
                        <div className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <GoLightBulb className={styles.icon} />
                            </div>
                            <h3 className={styles.cardTitle}>Nuestra Visión</h3>
                            <p className={styles.cardText}>
                                Ser líderes en mantenimiento especializado e innovación tecnológica.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nosotros;
