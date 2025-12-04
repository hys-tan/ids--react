import React from 'react';
import styles from './WhatsAppButton.module.css';
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://wa.me/51943663827?text=Hola,%20necesito%20más%20información"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
            aria-label="Contactar por WhatsApp"
        >
            <FaWhatsapp />
        </a>
    );
};

export default WhatsAppButton;
