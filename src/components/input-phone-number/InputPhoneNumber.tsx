import useMask from '@react-input/mask/useMask';
import { FC } from 'react';
import styles from './input-phone-number.module.css';

export const InputPhoneNumber: FC<{
  onChange: (evt: React.FormEvent<HTMLInputElement>) => void;
}> = ({ onChange }) => {
  const inputRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ }
  });

  const handleFocus = (evt: React.FormEvent<HTMLInputElement>) => {
    if (evt.currentTarget.value === '') {
      evt.currentTarget.value = '+7 (';
    }
  };

  return (
    <input
      className={styles.input}
      type='text'
      name='phoneNumber'
      onChange={(evt) => onChange(evt)}
      ref={inputRef}
      onFocus={(evt) => handleFocus(evt)}
      placeholder='+7 (___) ___-__-__'
      onBlur={(evt) => onChange(evt)}
    />
  );
};
