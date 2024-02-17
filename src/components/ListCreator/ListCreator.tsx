/* eslint-disable @typescript-eslint/no-unused-vars */
import { TextField } from '@mui/material';
import { useState } from 'react';
import Modal from '@/components/Modal/Modal';
import { db } from '@/db';
import { useLiveQuery } from 'dexie-react-hooks';

const ListCreator = () => {
  const { mealList } = db;
  const [listName, setListName] = useState('');
  const [error, setError] = useState(true);

  const allItems = useLiveQuery(() => {
    return mealList.toArray();
  });

  const allMealsNames = allItems?.map((meal) => {
    return meal.mealName;
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setListName(value);
    const isValueAlreadyExist = allMealsNames?.some(
      (mealName) => mealName === value
    );
    setError(value.trim() === '' || isValueAlreadyExist!);
    setListName(value);
  };

  const handleSubmit = async () => {
    if (error) {
      return;
    }
    await mealList.add({ mealName: listName, nutrientsList: [] });
    setListName('');
  };

  const handleCancel = () => {
    setListName('');
    setError(true);
  };

  const modalForm = (
    <div>
      <TextField
        error={error}
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
        helperText={error && 'Field is empty or value already exists'}
        value={listName || ''}
        label={'List Name'}
        name={'List Name'}
        color={error ? 'error' : 'primary'}
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
