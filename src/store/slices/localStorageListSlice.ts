import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LS_ListState = {
  list: string | null;
};

const loadListFromLocalStorage = (): string | null => {
  return JSON.parse(localStorage.getItem('foodLists') || 'null');
};

const initialState: LS_ListState = {
  list: loadListFromLocalStorage(),
};

const localStorageListSlice = createSlice({
  name: 'localStorageList',
  initialState: initialState,
  reducers: {
    setList: (state, action: PayloadAction<string | null>) => {
      state.list = action.payload;
      action.payload &&
        localStorage.setItem('foodLists', JSON.stringify(action.payload));
    },
  },
});

export const { setList } = localStorageListSlice.actions;
export { localStorageListSlice };
