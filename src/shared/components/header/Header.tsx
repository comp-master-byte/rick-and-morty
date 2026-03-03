import { memo } from 'react';
import styles from './Header.module.css';
import { IconContainer, SmallRickAndMortyLightIcon, SunIcon } from '@/shared';

export const Header = memo(function Header() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.headerContent}>
          <SmallRickAndMortyLightIcon />
          <div className={styles.headerContentRightColumn}>
            <IconContainer>
              <SunIcon />
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
