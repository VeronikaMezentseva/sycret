import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers
} from '@reduxjs/toolkit';
import { useDispatch as dispatchHook } from 'react-redux';
import { sertificatesSlice } from '../../../slices/sertificates-slice';

export const rootReducer = combineReducers({
  [sertificatesSlice.name]: sertificatesSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export const useDispatch: () => AppDispatch = () => dispatchHook();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
