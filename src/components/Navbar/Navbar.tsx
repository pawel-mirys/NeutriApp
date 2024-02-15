import NavbarContainer from '@/components/Navbar/NavbarContainer';
import ListCreator from '../ListCreator/ListCreator';
import { useAppSelector } from '@/store';
import { useEffect, useState } from 'react';
import Dropdown from '../Dropdown/Dropdown';

const Navbar: React.FC = () => {
  const [menuItems, setMenuItems] = useState<string[]>([]);
  const listState = useAppSelector((state) => state.DB_ListState);

  useEffect(() => {
    if (listState.list) {
      setMenuItems([]);
      listState.list.forEach((item) => {
        setMenuItems((prev) => [...prev, item.mealName]);
      });
    }
  }, [listState]);

  const navElements = [<ListCreator />, <Dropdown menuItems={menuItems} />];

  return <NavbarContainer elements={navElements} />;
};

export default Navbar;
