import { useParams } from 'react-router-dom';
import UserFoodListContainer from './UserFoodListContainer';
import { useEffect, useState } from 'react';
import { Meal } from '@/types';
import { useAppSelector } from '@/store';

const UserFoodList: React.FC = () => {
  const existingList = useAppSelector((state) => state.DB_ListState);

  const { listName } = useParams<{ listName: string }>();

  const [filteredList, setFilteredList] = useState<Meal>(Object);

  useEffect(() => {
    if (existingList.list) {
      const filteredList = existingList.list.find(
        (list) => list.mealName === listName
      );
      filteredList && setFilteredList(filteredList);
    }
  }, [existingList, listName]);

  return <UserFoodListContainer meal={filteredList} listName={listName} />;
};

export default UserFoodList;
