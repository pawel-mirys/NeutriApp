import { Meal } from '@/types';

type UserListContainerProps = {
  meal: Meal;
};

const UserListContainer: React.FC<UserListContainerProps> = ({ meal }) => {
  return (
    <div>
      <p>{meal.mealName}</p>
    </div>
  );
};

export default UserListContainer;
