import styles from './Loader.module.css';
import loaderIcon from '@/shared/assets/icons/loading.svg';
import { Heading3, LoaderIcon } from '@/shared';

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
      {subtitle && (
        <Heading3 className={styles.loaderSubtitle}>{subtitle}</Heading3>
      )}
    </div>
  );
}
