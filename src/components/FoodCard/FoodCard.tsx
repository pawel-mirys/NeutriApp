import { Food } from '@/types';

type FoodCardProps = {
  food: Food;
};

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <div>
      <div>{food.label}</div>
      <div>{food.nutrients.CHOCDF}</div>
      <div>{food.nutrients.ENERC_KCAL}</div>
      <div>{food.nutrients.FAT}</div>
    </div>
  );
};

export default FoodCard;
