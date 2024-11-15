import { useEffect, useState } from 'react';
import styles from './app.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from './services/store';
import {
  getSertificates,
  selectSertificates
} from '../../slices/sertificates-slice';
import { TSertificate } from '../../utils/types';
import { Card } from '../card/Card';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { Route, Routes } from 'react-router-dom';
import { SertificatesPage } from '../../pages/sertificates-page/SertificatesPage';
import { FormPage } from '../../pages/form-page/FormPage';

function App() {
  const dispatch = useAppDispatch();
  const sertificates = useAppSelector(selectSertificates);

  const [selectedCardId, setSelectedCardId] = useState<string>(''); //здесь храним ID выбранной карты

  useEffect(() => {
    dispatch(getSertificates());
  }, []);

  const handleCardSelect = (id: string) => {
    setSelectedCardId(id);
    console.log(selectedCardId);
    return selectedCardId;
  };

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <SertificatesPage
              handleSelect={handleCardSelect}
              sertificates={sertificates}
              selectedCardId={selectedCardId}
            />
          }
        />
        <Route path='/contacts' element={<FormPage id={selectedCardId} />} />
      </Routes>
    </>
  );
}

export default App;
