import { ParsedFoodData } from '@/types';
import FoodCard from '../FoodCard/FoodCard';

type FetchedFoodListProps = {
  data: ParsedFoodData;
};

const FetchedFoodList: React.FC<FetchedFoodListProps> = ({ data }) => {
  const list = data.hints.map((hint) => {
    return (
      <FoodCard food={hint.food} key={`${hint.food.foodId}${Math.random()}`} />
    );
  });

  return (
    <div className='flex flex-row flex-wrap items-start justify-center gap-10 mx-10 mt-5 '>
      {list}
    </div>
  );
};

export default FetchedFoodList;
