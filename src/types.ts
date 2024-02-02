export type Food = {
  foodId: string;
  label: string;
  knownAs: string;
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
  parsed: [
    {
      food: Food;
    }
  ];
};
