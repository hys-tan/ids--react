import React, { useEffect } from 'react';
import styles from './hero.module.css';
import { getImageUrl } from '../../utils/image-helper';
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useBorderRadiusOnScroll } from '../../hooks/useBorderRadiusOnView';
import { useZoomOnScroll } from '../../hooks/useZoomOnScroll';

const Hero: React.FC = () => {
    const { ref, borderRadius } = useBorderRadiusOnScroll({
        maxRadius: 50,
        maxRadiusMobile: 30,
        bottomOffset: 0,
        bottomOffsetMobile: 0,
    });

    const { scale } = useZoomOnScroll();

    useEffect(() => {
        if (ref.current) {
            ref.current.style.setProperty('--border-radius', `${borderRadius}px`);
            ref.current.style.setProperty('--zoom-scale', scale.toString());
        }
    }, [borderRadius, scale, ref]);

    return (
        <div className={styles.hero} ref={ref}>
            {/* SERVICIOS */}
            <img
                src={getImageUrl('portada2.webp')}
                alt="Portada"
                className={styles.heroImage}
            />
            <div className={styles.content}>
                <h1 className={styles.title}>
                    Servicio Técnico Especializado en Grupos Electrógenos y Electricidad Industrial
                </h1>
                <p className={styles.description}>
                    Garantizamos la continuidad operativa de sus equipos críticos mediante mantenimiento especializado en sistemas eléctricos, electromecánicos y HVAC. Atención inmediata y soporte técnico 24/7.
                </p>
                <a
                    href="#trabajos"
                    className={styles.infoButton}
                    onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('trabajos')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Más Información
                    <BsArrowDownCircleFill />
                </a>
            </div>
        </div>
    );
};

export default Hero;
