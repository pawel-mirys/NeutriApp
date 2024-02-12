import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FoodLists, UserList } from '@/types';

type LS_ListState = {
  list: FoodLists | null;
};

const loadListFromLocalStorage = (): FoodLists | null => {
  return JSON.parse(localStorage.getItem('foodLists') || 'null');
};

const saveListToLocalStorage = (list: FoodLists) => {
  localStorage.setItem('foodLists', JSON.stringify(list));
};

const initialState: LS_ListState = {
  list: loadListFromLocalStorage(),
};

const localStorageListSlice = createSlice({
  name: 'localStorageList',
  initialState: initialState,
  reducers: {
    setList: (state, action: PayloadAction<FoodLists | null>) => {
      state.list = action.payload;
    },
    updateList: (state, action: PayloadAction<UserList>) => {
      if (state.list == null) {
        state.list = [action.payload];
      } else {
        const index = state.list.findIndex(
          (list) => list.listName === action.payload.listName
        );
        if (index !== -1) {
          state.list[index] = action.payload;
        } else {
          state.list.push(action.payload);
        }
      }

      if (state.list) {
        saveListToLocalStorage(state.list);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setList, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { setList, updateList } = localStorageListSlice.actions;
export { localStorageListSlice };
