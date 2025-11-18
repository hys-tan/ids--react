import Navbar from './components/layout/navbar';
import HomePage from './sections/homePage'; // Import HomePage
import Cuerpo from './sections/cuerpo'; // Import Cuerpo
import Nosotros from './sections/nosotros';
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
      </main>

      {/* Aquí irá el Footer desde components/layout/Footer.tsx */}
    </>
  )
}

export default App
