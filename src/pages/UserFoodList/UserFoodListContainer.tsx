import { db } from '@/db';
import { Ingredient, Meal } from '@/types';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';
import { useLiveQuery } from 'dexie-react-hooks';
import { useNavigate } from 'react-router-dom';

type UserListContainerProps = {
  meal: Meal;
  listName: string | undefined;
};

const UserFoodListContainer: React.FC<UserListContainerProps> = ({
  meal,
  listName,
}) => {
  const { mealList } = db;

  const allItems = useLiveQuery(() => {
    return mealList.toArray();
  });

  const navigate = useNavigate();

  const handleDeleteList = async () => {
    await mealList.delete(meal.id);
    navigate('/');
  };

  const handleDeleteIngredient = async (ingredient: Ingredient) => {
    const currentMeal = allItems!.find((meal) => meal.mealName === listName);

    if (currentMeal) {
      const updatedIngredientsList = currentMeal.ingredientsList.filter(
        (mealItem) => mealItem.label !== ingredient.label
      );

      await mealList.update(currentMeal.id, {
        ...currentMeal,
        ingredientsList: updatedIngredientsList,
      });
    }
  };

  return (
    <div>
      <p>{meal.mealName}</p>
      <Button onClick={handleDeleteList}>
        <DeleteIcon />
      </Button>
      {meal.ingredientsList &&
        meal.ingredientsList.map((ingredient) => {
          return (
            <p
              key={ingredient.label}
              onClick={() => {
                handleDeleteIngredient(ingredient);
              }}>
              {ingredient.label}
            </p>
          );
        })}
    </div>
  );
};
export default UserFoodListContainer;
