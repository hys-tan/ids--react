import React, { useEffect } from 'react';
import styles from './trabajos.module.css';
import { BsGear, BsRobot, BsLightning, BsPeople, BsThermometerHalf, BsShieldCheck } from "react-icons/bs";
import { useBorderRadiusOnScroll } from '../../hooks/useBorderRadiusOnView';
import { IoArrowForward } from "react-icons/io5";

const Trabajos: React.FC = () => {
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
        <div id="trabajos" className={styles.trabajosContainer} ref={ref}>

            {/* Título y descripción */}
            <div className={styles.headerSection}>
                <h2 className={styles.title}>Servicios de Mantenimiento Electromecánico y Energía</h2>
                <p className={styles.description}>
                    Especialistas en mantenimiento industrial, grupos electrógenos y sistemas eléctricos en Lima y todo el Perú. Garantizamos continuidad operativa y soporte 24/7.
                </p>
            </div>

            {/* Grid de tarjetas */}
            <div className={styles.cardsGrid}>
                {/* Tarjeta 1: Electromechanical Maintenance */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <BsGear className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Mantenimiento de Grupos Electrógenos</h3>
                    <p className={styles.cardText}>
                        Servicio técnico preventivo y correctivo multimarca (Cummins, Perkins, CAT) para asegurar su energía.
                    </p>
                    <a href="#" className={styles.learnMore}>
                        Leer más <IoArrowForward className={styles.arrowIcon} />
                    </a>
                </div>

                {/* Tarjeta 2: Industrial Automation */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <BsRobot className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Tableros de Transferencia Automática</h3>
                    <p className={styles.cardText}>
                        Diseño, fabricación e instalación de tableros TTA y distribución eléctrica a medida.
                    </p>
                    <a href="#" className={styles.learnMore}>
                        Leer más <IoArrowForward className={styles.arrowIcon} />
                    </a>
                </div>

                {/* Tarjeta 3: Energy Efficiency */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <BsLightning className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Reparación de Motores Eléctricos</h3>
                    <p className={styles.cardText}>
                        Mantenimiento y rebobinado profesional para garantizar la eficiencia de sus activos.
                    </p>
                    <a href="#" className={styles.learnMore}>
                        Leer más <IoArrowForward className={styles.arrowIcon} />
                    </a>
                </div>

                {/* Tarjeta 4: Technical Consulting */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <BsPeople className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Bombas de Agua y Presurización</h3>
                    <p className={styles.cardText}>
                        Venta, instalación y mantenimiento de sistemas de bombeo y presión constante.
                    </p>
                    <a href="#" className={styles.learnMore}>
                        Leer más <IoArrowForward className={styles.arrowIcon} />
                    </a>
                </div>

                {/* Tarjeta 5: Industrial HVAC */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <BsThermometerHalf className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Sistemas HVAC y Aire Acondicionado</h3>
                    <p className={styles.cardText}>
                        Suministro y mantenimiento de ventilación industrial y climatización.
                    </p>
                    <a href="#" className={styles.learnMore}>
                        Leer más <IoArrowForward className={styles.arrowIcon} />
                    </a>
                </div>

                {/* Tarjeta 6: Safety Systems */}
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <BsShieldCheck className={styles.icon} />
                    </div>
                    <h3 className={styles.cardTitle}>Pozos a Tierra y Seguridad</h3>
                    <p className={styles.cardText}>
                        Instalación, medición y mantenimiento de sistemas de puesta a tierra con certificación.
                    </p>
                    <a href="#" className={styles.learnMore}>
                        Leer más <IoArrowForward className={styles.arrowIcon} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Trabajos;
