import { HashRouter } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';
import RouterSwitch from '@/router/Router';
import { useCallback } from 'react';
import { FoodLists } from './types';
import { setList, useAppDispatch } from './store';

function App() {
  const dispatch = useAppDispatch();
  const key = 'foodLists';
  useCallback(() => {
    const existingFoodList: FoodLists = JSON.parse(localStorage.getItem(key)!);

    dispatch(setList(JSON.stringify(existingFoodList)));

    if (existingFoodList === null) {
      const initFoodLists: FoodLists = [];
      localStorage.setItem(key, JSON.stringify(initFoodLists));
    }
  }, [dispatch]);

  return (
    <HashRouter>
      <Navbar />
      <RouterSwitch />
    </HashRouter>
  );
}

export default App;
