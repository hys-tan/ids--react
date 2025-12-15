import { useEffect } from 'react';
import RepuestosHero from '../sections/repuesto/repuestosHero';

const Repuestos = () => {
    useEffect(() => {
        document.title = 'Idelsi Soluciones | Repuestos';
    }, []);

    return (
        <main>
            <RepuestosHero />
        </main>
    );
};

export default Repuestos;
