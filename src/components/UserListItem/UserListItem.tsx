import { Ingredient } from '@/types';

type UserListItemProps = {
  food: Ingredient;
};

type NutrientLabels = {
  [key: string]: string;
};
const UserListItem: React.FC<UserListItemProps> = ({ food }) => {
  const nutrientsToRender = Object.entries(food.nutrients).map((nutrient) => {
    const nutrientLabels: NutrientLabels = {
      ENERC_KCAL: 'Energy (kcal)',
      PROCNT: 'Protein',
      FAT: 'Fat',
      CHOCDF: 'Carbohydrates',
      FIBTG: 'Fiber',
    };
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

  return <div>{nutrientsToRender}</div>;
};

export default UserListItem;
