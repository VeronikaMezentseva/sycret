import { FC, FormEvent, useState } from 'react';
import styles from './form-page.module.css';
import { InputPhoneNumber } from '../../components/input-phone-number/InputPhoneNumber';
import { ErrorText } from '../../components/error-text/ErrorText';

export const FormPage: FC = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPhomeNumber, setIsValidPhomeNumber] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateName = (name: string) => {
    if (name.length === 0) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    console.log(phoneNumber.length);
    if (phoneNumber.length !== 10) {
      setIsValidPhomeNumber(false);
    }
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const numbers = phoneNumber.replace(/\D/g, '');
    return numbers.substring(1);
  };

  const handleChange = (evt: React.FormEvent<HTMLInputElement>) => {
    switch (evt.currentTarget.name) {
      case 'name':
        setName(evt.currentTarget.value);
        validateName(evt.currentTarget.value);
        break;
      case 'phoneNumber':
        setPhoneNumber(formatPhoneNumber(evt.currentTarget.value));
        validatePhoneNumber(evt.currentTarget.value);
        break;
      case 'email':
        setEmail(evt.currentTarget.value);
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
          />
          {!isValidName && <ErrorText text='error' />}
        </label>
        <label>
          Enter your phone number
          <InputPhoneNumber
            onChange={handleChange}
            onBlur={() => validatePhoneNumber(phoneNumber)}
          />
        </label>
        {!isValidPhomeNumber && <ErrorText text='error number' />}
        <label>
          Enter your email
          <input
            type='email'
            name='email'
            required
            onChange={(evt: React.FormEvent<HTMLInputElement>) =>
              handleChange(evt)
            }
          />
        </label>
        <button type='submit'>Оформить</button>
      </form>
    </>
  );
};
