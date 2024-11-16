import { FC } from 'react';
import styles from './title.module.css';

export const Title: FC<{ text: string }> = ({ text }) => (
  <h1 className={styles.text}>{text}</h1>
);
