import { FC, useState } from 'react';
import styles from './card.module.css';

export const Card: FC<{
  name: string;
  id: string;
  handleSelect: (id: string) => void;
}> = ({ name, id, handleSelect }) => (
  <div className={styles.card}>
    <input
      className={styles.input}
      type='radio'
      name='sale'
      value={id}
      id={`${id}`}
      onChange={() => handleSelect(id)}
    />
    <span className={styles.span} />
    <label htmlFor={`${id}`} id={`${id}`} className={styles.label} />
    <div className={styles.wrapper}>
      <p>{name}</p>
      <button>Выбрать</button>
    </div>
  </div>
);
