import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const ReturnButton: FC = () => {
  const navigate = useNavigate();
  const navigateBack = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    navigate(-1);
  };
  return (
    <button onClick={(evt: React.MouseEvent<HTMLElement>) => navigateBack(evt)}>
      Назад
    </button>
  );
};
