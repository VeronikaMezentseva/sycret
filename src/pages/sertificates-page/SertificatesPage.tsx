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
import { TSertificate } from '../../utils/types';

export const SertificatesPage: FC<{
  handleSelect: (id: string) => string;
  sertificates: TSertificate[];
}> = ({ handleSelect, sertificates }) => {
  
  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('navvv');
    navigate('/contacts');
  };

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
