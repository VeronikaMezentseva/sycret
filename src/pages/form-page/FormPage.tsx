import { FC, useEffect, useState } from 'react';
import styles from './form-page.module.css';
import { InputPhoneNumber } from '../../components/input-phone-number/InputPhoneNumber';
import { ErrorText } from '../../components/error-text/ErrorText';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import {
  postOrder,
  selectIsLoading,
  selectIsSuccess
} from '../../slices/order-slice';
import { ReturnButton } from '../../components/return-button/ReturnButton';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components/loader/Loader';
import { Title } from '../../components/title/Title';
import { Button } from '../../components/button/Button';

export const FormPage: FC<{ id: string }> = ({ id }) => {
  const isPaymentSuccess = useAppSelector(selectIsSuccess);
  const isLoading = useAppSelector(selectIsLoading);

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isValidName, setIsValidName] = useState<boolean>();
  const [isValidPhomeNumber, setIsValidPhomeNumber] = useState<boolean>();
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const formValidate = () => {
    if (isValidEmail && isValidName && isValidPhomeNumber) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  };

  const prepareOrderData = () => ({
    ID: +id,
    TableName: '',
    PrimaryKey: '',
    Price: 0,
    Summa: 0,
    ClientName: name,
    Phone: formatPhoneNumber(phoneNumber),
    Email: email
  });

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    if (isValidForm) {
      dispatch(postOrder(prepareOrderData())).then((data) => {
        if (data.meta.requestStatus === 'fulfilled') navigate('/payment');
      });
    }
  };

  const validateName = (name: string) => {
    if (name.length === 0) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    if (phoneNumber.length === 18) {
      setIsValidPhomeNumber(true);
    } else {
      setIsValidPhomeNumber(false);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3}$/;
    if (emailRegex.test(email)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const numbers = phoneNumber.replace(/\D/g, '');
    return numbers.substring(1);
  };

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    formValidate();
    switch (evt.currentTarget.name) {
      case 'name':
        setName(evt.currentTarget.value);
        validateName(evt.currentTarget.value);
        break;
      case 'phoneNumber':
        setPhoneNumber(evt.currentTarget.value);
        validatePhoneNumber(evt.currentTarget.value);
        break;
      case 'email':
        setEmail(evt.currentTarget.value);
        validateEmail(evt.currentTarget.value);
        break;
    }
  };
  return (
    <>
      <Title text='Заполните форму' />
      {isLoading ? (
        <Loader />
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            <p className={styles.paragraph}>Имя</p>
            <input
              className={styles.input}
              type='text'
              name='name'
              onChange={(evt: React.FormEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              onBlur={(evt: React.FormEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            />
            {isValidName === false && <ErrorText text='error name' />}
          </label>
          <label className={styles.label}>
            <p className={styles.paragraph}>Номер телефона</p>
            <InputPhoneNumber onChange={handleChange} />
            {isValidPhomeNumber === false && <ErrorText text='error number' />}
          </label>
          <label className={styles.label}>
            <p className={styles.paragraph}>Почта</p>
            <input
              className={styles.input}
              type='email'
              name='email'
              onChange={(evt: React.FormEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
              onBlur={(evt: React.FormEvent<HTMLInputElement>) =>
                handleChange(evt)
              }
            />
            {isValidEmail === false && <ErrorText text='error email' />}
          </label>
          <div className={styles['buttons-container']}>
            <ReturnButton />
            <Button
              type='submit'
              text='Оплатить'
              isDisabled={isValidForm === false}
            />
          </div>
        </form>
      )}
    </>
  );
};
