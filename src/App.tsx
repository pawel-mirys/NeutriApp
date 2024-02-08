import { HashRouter } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';
import RouterSwitch from '@/router/Router';
import { useEffect } from 'react';
import { FoodLists } from './types';

function App() {
  const key = 'foodLists';
  useEffect(() => {
    const existingFoodList: string | null = localStorage.getItem(key);
    if (existingFoodList === null) {
      const initFoodLists: FoodLists = [];
      localStorage.setItem(key, JSON.stringify(initFoodLists));
    }
  }, []);

  return (
    <HashRouter>
      <Navbar />
      <RouterSwitch />
    </HashRouter>
  );
}

export default App;
