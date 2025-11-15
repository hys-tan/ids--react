import React from 'react';
import styles from './navbar.module.css';
import { getImageUrl } from '../../utils/image-helper';

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      {/* Top section */}
      <div className={styles.topNav}>
        <span>Lunes - Sábado | 08:00 - 19:00</span>
        <span>Av. Carlos Izaguirre Mza. B Lote. 05 15109, Lima</span>
      </div>

      {/* Divider */}
      <hr className={styles.divider} />

      {/* Bottom section */}
      <div className={styles.bottomNav}>
        {/* Logo */}
        <a href="/">
          <img src={getImageUrl('logo.png')} alt="Idelsi" className={styles.logo} />
        </a>

        <div className={styles.navActions}>
          {/* Navigation links */}
          <ul className={styles.navLinks}>
            <li><a href="/#inicio">Inicio</a></li>
            <li><a href="/#servicios">Servicios</a></li>
            <li><a href="/#nosotros">Nosotros</a></li>
            <li><a href="/#contactanos">Contáctanos</a></li>
          </ul>
          <button className={styles.ctaButton}>
            Cotiza ahora
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
