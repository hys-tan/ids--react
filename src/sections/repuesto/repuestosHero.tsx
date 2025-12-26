import React from 'react';
import styles from './repuestosHero.module.css';
import { getImageUrl } from '../../utils/image-helper';
import { BsBoxArrowUpRight } from "react-icons/bs";

const RepuestosHero: React.FC = () => {
    // Logos de marcas disponibles
    const brandLogos = [
        { file: 'cummins.webp', name: 'Cummins' },
        { file: 'perkins.webp', name: 'Perkins' },
        { file: 'cat2.webp', name: 'CAT' },
        { file: 'jhon2.webp', name: 'John Deere' },
        { file: 'lister2.webp', name: 'Lister' },
    ];

    return (
        <section className={styles.repuestosHero}>
            {/* Imagen de fondo */}
            <img
                src={getImageUrl('portada3.webp')}
                alt="Fondo repuestos"
                className={styles.backgroundImage}
            />

            {/* Contenido principal */}
            <div className={styles.content}>
                {/* Badge */}
                <div className={styles.badge}>
                    <span className={styles.badgeDot}></span>
                    <span className={styles.badgeText}>STOCK PERMANENTE</span>
                </div>

                {/* Título */}
                <h1 className={styles.title}>
                    Venta de Repuestos
                    <span className={styles.titleHighlight}> Originales Multimarca</span>
                </h1>

                {/* Descripción */}
                <p className={styles.description}>
                    Maximizamos la vida útil de su inversión suministrando componentes genuinos y certificados.
                    Garantizamos el rendimiento óptimo de su maquinaria con repuestos de alta calidad y durabilidad comprobada.
                </p>

                {/* Botón Info */}
                <a href="#" className={styles.infoButton}>
                    Cotizar Repuestos
                    <BsBoxArrowUpRight />
                </a>
            </div>

            {/* Sección de marcas */}
            <div className={styles.brandsSection}>
                <span className={styles.brandsLabel}>MARCAS DISPONIBLES</span>
                <div className={styles.brandsContainer}>
                    {brandLogos.map((logo, index) => (
                        <div key={`brand-${index}`} className={styles.brandItem}>
                            <img
                                src={getImageUrl(logo.file)}
                                alt={`Logo de ${logo.name}`}
                                className={styles.brandLogo}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RepuestosHero;
