import Home from '@/pages/Home/Home';
import UserList from '@/pages/UserFoodList/UserFoodList';
import { Route, Routes } from 'react-router-dom';

const RouterSwitch = () => {
  return (
    <Routes>
      <Route path='/list/:listName' element={<UserList />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default RouterSwitch;
