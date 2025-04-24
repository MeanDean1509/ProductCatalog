import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.header}>
      <h2><Link className={styles.link} to="/">Product Catalog</Link></h2>
    </div>
  );
}

export default Header;
