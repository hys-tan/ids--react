import Navbar from './components/layout/navbar';
import HomePage from './sections/inicio/homePage';
import Cuerpo from './sections/inicio/cuerpo';
import Nosotros from './sections/inicio/nosotros';
import Valorag from './sections/inicio/valorag';
import Expertos from './sections/inicio/expertos';
import Clientes from './sections/inicio/clientes';
import Footer from './components/layout/footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import { UIProvider } from './contexts';
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
    <UIProvider>
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

      {/* Botón de scroll to top */}
      <ScrollToTop />

      {/* Botón de WhatsApp */}
      <WhatsAppButton />
    </UIProvider>
  )
}

export default App
