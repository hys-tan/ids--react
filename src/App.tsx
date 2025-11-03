import Navbar from './components/layout/navbar';

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Aquí irán las secciones desde la carpeta /sections */}
        <h1>Mi Landing Page</h1>
      </main>

      {/* Aquí irá el Footer desde components/layout/Footer.tsx */}
    </>
  )
}

export default App
