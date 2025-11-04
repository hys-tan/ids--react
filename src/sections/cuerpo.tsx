import React from 'react';
import styles from './cuerpo.module.css';

const Cuerpo: React.FC = () => {
  return (
    <div className={styles.cuerpoContainer}>
      <h2>Contenido Secundario</h2>
      <p>Aquí se encuentra el contenido secundario de la página.</p>
    </div>
  );
};

export default Cuerpo;