/* eslint-disable @typescript-eslint/no-unused-vars */
import { TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { db } from '@/db';

const ListCreator = () => {
  const { mealList } = db;

  const [listName, setListName] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListName((prev) => (prev = event.target.value));
    setError(false);
  };

  const handleSubmit = async () => {
    if (listName !== '') {
      setError(true);
    } else {
      await mealList.add({ mealName: listName, nutrientsList: [] });
      setListName('');
    }
  };

  const handleCancel = () => {
    set;
  };

  useEffect(() => {
    console.log(listName);
  }, [listName]);

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
        helperText={error && 'Text field cannot be empty'}
        value={listName || ''}
        label={error ? 'Error' : 'List Name'}
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
        onCancel={handleCancel}
        error={error}
      />
    </>
  );
};

export default ListCreator;
