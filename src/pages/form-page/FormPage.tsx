import { FC, useState } from 'react';
import styles from './form-page.module.css';
import { InputPhoneNumber } from '../../components/input-phone-number/InputPhoneNumber';
import { ErrorText } from '../../components/error-text/ErrorText';
import { useAppDispatch } from '../../utils/hooks';
import { postOrder } from '../../slices/order-slice';

export const FormPage: FC<{ id: string }> = ({ id }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isValidName, setIsValidName] = useState<boolean>();
  const [isValidPhomeNumber, setIsValidPhomeNumber] = useState<boolean>();
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const [isValidForm, setIsValidForm] = useState<boolean>(false);

  const dispatch = useAppDispatch();

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
      dispatch(postOrder(prepareOrderData()));
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
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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
      <h1>Заполните форму</h1>
      <form className={styles.form}>
        <label>
          Enter your name
          <input
            type='text'
            name='name'
            required
            onChange={(evt: React.FormEvent<HTMLInputElement>) =>
              handleChange(evt)
            }
            onBlur={(evt: React.FormEvent<HTMLInputElement>) =>
              handleChange(evt)
            }
          />
          {isValidName === false && <ErrorText text='error name' />}
        </label>
        <label>
          Enter your phone number
          <InputPhoneNumber onChange={handleChange} />
        </label>
        {isValidPhomeNumber === false && <ErrorText text='error number' />}
        <label>
          Enter your email
          <input
            type='email'
            name='email'
            required
            onChange={(evt: React.FormEvent<HTMLInputElement>) =>
              handleChange(evt)
            }
            onBlur={(evt: React.FormEvent<HTMLInputElement>) =>
              handleChange(evt)
            }
          />
        </label>
        {isValidEmail === false && <ErrorText text='error email' />}
        <button type='submit' onClick={handleSubmit} disabled={!isValidForm}>
          Оформить
        </button>
      </form>
    </>
  );
};
