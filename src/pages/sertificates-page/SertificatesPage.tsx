import { FC } from 'react';
import styles from './sertificates-page.module.css';
import { useAppSelector } from '../../utils/hooks';
import { selectIsLoading } from '../../slices/sertificates-slice';
import { Card } from '../../components/card/Card';
import { useNavigate } from 'react-router-dom';
import { TSertificate } from '../../utils/types';
import { Loader } from '../../components/loader/Loader';
import { Title } from '../../components/title/Title';
import { Button } from '../../components/button/Button';

export const SertificatesPage: FC<{
  handleSelect: (id: string) => string;
  sertificates: TSertificate[];
  selectedCardId: string;
}> = ({ handleSelect, sertificates, selectedCardId }) => {
  const navigate = useNavigate();

  const isLoading = useAppSelector(selectIsLoading);

  const handleSubmit = () => {
    console.log('navvv');
    navigate('/contacts');
  };

  return (
    <>
      <Title text='Выберите сертификат' />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.container}>
          <ul className={styles.list}>
            {sertificates.map((data) => (
              <li key={data.ID}>
                <Card
                  name={data.NAME}
                  id={data.ID}
                  handleSelect={handleSelect}
                  selectedCardId={selectedCardId}
                />
              </li>
            ))}
          </ul>
          <Button text={'Оформить'} isDisabled={false} onClick={handleSubmit} />
        </div>
      )}
    </>
  );
};
