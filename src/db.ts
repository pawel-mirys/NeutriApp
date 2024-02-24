import Dexie, { Table } from 'dexie';
import { Meal } from '@/types';

export class MySubClassedDexie extends Dexie {
  mealList!: Table<Meal>;
  constructor() {
    super('FoodDB');

    this.version(1).stores({
      mealList:
        '++id, foodId, label, knownAs, measure, nutrients, category, categoryLabel, image',
    });
  }
}

export const db = new MySubClassedDexie();
