import Navbar from './components/layout/navbar';
import HomePage from './sections/homePage';
import Cuerpo from './sections/cuerpo';
import Nosotros from './sections/nosotros';
import Valorag from './sections/valorag';
import Expertos from './sections/expertos';
import Clientes from './sections/clientes';
import Footer from './components/layout/footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      // Verifica si el elemento clickeado es una imagen (etiqueta <img>)
      if ((e.target as HTMLElement).tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        {/* Aquí irán las secciones desde la carpeta /sections */}
        <HomePage /> {/* Render HomePage */}
        <Cuerpo /> {/* Render Cuerpo */}
        <Nosotros /> {/* Render Nosotros */}
        <Valorag /> {/* Render Valorag */}
        <Expertos /> {/* Render Expertos */}
        <Clientes /> {/* Render Clientes */}
      </main>

      {/* Aquí irá el Footer desde components/layout/Footer.tsx */}
      <Footer />
    </>
  )
}

export default App
