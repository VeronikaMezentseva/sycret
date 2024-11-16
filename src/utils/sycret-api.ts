import { TOrderData, TSertificate } from './types';

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

export type TOrderResponse = {
  data: {
    CERTNUMBER: string;
  }[];
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

export type TOrderStaticData = {
  ApiKey: '011ba11bdcad4fa396660c2ec447ef14';
  MethodName: 'OSSale';
  PaymentTypeId: 2;
  UseDelivery: 0;
  DeliveryAddress: '';
  IsGift: 0;
  PName: '';
  PPhone: '';
  MsgText: '';
};

const orderStaticData: TOrderStaticData = {
  ApiKey: '011ba11bdcad4fa396660c2ec447ef14',
  MethodName: 'OSSale',
  PaymentTypeId: 2,
  UseDelivery: 0,
  DeliveryAddress: '',
  IsGift: 0,
  PName: '',
  PPhone: '',
  MsgText: ''
};

export function postSelectedSertificateApi(data: TOrderData) {
  return fetch(`${baseURL}${postSelectedSertificateMethod}${apiKey}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.assign(data, orderStaticData))
  })
    .then((res) => checkResponse<TOrderResponse>(res))
    .then((data) => {
      if (data.result == 0) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}
