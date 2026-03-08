import { Header, Footer } from '@/shared';
import { Outlet } from 'react-router';
import styles from './AppTemplate.module.css';

export function AppTemplate() {
  return (
    <div className={styles.appTemplateWrapper}>
      <Header />
      <div className={styles.appTemplateContent}>
        <div className='container'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
