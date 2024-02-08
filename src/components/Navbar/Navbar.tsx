/* eslint-disable @typescript-eslint/no-unused-vars */
import Modal from '@/components/Modal/Modal';
import NavbarContainer from '@/components/Navbar/NavbarContainer';
import { useState } from 'react';
import { TextField } from '@mui/material';

const Navbar: React.FC = () => {
  const [listName, setListName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListName((prev) => (prev = event.target.value));
  };

  const modalForm = (
    <div>
      <TextField
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event);
        }}
        variant='outlined'
        id='outlined-basic'
        aria-autocomplete='list'
        sx={{
          '& .MuiInputBase-root': {
            width: '100%',
          },
        }}
        value={listName || ''}
        label={'List Name'}
        name={'List Name'}
      />
    </div>
  );

  const navElemenst = [
    <Modal
      triggerButtonTitle={'Create  list'}
      modalTitle={'Create list with your food '}
      modalContent={modalForm}
      closeButtonText={'Close'}
      submitButtonText={'Create List'}
      onSubmit={() => {
        console.log(listName);
        setListName('');
      }}
    />,
  ];

  return <NavbarContainer elements={navElemenst} />;
};

export default Navbar;
