import { db } from '@/db';
import { Meal } from '@/types';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type UserListContainerProps = {
  meal: Meal;
};

const UserFoodListContainer: React.FC<UserListContainerProps> = ({ meal }) => {
  const { mealList } = db;
  const navigate = useNavigate();

  const handleDeleteList = async () => {
    await mealList.delete(meal.id);
    navigate('/');
  };

  return (
    <div>
      <p>{meal.mealName}</p>
      <Button onClick={handleDeleteList}>
        <DeleteIcon />
      </Button>
      {meal.ingredientsList &&
        meal.ingredientsList.map((ingredient) => {
          return <p>{ingredient.label}</p>;
        })}
    </div>
  );
};
export default UserFoodListContainer;
