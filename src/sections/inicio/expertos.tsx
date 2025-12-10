import React from 'react';
import styles from './expertos.module.css';

const Expertos: React.FC = () => {
    return (
        <div className={styles.expertosContainer}>
            <div className={styles.contentWrapper}>
                <h2 className={styles.title}>¡Juntos, Impulsamos el Éxito de tu Proyecto!</h2>
                {/*<button className={styles.contactButton}>Hablar con un experto</button>*/}
            </div>
        </div>
    );
};

export default Expertos;
