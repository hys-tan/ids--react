import { useEffect } from 'react';
import styles from './servicios.module.css';
import Hero from '../sections/servicio/hero';
import Trabajos from '../sections/servicio/trabajos';

const Servicios = () => {
    useEffect(() => {
        document.title = 'Idelsi Soluciones | Servicios Técnicos';
    }, []);

    return (
        <main className={styles.pageContainer}>
            <Hero />
            <Trabajos />
            {/* Aquí agregarás más secciones de servicios en el futuro */}
        </main>
    );
};

export default Servicios;
