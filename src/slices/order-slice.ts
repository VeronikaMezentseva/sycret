import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postSelectedSertificateApi } from '../utils/sycret-api';

export const postOrder = createAsyncThunk(
  'sertificates/postOrder',
  postSelectedSertificateApi
);

type TInitialState = {
  isLoading: boolean;
};

const initialState: TInitialState = {
  isLoading: false
};

export const orderSlice = createSlice({
  name: 'orderSertificate',
  initialState,
  reducers: {},
  selectors: {
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
      })
      .addCase(postOrder.fulfilled, (state) => {
        state.isLoading = false;
      });
  }
});

export const orderReducer = orderSlice.reducer;
export const { selectIsLoading } = orderSlice.selectors;
