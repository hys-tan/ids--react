import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import ScrollToTop from './components/common/ScrollToTop';
import WhatsAppButton from './components/common/WhatsAppButton';
import RouteScrollReset from './components/common/RouteScrollReset';
import { UIProvider } from './contexts';
import { useEffect } from 'react';

// Importar páginas
import Inicio from './pages/inicio';
import Servicios from './pages/servicios';
import Nosotros from './pages/nosotros';
import Contacto from './pages/contacto';

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
    <BrowserRouter>
      <UIProvider>
        <RouteScrollReset />
        <Navbar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </UIProvider>
    </BrowserRouter>
  )
}

export default App
