import React, { useEffect, useState } from 'react';
import styles from './trabajos.module.css';
import { BsGear, BsRobot, BsLightning, BsPeople, BsThermometerHalf, BsShieldCheck } from "react-icons/bs";
import { useBorderRadiusOnScroll } from '../../hooks/useBorderRadiusOnView';
import { IoArrowForward } from "react-icons/io5";
import { getImageUrl } from '../../utils/image-helper';

// Datos del carrusel
const featuredSlides = [
    {
        tag: "RESPALDO TOTAL",
        title: "Gestión de Grupos Electrógenos",
        description: "Elevamos el estándar del mantenimiento convencional mediante el uso de escáneres multimarca y bancos de prueba de carga. No solo cambiamos filtros; realizamos análisis de fluidos y diagnóstico electrónico profundo para detectar fallas incipientes en motores (Cummins, Perkins, CAT) antes de que comprometan su operación crítica.",
        image: "op.webp"
    },
    {
        tag: "AUTOMATIZACIÓN",
        title: "Automatización y Retrofit de Tableros TTA",
        description: "Desarrollamos ingeniería de detalle para la fabricación de tableros nuevos o la modernización (retrofit) de sistemas obsoletos. Integramos módulos de control de última generación (ComAp, Deep Sea) que permiten monitoreo remoto y gestión eficiente de carga, garantizando cumplimiento estricto con el Código Nacional de Electricidad.",
        image: "op.webp"
    },
    {
        tag: "ALTA EFICIENCIA",
        title: "Rebobinado Industrial y Análisis de Vibraciones",
        description: "Restauramos las condiciones operativas de fábrica utilizando materiales de aislamiento Clase H y barnices de alta resistencia térmica. Nuestro proceso incluye pruebas de megado, análisis de vibraciones y balanceo dinámico para eliminar armónicos y asegurar que el motor opere con la máxima eficiencia energética posible.",
        image: "op.webp"
    }
];

const Trabajos: React.FC = () => {
    const { ref, borderRadius } = useBorderRadiusOnScroll({
        maxRadius: 50,
        maxRadiusMobile: 30,
        bottomOffset: 0,
        bottomOffsetMobile: 0,
    });

    // Estado del carrusel
    const [currentSlide, setCurrentSlide] = useState(0);

    // Aplicar la variable CSS al contenedor
    useEffect(() => {
        if (ref.current) {
            ref.current.style.setProperty('--border-radius', `${borderRadius}px`);
        }
    }, [borderRadius, ref]);

    // Auto-avance del carrusel cada 10 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    // Funciones de navegación
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % featuredSlides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + featuredSlides.length) % featuredSlides.length);
    };

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

            {/* Featured Solutions Section - Carrusel */}
            <div className={styles.featuredSection}>
                {/* Header con título y navegación */}
                <div className={styles.featuredHeader}>
                    <h2 className={styles.featuredTitle}>Soluciones Destacadas</h2>
                    <div className={styles.navArrows}>
                        <button className={styles.navArrow} aria-label="Anterior" onClick={prevSlide}>
                            <IoArrowForward className={styles.navArrowIcon} style={{ transform: 'rotate(180deg)' }} />
                        </button>
                        <button className={styles.navArrow} aria-label="Siguiente" onClick={nextSlide}>
                            <IoArrowForward className={styles.navArrowIcon} />
                        </button>
                    </div>
                </div>

                {/* Carrusel con efecto slide */}
                <div className={styles.slidesContainer}>
                    <div
                        className={styles.slidesTrack}
                        style={{ transform: `translateX(calc(-${currentSlide} * (100% + 2rem)))` }}
                    >
                        {featuredSlides.map((slide, index) => (
                            <div key={index} className={styles.featuredCard}>
                                <div className={styles.featuredContent}>
                                    <span className={styles.featuredTag}>{slide.tag}</span>
                                    <h3 className={styles.featuredCardTitle}>{slide.title}</h3>
                                    <p className={styles.featuredCardText}>
                                        {slide.description}
                                    </p>
                                </div>
                                <div className={styles.featuredImageWrapper}>
                                    <img
                                        src={getImageUrl(slide.image)}
                                        alt={slide.title}
                                        className={styles.featuredImage}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Indicadores de paginación */}
                <div className={styles.paginationDots}>
                    {featuredSlides.map((_, index) => (
                        <span
                            key={index}
                            className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Trabajos;
