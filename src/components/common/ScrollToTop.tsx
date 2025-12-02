import React, { useState, useEffect } from 'react';
import styles from './ScrollToTop.module.css';
import { BsChevronCompactUp } from "react-icons/bs";

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Detectar cuando el usuario hace scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Agregar listener de scroll
        window.addEventListener('scroll', toggleVisibility);

        // Cleanup: remover listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Función para hacer scroll hacia arriba
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`${styles.scrollToTop} ${isVisible ? styles.visible : styles.hidden}`}
            aria-label="Volver arriba"
        >
            <BsChevronCompactUp />
        </button>
    );
};

export default ScrollToTop;
