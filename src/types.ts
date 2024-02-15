export type Nutrient = {
  foodId: string;
  label: string;
  knownAs: string;
  measure: number;
  nutrients: {
    ENERC_KCAL: number;
    PROCNT: number;
    FAT: number;
    CHOCDF: number;
    FIBTG: number;
  };
  category: string;
  categoryLabel: string;
  image: string;
};

export type Meal = {
  mealName: string;
  nutrientsList: Nutrient[];
};

export type MealsList = Meal[];
