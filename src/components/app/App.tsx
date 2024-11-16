import { useEffect, useState } from 'react';
import {
  getSertificates,
  selectSertificates
} from '../../slices/sertificates-slice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { Route, Routes } from 'react-router-dom';
import { SertificatesPage } from '../../pages/sertificates-page/SertificatesPage';
import { FormPage } from '../../pages/form-page/FormPage';
import { PaymentPage } from '../../pages/payment-page/PaymentPage';

function App() {
  const dispatch = useAppDispatch();
  const sertificates = useAppSelector(selectSertificates);

  const [selectedCardId, setSelectedCardId] = useState<string>(''); //здесь храним ID выбранной карты
  const [selectedSertificateName, setSelectedSertificateName] =
    useState<string>();

  useEffect(() => {
    const selectedCard = sertificates.find((item) => item.ID == selectedCardId);
    setSelectedSertificateName(selectedCard?.NAME);
  }, [selectedCardId]);

  useEffect(() => {
    dispatch(getSertificates());
  }, []);

  const handleCardSelect = (id: string) => {
    setSelectedCardId(id);
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
        <Route
          path='/contacts'
          element={
            <FormPage
              id={selectedCardId}
              selectedSertificateName={
                selectedSertificateName ? selectedSertificateName : ''
              }
            />
          }
        />
        <Route path='/payment' element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default App;
