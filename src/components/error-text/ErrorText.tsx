import { FC } from 'react';
import styles from './error-text.module.css';

export const ErrorText: FC<{ text: string }> = ({ text }) => (
  <p className={styles.error}>{text}</p>
);
