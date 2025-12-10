import { useEffect } from 'react';
import Hero from '../sections/servicio/hero';

const Servicios = () => {
    useEffect(() => {
        document.title = 'Idelsi Soluciones | Servicios Técnicos';
    }, []);

    return (
        <main>
            <Hero />
            {/* Aquí agregarás más secciones de servicios en el futuro */}
        </main>
    );
};

export default Servicios;
