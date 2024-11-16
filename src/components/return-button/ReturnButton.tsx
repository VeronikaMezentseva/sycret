import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './return-button.module.css';

export const ReturnButton: FC = () => {
  const navigate = useNavigate();
  const navigateBack = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    navigate(-1);
  };
  return (
    <button
      className={styles['return-button']}
      onClick={(evt: React.MouseEvent<HTMLElement>) => navigateBack(evt)}
    >
      Назад
    </button>
  );
};
