import React from 'react';
import style from './contactoHero.module.css';

const ContactoHero: React.FC = () => {
    return (
        <section className={style.hero}>
            <div className={style.content}>
                <h1 className={style.title}>Contacto</h1>
                <p className={style.description}>Somos un equipo de profesionales especializados en servicios técnicos para equipos críticos, comprometidos con la excelencia y la satisfacción de nuestros clientes.</p>
            </div>
        </section>
    );
};

export default ContactoHero;
