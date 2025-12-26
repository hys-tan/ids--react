import React, { useEffect } from 'react';
import styles from './footer.module.css';
import { BsPinMapFill, BsTelephoneFill, BsFillClockFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { getImageUrl } from '../../utils/image-helper';
import { useFooterBorderRadius } from '../../hooks/useBorderRadiusOnView';

const Footer: React.FC = () => {
    const { ref, borderRadius } = useFooterBorderRadius({
        maxRadius: 50,
        maxRadiusMobile: 20,
    });

    useEffect(() => {
        if (ref.current) {
            ref.current.style.setProperty('--border-radius', `${borderRadius}px`);
        }
    }, [borderRadius, ref]);

    return (
        <footer className={styles.footer} ref={ref}>
            <div className={styles.footerContent}>
                {/* Columna 1: Acerca de */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Acerca de</h4>
                    <p className={styles.description}>
                        Somos especialistas en servicios técnicos integrales, ofreciendo mantenimiento
                        preventivo y correctivo de grupos electrógenos, tableros y motores eléctricos.
                        Brindamos soluciones confiables y soporte 24/7.
                    </p>
                </div>

                {/* Columna 2: Contáctanos */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>Contáctanos</h4>
                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <BsPinMapFill className={styles.icon} />
                            <a href="https://maps.app.goo.gl/o9mERAochVnBAPxMA" target="_blank" rel="noopener noreferrer">
                                Av. Carlos Izaguirre Mza. B Lote. 05 - San Martín de Porres, Lima
                            </a>
                        </div>
                        <div className={styles.contactItem}>
                            <BsTelephoneFill className={styles.icon} />
                            <a href="https://wa.me/51943663827" target="_blank" rel="noopener noreferrer">
                                +51 943 663 827
                            </a>
                        </div>
                        <div className={styles.contactItem}>
                            <IoMail className={styles.icon} />
                            <a href="mailto:ventas@idelsisoluciones.com">
                                ventas@idelsisoluciones.com
                            </a>
                        </div>
                        <div className={styles.contactItem}>
                            <BsFillClockFill className={styles.icon} />
                            <span>Lunes - Sábado | 08:00 - 19:00</span>
                        </div>
                    </div>
                </div>

                {/* Columna 3: Síguenos */}
                <div className={styles.column}>
                    <h4 className={styles.columnTitle}>¡Síguenos!</h4>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                            <FaInstagram />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <img
                        src={getImageUrl('logo.webp')}
                        alt="Idelsi Soluciones Logo"
                        className={styles.footerLogo}
                    />
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <div className={styles.divider}></div>
                <p>© 2024 Idelsi Soluciones SAC - Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
