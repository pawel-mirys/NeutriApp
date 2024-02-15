import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MealsList } from '@/types';

type DB_ListState = {
  list: MealsList | null;
};

const initialState: DB_ListState = {
  list: [],
};

const DBListSlice = createSlice({
  name: 'localStorageList',
  initialState: initialState,
  reducers: {
    setList: (state, action: PayloadAction<MealsList | null>) => {
      state.list = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(setList, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { setList } = DBListSlice.actions;
export { DBListSlice };
