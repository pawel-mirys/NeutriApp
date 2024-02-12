import { FoodList } from '@/types';

type UserListContainerProps = {
  foodList: FoodList;
};

const UserListContainer: React.FC<UserListContainerProps> = ({ foodList }) => {
  return (
    <div>
      <p>{foodList.listName}</p>
    </div>
  );
};

export default UserListContainer;
