import {Injectable} from "@angular/core";
import {RecipeModel} from "../models/recipe.model";
import {IngredientModel} from "../models/ingredient.model";
import {IngredientsService} from "./ingredients.service";

@Injectable()
export class RecipesService {

  private recipes: RecipeModel[] = [
    new RecipeModel("Test Recipe 1",
      "Description of recipe 1",
      "assets/images/reddark.jpg", [0,1]),
    new RecipeModel("Test Recipe 2",
      "Description of recipe 2",
      "assets/images/reddark.jpg", [0,2]),
    new RecipeModel("Test Recipe 3",
      "Description of recipe 3",
      "assets/images/reddark.jpg", [1,2]),
  ];

  constructor(private ingredientService: IngredientsService){
  }

  getRecipes(): RecipeModel[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): RecipeModel{
    for (let recipe of this.recipes){
      if (recipe.id == id)
        return recipe;
    }
    return null;
  }

  getRecipeIngredients(refs: number[]): IngredientModel[]{
    return this.ingredientService.getRecipeIngredients(refs);
  }

}
