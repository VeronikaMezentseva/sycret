import { TSertificate } from './types';

const baseURL = 'https://sycret.ru/service/api/api';
const apiKey = '&ApiKey=011ba11bdcad4fa396660c2ec447ef14';
const getGoodListMethod = '?MethodName=OSGetGoodList';
const postSelectedSertificateMethod = '?MethodName=OSSale';

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

// type TServerResponse<T> = {
//   success: boolean;
// } & T;

export type TSertificateResponse = {
  data: TSertificate[];
  result: number;
  resultdescription: string;
};

export const getSertificatesApi = () =>
  fetch(`${baseURL}${getGoodListMethod}${apiKey}`)
    .then((res) => checkResponse<TSertificateResponse>(res))
    .then((data) => {
      if (data.result === 0) {
        return data.data;
      } else {
        return Promise.reject(data);
      }
    });

// export const postSelectedSertificateApi = () =>
//     fetch(`${baseURL}${postSelectedSertificateMethod}${apiKey}`)
