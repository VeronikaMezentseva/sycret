export type TSertificate = {
  DESCRIPTION: string;
  DISCOUNT: string;
  ID: string;
  IMAGEURL: string;
  NAME: string;
  PRICE: string;
  PRIMARYKEY: string;
  REC_NAME: string;
  REC_PAYMENT_METHOD: string;
  REC_PAYMENT_OBJECT: string;
  REC_QUANTITY: string;
  REC_SNO: string;
  REC_SUM: string;
  REC_TAX: string;
  SUMMA: string;
  TABLENAME: string;
};

export type TOrderData = {
  ID: number;
  TableName: string;
  PrimaryKey: string;
  Price: number;
  Summa: number;
  ClientName: string;
  Phone: string;
  Email: string;
};
