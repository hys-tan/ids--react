import { useEffect } from 'react';
import ContactoHero from '../sections/contacto/contactoHero';

const Contacto = () => {
    useEffect(() => {
        document.title = 'Idelsi Soluciones | Contacto';
    }, []);

    return (
        <main>
            <ContactoHero/>
        </main>
    )
}

export default Contacto;
