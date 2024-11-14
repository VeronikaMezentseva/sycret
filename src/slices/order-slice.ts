import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postSelectedSertificateApi } from '../utils/sycret-api';

export const postOrder = createAsyncThunk(
  'sertificates/postOrder',
  postSelectedSertificateApi
);

const initialState = {};

export const orderSlice = createSlice({
  name: 'orderSertificate',
  initialState,
  reducers: {},
  selectors: {},
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.rejected, (state, action) => {
        console.log('REJECT');
        console.log(action.payload);
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        console.log(action.payload);
      });
  }
});

export const orderReducer = orderSlice.reducer;
