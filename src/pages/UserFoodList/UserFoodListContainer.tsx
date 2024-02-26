import { Fragment } from 'react';
import { db } from '@/db';
import { Ingredient, Meal } from '@/types';
import { Button } from '@mui/material';
import { useLiveQuery } from 'dexie-react-hooks';
import { useNavigate } from 'react-router-dom';
import FoodCard from '@/components/FoodCard/FoodCard';
import DeleteIcon from '@mui/icons-material/Delete';
import clsx from 'clsx';

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

  const ingredientsToRender = () => {
    let content;
    const additionalCardContent = (ingredient: Ingredient) => {
      return (
        <Button
          color='error'
          size='small'
          onClick={() => {
            handleDeleteIngredient(ingredient);
          }}>
          Delete ingredient <DeleteIcon color='error' />
        </Button>
      );
    };

    meal.ingredientsList && meal.ingredientsList.length !== 0
      ? (content = meal.ingredientsList.map(
          (ingredient) =>
            (content = (
              <Fragment key={ingredient.foodId}>
                <FoodCard
                  food={ingredient}
                  className='list__ingredient'
                  variant='user-list'
                  additionalContent={additionalCardContent(ingredient)}
                />
              </Fragment>
            ))
        ))
      : (content = <div className='list__optional'>No content</div>);
    return content;
  };

  const summaryDetailsToRendrer = () => {
    let totalEnergy = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalCarbohydrates = 0;
    let totalFiber = 0;

    meal.ingredientsList &&
      meal.ingredientsList.forEach((ingredient) => {
        totalEnergy += ingredient.nutrients.ENERC_KCAL;
        totalProtein += ingredient.nutrients.PROCNT;
        totalFat += ingredient.nutrients.FAT;
        totalCarbohydrates += ingredient.nutrients.CHOCDF;
        totalFiber += ingredient.nutrients.FIBTG;
      });

    return (
      <div className={clsx('summary_details')}>
        <p>Total Energy: {totalEnergy.toFixed(2)} kcal</p>
        <p>Total Protein: {totalProtein.toFixed(2)} g</p>
        <p>Total Fat: {totalFat.toFixed(2)} g</p>
        <p>Total Carbohydrates: {totalCarbohydrates.toFixed(2)} g</p>
        <p>Total Fiber: {totalFiber.toFixed(2)} g</p>
      </div>
    );
  };

  return (
    <div className={clsx('user-list', 'min-h-screen bg-gray-200')}>
      <header
        className={clsx(
          'user-list__header',
          'flex flex-row w-full pt-5 mb-20'
        )}>
        <h1 className=' text-5xl w-fit m-auto'>{meal.mealName}</h1>
        <Button onClick={handleDeleteList} color='error'>
          <DeleteIcon sx={{ fontSize: '30px' }} />
        </Button>
      </header>
      <div className='flex flex-row min-h-screen '>
        <div
          className={clsx(
            'list',
            'h-full w-3/4 flex flex-row justify-center flex-wrap gap-8 '
          )}>
          {ingredientsToRender()}
        </div>
        <div
          className={clsx(
            'user-list__summary',
            'flex flex-col items-center gap-5 sticky top-10 w-1/4 h-60 px-6 border-l-2 border-gray-400'
          )}>
          <h2 className={clsx('summary__header', 'text-2xl')}>Summary</h2>
          {summaryDetailsToRendrer()}
        </div>
      </div>
    </div>
  );
};
export default UserFoodListContainer;
