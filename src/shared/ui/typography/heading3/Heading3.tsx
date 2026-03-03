import { memo } from 'react';
import styles from './Heading3.module.css';

type Heading3Props = {
  children: React.ReactNode;
  className?: string;
};

export const Heading3 = memo(function Heading3({
  children,
  className,
}: Heading3Props) {
  return <h3 className={`${styles.heading3} ${className}`}>{children}</h3>;
});
