/* eslint-disable @typescript-eslint/no-unused-vars */
import { TextField } from '@mui/material';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { updateList, useAppDispatch } from '@/store';

const ListCreator = () => {
  const dispatch = useAppDispatch();
  const [listName, setListName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListName((prev) => (prev = event.target.value));
  };

  const handleSubmit = () => {
    if (listName === '') {
      console.log('err');
    } else {
      dispatch(updateList({ listName: listName, foodList: [] }));
      setListName('');
    }
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
  return (
    <>
      <Modal
        triggerButtonTitle={'Create  list'}
        modalTitle={'Create list with your food '}
        modalContent={modalForm}
        closeButtonText={'Close'}
        submitButtonText={'Create List'}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ListCreator;
