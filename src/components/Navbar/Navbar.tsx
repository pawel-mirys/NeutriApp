import NavbarContainer from '@/components/Navbar/NavbarContainer';
import ListCreator from '../ListCreator/ListCreator';

const Navbar: React.FC = () => {
  const navElemenst = [<ListCreator />];

  return <NavbarContainer elements={navElemenst} />;
};

export default Navbar;
