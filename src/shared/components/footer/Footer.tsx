import { memo } from 'react';
import styles from './Footer.module.css';

export const Footer = memo(function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerTitle}>Made with love by Akopyan Karen</p>
    </footer>
  );
});
