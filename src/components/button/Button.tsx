import { FC } from 'react';
import styles from './button.module.css';

export const Button: FC<{
  text: string;
  type?: 'submit';
  isDisabled: boolean;
  onClick?: () => void;
}> = ({ text, isDisabled, onClick }) => (
  <button
    className={styles.button}
    type='submit'
    disabled={isDisabled}
    onClick={onClick}
  >
    {text}
  </button>
);
