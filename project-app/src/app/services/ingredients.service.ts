import {EventEmitter, Output} from "@angular/core";
import {IngredientModel} from "../models/ingredient.model";

export class IngredientsService {
  @Output() ingredientChange = new EventEmitter();

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

  getIngredient(id: number): IngredientModel{
    for (let ingredient of this.ingredients){
      if (ingredient.id == id)
        return ingredient
    }
    return null;
  }

  getRecipeIngredients(refs: number[]): IngredientModel[] {
    console.log(this.ingredients);
    let retIngredients: IngredientModel[] = [];
    for (let ingredient of this.ingredients) {
      for (let ref of refs) {
        if (ingredient.id == ref)
          retIngredients.push(ingredient);
      }
    }
    return retIngredients;
  }

  addIngredient(ingredient: IngredientModel){
    this.ingredients.push(ingredient);
    this.ingredientChange.emit();
  }

}
