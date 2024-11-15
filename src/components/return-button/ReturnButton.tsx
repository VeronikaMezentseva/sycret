import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const ReturnButton: FC = () => {
  const navigate = useNavigate();
  const navigateBack = () => {
    navigate(-1);
  };
  return <button onClick={navigateBack}>Назад</button>;
};
