import { memo } from 'react';
import styles from './Header.module.css';

export const Header = memo(function Header() {
  return (
    <header className={styles.header}>
      <div className='container'></div>
    </header>
  );
});
