import Home from '@/pages/Home/Home';
import UserList from '@/pages/UserList/UserList';
import { Route, Routes } from 'react-router-dom';

const RouterSwitch = () => {
  return (
    <Routes>
      <Route path='/list/:name' element={<UserList />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
};

export default RouterSwitch;
