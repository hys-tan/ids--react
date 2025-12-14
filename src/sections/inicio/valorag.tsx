import React, { useEffect } from 'react';
import styles from './valorag.module.css';
import { BsClock, BsShieldCheck, BsPersonCheck, BsSpeedometer2 } from "react-icons/bs";
import { useBorderRadiusOnScroll } from '../../hooks/useBorderRadiusOnView';

const Valorag: React.FC = () => {
    const { ref, borderRadius } = useBorderRadiusOnScroll({
        maxRadius: 50,
        maxRadiusMobile: 30,
        bottomOffset: 0,
        bottomOffsetMobile: 0,
    });

    // Aplicar la variable CSS al contenedor
    useEffect(() => {
        if (ref.current) {
            ref.current.style.setProperty('--border-radius', `${borderRadius}px`);
        }
    }, [borderRadius, ref]);

    return (
        <div className={styles.valorContainer} ref={ref}>

            {/* Título y descripción */}
            <div className={styles.headerSection}>
                <h2 className={styles.title}>Por Qué Preferir Nuestros Servicios</h2>
                <p className={styles.description}>
                    Brindamos un respaldo técnico integral diseñado para potenciar la confiabilidad de sus operaciones, minimizando riesgos y asegurando la máxima disponibilidad de su inversión.
                </p>
            </div>

            {/* Grid de tarjetas */}
            <div className={styles.cardsGrid}>
                {/* Tarjeta 1: Atención 24/7 */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <BsClock className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Atención 24/7</h3>
                    <p className={styles.cardText}>
                        Atención de emergencias 24/7 para asegurar que sus operaciones nunca se detengan.
                    </p>
                </div>

                {/* Tarjeta 2: Monitoreo Permanente */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <BsShieldCheck className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Monitoreo Permanente</h3>
                    <p className={styles.cardText}>
                        Servicios de monitoreo constante y evaluaciones técnicas especializadas.
                    </p>
                </div>

                {/* Tarjeta 3: Personal Capacitado */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <BsPersonCheck className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Personal Capacitado</h3>
                    <p className={styles.cardText}>
                        Capacitación constante a nuestros técnicos para garantizar un soporte integral y experto.
                    </p>
                </div>

                {/* Tarjeta 4: Optimización de Rendimiento */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <BsSpeedometer2 className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Optimización de Rendimiento</h3>
                    <p className={styles.cardText}>
                        Aseguramos soluciones que minimizan los tiempos de inactividad de sus equipos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Valorag;
