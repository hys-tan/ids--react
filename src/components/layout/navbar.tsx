import styles from './navbar.module.css';
import { getImageUrl } from '../../utils/image-helper';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">
          <img src={getImageUrl('logo.png')} alt="Idelsi" className={styles.logoImg} />
        </a>
      </div>

      <div className={styles.navActions}>
        <ul className={styles.navLinks}>
          <li><a href="/#inicio">Inicio</a></li>
          <li><a href="/#servicios">Servicios</a></li>
          <li><a href="/#nosotros">Nosotros</a></li>
          <li><a href="/#contacto">Contáctanos</a></li>
        </ul>
        <button className={styles.ctaButton}>
          Cotiza ahora
        </button>
      </div>
    </nav>
  );
};

export default Navbar;