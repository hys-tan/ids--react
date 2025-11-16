import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import { getImageUrl } from '../../utils/image-helper';
import { useStickyNavbar } from '../../hooks/useStickyNavbar';

const Navbar: React.FC = () => {
  const { showNavbar } = useStickyNavbar();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      // Bloquear scroll cuando el menú está abierto
      document.body.style.overflow = 'hidden';
    } else {
      // Restaurar scroll cuando el menú está cerrado
      document.body.style.overflow = 'unset';
    }

    // Cleanup: restaurar scroll cuando el componente se desmonte
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${showNavbar ? '' : styles.hidden}`}>
      {/* Top section */}
      <div className={styles.topNav}>
        <span>Lunes - Sábado | 08:00 - 19:00</span>
        <span>Av. Carlos Izaguirre Mza. B Lote. 05 15109, Lima</span>
      </div>

      {/* Divider */}
      <hr className={styles.divider} />

      {/* Bottom section */}
      <div className={styles.bottomNav}>
        {/* Hamburger button */}
        <button 
          className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo */}
        <a href="/" className={styles.logoLink}>
          <img src={getImageUrl('logo.png')} alt="Idelsi" className={styles.logo} />
        </a>

        <div className={`${styles.navActions} ${isMenuOpen ? styles.open : ''}`}>
          {/* Navigation links */}
          <ul className={styles.navLinks}>
            <li><a href="/#inicio" onClick={closeMenu}>Inicio</a></li>
            <li><a href="/#servicios" onClick={closeMenu}>Servicios</a></li>
            <li><a href="/#nosotros" onClick={closeMenu}>Nosotros</a></li>
            <li><a href="/#contactanos" onClick={closeMenu}>Contáctanos</a></li>
          </ul>
          <button className={styles.ctaButton} onClick={closeMenu}>
            Cotiza ahora
          </button>
        </div>
      </div>

      {/* Overlay para cerrar el menú al hacer clic fuera */}
      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}></div>
      )}
    </nav>
  );
};

export default Navbar;