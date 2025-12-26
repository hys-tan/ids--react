// BIBLIOTECAS EXTERNAS
import React from 'react';
import { Link } from 'react-router-dom';
import { BsPinMapFill, BsFillClockFill } from "react-icons/bs";

// HOOKS Y UTILIDADES
import { useStickyNavbar } from '../../hooks/useStickyNavbar';
import { getImageUrl } from '../../utils/image-helper';
import { useUI } from '../../contexts';

// ESTILOS
import styles from './navbar.module.css';

const Navbar: React.FC = () => {
  const { showNavbar } = useStickyNavbar();
  const { isMenuOpen, toggleMenu, closeMenu } = useUI();

  return (
    <nav className={`${styles.navbar} ${showNavbar ? '' : styles.hidden}`}>
      {/* Top section */}
      <div className={styles.topNav}>
        <div className={styles.topNavItem}>
          <BsFillClockFill />
          <span>Lunes - Sábado | 08:00 - 19:00</span>
        </div>
        <div className={styles.topNavItem}>
          <BsPinMapFill />
          <a
            href="https://maps.app.goo.gl/o9mERAochVnBAPxMA"
            target="_blank"
            rel="noopener noreferrer"
          >
            Av. Carlos Izaguirre Mza. B Lote. 05 15109 - SMP
          </a>
        </div>
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
          <img src={getImageUrl('logo.webp')} alt="Idelsi" className={styles.logo} />
        </a>

        <div className={`${styles.navActions} ${isMenuOpen ? styles.open : ''}`}>
          {/* Navigation links */}
          <ul className={styles.navLinks}>
            <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
            <li> <Link to="/repuestos" onClick={closeMenu}>Repuestos</Link></li>
            <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
            {/*<li><Link to="/contacto" onClick={closeMenu}>Contáctanos</Link></li>*/}
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