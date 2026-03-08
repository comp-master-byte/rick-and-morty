import { memo } from 'react';
import styles from './IconContainer.module.css';

type IconContainerProps = {
  children: React.ReactNode;
};

export const IconContainer = memo(function IconContainer({
  children,
}: IconContainerProps) {
  return <div className={styles.iconContainerWrapper}>{children}</div>;
});
