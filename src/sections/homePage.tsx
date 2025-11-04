import React from 'react';
import styles from './homePage.module.css';

const HomePage: React.FC = () => {
  return (
    <div className={styles.welcomeContainer}>
      {/* Contenido de bienvenida */}
      <h1>¡Bienvenido a nuestro sitio!</h1>
      <p>Descubre nuestros servicios y cómo podemos ayudarte.</p>
    </div>
    // El segundo contenedor irá aquí abajo, pero lo haremos después.
  );
};

export default HomePage;
