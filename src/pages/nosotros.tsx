import { useEffect } from 'react';
import NosotrosHero from '../sections/nosotros/nosotrosHero';

const Nosotros = () => {
    useEffect(() => {
        document.title = 'Idelsi Soluciones | Nosotros';
    }, []);

    return (
        <main>
            <NosotrosHero />
        </main>
    );
};

export default Nosotros;
