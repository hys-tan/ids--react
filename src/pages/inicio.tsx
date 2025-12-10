import { useEffect } from 'react';
import HomePage from '../sections/inicio/homePage';
import Cuerpo from '../sections/inicio/cuerpo';
import Nosotros from '../sections/inicio/nosotros';
import Valorag from '../sections/inicio/valorag';
import Expertos from '../sections/inicio/expertos';
import Clientes from '../sections/inicio/clientes';

const Inicio = () => {
    useEffect(() => {
        document.title = 'Idelsi Soluciones | Inicio';
    }, []);

    return (
        <main>
            <HomePage />
            <Cuerpo />
            <Nosotros />
            <Valorag />
            <Expertos />
            <Clientes />
        </main>
    );
};

export default Inicio;
