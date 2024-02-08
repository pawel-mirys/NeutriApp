import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { parserApi } from './apis/parserApi';
import { localStorageListSlice } from './slices/localStorageListSlice';

const store = configureStore({
  reducer: {
    LS_listState: localStorageListSlice.reducer,
    [parserApi.reducerPath]: parserApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return [...getDefaultMiddleware(), parserApi.middleware];
  },
});

setupListeners(store.dispatch);

const useAppDispatch: () => typeof store.dispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;

export { useFetchFoodByNameQuery } from './apis/parserApi';

export const { setList } = localStorageListSlice.actions;

export { store, useAppDispatch, useAppSelector };
