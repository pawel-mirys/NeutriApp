import NavbarContainer from '@/components/Navbar/NavbarContainer';
import ListCreator from '../ListCreator/ListCreator';
import Dropdown from '../Dropdown/Dropdown';

import { useAppSelector } from '@/store';

import { FoodLists } from '@/types';

const Navbar: React.FC = () => {
  const listState = useAppSelector((state) => state.LS_listState.list);
  const parsedListState: FoodLists = listState && JSON.parse(listState);

  const menuItems = () => {
    if (listState) {
      return parsedListState.map((item) => item.listName);
    }
    return [];
  };

  const navElements = [<ListCreator />, <Dropdown menuItems={menuItems()} />];

  return <NavbarContainer elements={navElements} />;
};

export default Navbar;
