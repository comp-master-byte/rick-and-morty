import styles from './Loader.module.css';
import { LoaderIcon } from '@/shared';

type LoaderProps = {
  variant: 'small' | 'large';
  subtitle?: string;
};

export function Loader({ variant = 'large', subtitle }: LoaderProps) {
  return (
    <div className={styles.loaderWrapper}>
      <LoaderIcon
        className={
          variant === 'large' ? styles.largeLoader : styles.smallLoader
        }
      />
      {subtitle && <h3 className={`heading3 ${styles.loaderSubtitle}`}></h3>}
    </div>
  );
}
