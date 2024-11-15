import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postSelectedSertificateApi } from '../utils/sycret-api';

export const postOrder = createAsyncThunk(
  'sertificates/postOrder',
  postSelectedSertificateApi
);

type TInitialState = {
  isLoading: boolean;
  isSuccsess: boolean | null;
};

const initialState: TInitialState = {
  isLoading: false,
  isSuccsess: null
};

export const orderSlice = createSlice({
  name: 'orderSertificate',
  initialState,
  reducers: {},
  selectors: {
    selectIsSuccess: (state) => state.isSuccsess,
    selectIsLoading: (state) => state.isLoading
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postOrder.rejected, (state) => {
        console.log('REJECT');
        state.isLoading = false;
        state.isSuccsess = false;
      })
      .addCase(postOrder.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccsess = true;
      });
  }
});

export const orderReducer = orderSlice.reducer;
export const { selectIsSuccess, selectIsLoading } = orderSlice.selectors;
