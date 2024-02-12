export type Food = {
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

export type ParsedFoodData = {
  text: string;
  hints: [
    {
      food: Food;
    }
  ];
  _links: {
    next: {
      title: string;
      href: string;
    };
  };
};

export type FoodList = {
  listName: string;
  foodList: Food[];
};

export type FoodLists = FoodList[];
