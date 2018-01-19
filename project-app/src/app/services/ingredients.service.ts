import {IngredientModel} from "../models/ingredient.model";

export class IngredientsService {

  private ingredients: IngredientModel[] = [
    new IngredientModel("Apples", "10"),
    new IngredientModel("Oranges","20"),
    new IngredientModel("Avocados","2"),
  ];

  constructor(){
  }

  getIngredients(): IngredientModel[] {
    return this.ingredients.slice();
  }
}
