import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/*
    Componente que resetea el scroll al inicio cuando cambia la ruta.
    Se debe colocar dentro de BrowserRouter en App.tsx
*/

export function RouteScrollReset() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default RouteScrollReset;
