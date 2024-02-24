import NavbarContainer from '@/components/Navbar/NavbarContainer';
import ListCreator from '../ListCreator/ListCreator';
import { useAppSelector } from '@/store';
import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import { SelectChangeEvent, MenuItem } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<string[]>([]);
  const [name, setName] = useState<string>('');
  const listState = useAppSelector((state) => state.DB_ListState);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (listState.list) {
      setMenuItems([]);
      listState.list.forEach((item) => {
        setMenuItems((prev) => [...prev, item.mealName]);
      });
    }
  }, [listState]);

  useEffect(() => {
    if (location.pathname === '/' || '') {
      setName('');
    }
  }, [location]);

  const handleChange = (event: SelectChangeEvent) => {
    setName(event.target.value);
  };

  const dropDownItems = menuItems.map((item) => (
    <MenuItem
      value={item}
      key={item}
      onClick={() => {
        navigate(`/list/${item}`);
      }}>
      {item}
    </MenuItem>
  ));
  const defaultOnClick = () => {
    navigate('/');
  };
  
  const navElements = [
    <ListCreator />,
    <Dropdown
      menuItems={dropDownItems}
      selectValue={name}
      onChange={handleChange}
      defaultItemOnClick={defaultOnClick}
    />,
  ];

  return <NavbarContainer elements={navElements} />;
};

export default Navbar;
