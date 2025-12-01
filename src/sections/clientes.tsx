import React from 'react';
import styles from './clientes.module.css';

const Clientes: React.FC = () => {
    return (
        <div className={styles.clientesContainer}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>Clientes que Confían en Nosotros</h2>
            </div>
        </div>
    );
};

export default Clientes;
