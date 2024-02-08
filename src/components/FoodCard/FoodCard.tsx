import styles from './FoodCard.module.scss';
import { clsx } from 'clsx';
import { Food } from '@/types';
import { TERipple } from 'tw-elements-react';
import Dropdown from '../Dropdown/Dropdown';
type FoodCardProps = {
  food: Food;
};

type NutrientLabels = {
  [key: string]: string;
};

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const nutrientLabels: NutrientLabels = {
    ENERC_KCAL: 'Energy (kcal)',
    PROCNT: 'Protein',
    FAT: 'Fat',
    CHOCDF: 'Carbohydrates',
    FIBTG: 'Fiber',
  };

  const nutrientsToRender = Object.entries(food.nutrients).map((nutrient) => {
    const [nutrientKey, nutrientValue] = nutrient;
    const label = nutrientLabels[nutrientKey] || nutrientKey;
    return (
      <p
        key={nutrientKey}
        className='mb-2 text-sm text-neutral-600 dark:text-neutral-200'>
        {`${label} : ${nutrientValue}`}
      </p>
    );
  });

  return (
    <div
      className={clsx(
        styles.foodCard,
        'flex flex-col justify-between rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 '
      )}>
      <TERipple>
        <div className='relative overflow-hidden bg-cover bg-no-repeat'>
          <img
            className='rounded-t-lg w-full'
            src={food.image || '/src/assets/202tqkba.png'}
            alt=''
          />
          <a href='#!'>
            <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100'></div>
          </a>
        </div>
      </TERipple>
      <div className='p-6'>
        <h5 className='mb-2 text-md font-medium leading-tight text-neutral-800 dark:text-neutral-50'>
          {food.label}
        </h5>
        <p className='font-bold text-sm mb-1'>In 100g:</p>
        {nutrientsToRender}
        <TERipple>
          <Dropdown />
        </TERipple>
      </div>
    </div>
  );
};

export default FoodCard;
