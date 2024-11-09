import { FC } from 'react';
import { useEffect, useState } from 'react';
import styles from './sertificates-page.module.css';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import {
  getSertificates,
  selectSertificates
} from '../../slices/sertificates-slice';
import { Card } from '../../components/card/Card';
import { useNavigate } from 'react-router-dom';

export const SertificatesPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const sertificates = useAppSelector(selectSertificates);
  const [cardSelected, setCardSelected] = useState<null | string>(null); //здесь храним ID выбранной карты

  const handleSelect = (id: string) => {
    console.log(id);
    setCardSelected(id);
    return cardSelected;
  };

  const handleSubmit = () => {
    console.log('navvv');
    navigate('/form');
  };

  useEffect(() => {
    dispatch(getSertificates());
  }, []);

  return (
    <>
      <h1 className={styles.text}>Выберите сертификат</h1>
      <ul className={styles.list}>
        {sertificates.map((data) => (
          <li key={data.ID}>
            <Card name={data.NAME} id={data.ID} handleSelect={handleSelect} />
          </li>
        ))}
      </ul>
      <button onClick={() => handleSubmit()}>Оформить</button>
    </>
  );
};
