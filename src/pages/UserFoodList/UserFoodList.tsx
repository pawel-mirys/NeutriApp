/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from 'react-router-dom';
import UserListContainer from './UserFoodListContainer';
import { useEffect, useState } from 'react';
import { FoodList } from '@/types';
import { useAppSelector } from '@/store';

const UserFoodList: React.FC = () => {
  const existingList = useAppSelector((state) => state.LS_listState);

  const { listName } = useParams<{ listName: string }>();

  const [filteredList, setFilteredList] = useState<FoodList>(Object);

  useEffect(() => {
    if (existingList.list) {
      const filteredList = existingList.list.filter(
        (list) => list.listName === listName
      );
      setFilteredList((prev) => (prev = filteredList[0]));
    }
  }, [existingList, listName]);

  return (
    <div>
      <UserListContainer foodList={filteredList} />
    </div>
  );
};

export default UserFoodList;
