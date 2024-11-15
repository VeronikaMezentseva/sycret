import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSertificatesApi } from '../utils/sycret-api';
import { TSertificate } from '../utils/types';
import { RootState } from '../components/app/services/store';

export const getSertificates = createAsyncThunk(
  'sertificates/getSertificates',
  async () => getSertificatesApi()
);

type TInitialState = {
  data: TSertificate[];
  isLoading: boolean;
};

export const initialState: TInitialState = {
  data: [],
  isLoading: false
};

export const sertificatesSlice = createSlice({
  name: 'sertificates',
  initialState,
  reducers: {},
  selectors: {
    selectSertificates: (state) => state.data,
    selectIsLoading: (state) => state.isLoading
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSertificates.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSertificates.rejected, (state) => {
        console.log('reject');
        state.isLoading = false;
      })
      .addCase(getSertificates.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  }
});

export const { selectSertificates, selectIsLoading } =
  sertificatesSlice.selectors;
export const sertificatesReducer = sertificatesSlice.reducer;
export const sertificates = (state: RootState) => state.sertificates.data;
