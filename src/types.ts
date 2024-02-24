export type Ingredient = {
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
  id?: number;
  mealName: string;
  ingredientsList: Ingredient[];
};

export type MealsList = Meal[];

export type FetchedFoodData = {
  text: string;
  hints: [
    {
      food: Ingredient;
    }
  ];
  _links: {
    next: {
      title: string;
      href: string;
    };
  };
};
