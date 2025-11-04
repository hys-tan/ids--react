import Navbar from './components/layout/navbar';
import HomePage from './sections/homePage'; // Import HomePage
import Cuerpo from './sections/cuerpo'; // Import Cuerpo

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Aquí irán las secciones desde la carpeta /sections */}
        <HomePage /> {/* Render HomePage */}
        <Cuerpo /> {/* Render Cuerpo */}
      </main>

      {/* Aquí irá el Footer desde components/layout/Footer.tsx */}
    </>
  )
}

export default App
