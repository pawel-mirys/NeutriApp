import { HashRouter } from 'react-router-dom';
import Navbar from '@/components/Navbar/Navbar';
import RouterSwitch from '@/router/Router';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db';
import { setList, useAppDispatch } from './store';
import { useEffect } from 'react';

const { mealList } = db;

function App() {
  const dispatch = useAppDispatch();

  const allItems = useLiveQuery(() => {
    return mealList.toArray();
  });

  useEffect(() => {
    allItems && dispatch(setList(allItems));
  }, [allItems, dispatch]);

  return (
    <HashRouter>
      <Navbar />
      <RouterSwitch />
    </HashRouter>
  );
}

export default App;
