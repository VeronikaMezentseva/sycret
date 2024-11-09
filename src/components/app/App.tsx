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
  return (
    <>
      <Routes>
        <Route path='/вв' element={<SertificatesPage />} />
        <Route path='/' element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
