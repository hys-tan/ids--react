import React from 'react';
import styles from './modal.module.css';
import { IoClose, IoCheckmarkCircle } from 'react-icons/io5';
import { getImageUrl } from '../../utils/image-helper';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const serviceInclusions = [
        'Mantenimiento Preventivo y Correctivo',
        'Análisis de Vibraciones y Termografía',
        'Pruebas Eléctricas y Certificaciones',
        'Soporte de Emergencia 24/7'
    ];

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>Mantenimiento Electromecánico</h2>
                    <button className={styles.closeButton} onClick={onClose} aria-label="Cerrar modal">
                        <IoClose />
                    </button>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Content */}
                <div className={styles.content}>
                    {/* Left side - Text */}
                    <div className={styles.textContent}>
                        <p className={styles.description}>
                            Nuestro servicio especializado de mantenimiento electromecánico
                            garantiza la confiabilidad y longevidad de sus activos industriales
                            críticos. Combinando mantenimiento tradicional con tecnologías
                            avanzadas de diagnóstico, le ayudamos a evitar paradas costosas
                            y extender los ciclos de vida de sus equipos.
                        </p>

                        <div className={styles.serviceSection}>
                            <h3 className={styles.serviceTitle}>SERVICIOS INCLUIDOS</h3>
                            <ul className={styles.serviceList}>
                                {serviceInclusions.map((service, index) => (
                                    <li key={index} className={styles.serviceItem}>
                                        <IoCheckmarkCircle className={styles.checkIcon} />
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className={styles.imageWrapper}>
                        <img
                            src={getImageUrl('op.webp')}
                            alt="Técnico electromecánico"
                            className={styles.image}
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                    <div className={styles.contactLink}>
                        <span>¿Necesita un plan personalizado?</span>
                        <a href="/contacto" className={styles.salesButton}>
                            Contáctenos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
