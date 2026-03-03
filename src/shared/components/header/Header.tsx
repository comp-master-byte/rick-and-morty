import { memo } from 'react';
import styles from './Header.module.css';
import { IconContainer } from '@/shared';
import rickAndMortyLogoIcon from '@/shared/assets/icons/rick-and-morty-small-logo-light.svg';
import sunIcon from '@/shared/assets/icons/sun.svg';

export const Header = memo(function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerContent}>
          <img
            src={rickAndMortyLogoIcon}
            alt='rick-morty-logo'
          />
          <div className={styles.headerContentRightColumn}>
            <IconContainer>
              <img src={sunIcon} />
            </IconContainer>
            <IconContainer>
              <p className={styles.headerLanguage}>РУ</p>
            </IconContainer>
          </div>
        </div>
      </div>
    </header>
  );
});
