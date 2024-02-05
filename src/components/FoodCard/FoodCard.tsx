import { Food } from '@/types';

type FoodCardProps = {
  food: Food;
};

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <div className='border-2 border-black rounded-lg py-1 px-2'>
      <div>{food.label}</div>
      <div>{food.nutrients.CHOCDF}</div>
      <div>{food.nutrients.ENERC_KCAL}</div>
      <div>{food.nutrients.FAT}</div>
    </div>
  );
};

export default FoodCard;
