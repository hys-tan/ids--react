import React from 'react';
import styles from './WhatsAppButton.module.css';
import { FaWhatsapp } from "react-icons/fa";
import { useUI } from '../../contexts';

const WhatsAppButton: React.FC = () => {
    const { isMenuOpen } = useUI();

    return (
        <a
            href="https://wa.me/51943663827?text=Hola,%20necesito%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.whatsappButton} ${isMenuOpen ? styles.hidden : ''}`}
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsAppButton;
