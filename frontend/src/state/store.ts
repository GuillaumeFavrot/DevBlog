import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { apiSlice } from './features/api';
import viewReducer from './features/view';

export const setupStore = (preloadedState: any) => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      view: viewReducer
    },
    
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({immutableCheck: false,serializableCheck: false,}).concat(apiSlice.middleware),
  })
}

export let store = setupStore({});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;





