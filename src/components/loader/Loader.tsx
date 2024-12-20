import { FC } from 'react';
import styles from './loader.module.css';

export const Loader: FC = () => (
  <div className={styles.container}>
    <span className={styles.loader} />
  </div>
);
