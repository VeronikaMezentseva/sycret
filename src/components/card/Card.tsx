import { FC, useState } from 'react';
import styles from './card.module.css';

export const Card: FC<{
  name: string;
  id: string;
  handleSelect: (id: string) => void;
  selectedCardId: string;
}> = ({ name, id, handleSelect, selectedCardId }) => (
  <div className={styles.card}>
    <input
      className={styles.input}
      type='radio'
      name='sale'
      value={id}
      id={`${id}`}
      onChange={() => handleSelect(id)}
      checked={selectedCardId == id ? true : false}
    />
    <span className={styles.span} />
    <label htmlFor={`${id}`} id={`${id}`} className={styles.label} />
    <div className={styles.wrapper}>
      <p>{name}</p>
      <button>Выбрать</button>
    </div>
  </div>
);
