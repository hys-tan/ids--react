import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { IoClose, IoCheckmarkCircle } from 'react-icons/io5';
import { getImageUrl } from '../../utils/image-helper';

// Datos de todos los modales
export const modalData = [
    {
        id: 'grupos-electrogenos',
        title: 'Mantenimiento Integral de Grupos Electrógenos',
        description: 'Garantizamos la energía de respaldo de su operación mediante planes de mantenimiento preventivo y correctivo multimarca. Nuestros ingenieros utilizan escáneres de diagnóstico y bancos de prueba para asegurar que motores Cummins, Perkins, CAT y John Deere arranquen cuando más los necesita, cumpliendo con la normativa ambiental y operativa vigente.',
        services: [
            'Mantenimiento Multimarca (Preventivo/Correctivo)',
            'Análisis de fluidos y refrigerantes',
            'Pruebas de carga y transferencia automática',
            'Atención de emergencias 24/7 en Lima'
        ],
        image: 'op.webp'
    },
    {
        id: 'tableros-tta',
        title: 'Fabricación y Automatización de Tableros (TTA)',
        description: 'Diseñamos y fabricamos tableros de transferencia automática y distribución eléctrica a medida de su carga instalada. Integramos módulos de control inteligentes (ComAp / Deep Sea) que permiten el monitoreo remoto y la gestión eficiente de energía, asegurando una conmutación segura entre la red comercial y su generador.',
        services: [
            'Diseño y ensamblaje de Tableros TTA',
            'Modernización (Retrofit) de sistemas antiguos',
            'Programación de módulos de control',
            'Cumplimiento del Código Nacional de Electricidad'
        ],
        image: 'op.webp'
    },
    {
        id: 'motores-electricos',
        title: 'Rebobinado y Mantenimiento de Motores',
        description: 'Restauramos la eficiencia original de sus equipos rotativos críticos. Nuestro laboratorio realiza desde el diagnóstico de vibraciones hasta el rebobinado técnico con aislamiento Clase H, garantizando que sus motores eléctricos operen con la máxima eficiencia energética y menor temperatura de trabajo.',
        services: [
            'Rebobinado de estatores y rotores',
            'Balanceo dinámico y cambio de rodamientos',
            'Pruebas de aislamiento (Megado)',
            'Análisis de vibraciones y termografía'
        ],
        image: 'op.webp'
    },
    {
        id: 'bombas-agua',
        title: 'Sistemas de Bombeo y Presión Constante',
        description: 'Asegure el caudal y la presión de agua en su edificación o industria. Ofrecemos soluciones completas en venta, instalación y mantenimiento de sistemas hidroneumáticos y bombas de presión constante, optimizando el consumo eléctrico y evitando fugas o caídas de presión en las redes sanitarias.',
        services: [
            'Mantenimiento de bombas sumergibles y centrífugas',
            'Tableros de control y alternancia de bombas',
            'Limpieza y desinfección de cisternas',
            'Atención a sistemas contra incendio'
        ],
        image: 'op.webp'
    },
    {
        id: 'hvac',
        title: 'Climatización y Ventilación Industrial (HVAC)',
        description: 'El control de temperatura es vital para sus equipos y personal. Proveemos suministro, instalación y mantenimiento de sistemas de aire acondicionado industrial y ventilación mecánica. Nos especializamos en la climatización de precisión para salas de servidores, tableros eléctricos y oficinas corporativas.',
        services: [
            'Mantenimiento de equipos Split, Paquete y Chiller',
            'Proyectos de ventilación y extracción de aire',
            'Limpieza química de evaporadores y condensadores',
            'Medición de calidad de aire'
        ],
        image: 'op.webp'
    },
    {
        id: 'pozos-tierra',
        title: 'Certificación y Mantenimiento de Pozos a Tierra',
        description: 'Proteja su infraestructura y cumpla con las normativas de seguridad. Realizamos la medición, reactivación y construcción de sistemas de puesta a tierra, logrando la resistencia ohmica exigida por INDECI (menor a 25 Ohms) para garantizar la seguridad ante fugas eléctricas.',
        services: [
            'Mantenimiento con tratamiento químico (Thor Gel)',
            'Medición con telurómetro certificado calibrado',
            'Emisión de Protocolo de Pruebas (Ingeniero Colegiado)',
            'Diseño de mallas a tierra'
        ],
        image: 'op.webp'
    }
];

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    modalIndex: number;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, modalIndex }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    // Obtener datos del modal actual
    const currentModal = modalData[modalIndex] || modalData[0];

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setIsClosing(false);
        }
    }, [isOpen]);

    // Bloquear scroll cuando el modal está abierto
    useEffect(() => {
        if (shouldRender) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [shouldRender]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShouldRender(false);
            onClose();
        }, 200);
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    };

    if (!shouldRender) return null;

    return createPortal(
        <div
            className={`${styles.overlay} ${isClosing ? styles.overlayClosing : ''}`}
            onClick={handleOverlayClick}
        >
            <div className={`${styles.modal} ${isClosing ? styles.modalClosing : ''}`}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>{currentModal.title}</h2>
                    <button className={styles.closeButton} onClick={handleClose} aria-label="Cerrar modal">
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
                            {currentModal.description}
                        </p>

                        <div className={styles.serviceSection}>
                            <h3 className={styles.serviceTitle}>SERVICIOS INCLUIDOS</h3>
                            <ul className={styles.serviceList}>
                                {currentModal.services.map((service, index) => (
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
                            src={getImageUrl(currentModal.image)}
                            alt={currentModal.title}
                            className={styles.image}
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className={styles.footer}>
                    <div className={styles.contactLink}>
                        <span>¿Tiene una emergencia técnica?</span>
                        <a href="/contacto" className={styles.salesButton}>
                            Contáctenos
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
